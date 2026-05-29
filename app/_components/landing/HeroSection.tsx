"use client";

import Image from "next/image";
import { useState } from "react";

const contractAddress = "0xGrimmiGoblin000000000000000000000";

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
            <p>No promises. No kings. Just goblins.</p>
            <p>
              Born in the forgotten corners of the chain. Built for memes,
              chaos, and community.
            </p>
            <p>Contract address: {contractAddress}</p>
            <p>Trusted and liquid: DEXTools, DEXScreener, Rug Check Verified.</p>
          </div>

          <a
            aria-label="Buy GRIMMI"
            className="absolute left-[6.65%] top-[65.35%] h-[9.15%] w-[19.15%] rounded-[0.62rem] transition duration-200 hover:bg-[#d7ff45]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
            href="#buy"
          />
          <a
            aria-label="Read the GRIMMI lore"
            className="absolute left-[27.25%] top-[65.35%] h-[9.15%] w-[17.35%] rounded-[0.62rem] transition duration-200 hover:bg-[#d7ff45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
            href="#lore"
          />
          <button
            aria-label={`${copyStatus}: ${contractAddress}`}
            className="absolute left-[9.7%] top-[79.45%] h-[5.65%] w-[29.7%] rounded-full transition duration-200 hover:bg-[#d7ff45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
            onClick={handleCopyContract}
            type="button"
          />
          <span aria-live="polite" className="sr-only">
            {copyStatus}
          </span>
        </div>
      </div>
    </section>
  );
}
