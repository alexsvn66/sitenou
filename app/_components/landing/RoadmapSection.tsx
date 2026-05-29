import type { ReactNode } from "react";

const roadmapCards = [
  {
    phase: "PHASE 1",
    title: "THE CAVE OPENS",
    status: "check",
    visual: "cave",
    items: [
      "Launch $GRIMMI",
      "Build the lair",
      "Grow the goblin tribe",
      "Initial liquidity",
    ],
  },
  {
    phase: "PHASE 2",
    title: "THE GOBLIN VAULT",
    status: "lock",
    visual: "vault",
    items: [
      "Meme submissions",
      "Community rewards",
      "Vault upgrades",
      "Creator collabs",
    ],
  },
  {
    phase: "PHASE 3",
    title: "THE FORGOTTEN CHAIN",
    status: "lock",
    visual: "chain",
    items: [
      "Cross-chain mischief",
      "More lore drops",
      "Expanded ecosystem",
      "Lost memes rescued",
    ],
  },
  {
    phase: "PHASE 4",
    title: "THE GOBLIN FESTIVAL",
    status: "lock",
    visual: "festival",
    items: [
      "Virtual events",
      "Merch concepts",
      "Games & experiences",
      "Eternal meme legacy",
    ],
  },
] as const;

type RoadmapVisual = (typeof roadmapCards)[number]["visual"];
type RoadmapStatus = (typeof roadmapCards)[number]["status"];

const emberPositions = [
  "left-[12%] top-[24%]",
  "left-[22%] top-[66%]",
  "left-[76%] top-[23%]",
  "left-[88%] top-[57%]",
] as const;

function SceneShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#020604]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(215,255,69,0.26),transparent_7.7rem),radial-gradient(circle_at_88%_18%,rgba(185,153,67,0.13),transparent_5.5rem),linear-gradient(180deg,rgba(17,48,31,0.75),#020604_90%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(215,255,69,0.055)_0_1px,transparent_1px_3.7rem),linear-gradient(180deg,rgba(185,153,67,0.045)_0_1px,transparent_1px_3.7rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(2,6,4,0.98))]" />
      {emberPositions.map((position) => (
        <span
          aria-hidden="true"
          className={`absolute z-10 h-1.5 w-1.5 rotate-45 bg-[#d7ff45] shadow-[0_0_14px_rgba(215,255,69,0.8)] ${position}`}
          key={position}
        />
      ))}
      {children}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,0,0,0),rgba(0,0,0,0.46)_76%)]" />
    </div>
  );
}

function CaveScene() {
  return (
    <SceneShell>
      <div className="absolute left-1/2 top-[47%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#d7ff45,rgba(83,179,63,0.52)_42%,rgba(2,6,4,0)_73%)] opacity-70 blur-sm" />
      <div className="absolute left-1/2 top-[48%] h-20 w-16 -translate-x-1/2 -translate-y-1/2 rounded-t-full border border-[#d7ff45]/38 bg-[#03140c] shadow-[0_0_34px_rgba(215,255,69,0.34),inset_0_0_22px_rgba(215,255,69,0.16)]" />
      <div
        className="absolute bottom-0 left-0 h-full w-[42%] bg-[linear-gradient(115deg,#010302,#0b1710_58%,#1d2615)] shadow-[18px_0_36px_rgba(0,0,0,0.48)]"
        style={{
          clipPath:
            "polygon(0 0, 73% 0, 64% 16%, 83% 31%, 57% 45%, 71% 61%, 49% 78%, 63% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-full w-[42%] bg-[linear-gradient(245deg,#010302,#0b1710_58%,#243119)] shadow-[-18px_0_36px_rgba(0,0,0,0.48)]"
        style={{
          clipPath:
            "polygon(28% 0, 100% 0, 100% 100%, 36% 100%, 53% 79%, 33% 62%, 48% 44%, 25% 30%, 42% 15%)",
        }}
      />
      <div
        className="absolute inset-x-7 bottom-0 h-[4.7rem] bg-[#07120c]"
        style={{
          clipPath:
            "polygon(0 92%, 9% 58%, 18% 80%, 28% 45%, 38% 75%, 50% 42%, 62% 78%, 74% 52%, 85% 82%, 100% 56%, 100% 100%, 0 100%)",
        }}
      />
      <div className="absolute bottom-0 left-1/2 h-20 w-24 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(215,255,69,0.22),rgba(2,6,4,0.04))]" style={{ clipPath: "polygon(44% 0, 56% 0, 82% 100%, 18% 100%)" }} />
      <span className="absolute left-[24%] top-6 h-10 w-2 rotate-[-20deg] rounded-b-full bg-[#050a07]" />
      <span className="absolute left-[37%] top-4 h-12 w-2 rotate-[9deg] rounded-b-full bg-[#050a07]" />
      <span className="absolute right-[31%] top-4 h-11 w-2 rotate-[-8deg] rounded-b-full bg-[#050a07]" />
    </SceneShell>
  );
}

function VaultScene() {
  const bolts = Array.from({ length: 12 }, (_, index) => index);

  return (
    <SceneShell>
      <div className="absolute inset-x-4 bottom-5 top-8 rounded-xl border border-[#b99943]/60 bg-[linear-gradient(135deg,#273224,#07100b_68%,#010302)] shadow-[0_0_34px_rgba(215,255,69,0.16),inset_0_0_34px_rgba(0,0,0,0.9)]" />
      <div className="absolute left-1/2 top-[51%] h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#806b31] bg-[#020604] shadow-[0_0_44px_rgba(215,255,69,0.32),inset_0_0_30px_rgba(0,0,0,0.92)]" />
      <div className="absolute left-1/2 top-[51%] h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff45]/58 bg-[radial-gradient(circle,rgba(215,255,69,0.24),rgba(2,6,4,0.9)_64%)] shadow-[inset_0_0_28px_rgba(215,255,69,0.17)]" />
      {bolts.map((bolt) => (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[51%] h-1.5 w-1.5 rounded-full bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.82)]"
          key={bolt}
          style={{
            transform: `translate(-50%, -50%) rotate(${bolt * 30}deg) translateY(-3.1rem)`,
          }}
        />
      ))}
      <div className="absolute left-1/2 top-[51%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f0d974] bg-[#d7ff45] shadow-[0_0_22px_rgba(215,255,69,0.95)]" />
      <div className="absolute left-1/2 top-[51%] h-[5.9rem] w-1 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full bg-[#b99943]/62" />
      <div className="absolute left-1/2 top-[51%] h-[5.9rem] w-1 -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-full bg-[#b99943]/42" />
      <div className="absolute bottom-7 left-6 h-9 w-8 rounded-t-md border border-[#6b5a2b] bg-[#0b150d]" />
      <div className="absolute bottom-7 right-6 h-9 w-8 rounded-t-md border border-[#6b5a2b] bg-[#0b150d]" />
      <div className="absolute bottom-[4.1rem] left-8 h-2 w-16 rounded-full bg-[#d7ff45]/18 shadow-[0_0_15px_rgba(215,255,69,0.28)]" />
    </SceneShell>
  );
}

function ChainScene() {
  const spires = [
    "left-[16%] h-12 w-4",
    "left-[25%] h-16 w-5",
    "left-[38%] h-10 w-4",
    "right-[25%] h-14 w-5",
    "right-[15%] h-11 w-4",
  ] as const;

  return (
    <SceneShell>
      <div className="absolute right-10 top-7 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff0a2,#d7ff45_45%,rgba(215,255,69,0.1)_72%)] opacity-80 shadow-[0_0_36px_rgba(215,255,69,0.38)]" />
      <div className="absolute right-7 top-4 h-16 w-16 rounded-full bg-[#020604]/65" />
      <div className="absolute inset-x-0 bottom-16 h-14 bg-[linear-gradient(180deg,transparent,rgba(70,91,48,0.42),rgba(2,6,4,0.86))]" />
      <div className="absolute left-7 top-12 h-8 w-14 rotate-[-18deg] rounded-full border-2 border-[#b99943]/42 shadow-[0_0_14px_rgba(215,255,69,0.12)]" />
      <div className="absolute left-[4.7rem] top-[4.2rem] h-8 w-14 rotate-[18deg] rounded-full border-2 border-[#b99943]/40 shadow-[0_0_14px_rgba(215,255,69,0.12)]" />
      <div className="absolute left-[7.8rem] top-[3.35rem] h-8 w-14 rotate-[-18deg] rounded-full border-2 border-[#b99943]/36 shadow-[0_0_14px_rgba(215,255,69,0.12)]" />
      {spires.map((spire) => (
        <div
          className={`absolute bottom-[3.35rem] bg-[linear-gradient(180deg,#142014,#020604)] shadow-[0_0_18px_rgba(0,0,0,0.66)] ${spire}`}
          key={spire}
          style={{
            clipPath: "polygon(50% 0, 100% 24%, 100% 100%, 0 100%, 0 24%)",
          }}
        />
      ))}
      <div
        className="absolute inset-x-0 bottom-0 h-[4.5rem] bg-[#07110c]"
        style={{
          clipPath:
            "polygon(0 70%, 9% 56%, 18% 65%, 29% 45%, 41% 70%, 54% 38%, 68% 66%, 82% 45%, 100% 66%, 100% 100%, 0 100%)",
        }}
      />
      <div className="absolute bottom-[3.6rem] left-1/2 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7ff45]/45 to-transparent shadow-[0_0_18px_rgba(215,255,69,0.34)]" />
    </SceneShell>
  );
}

function FestivalScene() {
  const lanterns = [
    "left-[20%] top-[42%]",
    "left-[49%] top-[35%]",
    "right-[20%] top-[44%]",
  ] as const;

  return (
    <SceneShell>
      <div className="absolute left-1/2 top-5 h-16 w-16 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_34%_34%,#fff2a4,#d7ff45_46%,rgba(215,255,69,0.09)_76%)] opacity-80 shadow-[0_0_40px_rgba(215,255,69,0.42)]" />
      <div className="absolute left-[53%] top-2 h-16 w-16 rounded-full bg-[#020604]/64" />
      <div
        className="absolute bottom-12 left-4 h-16 w-20 bg-[linear-gradient(180deg,#5a3215,#150b05)] shadow-[0_0_24px_rgba(185,153,67,0.18)]"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute bottom-12 right-4 h-16 w-20 bg-[linear-gradient(180deg,#4c2b14,#120804)] shadow-[0_0_24px_rgba(185,153,67,0.18)]"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />
      <div className="absolute bottom-12 left-[35%] h-12 w-[30%] rounded-t-full border border-[#b99943]/32 bg-[#07110c] shadow-[0_0_22px_rgba(0,0,0,0.6)]" />
      {lanterns.map((lantern) => (
        <span
          aria-hidden="true"
          className={`absolute h-4 w-3 rounded-full bg-[#ffd86b] shadow-[0_0_18px_rgba(255,216,107,0.86)] ${lantern}`}
          key={lantern}
        />
      ))}
      <div className="absolute bottom-10 left-[23%] h-8 w-6 rounded-t-full bg-[#020604]" />
      <div className="absolute bottom-10 left-[44%] h-10 w-7 rounded-t-full bg-[#020604]" />
      <div className="absolute bottom-10 right-[25%] h-8 w-6 rounded-t-full bg-[#020604]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[4.5rem] bg-[#070c08]"
        style={{
          clipPath:
            "polygon(0 72%, 8% 46%, 15% 74%, 24% 45%, 31% 76%, 40% 48%, 48% 75%, 57% 40%, 66% 74%, 75% 50%, 84% 75%, 94% 46%, 100% 66%, 100% 100%, 0 100%)",
        }}
      />
    </SceneShell>
  );
}

function RoadmapVisual({ type }: { type: RoadmapVisual }) {
  if (type === "cave") {
    return <CaveScene />;
  }

  if (type === "vault") {
    return <VaultScene />;
  }

  if (type === "chain") {
    return <ChainScene />;
  }

  return <FestivalScene />;
}

function StatusIcon({
  status,
  phase,
}: {
  status: RoadmapStatus;
  phase: string;
}) {
  const isComplete = status === "check";

  return (
    <div
      aria-label={`${phase} ${isComplete ? "complete" : "locked"}`}
      className={`absolute -bottom-5 left-1/2 z-20 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border bg-[#060b07] shadow-[0_0_26px_rgba(0,0,0,0.78),inset_0_0_18px_rgba(215,255,69,0.08)] ${
        isComplete
          ? "border-[#d7ff45]/80 text-[#d7ff45] shadow-[0_0_28px_rgba(215,255,69,0.24),inset_0_0_18px_rgba(215,255,69,0.08)]"
          : "border-[#b99943]/72 text-[#c4a85b]"
      }`}
    >
      {isComplete ? (
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="m5 12.4 4.2 4.1L19 7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.5 10V8.2A4.5 4.5 0 0 1 12 3.7a4.5 4.5 0 0 1 4.5 4.5V10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.2"
          />
          <path
            d="M6.6 10h10.8c.9 0 1.6.7 1.6 1.6v6.2c0 .9-.7 1.6-1.6 1.6H6.6c-.9 0-1.6-.7-1.6-1.6v-6.2c0-.9.7-1.6 1.6-1.6Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      )}
    </div>
  );
}

export function RoadmapSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8"
      id="roadmap"
    >
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_50%_36%,rgba(215,255,69,0.14),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-8 h-px bg-gradient-to-r from-transparent via-[#b99943]/40 to-transparent" />

      <div className="relative text-center">
        <div className="mx-auto flex max-w-3xl items-center gap-3 sm:gap-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8e7530] to-[#d7ff45]" />
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-[#b99943] shadow-[0_0_9px_rgba(215,255,69,0.55)] sm:block" />
          <h2 className="font-serif text-3xl font-black uppercase tracking-[0.18em] text-[#d7e95f] drop-shadow-[0_0_22px_rgba(215,255,69,0.28)] sm:text-4xl">
            ROADMAP
          </h2>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-[#b99943] shadow-[0_0_9px_rgba(215,255,69,0.55)] sm:block" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8e7530] to-[#d7ff45]" />
        </div>
      </div>

      <div className="relative mt-6 grid gap-x-4 gap-y-10 pb-5 sm:grid-cols-2 lg:grid-cols-4">
        {roadmapCards.map((card, index) => (
          <article
            className="group relative flex min-h-[31rem] flex-col rounded-[0.9rem] border border-[#6f612f]/90 bg-[#050d09] shadow-[0_26px_84px_rgba(0,0,0,0.62),0_0_32px_rgba(215,255,69,0.09),inset_0_0_38px_rgba(124,255,107,0.055)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d7ff45]/76 hover:shadow-[0_38px_110px_rgba(0,0,0,0.72),0_0_58px_rgba(215,255,69,0.18),inset_0_0_46px_rgba(215,255,69,0.075)]"
            key={card.phase}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[0.9rem] bg-[radial-gradient(circle_at_50%_-8%,rgba(215,255,69,0.13),transparent_38%),linear-gradient(180deg,rgba(11,31,20,0.78),rgba(2,6,4,0.99))]" />
            <span className="absolute left-3 top-3 z-10 h-5 w-5 border-l border-t border-[#d7ff45]/48" />
            <span className="absolute right-3 top-3 z-10 h-5 w-5 border-r border-t border-[#b99943]/72" />
            <span className="absolute bottom-3 left-3 z-10 h-5 w-5 border-b border-l border-[#b99943]/72" />
            <span className="absolute bottom-3 right-3 z-10 h-5 w-5 border-b border-r border-[#d7ff45]/48" />

            <div className="relative h-[11rem] overflow-hidden rounded-t-[0.86rem] border-b border-[#59602f]/78 bg-[#020604]">
              <RoadmapVisual type={card.visual} />
            </div>

            <div className="relative flex flex-1 flex-col px-5 pb-12 pt-5">
              <p className="font-mono text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#b9e86a]">
                {card.phase}
              </p>
              <h3 className="mt-2 min-h-[3.8rem] text-[1.35rem] font-black uppercase leading-[1.12] tracking-wide text-[#ecf36a] drop-shadow-[0_0_14px_rgba(215,255,69,0.2)]">
                {card.title}
              </h3>
              <ul className="mt-5 grid gap-2.5 text-sm font-semibold leading-5 text-[#f0ecd6]">
                {card.items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d7ff45] shadow-[0_0_13px_rgba(215,255,69,0.88)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <StatusIcon phase={card.phase} status={card.status} />

            {index < roadmapCards.length - 1 ? (
              <div className="pointer-events-none absolute -right-[1.05rem] top-[47%] z-30 hidden h-8 w-8 -translate-y-1/2 items-center justify-center lg:flex">
                <span className="absolute h-px w-8 bg-gradient-to-r from-[#d7ff45]/0 via-[#d7ff45]/80 to-[#b99943]/0 shadow-[0_0_12px_rgba(215,255,69,0.62)]" />
                <span className="h-3 w-3 rotate-45 border-r border-t border-[#d7ff45] shadow-[0_0_9px_rgba(215,255,69,0.55)]" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
