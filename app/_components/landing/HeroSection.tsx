"use client";

import Image from "next/image";
import { useState } from "react";

const contractAddress = "0xGrimmiGoblin000000000000000000000";

const trustBadges = [
  { icon: "D", label: "DEXTOOLS" },
  { icon: "DS", label: "DEXSCREENER" },
  { icon: "V", label: "RUG CHECK VERIFIED" },
];

function CopyIcon() {
  return (
    <span aria-hidden="true" className="relative block h-[0.8em] w-[0.8em]">
      <span className="absolute bottom-0 left-0 h-[72%] w-[72%] rounded-[0.12rem] border border-[#d7ff45]/95" />
      <span className="absolute right-0 top-0 h-[72%] w-[72%] rounded-[0.12rem] border border-[#f4f7b0]/85 bg-[#07130e]" />
    </span>
  );
}

export function HeroSection() {
  const [copyStatus, setCopyStatus] = useState("Copy contract address");

  async function handleCopyContract() {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopyStatus("Contract address copied");
      window.setTimeout(() => setCopyStatus("Copy contract address"), 1800);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus("Copy contract address"), 1800);
    }
  }

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-[#20331f] bg-[#020604]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(215,255,69,0.18),transparent_30rem),linear-gradient(180deg,#020604_0%,#06120c_48%,#020604_100%)]" />

      <div className="relative mx-auto w-full max-w-[118rem]">
        <div className="relative aspect-[941/520] min-h-[32rem] overflow-hidden bg-[#020604] md:min-h-0">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            preload
            quality={100}
            sizes="100vw"
            src="/images/grimmi/hero-reference-hd.png"
          />

          <div className="sr-only">
            <h1 id="hero-title">GRIMMI - The Last Wallet Goblin</h1>
            <p>The Last Wallet Goblin</p>
            <p>No promises. No kings. Just goblins.</p>
            <p>
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish, then opened the Goblin Vault for
              everyone left behind.
            </p>
            <p>A meme-born vault keeper for the chain-forgotten.</p>
            <p>Contract address: {contractAddress}</p>
            <p>Trusted and liquid: DEXTools, DEXScreener, Rug Check Verified.</p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[64%] bg-[linear-gradient(180deg,rgba(2,6,4,0.98),rgba(2,6,4,0.9)_64%,rgba(2,6,4,0))] md:hidden"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[57%] md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,4,0.995) 0%, rgba(3,9,6,0.985) 68%, rgba(3,9,6,0.88) 84%, rgba(3,9,6,0) 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6.65%] top-[8.6%] hidden w-[43%] md:block"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            <div className="flex max-w-[32rem] items-center gap-[clamp(0.4rem,0.82vw,0.95rem)]">
              <span className="h-px w-[clamp(1.8rem,4vw,4.7rem)] bg-gradient-to-r from-transparent via-[#9f7c34] to-[#e0bd5e]" />
              <p
                className="whitespace-nowrap font-serif text-[clamp(0.45rem,0.69vw,0.8rem)] font-black uppercase tracking-[0.28em] text-[#efd77e]"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
              >
                The Last Wallet Goblin
              </p>
              <span className="h-px flex-1 bg-gradient-to-r from-[#e0bd5e] to-transparent" />
            </div>
            <h1
              className="mt-[clamp(0.34rem,0.68vw,0.78rem)] font-serif text-[clamp(3.5rem,6.35vw,7.55rem)] font-black uppercase leading-[0.78] tracking-[-0.065em] text-[#e1f76d]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(86,108,34,0.92), 0 2px 0 rgba(0,0,0,0.94), 0 0 8px rgba(215,255,69,0.28), 0 0 19px rgba(116,176,45,0.12)",
              }}
            >
              GRIMMI
            </h1>
            <p
              className="mt-[clamp(0.38rem,0.72vw,0.82rem)] font-serif text-[clamp(0.72rem,1.15vw,1.34rem)] font-bold italic leading-none tracking-[0.075em] text-[#fff5d6]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.92), 0 0 6px rgba(215,255,69,0.1)",
              }}
            >
              The Last Wallet Goblin
            </p>
            <p
              className="mt-[clamp(0.76rem,1.45vw,1.7rem)] whitespace-nowrap font-serif text-[clamp(0.92rem,1.55vw,1.82rem)] font-black leading-[1.05] tracking-[0.012em] text-[#def36a]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.94), 0 0 7px rgba(215,255,69,0.2)",
              }}
            >
              No promises. No kings. Just goblins.
            </p>
            <p
              className="mt-[clamp(0.58rem,1.08vw,1.25rem)] max-w-[39rem] text-[clamp(0.56rem,0.81vw,0.96rem)] font-semibold leading-[1.52] tracking-[0.012em] text-[#f6efd8]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow: "0 1px 0 rgba(0,0,0,0.94)",
              }}
            >
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish &mdash; then opened the Goblin Vault
              for everyone left behind.
            </p>
            <p
              className="mt-[clamp(0.34rem,0.64vw,0.74rem)] hidden font-serif text-[clamp(0.52rem,0.72vw,0.84rem)] font-bold italic tracking-[0.075em] text-[#d9c77a] xl:block"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow: "0 1px 0 rgba(0,0,0,0.94)",
              }}
            >
              A meme-born vault keeper for the chain-forgotten.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 top-[5.5%] md:hidden"
            style={{
              WebkitFontSmoothing: "antialiased",
              textRendering: "geometricPrecision",
            }}
          >
            <p className="font-serif text-[0.6rem] font-black uppercase tracking-[0.26em] text-[#efd77e]">
              The Last Wallet Goblin
            </p>
            <h1
              className="mt-2 font-serif text-[3.85rem] font-black uppercase leading-[0.8] tracking-[-0.075em] text-[#e1f76d]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(86,108,34,0.92), 0 2px 0 rgba(0,0,0,0.94), 0 0 8px rgba(215,255,69,0.24)",
              }}
            >
              GRIMMI
            </h1>
            <p
              className="mt-2 font-serif text-sm font-bold italic tracking-[0.055em] text-[#fff5d6]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.92)" }}
            >
              The Last Wallet Goblin
            </p>
            <p
              className="mt-4 font-serif text-lg font-black leading-tight text-[#def36a]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
            >
              No promises. No kings. Just goblins.
            </p>
            <p
              className="mt-3 max-w-[23rem] font-serif text-xs font-semibold leading-[1.55] text-[#f6efd8]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
            >
              Born where failed transactions gather like dust, Grimmi guarded
              lost wallets, broken promises, and abandoned memes. He watched
              fake kings rise and vanish &mdash; then opened the Goblin Vault
              for everyone left behind.
            </p>
          </div>

          <div className="absolute inset-x-5 top-[64%] z-10 flex h-12 gap-2 md:hidden">
            <a
              className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#efff78] bg-[#d7ff45] px-3 text-[0.65rem] font-black uppercase tracking-[0.075em] text-[#020604] shadow-[0_0_14px_rgba(215,255,69,0.44),0_7px_18px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,208,0.88)] transition duration-200 hover:bg-[#efff78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efff78]"
              href="#buy"
            >
              <span className="absolute inset-x-3 top-[14%] h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full border border-[#31450e]/65 leading-none"
              >
                $
              </span>
              Buy $GRIMMI
            </a>
            <a
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#c8a84f]/95 bg-[#06110d]/95 px-3 text-[0.62rem] font-black uppercase tracking-[0.075em] text-[#fbf5d9] shadow-[0_7px_18px_rgba(0,0,0,0.5),inset_0_0_12px_rgba(215,255,69,0.06)] transition duration-200 hover:border-[#d7ff45] hover:text-[#efff78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href="#lore"
            >
              <span
                aria-hidden="true"
                className="grid h-5 w-5 place-items-center rounded-full border border-[#c8a84f]/75 leading-none text-[#d7ff45]"
              >
                &gt;
              </span>
              Read the Lore
            </a>
          </div>

          <button
            aria-label={`${copyStatus}: ${contractAddress}`}
            className="absolute inset-x-5 top-[76.5%] z-10 flex h-9 items-center gap-2 overflow-hidden rounded-full border border-[#6f8b45]/90 bg-[#04100b]/96 px-3 text-left shadow-[0_5px_14px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(215,255,69,0.09)] transition duration-200 hover:border-[#b8d95a] hover:bg-[#07180f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45] md:hidden"
            onClick={handleCopyContract}
            title={contractAddress}
            type="button"
          >
            <span className="shrink-0 text-[0.56rem] font-black uppercase tracking-[0.12em] text-[#d7ff45]">
              CA:
            </span>
            <span className="min-w-0 flex-1 truncate font-mono text-[0.54rem] font-bold tracking-[0.025em] text-[#fff9e2]">
              {contractAddress}
            </span>
            <span className="shrink-0 text-sm text-[#d7ff45]">
              <CopyIcon />
            </span>
          </button>

          <div
            aria-hidden="true"
            className="absolute inset-x-5 top-[86%] z-10 grid h-8 grid-cols-3 gap-1.5 md:hidden"
          >
            {trustBadges.map((badge) => (
              <span
                className="flex min-w-0 items-center justify-center gap-1 rounded-md border border-[#577443]/90 bg-[#06110d]/96 px-1 text-center text-[0.46rem] font-black uppercase leading-tight tracking-[0.045em] text-[#fff9e2] shadow-[0_3px_10px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(215,255,69,0.08)]"
                key={badge.label}
              >
                <span className="grid h-4 w-4 shrink-0 place-items-center rounded-[0.15rem] border border-[#d7ff45]/78 bg-[#0a1a11] text-[0.58rem] tracking-normal text-[#d7ff45]">
                  {badge.icon}
                </span>
                {badge.label}
              </span>
            ))}
          </div>

          <div className="absolute left-[6.65%] top-[65.35%] hidden h-[9.15%] items-stretch gap-[clamp(0.7rem,1.45vw,1.7rem)] md:flex">
            <a
              aria-label="Buy GRIMMI"
              className="relative flex w-[clamp(9.15rem,19.15vw,22.5rem)] items-center justify-center gap-[clamp(0.35rem,0.72vw,0.85rem)] overflow-hidden rounded-[clamp(0.38rem,0.62vw,0.72rem)] border border-[#efff78] bg-[#d7ff45] px-[clamp(0.55rem,1.1vw,1.3rem)] text-[clamp(0.62rem,0.92vw,1.02rem)] font-black uppercase tracking-[0.075em] text-[#020604] shadow-[0_0_15px_rgba(215,255,69,0.46),0_8px_20px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,208,0.88)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#efff78] hover:shadow-[0_0_22px_rgba(215,255,69,0.62),0_10px_24px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(255,255,220,0.96)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efff78]"
              href="#buy"
            >
              <span className="absolute inset-x-3 top-[14%] h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
              <span
                aria-hidden="true"
                className="grid aspect-square h-[44%] place-items-center rounded-full border border-[#31450e]/65 text-[0.9em] leading-none"
              >
                $
              </span>
              Buy $GRIMMI
            </a>
            <a
              aria-label="Read the GRIMMI lore"
              className="flex w-[clamp(8.25rem,17.35vw,20.4rem)] items-center justify-center gap-[clamp(0.35rem,0.7vw,0.82rem)] rounded-[clamp(0.38rem,0.62vw,0.72rem)] border border-[#c8a84f]/95 bg-[#06110d]/95 px-[clamp(0.55rem,1.05vw,1.22rem)] text-[clamp(0.58rem,0.86vw,0.96rem)] font-black uppercase tracking-[0.075em] text-[#fff9e2] shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_0_14px_rgba(215,255,69,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d7ff45] hover:bg-[#0a1a11] hover:text-[#efff78] hover:shadow-[0_0_16px_rgba(215,255,69,0.22),0_10px_24px_rgba(0,0,0,0.54)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
              href="#lore"
            >
              <span
                aria-hidden="true"
                className="grid aspect-square h-[43%] place-items-center rounded-full border border-[#c8a84f]/75 text-[0.92em] leading-none text-[#d7ff45]"
              >
                &gt;
              </span>
              Read the Lore
            </a>
          </div>

          <button
            aria-label={`${copyStatus}: ${contractAddress}`}
            className="absolute left-[6.65%] top-[79.45%] hidden h-[5.65%] w-[38.15%] items-center gap-[clamp(0.28rem,0.62vw,0.72rem)] overflow-hidden rounded-full border border-[#6f8b45]/90 bg-[#04100b]/96 px-[clamp(0.52rem,1.1vw,1.25rem)] text-left shadow-[0_5px_16px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(215,255,69,0.09)] transition duration-200 hover:border-[#b8d95a] hover:bg-[#07180f] hover:shadow-[0_0_14px_rgba(215,255,69,0.16),0_6px_18px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45] md:flex"
            onClick={handleCopyContract}
            title={contractAddress}
            type="button"
          >
            <span className="shrink-0 text-[clamp(0.44rem,0.68vw,0.8rem)] font-black uppercase tracking-[0.13em] text-[#d7ff45]">
              CA:
            </span>
            <span className="min-w-0 flex-1 truncate font-mono text-[clamp(0.42rem,0.66vw,0.78rem)] font-bold tracking-[0.04em] text-[#fff9e2]">
              {contractAddress}
            </span>
            <span className="shrink-0 text-[clamp(0.7rem,0.9vw,1rem)] text-[#d7ff45]">
              <CopyIcon />
            </span>
          </button>

          <div
            aria-hidden="true"
            className="absolute left-[6.65%] top-[88.45%] hidden h-[4.6%] items-center gap-[clamp(0.28rem,0.6vw,0.72rem)] md:flex"
          >
            {trustBadges.map((badge) => (
              <span
                className="flex h-full items-center gap-[clamp(0.22rem,0.48vw,0.56rem)] rounded-[clamp(0.2rem,0.38vw,0.45rem)] border border-[#577443]/90 bg-[#06110d]/96 px-[clamp(0.35rem,0.7vw,0.82rem)] text-[clamp(0.42rem,0.62vw,0.72rem)] font-black uppercase tracking-[0.1em] text-[#fff9e2] shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(215,255,69,0.08)]"
                key={badge.label}
              >
                <span className="grid aspect-square h-[58%] place-items-center rounded-[0.18rem] border border-[#d7ff45]/78 bg-[#0a1a11] text-[0.76em] tracking-normal text-[#d7ff45]">
                  {badge.icon}
                </span>
                {badge.label}
              </span>
            ))}
          </div>

          <span aria-live="polite" className="sr-only">
            {copyStatus}
          </span>
        </div>
      </div>
    </section>
  );
}
