const roadmapReference = "/grimmi/reference.png";
const roadmapReferenceWidth = 941;
const roadmapReferenceHeight = 1672;

const roadmapCards = [
  {
    phase: "PHASE 1",
    title: "THE CAVE OPENS",
    imageAlt: "Rocky cave entrance opening into an emerald glow",
    sceneCrop: { x: 32, y: 1195, width: 192, height: 106 },
    status: "completed",
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
    imageAlt: "Large circular goblin vault door lit by green light",
    sceneCrop: { x: 242, y: 1195, width: 192, height: 106 },
    status: "locked",
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
    imageAlt: "Ruined forgotten chain landscape glowing through a dark haze",
    sceneCrop: { x: 462, y: 1195, width: 192, height: 106 },
    status: "locked",
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
    imageAlt: "Goblin festival silhouettes gathered beneath lantern light",
    sceneCrop: { x: 694, y: 1195, width: 192, height: 106 },
    status: "locked",
    items: [
      "Virtual events",
      "Merch concepts",
      "Games & experiences",
      "Eternal meme legacy",
    ],
  },
] as const;

type RoadmapStatus = (typeof roadmapCards)[number]["status"];
type SceneCrop = (typeof roadmapCards)[number]["sceneCrop"];

function RoadmapScene({
  alt,
  crop,
}: {
  alt: string;
  crop: SceneCrop;
}) {
  const xPosition = (crop.x / (roadmapReferenceWidth - crop.width)) * 100;
  const yPosition = (crop.y / (roadmapReferenceHeight - crop.height)) * 100;
  const backgroundWidth = (roadmapReferenceWidth / crop.width) * 100;

  return (
    <div
      aria-label={alt}
      className="absolute inset-0 bg-no-repeat"
      role="img"
      style={{
        backgroundImage: `url("${roadmapReference}")`,
        backgroundPosition: `${xPosition}% ${yPosition}%`,
        backgroundSize: `${backgroundWidth}% auto`,
        filter: "contrast(1.08) saturate(1.12) brightness(1.08)",
      }}
    />
  );
}

function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="block h-3 w-6 -rotate-45 border-b-[3px] border-l-[3px] border-[#ecff87] drop-shadow-[0_0_5px_rgba(215,255,69,0.82)]"
    />
  );
}

function LockMark() {
  return (
    <span aria-hidden="true" className="relative block h-6 w-5">
      <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-t-full border-2 border-b-0 border-[#d3b65e]" />
      <span className="absolute inset-x-0 bottom-0 h-4 rounded-[0.2rem] border-2 border-[#d3b65e] bg-[#0a100b] shadow-[inset_0_0_8px_rgba(211,182,94,0.16)]" />
      <span className="absolute bottom-[0.3rem] left-1/2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-[#d3b65e]" />
    </span>
  );
}

function StatusMedallion({
  phase,
  status,
}: {
  phase: string;
  status: RoadmapStatus;
}) {
  const isCompleted = status === "completed";

  return (
    <div
      aria-label={`${phase} ${status}`}
      className={`absolute -bottom-6 left-1/2 z-20 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-2 bg-[#040a07] shadow-[0_8px_24px_rgba(0,0,0,0.72),inset_0_0_18px_rgba(215,255,69,0.08)] ${
        isCompleted
          ? "border-[#d7ff45]/88 shadow-[0_0_24px_rgba(215,255,69,0.28),0_8px_24px_rgba(0,0,0,0.72),inset_0_0_18px_rgba(215,255,69,0.1)]"
          : "border-[#aa8d43]/88"
      }`}
    >
      <span className="absolute inset-[0.28rem] rounded-full border border-[#d9bd65]/24" />
      {isCompleted ? <CheckMark /> : <LockMark />}
    </div>
  );
}

export function RoadmapSection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8"
      id="roadmap"
    >
      <div className="pointer-events-none absolute inset-x-[5%] top-[3%] h-[88%] bg-[radial-gradient(ellipse_at_50%_32%,rgba(215,255,69,0.14),rgba(172,127,40,0.055)_38%,transparent_73%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-10 h-px bg-gradient-to-r from-transparent via-[#b99943]/52 to-transparent" />

      <header
        className="relative mx-auto max-w-4xl text-center"
        style={{
          WebkitFontSmoothing: "antialiased",
          textRendering: "geometricPrecision",
        }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-[clamp(3rem,12vw,8.5rem)] bg-gradient-to-r from-transparent via-[#9f7c34] to-[#e0bd5e]" />
          <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312] shadow-[0_0_8px_rgba(215,255,69,0.34)]" />
          <p
            className="font-serif text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#e6cf84] sm:text-xs"
            style={{ textShadow: "0 1px 0 rgba(0,0,0,0.95)" }}
          >
            The Path
          </p>
          <span className="h-1.5 w-1.5 rotate-45 border border-[#efcf73]/90 bg-[#243312] shadow-[0_0_8px_rgba(215,255,69,0.34)]" />
          <span className="h-px w-[clamp(3rem,12vw,8.5rem)] bg-gradient-to-l from-transparent via-[#9f7c34] to-[#e0bd5e]" />
        </div>

        <h2
          className="mt-4 bg-gradient-to-b from-[#fff5b6] via-[#e6f678] to-[#bedb54] bg-clip-text font-serif text-[clamp(3.2rem,7vw,5.75rem)] font-black uppercase leading-[0.88] tracking-[0.12em] text-transparent"
          style={{
            fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
            textShadow:
              "0 1px 0 rgba(0,0,0,0.88), 0 0 8px rgba(215,255,69,0.24), 0 0 18px rgba(142,184,55,0.1)",
          }}
        >
          Roadmap
        </h2>

        <span className="mx-auto mt-4 block h-px w-[72%] bg-gradient-to-r from-transparent via-[#c49a43]/76 to-transparent" />

        <p
          className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 tracking-[0.035em] text-[#f5ecd2] sm:text-base"
          style={{
            fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
            textShadow: "0 1px 0 rgba(0,0,0,0.92)",
          }}
        >
          The cave opens in chapters. No promises. Just goblin-built milestones.
        </p>
      </header>

      <div className="relative mt-8 grid auto-rows-fr gap-x-4 gap-y-12 pb-7 sm:mt-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-4">
        {roadmapCards.map((card, index) => (
          <article
            className="group relative flex min-h-[27rem] flex-col rounded-[0.95rem] border border-[#786337]/92 bg-[#04100b] shadow-[0_22px_64px_rgba(0,0,0,0.62),0_0_25px_rgba(215,255,69,0.075),inset_0_0_34px_rgba(215,255,69,0.038)] transition duration-300 hover:-translate-y-1 hover:border-[#d7ff45]/72 hover:shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_30px_rgba(215,255,69,0.15),inset_0_0_36px_rgba(215,255,69,0.055)]"
            key={card.phase}
          >
            <span className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-[#e5c56b]/66" />
            <span className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-[#e5c56b]/66" />
            <span className="pointer-events-none absolute bottom-3 left-3 z-20 h-5 w-5 border-b border-l border-[#b99b52]/48" />
            <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-[#b99b52]/48" />

            <div className="relative aspect-[192/106] overflow-hidden rounded-t-[0.9rem] border-b border-[#987b3d]/72 bg-[#020604] sm:aspect-auto sm:h-44 lg:aspect-[192/106] lg:h-auto">
              <RoadmapScene alt={card.imageAlt} crop={card.sceneCrop} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(2,6,4,0.16)_78%,rgba(2,6,4,0.58)_100%)]" />
              <div className="pointer-events-none absolute inset-x-4 bottom-3 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/58 to-transparent shadow-[0_0_10px_rgba(215,255,69,0.44)]" />
            </div>

            <div className="relative flex flex-1 flex-col px-5 pb-10 pt-5">
              <p
                className="font-serif text-[0.68rem] font-black uppercase tracking-[0.29em] text-[#f0d77d]"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.94)" }}
              >
                {card.phase}
              </p>

              <h3
                className="mt-2 min-h-[3.3rem] font-serif text-[1.34rem] font-black uppercase leading-[1.12] tracking-[0.045em] text-[#e9f486]"
                style={{
                  fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                  textShadow:
                    "0 1px 0 rgba(0,0,0,0.88), 0 0 6px rgba(215,255,69,0.2)",
                }}
              >
                {card.title}
              </h3>

              <span className="mt-3 block h-px w-full bg-gradient-to-r from-[#9c7a39]/82 via-[#d7ff45]/24 to-transparent" />

              <ul
                className="mt-4 grid content-start gap-2.5 text-sm font-medium leading-[1.45] tracking-[0.008em] text-[#f7f0dc]"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.86)" }}
              >
                {card.items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7ff45] shadow-[0_0_10px_rgba(215,255,69,0.82)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <StatusMedallion phase={card.phase} status={card.status} />

            {index < roadmapCards.length - 1 ? (
              <div className="pointer-events-none absolute -right-[1.06rem] top-[47%] z-30 hidden h-8 w-8 -translate-y-1/2 items-center justify-center lg:flex">
                <span className="absolute h-px w-8 bg-gradient-to-r from-[#d7ff45]/0 via-[#d7ff45]/78 to-[#b99943]/0 shadow-[0_0_10px_rgba(215,255,69,0.52)]" />
                <span className="h-3 w-3 rotate-45 border-r border-t border-[#d7ff45] shadow-[0_0_8px_rgba(215,255,69,0.5)]" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
