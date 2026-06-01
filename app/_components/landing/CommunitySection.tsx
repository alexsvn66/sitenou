import type { CSSProperties } from "react";

const communityReference =
  "/grimmi/d6b705f0-1ecf-474f-a059-cd6aecc35d4a.png";
const referenceWidth = 1821;
const referenceHeight = 864;

const mainPanelCrop = { x: 154, y: 39, width: 1507, height: 620 };
const leftSceneCrop = { x: 154, y: 39, width: 696, height: 620 };
const tribeMarkCrop = { x: 474, y: 368, width: 44, height: 44 };
const buyMarkCrop = { x: 984, y: 169, width: 84, height: 84 };

const communityLinks = [
  {
    href: "https://x.com/GRIMMIGoblin",
    label: "Follow on X",
    crop: { x: 900, y: 328, width: 62, height: 62 },
  },
  {
    href: "https://t.me/GrimmiGoblinn",
    label: "Join Telegram",
    crop: { x: 1247, y: 328, width: 62, height: 62 },
  },
  {
    href: "#",
    label: "Trade on Dex",
    crop: { x: 900, y: 444, width: 62, height: 62 },
  },
  {
    href: "#meme-kit",
    label: "Meme Kit",
    crop: { x: 1247, y: 444, width: 62, height: 62 },
  },
] as const;

type ReferenceCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function cropStyle(crop: ReferenceCrop): CSSProperties {
  return {
    backgroundImage: `url("${communityReference}")`,
    backgroundPosition: `${(crop.x / (referenceWidth - crop.width)) * 100}% ${
      (crop.y / (referenceHeight - crop.height)) * 100
    }%`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${(referenceWidth / crop.width) * 100}% auto`,
  };
}

function ReferenceCrop({
  className,
  crop,
}: {
  className: string;
  crop: ReferenceCrop;
}) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-[#020604] ${className}`}
      style={cropStyle(crop)}
    />
  );
}

const hotspotClass =
  "absolute rounded-xl transition duration-200 hover:bg-[#d7ff45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]";

export function CommunitySection() {
  return (
    <section
      className="relative mx-auto max-w-[96rem] px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
      id="community"
    >
      <div className="pointer-events-none absolute inset-x-[4%] top-[4%] h-[92%] bg-[radial-gradient(ellipse_at_50%_46%,rgba(215,255,69,0.16),rgba(178,130,42,0.075)_38%,transparent_74%)] blur-3xl" />

      <div className="sr-only">
        <p>Community</p>
        <h2>Join The Goblin Tribe</h2>
        <p>
          Bring your memes, your chaos, and your best goblin energy. The vault
          opens for creators first. Join the tribe, share the lore, trade the
          memes, and help Grimmi grow across the chain.
        </p>
      </div>

      <div className="relative hidden md:block">
        <div
          aria-label="Community panel with a goblin tribe ritual scene and ways to join the GRIMMI community"
          className="relative aspect-[1507/620] overflow-hidden rounded-[1.1rem] border border-[#b39448]/72 bg-[#020604] shadow-[0_34px_100px_rgba(0,0,0,0.7),0_0_38px_rgba(215,255,69,0.13),inset_0_0_0_1px_rgba(238,209,119,0.09)]"
          role="img"
          style={cropStyle(mainPanelCrop)}
        >
          <a
            aria-label="Buy GRIMMI"
            className={`${hotspotClass} left-[48.6%] top-[18.2%] h-[20.3%] w-[42.9%]`}
            href="https://pump.fun/coin/EY7ae7YDvgLANwJgUoj9ybyxdMWPcYpZ2exPhfuRpump"
            rel="noopener noreferrer"
            target="_blank"
          />
          <a
            aria-label="Follow on X"
            className={`${hotspotClass} left-[48%] top-[44%] h-[14.7%] w-[21.2%]`}
            href="https://x.com/GRIMMIGoblin"
            rel="noopener noreferrer"
            target="_blank"
          />
          <a
            aria-label="Join Telegram"
            className={`${hotspotClass} left-[71%] top-[44%] h-[14.7%] w-[21.2%]`}
            href="https://t.me/GrimmiGoblinn"
            rel="noopener noreferrer"
            target="_blank"
          />
          <a
            aria-label="Trade on Dex"
            className={`${hotspotClass} left-[48%] top-[62.7%] h-[14.5%] w-[21.2%]`}
            href="#"
          />
          <a
            aria-label="Meme Kit"
            className={`${hotspotClass} left-[71%] top-[62.7%] h-[14.5%] w-[21.2%]`}
            href="#meme-kit"
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.1rem] border border-[#b39448]/85 bg-[#020604] shadow-[0_28px_90px_rgba(0,0,0,0.7),0_0_30px_rgba(215,255,69,0.14),inset_0_0_0_1px_rgba(238,209,119,0.1)] md:hidden">
        <ReferenceCrop
          className="pointer-events-none absolute inset-x-0 top-0 h-[35rem] opacity-55"
          crop={leftSceneCrop}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,4,0.34),rgba(2,6,4,0.72)_38%,rgba(2,6,4,0.98)_70%),radial-gradient(circle_at_55%_20%,rgba(215,255,69,0.12),transparent_16rem)]" />
        <div className="pointer-events-none absolute inset-[0.42rem] rounded-[0.82rem] border border-[#d8b75d]/34 shadow-[inset_0_0_26px_rgba(1,5,3,0.86)]" />
        <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-[#e5c56b]/72" />
        <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-[#e5c56b]/72" />
        <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#e5c56b]/72" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#e5c56b]/72" />

        <div className="relative p-5">
          <div className="px-2 pb-7 pt-4 text-center">
            <p
              className="font-serif text-[0.68rem] font-black uppercase tracking-[0.34em] text-[#efd77e]"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.96)" }}
            >
              Community
            </p>
            <h2
              className="mt-4 font-serif text-[clamp(3rem,16vw,4.3rem)] font-black uppercase leading-[0.84] tracking-[0.035em] text-[#dfff57]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow:
                  "0 1px 0 rgba(70,94,20,0.94), 0 2px 0 rgba(0,0,0,0.96), 0 0 9px rgba(215,255,69,0.3), 0 0 18px rgba(116,176,45,0.12)",
              }}
            >
              <span className="block">Join The</span>
              <span className="block">Goblin</span>
              <span className="block">Tribe</span>
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#a8863d] to-[#d7ff45]" />
              <ReferenceCrop
                className="h-8 w-8 shrink-0 bg-transparent"
                crop={tribeMarkCrop}
              />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#a8863d] to-[#d7ff45]" />
            </div>

            <p
              className="mx-auto mt-5 max-w-xl font-serif text-[0.98rem] font-semibold leading-[1.66] text-[#f6efd9]"
              style={{
                fontFamily: "Georgia, Garamond, 'Times New Roman', serif",
                textShadow: "0 1px 0 rgba(0,0,0,0.94)",
              }}
            >
              Bring your memes, your chaos, and your best goblin energy. The
              vault opens for creators first. Join the tribe, share the lore,
              trade the memes, and help Grimmi grow across the chain.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[#b39448]/72 bg-[#020604]/92 p-3 shadow-[0_18px_42px_rgba(0,0,0,0.52),inset_0_0_24px_rgba(215,255,69,0.045)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.14),transparent_13rem),linear-gradient(180deg,rgba(6,17,13,0.34),rgba(2,6,4,0.7))]" />
            <div className="relative grid gap-3">
              <a
                className="relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#efff78] bg-[#d7ff45] px-4 font-serif text-lg font-black uppercase tracking-[0.075em] text-[#071005] shadow-[0_0_18px_rgba(215,255,69,0.54),0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,208,0.92)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#efff78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efff78]"
                href="https://pump.fun/coin/EY7ae7YDvgLANwJgUoj9ybyxdMWPcYpZ2exPhfuRpump"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="absolute inset-x-4 top-1 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />
                <ReferenceCrop
                  className="h-10 w-10 shrink-0 rounded-md bg-transparent"
                  crop={buyMarkCrop}
                />
                Buy $GRIMMI
              </a>

              <div className="grid gap-2 sm:grid-cols-2">
                {communityLinks.map((link) => (
                  <a
                    className="flex h-14 items-center gap-3 rounded-lg border border-[#806a38]/92 bg-[#06110d]/96 px-3 font-serif text-[0.72rem] font-black uppercase tracking-[0.075em] text-[#fff7df] shadow-[0_6px_16px_rgba(0,0,0,0.46),inset_0_0_14px_rgba(215,255,69,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d7ff45] hover:text-[#efff78] hover:shadow-[0_0_15px_rgba(215,255,69,0.14),0_7px_18px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff45]"
                    href={link.href}
                    key={link.label}
                    rel={
                      link.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    <ReferenceCrop
                      className="h-9 w-9 shrink-0 rounded-md bg-transparent"
                      crop={link.crop}
                    />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="rounded-md border border-[#a88c45]/72 bg-[#07110c]/94 px-3 py-2.5 text-center font-serif text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#dfff57] shadow-[inset_0_0_12px_rgba(215,255,69,0.035)]">
                No promises. No kings. Just goblins.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
