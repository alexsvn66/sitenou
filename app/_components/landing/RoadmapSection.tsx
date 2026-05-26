import { GlowCard } from "./GlowCard";

const roadmap = [
  {
    phase: "Phase 1",
    title: "The Cave Opens",
    status: "Unlocked",
    items: [
      "Launch $GRIMMI",
      "Build the lair",
      "Grow the goblin tribe",
      "Initial liquidity",
    ],
  },
  {
    phase: "Phase 2",
    title: "The Goblin Vault",
    status: "Forging",
    items: [
      "Vault utility & staking",
      "Meme submissions",
      "Community rewards",
      "Partnerships",
    ],
  },
  {
    phase: "Phase 3",
    title: "The Forgotten Chain",
    status: "Locked",
    items: [
      "Cross-chain mischief",
      "More listings",
      "Expanded ecosystem",
      "Lost memes rescued",
    ],
  },
  {
    phase: "Phase 4",
    title: "The Goblin Festival",
    status: "Locked",
    items: [
      "IRL & virtual events",
      "NFT & merch drops",
      "Games & experiences",
      "Eternal meme legacy",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 py-7 sm:px-6 sm:py-10 lg:px-8"
      id="roadmap"
    >
      <div className="ornate-divider">
        <h2 className="section-heading whitespace-nowrap">Roadmap</h2>
      </div>
      <div className="relative mt-8 grid gap-5 lg:grid-cols-4">
        <div aria-hidden="true" className="absolute left-8 right-8 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#d7ff45]/35 to-transparent lg:block" />
        {roadmap.map((item, index) => (
          <GlowCard className="ornate-frame relative min-h-[27rem] p-0" key={item.phase}>
            <div className="relative h-36 overflow-hidden border-b border-[#344c37] bg-[#030806]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(215,255,69,0.2),transparent_9rem),linear-gradient(180deg,rgba(18,56,37,0.5),rgba(2,6,4,0.94))]" />
              <div className="absolute left-1/2 top-9 h-28 w-28 -translate-x-1/2 rounded-full border border-[#d7ff45]/30" />
              <div className="absolute inset-x-7 bottom-6 h-16 rounded-t-full border border-[#54693f] bg-[#06110d]/68 shadow-[inset_0_0_28px_rgba(0,0,0,0.6)]" />
              <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-[#d7ff45]/45 bg-[#020604] font-mono text-sm font-black text-[#d7ff45] shadow-[0_0_24px_rgba(215,255,69,0.18)]">
                0{index + 1}
              </div>
            </div>
            <div className="relative p-6">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#c9e66a]">
                {item.phase}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-wide text-[#f7e85f]">
                {item.title}
              </h3>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#f0ecd6]">
                {item.items.map((phaseItem) => (
                  <li className="flex gap-3" key={phaseItem}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.7)]" />
                    <span>{phaseItem}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-5 left-1/2 grid h-10 min-w-10 -translate-x-1/2 place-items-center rounded-full border border-[#8a7431] bg-[#06110d] px-3 text-[0.64rem] font-black uppercase tracking-wide text-[#d7ff45] shadow-[0_0_18px_rgba(215,255,69,0.1)]">
                {item.status}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
