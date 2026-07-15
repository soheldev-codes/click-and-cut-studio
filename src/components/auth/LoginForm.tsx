"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.error("Login failed");
    }

    toast.success("Login successful");

    router.refresh();
    router.push("/");
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Welcome Back
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-violet-600 dark:border-zinc-700 dark:bg-zinc-900"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-violet-600 dark:border-zinc-700 dark:bg-zinc-900"
        />

        <button
          disabled={isSubmitting}
          className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}