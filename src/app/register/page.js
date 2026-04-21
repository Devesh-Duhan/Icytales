"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function RegisterPage() {
  const router = useRouter();
  const { user, loading, register: registerAction } = useAuth();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const onSubmit = async (data) => {
    setError("");
    try {
      await registerAction({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      router.push("/");
    } catch (err) {
      setError(err.message || "Unable to register");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6FB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[32px] border border-[#E9DFEE] bg-white p-10 shadow-[0_25px_60px_rgba(120,55,141,0.08)]">
        <h1 className="text-3xl font-bold text-slate-900">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Join IcyTales to start booking travel packages.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input
            label="Name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your full name"
            error={errors.name?.message}
          />
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
            placeholder="you@example.com"
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Create a password"
            error={errors.password?.message}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button
            type="submit"
            theme="primary"
            width="w-full"
            height="h-[52px]"
          >
            Sign Up
          </Button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
