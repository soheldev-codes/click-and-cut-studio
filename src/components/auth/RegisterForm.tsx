"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterData>();

  const onSubmit = async (data: RegisterData) => {
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.error("Registration failed");
    }

    toast.success("Account created successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-2xl border p-6"
    >
      <h1 className="text-2xl font-bold">Create Account</h1>

      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="w-full rounded-lg border p-3"
      />

      <input
        {...register("password", {
          required: true,
          minLength: 8,
        })}
        type="password"
        placeholder="Password"
        className="w-full rounded-lg border p-3"
      />

      <button
        disabled={isSubmitting}
        className="w-full rounded-lg bg-violet-600 py-3 text-white"
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
}