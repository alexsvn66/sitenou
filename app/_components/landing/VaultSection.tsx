import { Button } from "./Button";
import { SectionEyebrow } from "./SectionEyebrow";

const vaultItems = [
  { label: "Lost wallets", value: "Guarded" },
  { label: "Abandoned memes", value: "Archived" },
  { label: "Cursed chain scraps", value: "Forged" },
];

export function VaultSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-5 py-7 sm:px-6 sm:py-10 lg:px-8"
      id="vault"
    >
      <div className="ornate-frame grimmi-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(215,255,69,0.15),transparent_22rem),linear-gradient(90deg,rgba(2,6,4,0.08),rgba(2,6,4,0.54))]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
          <div>
            <SectionEyebrow>Vault</SectionEyebrow>
            <h2 className="goblin-title mt-3 font-serif text-4xl font-black uppercase tracking-tight sm:text-5xl">
              A Cave For The Chain-Cursed
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#e3dfc8]">
              The $GRIMMI vault is the mythology layer: a place for memes,
              rituals, holder status, and launch energy to feel connected
              instead of disposable.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="#buy">Enter the Vault</Button>
              <Button href="#community" variant="secondary">
                Join the Tribe
              </Button>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-[#43573d] bg-[#020604]/72 shadow-[inset_0_0_60px_rgba(0,0,0,0.72),0_0_38px_rgba(215,255,69,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,255,69,0.18),transparent_9rem),radial-gradient(circle_at_50%_50%,rgba(213,180,95,0.12),transparent_16rem)]" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ff45]/45 shadow-[0_0_38px_rgba(215,255,69,0.16),inset_0_0_34px_rgba(215,255,69,0.08)]" />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8a7431]/65" />
            <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#d7ff45]/75 bg-[#06110d] text-5xl font-black text-[#d7ff45] shadow-[0_0_42px_rgba(215,255,69,0.26)]">
              $
            </div>
            <div className="absolute inset-x-6 top-7 flex items-center justify-between text-xs font-black uppercase tracking-[0.22em] text-[#d7ff45]">
              <span>Goblin</span>
              <span>Vault</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
              {vaultItems.map((item) => (
                <div
                  className="rounded-md border border-[#6e622d]/80 bg-[#06110d]/86 p-4 shadow-[inset_0_0_22px_rgba(215,255,69,0.05)] backdrop-blur-sm"
                  key={item.label}
                >
                  <p className="font-mono text-[0.66rem] font-black uppercase tracking-[0.16em] text-[#8fa684]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-black uppercase text-[#f3eed8]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
