import { Button } from "./Button";
import { SectionEyebrow } from "./SectionEyebrow";

const communityLinks = [
  { label: "Follow on X", mark: "X" },
  { label: "Join Telegram", mark: "T" },
  { label: "Trade on Dex", mark: "$" },
  { label: "Meme Kit", mark: "G" },
];

export function CommunitySection() {
  return (
    <section
      className="mx-auto max-w-7xl px-5 py-7 sm:px-6 sm:py-10 lg:px-8"
      id="community"
    >
      <div className="ornate-frame grimmi-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,255,69,0.15),transparent_22rem),linear-gradient(135deg,rgba(215,255,69,0.04)_0_1px,transparent_1px_92px)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionEyebrow>Community</SectionEyebrow>
          <h2 className="section-heading mt-3">Join The Goblin Tribe</h2>
          <p className="mt-4 text-lg leading-8 text-[#e3dfc8]">
            Memes, raids, lore drops, vault rituals, and launch momentum. The
            tribe is the product.
          </p>
        </div>
        <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityLinks.map((link) => (
            <Button href="#" key={link.label} variant="link">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-[#d7ff45]/35 bg-[#020604] text-xs font-black text-[#d7ff45]">
                {link.mark}
              </span>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
