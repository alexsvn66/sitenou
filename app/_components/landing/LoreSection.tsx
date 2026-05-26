const runeMarks = [
  { label: "G", className: "left-[12%] top-[16%] h-14 w-14 -rotate-12" },
  { label: "$", className: "right-[13%] top-[18%] h-12 w-12 rotate-12" },
  { label: "V", className: "bottom-[26%] left-[27%] h-11 w-11 rotate-45" },
  { label: "X", className: "bottom-[30%] right-[19%] h-10 w-10 -rotate-6" },
];

const caveSpikes = [
  "left-[3%] h-36 w-16",
  "left-[16%] h-48 w-18",
  "left-[34%] h-32 w-14",
  "right-[28%] h-40 w-16",
  "right-[9%] h-56 w-20",
];

const relics = ["Lost Wallets", "Broken Promises", "Abandoned Memes"];

export function LoreSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 py-7 sm:px-6 sm:py-9 lg:px-8"
      id="lore"
    >
      <div className="ornate-frame relative overflow-hidden rounded-lg border border-[#536a3c]/80 bg-[#06110d]/78 shadow-[0_32px_120px_rgba(0,0,0,0.56),0_0_62px_rgba(215,255,69,0.13),inset_0_0_52px_rgba(124,255,107,0.06)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_21%_28%,rgba(215,255,69,0.16),transparent_17rem),radial-gradient(circle_at_78%_28%,rgba(213,180,95,0.12),transparent_18rem),linear-gradient(135deg,rgba(215,255,69,0.045)_0_1px,transparent_1px_96px)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8a7431]/60 to-transparent" />

        <div className="relative grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-h-[22rem] overflow-hidden border-b border-[#344c37] bg-[#030806] lg:min-h-[25rem] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_24%,rgba(215,255,69,0.22),transparent_8rem),radial-gradient(circle_at_46%_75%,rgba(213,180,95,0.13),transparent_16rem),linear-gradient(180deg,rgba(18,56,37,0.24)_0%,rgba(2,6,4,0.76)_78%,#020604_100%)]" />
            <div className="absolute inset-x-8 top-7 h-28 rounded-[50%] bg-[#d7ff45]/10 blur-2xl" />
            <div className="absolute inset-x-12 bottom-20 h-20 bg-[linear-gradient(90deg,transparent,rgba(215,255,69,0.11),transparent)] blur-xl" />

            <div
              className="absolute bottom-28 left-0 right-0 h-36 bg-[#092017]/86"
              style={{
                clipPath:
                  "polygon(0 58%, 8% 42%, 16% 54%, 27% 28%, 39% 51%, 50% 18%, 62% 46%, 74% 24%, 86% 52%, 100% 32%, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute bottom-17 left-0 right-0 h-36 bg-[#020604]/95"
              style={{
                clipPath:
                  "polygon(0 62%, 11% 38%, 24% 57%, 36% 31%, 48% 60%, 62% 34%, 75% 64%, 90% 44%, 100% 61%, 100% 100%, 0 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,#020604_66%)]" />

            {caveSpikes.map((className) => (
              <span
                aria-hidden="true"
                className={`absolute bottom-0 rounded-t-full border border-[#344c37]/80 bg-[#06110d]/72 shadow-[inset_0_0_24px_rgba(0,0,0,0.72),0_0_18px_rgba(215,255,69,0.05)] ${className}`}
                key={className}
              />
            ))}

            <div className="absolute left-1/2 top-[20%] h-24 w-24 -translate-x-1/2 rounded-full border border-[#d7ff45]/35 bg-[#d7ff45]/8 shadow-[0_0_50px_rgba(215,255,69,0.25),inset_0_0_26px_rgba(215,255,69,0.08)]" />
            <div className="absolute left-1/2 top-[26%] h-48 w-48 -translate-x-1/2 rounded-full border border-[#8a7431]/28" />
            <div className="absolute left-1/2 top-[39%] h-24 w-32 -translate-x-1/2 rounded-t-full border border-[#d7ff45]/30 bg-[#06110d]/72 shadow-[0_0_30px_rgba(215,255,69,0.13),inset_0_0_26px_rgba(0,0,0,0.72)]" />

            <div className="absolute bottom-[26%] left-[42%] h-20 w-16 -translate-x-1/2">
              <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-[45%_45%_50%_50%] border border-[#d7ff45]/24 bg-[#07130e] shadow-[0_0_20px_rgba(215,255,69,0.12)]" />
              <div className="absolute bottom-0 left-1/2 h-12 w-16 -translate-x-1/2 rounded-t-full border border-[#344c37] bg-[#020604]/90 shadow-[inset_0_0_18px_rgba(0,0,0,0.8)]" />
              <div className="absolute left-[1.1rem] top-5 h-1.5 w-2 rounded-full bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.8)]" />
              <div className="absolute right-[1.1rem] top-5 h-1.5 w-2 rounded-full bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.8)]" />
            </div>

            {runeMarks.map((rune) => (
              <span
                aria-hidden="true"
                className={`absolute grid place-items-center rounded-full border border-[#d7ff45]/30 bg-[#020604]/46 font-serif text-xl font-black text-[#d7ff45]/80 shadow-[0_0_22px_rgba(215,255,69,0.13),inset_0_0_16px_rgba(215,255,69,0.06)] backdrop-blur-sm ${rune.className}`}
                key={rune.label}
              >
                {rune.label}
              </span>
            ))}

            <div className="absolute bottom-7 left-7 right-7 rounded-md border border-[#8a7431]/55 bg-[#020604]/64 px-4 py-3 shadow-[0_0_28px_rgba(0,0,0,0.42),inset_0_0_16px_rgba(213,180,95,0.06)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8a7431] to-[#d7ff45]" />
                <p className="font-mono text-[0.64rem] font-black uppercase tracking-[0.22em] text-[#d7ff45]">
                  Forgotten Chain
                </p>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8a7431] to-[#d7ff45]" />
              </div>
              <p className="mt-2 text-center text-sm font-semibold leading-6 text-[#d8d1b7]">
                Failed swaps, lost wallets, and old memes sleeping under green
                candlelight.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden p-7 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_26%,rgba(215,255,69,0.14),transparent_15rem),linear-gradient(180deg,rgba(2,6,4,0.08),rgba(2,6,4,0.36))]" />
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#8a7431]/25" />
            <div className="absolute right-14 top-14 h-12 w-12 rotate-45 border border-[#d7ff45]/20" />

            <div className="relative max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8a7431] to-[#d7ff45]" />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d7ff45]">
                  THE PAST
                </p>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8a7431] to-[#d7ff45]" />
              </div>

              <h2 className="goblin-title mt-4 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
                A Goblin&rsquo;s Story
              </h2>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-28 bg-gradient-to-r from-[#d7ff45] via-[#8a7431] to-transparent" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.75)]" />
                <span className="h-px flex-1 bg-gradient-to-r from-[#8a7431]/70 to-transparent" />
              </div>

              <p className="mt-6 text-lg leading-8 text-[#e8e1ca]">
                In a forgotten corner of the blockchain, where failed
                transactions gather like dust, Grimmi guarded lost wallets,
                broken promises, and abandoned memes. He watched fake kings
                rise and vanish. He did not become a king.{" "}
                <span className="font-black text-[#d7ff45] drop-shadow-[0_0_12px_rgba(215,255,69,0.28)]">
                  He opened the Goblin Vault.
                </span>
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {relics.map((item) => (
                  <div
                    className="rounded-md border border-[#344c37] bg-[#020604]/44 px-3 py-3 text-center shadow-[inset_0_0_18px_rgba(215,255,69,0.04)]"
                    key={item}
                  >
                    <p className="text-[0.64rem] font-black uppercase leading-5 tracking-[0.16em] text-[#d7ff45]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
