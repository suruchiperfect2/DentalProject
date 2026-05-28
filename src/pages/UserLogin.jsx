import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authService } from "../services/api";

const UserLogin = () => {
  const navigate = useNavigate();
  const existingToken = localStorage.getItem("userToken");
  const [mode, setMode] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (existingToken) {
    return <Navigate to="/user-dashboard" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result =
        mode === "register"
          ? await authService.register(formData)
          : await authService.login({
              email: formData.email,
              password: formData.password,
            });

      if (result.user?.role === "admin") {
        throw new Error("Please use Admin Login for admin account");
      }

      localStorage.setItem("userToken", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/user-dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal-100">Patient Portal</p>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
              Your smile care, one login away.
            </h1>
            <p className="mt-5 text-teal-50/90">
              Login as a user to keep your clinic profile ready for appointments and follow-ups.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-white/15 p-5 backdrop-blur">
            <p className="font-semibold">Admin?</p>
            <Link to="/admin" className="mt-2 inline-block text-teal-50 underline underline-offset-4">
              Go to Admin Login
            </Link>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">
              {mode === "login" ? "User Login" : "User Register"}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mt-2 text-slate-500">
              {mode === "login"
                ? "Use your patient email and password."
                : "Register as a patient. Admin accounts are separate."}
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "register" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                  placeholder="Your name"
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
                placeholder="user@example.com"
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
              {isLoading ? "Please wait..." : mode === "login" ? "User Login" : "Create User Account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setMode((prev) => (prev === "login" ? "register" : "login"));
              setError("");
            }}
            className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            {mode === "login" ? "New user? Register here" : "Already registered? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
