import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Activity,
  Bell,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Edit3,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Plus,
  Search,
  Settings,
  Stethoscope,
  Trash2,
  Users,
  X,
} from "lucide-react";
import {
  appointmentService,
  contactService,
  dashboardService,
  patientService,
  serviceService,
  settingService,
  treatmentService,
} from "../services/api";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const emptyAppointment = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  service: "",
  treatmentCharge: "",
  preferredDate: "",
  preferredTime: "",
  status: "pending",
  paymentAmount: "",
  paymentStatus: "pending",
  nextFollowUpDate: "",
  reminderNote: "",
  statusMessage: "",
  message: "",
};

const emptyService = {
  name: "",
  description: "",
  image: "",
  charges: "",
  duration: "30 mins",
};

const emptyTreatment = {
  name: "",
  category: "Dental Care",
  price: "",
  notes: "",
};

const emptyPatient = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  address: "",
  medicalHistory: "",
};

const emptySettings = {
  clinicName: "",
  address: "",
  phone: "",
  email: "",
  workingHours: "",
  socialLinks: {
    facebook: "",
    instagram: "",
    whatsapp: "",
    website: "",
  },
};

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "appointments", label: "Appointments", icon: CalendarDays },
  { id: "services", label: "Services", icon: Stethoscope },
  { id: "treatments", label: "Charges", icon: CircleDollarSign },
  { id: "patients", label: "Patients", icon: Users },
  { id: "contacts", label: "Inquiries", icon: Mail },
  { id: "settings", label: "Settings", icon: Settings },
];

const formatDate = (value) => {
  if (!value) return "Not set";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const toDateInput = (value) => {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
};

const money = (value) => `Rs ${Number(value || 0).toLocaleString("en-IN")}`;

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700",
  confirmed: "bg-blue-50 text-blue-700",
  completed: "bg-emerald-50 text-emerald-700",
  cancelled: "bg-rose-50 text-rose-700",
  replied: "bg-emerald-50 text-emerald-700",
  paid: "bg-emerald-50 text-emerald-700",
  failed: "bg-rose-50 text-rose-700",
  not_required: "bg-slate-100 text-slate-700",
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "{}");
  const [activeView, setActiveView] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [overview, setOverview] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [settings, setSettings] = useState(emptySettings);
  const [appointmentForm, setAppointmentForm] = useState(emptyAppointment);
  const [serviceForm, setServiceForm] = useState(emptyService);
  const [treatmentForm, setTreatmentForm] = useState(emptyTreatment);
  const [patientForm, setPatientForm] = useState(emptyPatient);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [editingTreatment, setEditingTreatment] = useState(null);
  const [editingPatient, setEditingPatient] = useState(null);
  const [patientSearch, setPatientSearch] = useState("");
  const [selectedHistory, setSelectedHistory] = useState(null);

  const loadDashboard = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError("");

    try {
      const [
        overviewResult,
        appointmentResult,
        contactResult,
        serviceResult,
        treatmentResult,
        patientResult,
        settingResult,
      ] = await Promise.all([
        dashboardService.overview(token),
        appointmentService.getAll(token),
        contactService.getAll(token),
        serviceService.getAll(token),
        treatmentService.getAll(token),
        patientService.getAll(token),
        settingService.get(token),
      ]);

      setOverview(overviewResult.data);
      setAppointments(appointmentResult.data || []);
      setContacts(contactResult.data || []);
      setServices(serviceResult.data || []);
      setTreatments(treatmentResult.data || []);
      setPatients(patientResult.data || []);
      setSettings({ ...emptySettings, ...(settingResult.data || {}) });
    } catch (err) {
      setError(err.message || "Unable to load admin dashboard");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const stats = useMemo(() => {
    const data = overview?.stats || {};
    return [
      { label: "Total appointments", value: data.totalAppointments || 0, icon: CalendarDays },
      { label: "Pending", value: data.pendingAppointments || 0, icon: Bell },
      { label: "Confirmed", value: data.confirmedAppointments || 0, icon: ClipboardList },
      { label: "Completed", value: data.completedAppointments || 0, icon: CheckCircle2 },
      { label: "Patients", value: data.totalPatients || 0, icon: Users },
      { label: "Services", value: data.totalServices || 0, icon: Stethoscope },
      { label: "Inquiries", value: data.contactInquiries || 0, icon: Mail },
      { label: "Revenue", value: money(data.revenue || 0), icon: CircleDollarSign },
    ];
  }, [overview]);

  const filteredPatients = useMemo(() => {
    const query = patientSearch.trim().toLowerCase();
    if (!query) return patients;
    return patients.filter((item) =>
      [item.fullName, item.email, item.phone].some((value) =>
        String(value || "").toLowerCase().includes(query)
      )
    );
  }, [patients, patientSearch]);

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin");
  };

  const refreshOverview = async () => {
    const result = await dashboardService.overview(token);
    setOverview(result.data);
  };

  const saveAppointment = async (event) => {
    event.preventDefault();
    const payload = {
      ...appointmentForm,
      age: appointmentForm.age ? Number(appointmentForm.age) : undefined,
      treatmentCharge: Number(appointmentForm.treatmentCharge || 0),
      paymentAmount: Number(appointmentForm.paymentAmount || appointmentForm.treatmentCharge || 0),
      nextFollowUpDate: appointmentForm.nextFollowUpDate || null,
    };

    try {
      const result = editingAppointment
        ? await appointmentService.update(editingAppointment, payload, token)
        : await appointmentService.create(payload);
      setAppointments((prev) =>
        editingAppointment
          ? prev.map((item) => (item._id === editingAppointment ? result.data : item))
          : [result.data, ...prev]
      );
      setAppointmentForm(emptyAppointment);
      setEditingAppointment(null);
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to save appointment");
    }
  };

  const editAppointment = (item) => {
    setEditingAppointment(item._id);
    setAppointmentForm({
      ...emptyAppointment,
      ...item,
      preferredDate: toDateInput(item.preferredDate),
      nextFollowUpDate: toDateInput(item.nextFollowUpDate),
      age: item.age || "",
      treatmentCharge: item.treatmentCharge || "",
      paymentAmount: item.paymentAmount || item.treatmentCharge || "",
    });
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    try {
      await appointmentService.delete(id, token);
      setAppointments((prev) => prev.filter((item) => item._id !== id));
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to delete appointment");
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      const result = await appointmentService.updateStatus(id, status, token);
      setAppointments((prev) => prev.map((item) => (item._id === id ? result.data : item)));
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to update appointment");
    }
  };

  const saveService = async (event) => {
    event.preventDefault();
    try {
      const payload = { ...serviceForm, charges: Number(serviceForm.charges || 0) };
      const result = editingService
        ? await serviceService.update(editingService, payload, token)
        : await serviceService.create(payload, token);
      setServices((prev) =>
        editingService ? prev.map((item) => (item._id === editingService ? result.data : item)) : [result.data, ...prev]
      );
      setServiceForm(emptyService);
      setEditingService(null);
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to save service");
    }
  };

  const saveTreatment = async (event) => {
    event.preventDefault();
    try {
      const payload = { ...treatmentForm, price: Number(treatmentForm.price || 0) };
      const result = editingTreatment
        ? await treatmentService.update(editingTreatment, payload, token)
        : await treatmentService.create(payload, token);
      setTreatments((prev) =>
        editingTreatment ? prev.map((item) => (item._id === editingTreatment ? result.data : item)) : [result.data, ...prev]
      );
      setTreatmentForm(emptyTreatment);
      setEditingTreatment(null);
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to save treatment");
    }
  };

  const savePatient = async (event) => {
    event.preventDefault();
    try {
      const payload = { ...patientForm, age: patientForm.age ? Number(patientForm.age) : undefined };
      const result = editingPatient
        ? await patientService.update(editingPatient, payload, token)
        : await patientService.create(payload, token);
      setPatients((prev) =>
        editingPatient ? prev.map((item) => (item._id === editingPatient ? result.data : item)) : [result.data, ...prev]
      );
      setPatientForm(emptyPatient);
      setEditingPatient(null);
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to save patient");
    }
  };

  const deleteRecord = async (type, id) => {
    if (!window.confirm("Delete this record?")) return;
    try {
      if (type === "service") {
        await serviceService.delete(id, token);
        setServices((prev) => prev.filter((item) => item._id !== id));
      }
      if (type === "treatment") {
        await treatmentService.delete(id, token);
        setTreatments((prev) => prev.filter((item) => item._id !== id));
      }
      if (type === "patient") {
        await patientService.delete(id, token);
        setPatients((prev) => prev.filter((item) => item._id !== id));
      }
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to delete record");
    }
  };

  const markInquiryReplied = async (id) => {
    try {
      const result = await contactService.markAsReplied(id, token);
      setContacts((prev) => prev.map((item) => (item._id === id ? result.data : item)));
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to update inquiry");
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await contactService.delete(id, token);
      setContacts((prev) => prev.filter((item) => item._id !== id));
      await refreshOverview();
    } catch (err) {
      alert(err.message || "Unable to delete inquiry");
    }
  };

  const loadPatientHistory = async (id) => {
    try {
      const result = await patientService.history(id, token);
      setSelectedHistory(result.data);
    } catch (err) {
      alert(err.message || "Unable to load patient history");
    }
  };

  const saveSettings = async (event) => {
    event.preventDefault();
    try {
      const result = await settingService.update(settings, token);
      setSettings({ ...emptySettings, ...result.data });
      alert("Clinic settings updated");
    } catch (err) {
      alert(err.message || "Unable to save settings");
    }
  };

  const handleServiceImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setServiceForm((prev) => ({ ...prev, image: reader.result }));
    reader.readAsDataURL(file);
  };

  const Sidebar = () => (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-slate-950 text-white transition lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">Dental Admin</p>
            <h1 className="mt-1 text-xl font-bold">Clinic Panel</h1>
          </div>
          <button type="button" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-white/10 px-5 py-4">
          <p className="text-sm font-semibold">{adminUser.name || "Admin User"}</p>
          <p className="mt-1 break-all text-xs text-slate-400">{adminUser.email}</p>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveView(item.id);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active ? "bg-teal-500 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );

  const PageHeader = () => (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <p className="text-sm font-semibold text-teal-700">Agrani Dental Clinic</p>
            <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
              {navItems.find((item) => item.id === activeView)?.label}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 sm:block">
            {overview?.stats?.pendingAppointments || 0} pending appointments
          </div>
          <div className="rounded-xl bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
            {overview?.stats?.pendingInquiries || 0} alerts
          </div>
        </div>
      </div>
    </header>
  );

  const Overview = () => {
    const monthly = overview?.charts?.monthly || [];
    const status = overview?.charts?.status || [];
    const colors = {
      pending: "#f59e0b",
      confirmed: "#0ea5e9",
      completed: "#10b981",
      cancelled: "#f43f5e",
    };

    return (
      <div className="space-y-6">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                  <span className="rounded-xl bg-teal-50 p-2 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-4 text-2xl font-bold text-slate-950">{item.value}</p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-950">Monthly appointments and growth</h3>
              <Activity className="h-5 w-5 text-teal-600" />
            </div>
            <div className="mt-6 h-72">
              {monthly.length ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthly}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(value, name) => (name === "revenue" ? money(value) : value)} />
                    <Legend />
                    <Bar dataKey="appointments" fill="#0d9488" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="patients" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="revenue" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="flex h-full items-center justify-center text-sm text-slate-500">No chart data yet.</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Appointment status</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={status} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={4}>
                    {status.map((item) => (
                      <Cell key={item.name} fill={colors[item.name] || "#64748b"} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [value, String(name).toUpperCase()]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Recent activities</h3>
            <div className="mt-4 divide-y divide-slate-100">
              {(overview?.recentActivities || []).map((item, index) => (
                <div key={`${item.title}-${index}`} className="flex items-center justify-between gap-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500">{formatDate(item.date)}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${statusStyles[item.status] || "bg-slate-100 text-slate-600"}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">Notifications</h3>
            <div className="mt-4 space-y-3">
              {(overview?.notifications || []).map((item) => (
                <div key={item.id} className="rounded-xl border border-amber-100 bg-amber-50 p-3">
                  <p className="font-semibold text-amber-900">{item.title}</p>
                  <p className="mt-1 text-sm text-amber-700">{item.message}</p>
                </div>
              ))}
              {!overview?.notifications?.length && <p className="text-sm text-slate-500">All caught up.</p>}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const Appointments = () => (
    <div className="space-y-6">
      <form onSubmit={saveAppointment} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-950">{editingAppointment ? "Edit appointment" : "Add appointment"}</h3>
          <Plus className="h-5 w-5 text-teal-600" />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <input className={fieldClass} placeholder="Patient name" value={appointmentForm.fullName} onChange={(e) => setAppointmentForm({ ...appointmentForm, fullName: e.target.value })} required />
          <input className={fieldClass} type="email" placeholder="Email" value={appointmentForm.email} onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })} required />
          <input className={fieldClass} placeholder="Phone" value={appointmentForm.phone} onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })} required />
          <input className={fieldClass} type="number" placeholder="Age" value={appointmentForm.age} onChange={(e) => setAppointmentForm({ ...appointmentForm, age: e.target.value })} />
          <select className={fieldClass} value={appointmentForm.gender} onChange={(e) => setAppointmentForm({ ...appointmentForm, gender: e.target.value })}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select className={fieldClass} value={appointmentForm.service} onChange={(e) => setAppointmentForm({ ...appointmentForm, service: e.target.value })} required>
            <option value="">Select service</option>
            {services.map((item) => <option key={item._id}>{item.name}</option>)}
          </select>
          <input className={fieldClass} type="number" placeholder="Treatment charge" value={appointmentForm.treatmentCharge} onChange={(e) => setAppointmentForm({ ...appointmentForm, treatmentCharge: e.target.value })} />
          <input className={fieldClass} type="number" placeholder="Payment amount" value={appointmentForm.paymentAmount} onChange={(e) => setAppointmentForm({ ...appointmentForm, paymentAmount: e.target.value })} />
          <input className={fieldClass} type="date" value={appointmentForm.preferredDate} onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredDate: e.target.value })} required />
          <input className={fieldClass} placeholder="Time" value={appointmentForm.preferredTime} onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredTime: e.target.value })} required />
          <select className={fieldClass} value={appointmentForm.status} onChange={(e) => setAppointmentForm({ ...appointmentForm, status: e.target.value })}>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select className={fieldClass} value={appointmentForm.paymentStatus} onChange={(e) => setAppointmentForm({ ...appointmentForm, paymentStatus: e.target.value })}>
            <option value="pending">Payment pending</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
            <option value="not_required">Not required</option>
          </select>
          <input className={fieldClass} type="date" value={appointmentForm.nextFollowUpDate} onChange={(e) => setAppointmentForm({ ...appointmentForm, nextFollowUpDate: e.target.value })} />
          <input className={fieldClass} placeholder="Treatment duration" value={appointmentForm.treatmentDuration || ""} onChange={(e) => setAppointmentForm({ ...appointmentForm, treatmentDuration: e.target.value })} />
          <input className={`${fieldClass} md:col-span-2`} placeholder="User status message" value={appointmentForm.statusMessage} onChange={(e) => setAppointmentForm({ ...appointmentForm, statusMessage: e.target.value })} />
          <input className={fieldClass} placeholder="Reminder note" value={appointmentForm.reminderNote} onChange={(e) => setAppointmentForm({ ...appointmentForm, reminderNote: e.target.value })} />
          <input className={`${fieldClass} md:col-span-3`} placeholder="Internal message or note" value={appointmentForm.message} onChange={(e) => setAppointmentForm({ ...appointmentForm, message: e.target.value })} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white hover:bg-teal-700" type="submit">
            {editingAppointment ? "Update appointment" : "Add appointment"}
          </button>
          {editingAppointment && (
            <button type="button" className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700" onClick={() => { setEditingAppointment(null); setAppointmentForm(emptyAppointment); }}>
              Cancel edit
            </button>
          )}
        </div>
      </form>

      <DataTable>
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3 text-left">Patient</th>
            <th className="px-4 py-3 text-left">Service</th>
            <th className="px-4 py-3 text-left">Schedule</th>
            <th className="px-4 py-3 text-left">Charge</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {appointments.map((item) => (
            <tr key={item._id}>
              <td className="px-4 py-3">
                <p className="font-semibold text-slate-900">{item.fullName}</p>
                <p className="text-sm text-slate-500">{item.phone}</p>
              </td>
              <td className="px-4 py-3 text-slate-700">{item.service}</td>
              <td className="px-4 py-3 text-slate-700">{formatDate(item.preferredDate)}<br /><span className="text-sm text-slate-500">{item.preferredTime}</span></td>
              <td className="px-4 py-3">
                <p className="font-semibold text-slate-900">{money(item.paymentAmount || item.treatmentCharge)}</p>
                <span className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-bold capitalize ${statusStyles[item.paymentStatus] || statusStyles.pending}`}>
                  {String(item.paymentStatus || "pending").replace("_", " ")}
                </span>
              </td>
              <td className="px-4 py-3">
                <select className={fieldClass} value={item.status} onChange={(e) => updateAppointmentStatus(item._id, e.target.value)}>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                {item.statusMessage && <p className="mt-2 max-w-xs text-xs text-slate-500">{item.statusMessage}</p>}
                {(item.nextFollowUpDate || item.reminderNote) && (
                  <p className="mt-2 max-w-xs text-xs font-semibold text-teal-700">
                    Reminder: {formatDate(item.nextFollowUpDate)} {item.reminderNote || ""}
                  </p>
                )}
              </td>
              <td className="px-4 py-3">
                <ActionButtons onEdit={() => editAppointment(item)} onDelete={() => deleteAppointment(item._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );

  const Services = () => (
    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <form onSubmit={saveService} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">{editingService ? "Edit service" : "Add service"}</h3>
        <div className="mt-4 space-y-3">
          <input className={fieldClass} placeholder="Service name" value={serviceForm.name} onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })} required />
          <textarea className={fieldClass} rows="4" placeholder="Description" value={serviceForm.description} onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })} required />
          <input className={fieldClass} type="number" placeholder="Treatment charges" value={serviceForm.charges} onChange={(e) => setServiceForm({ ...serviceForm, charges: e.target.value })} required />
          <input className={fieldClass} placeholder="Duration" value={serviceForm.duration} onChange={(e) => setServiceForm({ ...serviceForm, duration: e.target.value })} />
          <input className={fieldClass} placeholder="Image URL" value={serviceForm.image} onChange={(e) => setServiceForm({ ...serviceForm, image: e.target.value })} />
          <input className={fieldClass} type="file" accept="image/*" onChange={handleServiceImage} />
          {serviceForm.image && <img src={serviceForm.image} alt="Service preview" className="h-32 w-full rounded-xl object-cover" />}
          <button className="w-full rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white" type="submit">
            {editingService ? "Update service" : "Add service"}
          </button>
        </div>
      </form>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((item) => (
          <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            {item.image && <img src={item.image} alt={item.name} className="h-36 w-full rounded-xl object-cover" />}
            <div className="mt-4">
              <h3 className="font-bold text-slate-950">{item.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-500">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-teal-700">{money(item.charges)}</span>
                <ActionButtons
                  onEdit={() => { setEditingService(item._id); setServiceForm({ ...emptyService, ...item, charges: item.charges || "" }); }}
                  onDelete={() => deleteRecord("service", item._id)}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const Treatments = () => (
    <div className="space-y-6">
      <form onSubmit={saveTreatment} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">{editingTreatment ? "Edit treatment charge" : "Add treatment charge"}</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <input className={fieldClass} placeholder="Treatment name" value={treatmentForm.name} onChange={(e) => setTreatmentForm({ ...treatmentForm, name: e.target.value })} required />
          <input className={fieldClass} placeholder="Category" value={treatmentForm.category} onChange={(e) => setTreatmentForm({ ...treatmentForm, category: e.target.value })} />
          <input className={fieldClass} type="number" placeholder="Price" value={treatmentForm.price} onChange={(e) => setTreatmentForm({ ...treatmentForm, price: e.target.value })} required />
          <button className="rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white" type="submit">
            {editingTreatment ? "Update" : "Add"}
          </button>
        </div>
      </form>
      <DataTable>
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr><th className="px-4 py-3 text-left">Treatment</th><th className="px-4 py-3 text-left">Category</th><th className="px-4 py-3 text-left">Price</th><th className="px-4 py-3 text-left">Actions</th></tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {treatments.map((item) => (
            <tr key={item._id}>
              <td className="px-4 py-3 font-semibold text-slate-900">{item.name}</td>
              <td className="px-4 py-3 text-slate-600">{item.category}</td>
              <td className="px-4 py-3 font-bold text-teal-700">{money(item.price)}</td>
              <td className="px-4 py-3">
                <ActionButtons
                  onEdit={() => { setEditingTreatment(item._id); setTreatmentForm({ ...emptyTreatment, ...item, price: item.price || "" }); }}
                  onDelete={() => deleteRecord("treatment", item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );

  const Patients = () => (
    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <form onSubmit={savePatient} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">{editingPatient ? "Edit patient" : "Add patient"}</h3>
        <div className="mt-4 space-y-3">
          <input className={fieldClass} placeholder="Full name" value={patientForm.fullName} onChange={(e) => setPatientForm({ ...patientForm, fullName: e.target.value })} required />
          <input className={fieldClass} type="email" placeholder="Email" value={patientForm.email} onChange={(e) => setPatientForm({ ...patientForm, email: e.target.value })} />
          <input className={fieldClass} placeholder="Phone" value={patientForm.phone} onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })} required />
          <div className="grid grid-cols-2 gap-3">
            <input className={fieldClass} type="number" placeholder="Age" value={patientForm.age} onChange={(e) => setPatientForm({ ...patientForm, age: e.target.value })} />
            <input className={fieldClass} placeholder="Gender" value={patientForm.gender} onChange={(e) => setPatientForm({ ...patientForm, gender: e.target.value })} />
          </div>
          <textarea className={fieldClass} rows="2" placeholder="Address" value={patientForm.address} onChange={(e) => setPatientForm({ ...patientForm, address: e.target.value })} />
          <textarea className={fieldClass} rows="3" placeholder="Medical history" value={patientForm.medicalHistory} onChange={(e) => setPatientForm({ ...patientForm, medicalHistory: e.target.value })} />
          <button className="w-full rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white" type="submit">
            {editingPatient ? "Update patient" : "Add patient"}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />
          <input className="w-full outline-none" placeholder="Search patient by name, email, or phone" value={patientSearch} onChange={(e) => setPatientSearch(e.target.value)} />
        </div>
        {filteredPatients.map((item) => (
          <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-950">{item.fullName}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.phone} | {item.email || "No email"}</p>
                <p className="mt-2 text-sm text-slate-600">{item.medicalHistory || "No medical history added"}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-xl bg-teal-50 px-3 py-2 text-sm font-bold text-teal-700" type="button" onClick={() => loadPatientHistory(item._id)}>
                  History
                </button>
                <ActionButtons
                  onEdit={() => { setEditingPatient(item._id); setPatientForm({ ...emptyPatient, ...item, age: item.age || "" }); }}
                  onDelete={() => deleteRecord("patient", item._id)}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const Contacts = () => (
    <div className="grid gap-4">
      {contacts.map((item) => (
        <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-slate-950">{item.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.isReplied ? statusStyles.replied : statusStyles.pending}`}>
                  {item.isReplied ? "Replied" : "Pending"}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{item.email} | {item.phone} | {formatDate(item.createdAt)}</p>
              <p className="mt-3 font-semibold text-slate-800">{item.subject}</p>
              <p className="mt-2 text-slate-600">{item.message}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              {!item.isReplied && (
                <button type="button" className="rounded-xl bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700" onClick={() => markInquiryReplied(item._id)}>
                  Mark replied
                </button>
              )}
              <button type="button" className="rounded-xl bg-rose-50 p-2 text-rose-700" onClick={() => deleteContact(item._id)}>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  const SettingsView = () => (
    <form onSubmit={saveSettings} className="max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">Clinic information</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <input className={fieldClass} placeholder="Clinic name" value={settings.clinicName || ""} onChange={(e) => setSettings({ ...settings, clinicName: e.target.value })} />
        <input className={fieldClass} placeholder="Contact number" value={settings.phone || ""} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} />
        <input className={fieldClass} type="email" placeholder="Email" value={settings.email || ""} onChange={(e) => setSettings({ ...settings, email: e.target.value })} />
        <input className={fieldClass} placeholder="Working hours" value={settings.workingHours || ""} onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })} />
        <textarea className={`${fieldClass} md:col-span-2`} rows="3" placeholder="Address" value={settings.address || ""} onChange={(e) => setSettings({ ...settings, address: e.target.value })} />
        {["facebook", "instagram", "whatsapp", "website"].map((key) => (
          <input
            key={key}
            className={fieldClass}
            placeholder={`${key} link`}
            value={settings.socialLinks?.[key] || ""}
            onChange={(e) => setSettings({ ...settings, socialLinks: { ...(settings.socialLinks || {}), [key]: e.target.value } })}
          />
        ))}
      </div>
      <button className="mt-4 rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white" type="submit">
        Save settings
      </button>
    </form>
  );

  const viewMap = {
    overview: <Overview />,
    appointments: <Appointments />,
    services: <Services />,
    treatments: <Treatments />,
    patients: <Patients />,
    contacts: <Contacts />,
    settings: <SettingsView />,
  };

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <Sidebar />
      {sidebarOpen && <button type="button" aria-label="Close sidebar" className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <div className="min-w-0 flex-1">
        <PageHeader />
        <main className="px-4 py-6 lg:px-8">
          {error && <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">{error}</div>}
          {isLoading ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
              Loading admin dashboard...
            </div>
          ) : (
            viewMap[activeView]
          )}
        </main>
      </div>
      {selectedHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-950">{selectedHistory.patient.fullName} history</h3>
              <button type="button" onClick={() => setSelectedHistory(null)}><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 divide-y divide-slate-100">
              {selectedHistory.appointments.map((item) => (
                <div key={item._id} className="py-3">
                  <p className="font-semibold text-slate-900">{item.service} - {money(item.treatmentCharge)}</p>
                  <p className="text-sm text-slate-500">{formatDate(item.preferredDate)} | {item.status}</p>
                </div>
              ))}
              {!selectedHistory.appointments.length && <p className="py-6 text-slate-500">No appointment history found.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DataTable = ({ children }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[850px] text-sm">{children}</table>
    </div>
  </div>
);

const ActionButtons = ({ onEdit, onDelete }) => (
  <div className="flex items-center gap-2">
    <button type="button" className="rounded-xl bg-slate-100 p-2 text-slate-700 hover:bg-slate-200" onClick={onEdit} title="Edit">
      <Edit3 className="h-4 w-4" />
    </button>
    <button type="button" className="rounded-xl bg-rose-50 p-2 text-rose-700 hover:bg-rose-100" onClick={onDelete} title="Delete">
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
);

export default AdminPanel;
