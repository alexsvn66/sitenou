"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const authCall =
      mode === "login"
        ? supabase.auth.signInWithPassword({ email, password })
        : supabase.auth.signUp({ email, password });

    const { error } = await authCall;
    setIsLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    if (mode === "signup") {
      setMessage("Cont creat. Verifica emailul daca ai confirmarea activata.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="grid min-h-screen place-items-center px-6 py-10">
      <section className="w-full max-w-md rounded-lg border border-[#ded6c8] bg-white p-6 shadow-sm">
        <Link className="text-sm font-semibold text-[#2f6f62]" href="/">
          Inapoi acasa
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          {mode === "login" ? "Autentificare" : "Creeaza cont"}
        </h1>
        <p className="mt-3 leading-7 text-[#5f5a4f]">
          Foloseste contul Supabase pentru acces la dashboard.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              className="h-12 rounded-md border border-[#d7d0c3] px-3"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Parola
            <input
              className="h-12 rounded-md border border-[#d7d0c3] px-3"
              minLength={6}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>
          <button
            className="h-12 rounded-md bg-[#2f6f62] font-semibold text-white hover:bg-[#24564d] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Se trimite..." : mode === "login" ? "Login" : "Creeaza cont"}
          </button>
        </form>

        {message ? (
          <p className="mt-4 rounded-md bg-[#f7f4ef] p-3 text-sm text-[#5f5a4f]">
            {message}
          </p>
        ) : null}

        <button
          className="mt-5 text-sm font-semibold text-[#2f6f62]"
          onClick={() => {
            setMessage("");
            setMode(mode === "login" ? "signup" : "login");
          }}
          type="button"
        >
          {mode === "login"
            ? "Nu ai cont? Creeaza unul"
            : "Ai deja cont? Autentifica-te"}
        </button>
      </section>
    </main>
  );
}
