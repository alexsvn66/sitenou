import { Button } from "./Button";

const communityLinks = [
  { label: "Follow on X", mark: "X" },
  { label: "Join Telegram", mark: "TG" },
  { label: "Trade on Dex", mark: "DX" },
  { label: "Meme Kit", mark: "MK" },
];

const sparks = [
  "left-[10%] top-[24%]",
  "left-[28%] bottom-[22%]",
  "right-[18%] top-[18%]",
  "right-[9%] bottom-[30%]",
  "left-[48%] top-[14%]",
  "right-[42%] bottom-[18%]",
];

export function CommunitySection() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
      id="community"
    >
      <div className="absolute inset-x-0 top-12 h-[36rem] bg-[radial-gradient(ellipse_at_50%_50%,rgba(215,255,69,0.2),transparent_62%)] blur-3xl" />

      <div className="ornate-frame relative overflow-hidden rounded-2xl border border-[#657842]/82 bg-[#06110d]/90 p-5 shadow-[0_44px_150px_rgba(0,0,0,0.7),0_0_92px_rgba(215,255,69,0.21),inset_0_0_72px_rgba(124,255,107,0.08)] backdrop-blur-md sm:p-7 lg:p-9">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_0%,rgba(215,255,69,0.24),transparent_24rem),radial-gradient(circle_at_88%_66%,rgba(213,180,95,0.16),transparent_20rem),linear-gradient(135deg,rgba(215,255,69,0.055)_0_1px,transparent_1px_92px)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7ff45]/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b99943]/75 to-transparent" />

        {sparks.map((className) => (
          <span
            aria-hidden="true"
            className={`absolute h-1.5 w-1.5 rounded-full bg-[#d7ff45] shadow-[0_0_16px_rgba(215,255,69,0.9)] ${className}`}
            key={className}
          />
        ))}

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-[#344c37] bg-[#020604]/48 p-6 shadow-[inset_0_0_34px_rgba(215,255,69,0.055)] backdrop-blur-sm sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(215,255,69,0.15),transparent_14rem),linear-gradient(180deg,transparent,rgba(2,6,4,0.44))]" />
            <div
              className="absolute bottom-0 left-0 right-0 h-32 bg-[#06110d]/82"
              style={{
                clipPath:
                  "polygon(0 56%, 13% 38%, 26% 62%, 42% 32%, 58% 63%, 76% 39%, 100% 60%, 100% 100%, 0 100%)",
              }}
            />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d7ff45]">
                Community
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight text-[#d7ff45] drop-shadow-[0_0_26px_rgba(215,255,69,0.3)] sm:text-6xl">
                Join The Goblin Tribe
              </h2>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-24 bg-gradient-to-r from-[#d7ff45] via-[#b99943] to-transparent" />
                <span className="h-2 w-2 rotate-45 bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.8)]" />
                <span className="h-px flex-1 bg-gradient-to-r from-[#b99943]/70 to-transparent" />
              </div>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#f0ecd8]">
                Bring your memes, your chaos, and your best goblin energy. The
                vault opens for creators first.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#61723f]/78 bg-[#020604]/58 p-4 shadow-[0_28px_98px_rgba(0,0,0,0.52),inset_0_0_36px_rgba(215,255,69,0.065)] backdrop-blur-sm sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.2),transparent_16rem),radial-gradient(circle_at_100%_100%,rgba(213,180,95,0.12),transparent_14rem)]" />
            <div className="relative grid gap-4">
              <Button
                className="h-20 w-full text-base hover:scale-[1.01] hover:shadow-[0_0_70px_rgba(215,255,69,0.95),0_22px_50px_rgba(0,0,0,0.62)]"
                href="#buy"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#020604]/30 bg-[#020604]/12 text-sm shadow-[inset_0_0_12px_rgba(255,255,255,0.16)]">
                  G
                </span>
                Buy $GRIMMI
              </Button>

              <div className="grid gap-3 sm:grid-cols-2">
                {communityLinks.map((link) => (
                  <Button
                    className="h-16 justify-start px-4 hover:scale-[1.01]"
                    href="#"
                    key={link.label}
                    variant="link"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#d7ff45]/38 bg-[#020604] text-[0.62rem] font-black text-[#d7ff45] shadow-[0_0_18px_rgba(215,255,69,0.16)]">
                      {link.mark}
                    </span>
                    {link.label}
                  </Button>
                ))}
              </div>

              <div className="rounded-xl border border-[#b99943]/55 bg-[#06110d]/72 px-4 py-3 text-center text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#d9c77a] shadow-[inset_0_0_18px_rgba(213,180,95,0.06)]">
                No promises. No kings. Just goblins.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
