"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { supabase } from "@/src/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const { error } = await supabase.from("contact_messages").insert(payload);

    if (error) {
      setState("error");
      setMessage(
        "Mesajul nu a fost salvat. Verifica tabelul contact_messages si politicile RLS in Supabase."
      );
      return;
    }

    form.reset();
    setState("success");
    setMessage("Mesaj trimis. Multumim!");
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Link className="text-sm font-semibold text-[#2f6f62]" href="/">
            Inapoi acasa
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight">
            Contact
          </h1>
          <p className="mt-4 max-w-xl leading-8 text-[#5f5a4f]">
            Formularul trimite mesajele catre Supabase in tabelul
            contact_messages. Nu foloseste chei private in browser.
          </p>
        </div>

        <form
          className="rounded-lg border border-[#ded6c8] bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium">
              Nume
              <input
                className="h-12 rounded-md border border-[#d7d0c3] px-3"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                className="h-12 rounded-md border border-[#d7d0c3] px-3"
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Mesaj
              <textarea
                className="min-h-36 rounded-md border border-[#d7d0c3] px-3 py-3"
                name="message"
                required
              />
            </label>
            <button
              className="h-12 rounded-md bg-[#2f6f62] font-semibold text-white hover:bg-[#24564d] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={state === "loading"}
              type="submit"
            >
              {state === "loading" ? "Se trimite..." : "Trimite mesajul"}
            </button>
          </div>

          {message ? (
            <p className="mt-4 rounded-md bg-[#f7f4ef] p-3 text-sm text-[#5f5a4f]">
              {message}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
