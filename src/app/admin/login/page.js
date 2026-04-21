"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, loading, login } = useAuth();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!loading && user?.role === "admin") {
      router.replace("/admin");
    }
  }, [user, loading, router]);

  const onSubmit = async (data) => {
    setError("");
    try {
      const result = await login({
        email: data.email,
        password: data.password,
      });
      if (result.role !== "admin") {
        setError("Admin access required. Please use an admin account.");
        return;
      }
      router.push("/admin");
    } catch (err) {
      setError(err.message || "Unable to sign in");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6FB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[32px] border border-[#E9DFEE] bg-white p-10 shadow-[0_25px_60px_rgba(120,55,141,0.08)]">
        <h1 className="text-3xl font-bold text-slate-900">Admin Sign In</h1>
        <p className="mt-2 text-sm text-slate-600">
          Only admin users may access the dashboard.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            placeholder="admin@example.com"
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your password"
            error={errors.password?.message}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button
            type="submit"
            theme="primary"
            width="w-full"
            height="h-[52px]"
          >
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Want a normal account?{" "}
          <Link href="/login" className="text-pink-500 font-semibold">
            User login
          </Link>
        </p>
      </div>
    </div>
  );
}
