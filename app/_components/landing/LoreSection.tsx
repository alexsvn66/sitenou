const relics = ["Lost Wallets", "Broken Promises", "Abandoned Memes"];

const runes = [
  { label: "G", className: "left-[9%] top-[15%] h-14 w-14 -rotate-12" },
  { label: "$", className: "right-[10%] top-[18%] h-12 w-12 rotate-12" },
  { label: "V", className: "bottom-[34%] left-[18%] h-11 w-11 rotate-45" },
  { label: "#", className: "bottom-[28%] right-[17%] h-10 w-10 -rotate-6" },
  { label: "R", className: "left-[55%] top-[9%] h-9 w-9 rotate-6" },
];

const coins = [
  "left-[8%] bottom-[21%] h-6 w-6",
  "left-[52%] bottom-[22%] h-8 w-8",
  "right-[8%] bottom-[32%] h-7 w-7",
  "right-[31%] top-[24%] h-5 w-5",
];

const particles = [
  "left-[17%] top-[30%]",
  "left-[31%] top-[19%]",
  "left-[72%] top-[33%]",
  "right-[18%] bottom-[38%]",
  "left-[43%] bottom-[32%]",
  "right-[37%] top-[15%]",
];

export function LoreSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8"
      id="lore"
    >
      <div className="absolute inset-x-0 top-1/2 h-[34rem] -translate-y-1/2 bg-[radial-gradient(ellipse_at_48%_50%,rgba(215,255,69,0.16),transparent_62%)] blur-3xl" />
      <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-[#8a7431]/55 to-transparent" />

      <div className="ornate-frame relative overflow-hidden rounded-2xl border border-[#657842]/80 bg-[#06110d]/88 shadow-[0_44px_140px_rgba(0,0,0,0.68),0_0_84px_rgba(215,255,69,0.17),inset_0_0_72px_rgba(124,255,107,0.075)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_38%,rgba(215,255,69,0.18),transparent_20rem),radial-gradient(circle_at_80%_32%,rgba(213,180,95,0.16),transparent_18rem),linear-gradient(135deg,rgba(215,255,69,0.055)_0_1px,transparent_1px_92px)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b99943]/80 to-transparent" />

        <div className="relative grid gap-0 lg:grid-cols-[1.14fr_0.86fr]">
          <div className="relative min-h-[29rem] overflow-hidden border-b border-[#344c37] bg-[#020604] lg:min-h-[34rem] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_24%,rgba(215,255,69,0.3),transparent_9rem),radial-gradient(circle_at_52%_64%,rgba(213,180,95,0.16),transparent_18rem),linear-gradient(180deg,rgba(18,56,37,0.36)_0%,rgba(2,6,4,0.78)_68%,#020604_100%)]" />
            <div className="absolute inset-0 opacity-55 bg-[linear-gradient(90deg,rgba(215,255,69,0.075)_0_1px,transparent_1px_4.5rem),linear-gradient(180deg,rgba(215,255,69,0.052)_0_1px,transparent_1px_4rem)]" />
            <div className="absolute inset-x-8 top-7 h-36 rounded-[50%] bg-[#d7ff45]/15 blur-3xl" />
            <div className="absolute bottom-24 left-4 right-4 h-28 bg-[linear-gradient(90deg,transparent,rgba(215,255,69,0.18),transparent)] blur-2xl" />

            <div className="absolute left-1/2 top-[12%] h-64 w-64 -translate-x-1/2 rounded-full border border-[#d7ff45]/30 shadow-[0_0_72px_rgba(215,255,69,0.22),inset_0_0_44px_rgba(215,255,69,0.09)]" />
            <div className="absolute left-1/2 top-[17%] h-48 w-48 -translate-x-1/2 rounded-full border border-[#b99943]/45" />
            <div className="absolute left-1/2 top-[23%] h-32 w-32 -translate-x-1/2 rounded-full border border-[#d7ff45]/50 bg-[#d7ff45]/8 shadow-[0_0_64px_rgba(215,255,69,0.3),inset_0_0_26px_rgba(215,255,69,0.1)]" />
            <div className="absolute left-1/2 top-[30%] grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full border border-[#d7ff45]/70 bg-[#020604]/72 font-serif text-4xl font-black text-[#d7ff45] shadow-[0_0_42px_rgba(215,255,69,0.34)]">
              G
            </div>

            <div
              className="absolute bottom-[9.5rem] left-0 right-0 h-44 bg-[#0a2419]/90"
              style={{
                clipPath:
                  "polygon(0 58%, 7% 43%, 16% 55%, 27% 25%, 38% 51%, 50% 14%, 62% 47%, 74% 22%, 87% 53%, 100% 30%, 100% 100%, 0 100%)",
              }}
            />
            <div
              className="absolute bottom-[5.6rem] left-0 right-0 h-40 bg-[#020604]/98"
              style={{
                clipPath:
                  "polygon(0 64%, 10% 41%, 23% 60%, 35% 29%, 48% 62%, 62% 34%, 76% 66%, 90% 43%, 100% 60%, 100% 100%, 0 100%)",
              }}
            />

            <div className="absolute bottom-[28%] left-[39%] h-28 w-24 -translate-x-1/2">
              <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-[44%_44%_50%_50%] border border-[#d7ff45]/34 bg-[#07130e] shadow-[0_0_30px_rgba(215,255,69,0.18)]" />
              <div className="absolute bottom-0 left-1/2 h-16 w-24 -translate-x-1/2 rounded-t-full border border-[#344c37] bg-[#020604]/94 shadow-[inset_0_0_22px_rgba(0,0,0,0.86)]" />
              <div className="absolute left-[1.55rem] top-7 h-2 w-3 rounded-full bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.9)]" />
              <div className="absolute right-[1.55rem] top-7 h-2 w-3 rounded-full bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.9)]" />
              <div className="absolute -right-8 bottom-7 h-16 w-px rotate-12 bg-gradient-to-b from-[#d7ff45] to-transparent shadow-[0_0_18px_rgba(215,255,69,0.8)]" />
            </div>

            {runes.map((rune) => (
              <span
                aria-hidden="true"
                className={`absolute grid place-items-center rounded-full border border-[#d7ff45]/34 bg-[#020604]/55 font-serif text-xl font-black text-[#d7ff45]/85 shadow-[0_0_24px_rgba(215,255,69,0.16),inset_0_0_18px_rgba(215,255,69,0.07)] backdrop-blur-sm ${rune.className}`}
                key={rune.label}
              >
                {rune.label}
              </span>
            ))}

            {coins.map((className) => (
              <span
                aria-hidden="true"
                className={`absolute rounded-full border border-[#b99943]/60 bg-[#1a1509]/60 shadow-[0_0_20px_rgba(213,180,95,0.22),inset_0_0_12px_rgba(213,180,95,0.18)] after:absolute after:inset-1.5 after:rounded-full after:border after:border-[#d7ff45]/20 ${className}`}
                key={className}
              />
            ))}

            {particles.map((className) => (
              <span
                aria-hidden="true"
                className={`absolute h-1.5 w-1.5 rounded-full bg-[#d7ff45] shadow-[0_0_14px_rgba(215,255,69,0.9)] ${className}`}
                key={className}
              />
            ))}

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,#020604_68%)]" />

            <div className="absolute bottom-7 left-6 right-6 rounded-xl border border-[#b99943]/65 bg-[#020604]/72 px-4 py-3 shadow-[0_0_34px_rgba(0,0,0,0.52),inset_0_0_18px_rgba(213,180,95,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
                <p className="font-mono text-[0.64rem] font-black uppercase tracking-[0.22em] text-[#d7ff45]">
                  Forgotten Chain
                </p>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
              </div>
              <p className="mt-2 text-center text-sm font-semibold leading-6 text-[#e0d8be]">
                Failed swaps, lost wallets, and old memes sleeping under green
                candlelight.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(215,255,69,0.18),transparent_15rem),radial-gradient(circle_at_12%_82%,rgba(213,180,95,0.1),transparent_13rem),linear-gradient(180deg,rgba(2,6,4,0.12),rgba(2,6,4,0.44))]" />
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-[#b99943]/28" />
            <div className="absolute right-16 top-16 h-12 w-12 rotate-45 border border-[#d7ff45]/25" />
            <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-[#d7ff45]/8 blur-2xl" />

            <div className="relative rounded-xl border border-[#536a3c]/80 bg-[#020604]/50 p-6 shadow-[0_24px_76px_rgba(0,0,0,0.44),inset_0_0_34px_rgba(215,255,69,0.06)] backdrop-blur-sm sm:p-7">
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99943] to-[#d7ff45]" />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d7ff45]">
                  THE PAST
                </p>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b99943] to-[#d7ff45]" />
              </div>

              <h2 className="mt-5 font-serif text-4xl font-black uppercase leading-tight text-[#d7ff45] drop-shadow-[0_0_22px_rgba(215,255,69,0.28)] sm:text-5xl">
                A Goblin&apos;s Story
              </h2>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-28 bg-gradient-to-r from-[#d7ff45] via-[#b99943] to-transparent" />
                <span className="h-2 w-2 rotate-45 bg-[#d7ff45] shadow-[0_0_14px_rgba(215,255,69,0.78)]" />
                <span className="h-px flex-1 bg-gradient-to-r from-[#b99943]/70 to-transparent" />
              </div>

              <p className="mt-6 text-lg leading-8 text-[#ebe5cf]">
                In a forgotten corner of the blockchain, where failed
                transactions gather like dust, Grimmi guarded lost wallets,
                broken promises, and abandoned memes. He watched fake kings
                rise and vanish. He did not become a king.
              </p>
              <p className="mt-5 rounded-lg border border-[#d7ff45]/40 bg-[#07130e]/78 px-5 py-4 font-serif text-2xl font-black leading-8 text-[#d7ff45] shadow-[0_0_32px_rgba(215,255,69,0.18),inset_0_0_22px_rgba(215,255,69,0.07)]">
                He opened the Goblin Vault.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {relics.map((item) => (
                  <div
                    className="rounded-lg border border-[#344c37] bg-[#06110d]/74 px-3 py-4 text-center shadow-[inset_0_0_20px_rgba(215,255,69,0.055)]"
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
