"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/src/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!isMounted) {
        return;
      }

      if (!data.user) {
        router.replace("/login");
        return;
      }

      setUser(data.user);
      setIsLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace("/login");
        return;
      }

      setUser(session.user);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.replace("/");
  }

  if (isLoading) {
    return (
      <main className="grid min-h-screen place-items-center px-6">
        <p className="text-[#5f5a4f]">Se verifica sesiunea...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-[#ded6c8] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link className="text-lg font-semibold" href="/">
            Sitenou
          </Link>
          <button
            className="rounded-md border border-[#d7d0c3] px-4 py-2 text-sm font-semibold hover:border-[#2f6f62]"
            onClick={handleSignOut}
            type="button"
          >
            Logout
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6f62]">
            Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Bine ai venit
          </h1>
          <p className="mt-3 text-[#5f5a4f]">{user?.email}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-[#ded6c8] bg-white p-5">
            <p className="text-sm font-medium text-[#5f5a4f]">Status</p>
            <h2 className="mt-2 text-2xl font-semibold">Conectat</h2>
          </article>
          <article className="rounded-lg border border-[#ded6c8] bg-white p-5">
            <p className="text-sm font-medium text-[#5f5a4f]">Provider</p>
            <h2 className="mt-2 text-2xl font-semibold">Supabase</h2>
          </article>
          <article className="rounded-lg border border-[#ded6c8] bg-white p-5">
            <p className="text-sm font-medium text-[#5f5a4f]">Deploy</p>
            <h2 className="mt-2 text-2xl font-semibold">Vercel</h2>
          </article>
        </div>

        <div className="rounded-lg border border-[#ded6c8] bg-white p-5">
          <h2 className="text-xl font-semibold">Urmatorii pasi</h2>
          <ul className="mt-4 grid gap-3 text-[#5f5a4f]">
            <li>Adaugam tabelele pentru mesaje si datele afisate in dashboard.</li>
            <li>Mutam protectia rutei pe server cand introducem cookie helpers.</li>
            <li>Construim componente reutilizabile pentru panoul de administrare.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
