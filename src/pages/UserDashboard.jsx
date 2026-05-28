import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CalendarDays, CheckCircle2, Clock, CreditCard, LogOut, PhoneCall, RefreshCw } from "lucide-react";
import { appointmentService } from "../services/api";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 border-amber-100",
  confirmed: "bg-blue-50 text-blue-700 border-blue-100",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  cancelled: "bg-rose-50 text-rose-700 border-rose-100",
};

const paymentStyles = {
  pending: "bg-amber-50 text-amber-700",
  paid: "bg-emerald-50 text-emerald-700",
  failed: "bg-rose-50 text-rose-700",
  refunded: "bg-slate-100 text-slate-700",
  not_required: "bg-slate-100 text-slate-700",
};

const formatDate = (value) => {
  if (!value) return "Not set";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const money = (value) => `Rs ${Number(value || 0).toLocaleString("en-IN")}`;

const UserDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [payingId, setPayingId] = useState("");

  const loadAppointments = React.useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError("");

    try {
      const result = await appointmentService.getMy(token);
      setAppointments(result.data || []);
    } catch (err) {
      setError(err.message || "Unable to load your appointments");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const nextAppointment = useMemo(() => {
    const now = new Date();
    return appointments
      .filter((item) => item.status !== "cancelled" && new Date(item.preferredDate) >= now)
      .sort((a, b) => new Date(a.preferredDate) - new Date(b.preferredDate))[0];
  }, [appointments]);

  const reminders = useMemo(() => {
    return appointments
      .filter((item) => item.nextFollowUpDate || item.reminderNote)
      .slice(0, 3);
  }, [appointments]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handlePayment = async (appointment) => {
    setPayingId(appointment._id);
    setError("");

    try {
      const result = await appointmentService.initiatePayment(
        appointment._id,
        { amount: appointment.paymentAmount || appointment.treatmentCharge, method: "upi" },
        token
      );
      setAppointments((prev) => prev.map((item) => (item._id === appointment._id ? result.data : item)));
      if (result.data?.paymentLink) {
        window.location.href = result.data.paymentLink;
      }
    } catch (err) {
      setError(err.message || "Unable to start payment");
    } finally {
      setPayingId("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Patient Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">Welcome, {user.name || "Patient"}</h1>
            <p className="mt-1 text-slate-500">{user.email}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={loadAppointments}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-200"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        {error && (
          <div className="mt-5 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {error}
          </div>
        )}

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CalendarDays className="h-5 w-5 text-teal-600" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Total appointments</p>
            <p className="mt-1 text-3xl font-bold text-slate-950">{appointments.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Clock className="h-5 w-5 text-blue-600" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Next appointment</p>
            <p className="mt-1 text-lg font-bold text-slate-950">
              {nextAppointment ? `${formatDate(nextAppointment.preferredDate)} at ${nextAppointment.preferredTime}` : "Not scheduled"}
            </p>
          </div>
          <Link
            to="/appointment"
            className="rounded-2xl border border-teal-100 bg-teal-600 p-5 text-white shadow-sm transition hover:bg-teal-700"
          >
            <CheckCircle2 className="h-5 w-5" />
            <p className="mt-4 text-sm font-semibold text-teal-50">Book next visit</p>
            <p className="mt-1 text-lg font-bold">New appointment</p>
          </Link>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-lg font-bold text-slate-950">Your appointments</h2>
              <span className="text-sm font-semibold text-slate-500">{isLoading ? "Loading" : `${appointments.length} records`}</span>
            </div>

            <div className="divide-y divide-slate-100">
              {!isLoading && appointments.map((item) => (
                <article key={item._id} className="p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-950">{item.service}</h3>
                        <span className={`rounded-full border px-3 py-1 text-xs font-bold capitalize ${statusStyles[item.status] || statusStyles.pending}`}>
                          {item.status}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${paymentStyles[item.paymentStatus] || paymentStyles.pending}`}>
                          Payment {String(item.paymentStatus || "pending").replace("_", " ")}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-500">
                        {formatDate(item.preferredDate)} at {item.preferredTime} | Doctor: {item.preferredDoctor || "Available specialist"}
                      </p>
                      <p className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                        {item.statusMessage || "Your appointment update will appear here."}
                      </p>
                      {(item.nextFollowUpDate || item.reminderNote) && (
                        <p className="mt-3 rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
                          Reminder: {item.nextFollowUpDate ? formatDate(item.nextFollowUpDate) : "Next process"} {item.reminderNote ? `- ${item.reminderNote}` : ""}
                        </p>
                      )}
                    </div>

                    <div className="min-w-52 space-y-2">
                      <p className="text-sm font-semibold text-slate-500">Amount</p>
                      <p className="text-2xl font-bold text-slate-950">{money(item.paymentAmount || item.treatmentCharge)}</p>
                      {item.paymentStatus !== "paid" && Number(item.paymentAmount || item.treatmentCharge || 0) > 0 && (
                        <button
                          type="button"
                          onClick={() => handlePayment(item)}
                          disabled={payingId === item._id}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-sm font-bold text-white hover:bg-teal-700 disabled:opacity-60"
                        >
                          <CreditCard className="h-4 w-4" />
                          {payingId === item._id ? "Opening payment" : "Pay now"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {(item.notificationLog || []).slice(-4).map((log) => (
                      <div key={`${log.channel}-${log.createdAt}`} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                        <p className="text-xs font-bold uppercase text-slate-500">{log.channel}</p>
                        <p className="mt-1 text-sm font-semibold capitalize text-slate-800">{log.status}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              {!isLoading && !appointments.length && (
                <div className="p-8 text-center">
                  <p className="text-lg font-bold text-slate-950">No appointment found</p>
                  <p className="mt-2 text-slate-500">Book with the same email as your login to see your records here.</p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">Treatment reminders</h2>
              <div className="mt-4 space-y-3">
                {reminders.map((item) => (
                  <div key={item._id} className="rounded-xl border border-teal-100 bg-teal-50 p-3">
                    <p className="font-bold text-teal-950">{item.service}</p>
                    <p className="mt-1 text-sm text-teal-700">
                      {item.nextFollowUpDate ? formatDate(item.nextFollowUpDate) : "Follow-up"} {item.reminderNote ? `- ${item.reminderNote}` : ""}
                    </p>
                  </div>
                ))}
                {!reminders.length && <p className="text-sm text-slate-500">Doctor follow-up reminders will show after admin updates your treatment.</p>}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <PhoneCall className="h-5 w-5 text-teal-600" />
              <h2 className="mt-3 text-lg font-bold text-slate-950">Need help?</h2>
              <p className="mt-2 text-sm text-slate-500">For cancellation, confirmation, or payment support, contact the clinic on your registered phone number.</p>
              <a href="tel:+918252818799" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">
                Call clinic
              </a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
