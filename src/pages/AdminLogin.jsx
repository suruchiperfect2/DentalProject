import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authService } from "../services/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const existingToken = localStorage.getItem("adminToken");
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (existingToken) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveSession = (result) => {
    if (result.user?.role !== "admin") {
      throw new Error("Only admin users can access this panel");
    }

    localStorage.setItem("adminToken", result.token);
    localStorage.setItem("adminUser", JSON.stringify(result.user));
    navigate("/admin/dashboard");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = isSetupMode
        ? await authService.createAdmin(formData)
        : await authService.login({
            email: formData.email,
            password: formData.password,
          });

      saveSession(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl grid lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-teal-700 to-slate-950 p-10 text-white">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-100">Clinic Admin</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight">Manage patients with calm clarity.</h1>
            <p className="mt-5 text-teal-50/80">
              View appointment requests, contact messages, and follow-ups from one secure dashboard.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-teal-50/80">Tip</p>
            <p className="mt-2 text-lg font-semibold">
              First time? Use "Create first admin" once. After that, login with that admin email.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              {isSetupMode ? "First Admin Setup" : "Admin Login"}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              {isSetupMode ? "Create admin account" : "Welcome back"}
            </h2>
            <p className="mt-2 text-slate-500">
              {isSetupMode
                ? "This will work only when no admin exists yet."
                : "Sign in to open the clinic admin panel."}
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSetupMode && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                  placeholder="Dr. Prity Raushan"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                placeholder="Minimum 6 characters"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Please wait..." : isSetupMode ? "Create first admin" : "Login"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setIsSetupMode((prev) => !prev);
              setError("");
            }}
            className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            {isSetupMode ? "Already have an admin? Login" : "No admin yet? Create first admin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
