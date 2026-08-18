/* Ascenda / Atelier éditorial — page vitrine asymétrique, preuve par la méthode, interactions calmes et corail signature. */
import { ArrowUpRight, Check, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";

const heroImage = "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1800&q=88";

function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center ${small ? "h-7 w-7" : "h-9 w-9"}`} aria-label="Ascenda">
      <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
        <path d="M7 31 19.8 8 33 31h-7.1l-2.5-5.2H16L13.7 31H7Z" fill="#E76F51" />
        <path d="m17.2 21.2 3-5.4 3 5.4h-6Z" fill="#f5f0e8" />
      </svg>
    </span>
  );
}

function ArrowLink({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="link-line inline-flex items-center gap-3 text-sm font-bold" >{children}<ArrowUpRight size={16} strokeWidth={1.7} /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="overflow-hidden">
      <header className="container relative z-20 flex items-center justify-between py-6 lg:py-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Ascenda, retour en haut">
          <Mark />
          <span className="text-[1.05rem] font-extrabold tracking-[-0.04em]">ascenda<span className="text-[#E76F51]">.</span></span>
        </a>
        <nav className="hidden items-center gap-9 text-sm font-semibold lg:flex" aria-label="Navigation principale">
          <a href="#approche" className="link-line">Notre approche</a>
          <a href="#expertise" className="link-line">Expertises</a>
          <a href="#contact" className="link-line">Contact</a>
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-[#1f201b] px-5 py-2.5 text-sm font-bold transition hover:bg-[#1f201b] hover:text-[#f5f0e8] lg:inline-flex">Parlons-nous <MoveUpRight size={15} /></a>
        <button className="rounded-full border border-[#1f201b] p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </header>
      {menuOpen && <nav className="container absolute left-0 right-0 z-10 border-y border-[#d7cdbd] bg-[#f5f0e8] py-5 lg:hidden" aria-label="Menu mobile"><div className="flex flex-col gap-5 text-lg font-bold"><a href="#approche" onClick={() => setMenuOpen(false)}>Notre approche</a><a href="#expertise" onClick={() => setMenuOpen(false)}>Expertises</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></nav>}

      <section id="top" className="container pb-20 pt-12 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,.98fr)] lg:gap-20">
          <div className="reveal max-w-[720px]">
            <div className="eyebrow mb-7 flex items-center gap-3"><span className="h-px w-9 bg-[#E76F51]" /> Studio de stratégie & transformation</div>
            <h1 className="display text-[4.4rem] sm:text-[6.4rem] lg:text-[7.6rem]">Créer<br /><em className="not-italic text-[#E76F51]">l’élan</em><br />qui compte.</h1>
            <div className="mt-10 flex max-w-[500px] flex-col gap-7 sm:flex-row sm:items-start"><p className="text-[1.05rem] leading-7 text-[#5e5b51]">Ascenda aide les équipes ambitieuses à transformer une intention floue en mouvement concret.</p><ArrowLink>Découvrir notre manière</ArrowLink></div>
          </div>
          <div className="reveal relative lg:pb-6" style={{ animationDelay: "120ms" }}>
            <div className="relative ml-auto aspect-[.86] max-w-[470px] overflow-hidden bg-[#d5ccbc] lg:aspect-[.92]">
              <img src={heroImage} alt="Espace de travail lumineux et calme" className="h-full w-full object-cover grayscale-[.12] sepia-[.12]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f201b]/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#f8f2e9]"><span className="eyebrow !text-[#f8f2e9]">Bruxelles · Paris · À distance</span><span className="font-display text-4xl">01</span></div>
            </div>
            <div className="paper-shadow absolute -bottom-5 -left-5 max-w-[245px] bg-[#e7b4a4] p-5 sm:-left-12"><p className="font-display text-[1.65rem] leading-[1.05]">Les idées avancent mieux quand elles ont une forme.</p></div>
          </div>
        </div>
      </section>

      <section id="approche" className="border-y border-[#d7cdbd] bg-[#ebe4d8] py-20 lg:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.31fr_1fr] lg:gap-20"><div><div className="flex items-center gap-3"><Mark small /><span className="eyebrow">01 / Orientation</span></div><div className="mt-6 hidden h-px w-28 bg-[#b8ad9c] lg:block" /></div><div className="max-w-[800px]"><h2 className="display max-w-[760px] text-[3rem] sm:text-[4.4rem]">Nous transformons la complexité en <span className="text-[#E76F51]">direction.</span></h2><div className="mt-10 grid gap-10 border-t border-[#cfc4b4] pt-7 sm:grid-cols-2"><div><p className="leading-7 text-[#5e5b51]">Pas de méthode plaquée. Nous commençons par écouter ce qui bloque, nommer ce qui compte, puis construire le chemin qui rend l’action possible.</p><p className="eyebrow mt-6 flex items-center gap-2 text-[#E76F51]"><Check size={13} /> Sortie : une décision partagée</p></div><div><p className="leading-7 text-[#5e5b51]">Chaque mission est un temps de mise au clair, de décision et de transmission. Le résultat doit rester utile bien après notre départ.</p><p className="eyebrow mt-6 flex items-center gap-2 text-[#E76F51]"><Check size={13} /> Sortie : un cap transmissible</p></div></div></div></div>
      </section>

      <section id="expertise" className="container py-20 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.31fr_1fr] lg:gap-20"><div><div className="flex items-center gap-3 lg:ml-8"><Mark small /><span className="eyebrow">02 / Élan</span></div><div className="mt-6 hidden h-px w-28 bg-[#b8ad9c] lg:ml-8 lg:block" /></div><div><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><h2 className="display max-w-[560px] text-[3rem] sm:text-[4.4rem]">Un cadre clair.<br /><span className="text-[#E76F51]">Du mouvement.</span></h2><p className="max-w-[220px] text-sm leading-6 text-[#6d685d]">Trois façons d’avancer, selon votre moment et votre ambition.</p></div><div className="grid border-t border-[#b8ad9c] md:grid-cols-3">{[{n:"01",t:"Clarifier",d:"Aligner la vision, les choix et les mots qui donnent envie d’avancer.",o:"Note d’orientation"},{n:"02",t:"Structurer",d:"Passer de l’intuition à une feuille de route qui tient dans le réel.",o:"Carte des priorités"},{n:"03",t:"Transmettre",d:"Équiper les équipes pour que l’élan ne dépende pas d’une seule personne.",o:"Kit de transmission"}].map((item) => <article key={item.n} className="group border-b border-[#b8ad9c] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><div className="mb-14 flex items-center justify-between"><span className="eyebrow text-[#E76F51]">{item.n}</span><ArrowUpRight size={18} className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="font-display text-[2.2rem]">{item.t}</h3><p className="mt-4 text-sm leading-6 text-[#6d685d]">{item.d}</p><p className="eyebrow mt-6 border-t border-[#d7cdbd] pt-3 text-[#E76F51]">{item.o}</p></article>)}</div></div></div></section>

      <section className="container pb-24 lg:pb-32"><div className="relative overflow-hidden bg-[#1f201b] px-7 py-14 text-[#f5f0e8] sm:px-12 lg:px-20 lg:py-20"><div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-[#e76f51]/40" /><div className="absolute -right-2 -top-12 h-56 w-56 rounded-full border border-[#e76f51]/30" /><div className="relative max-w-[760px]"><span className="eyebrow !text-[#d8cdbc]">La suite, c’est vous</span><h2 className="display mt-7 text-[3.3rem] sm:text-[5rem]">Et si le prochain pas était déjà là ?</h2><a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E76F51] px-6 py-3.5 text-sm font-extrabold text-[#1f201b] transition hover:bg-[#f18a70]">Faire le premier pas <MoveUpRight size={17} /></a></div></div></section>

      <footer id="contact" className="border-t border-[#d7cdbd] bg-[#ebe4d8] py-12"><div className="container grid gap-10 lg:grid-cols-[.7fr_1fr_.7fr] lg:items-end"><div><a href="#top" className="flex items-center gap-3"><Mark small /><span className="font-extrabold tracking-[-0.04em]">ascenda<span className="text-[#E76F51]">.</span></span></a><p className="mt-5 max-w-[230px] text-sm leading-6 text-[#6d685d]">Une trajectoire plus claire commence souvent par une bonne conversation.</p></div><div><span className="eyebrow">Échangeons</span><a className="mt-3 block font-display text-3xl sm:text-4xl hover:text-[#E76F51]" href="mailto:bonjour@ascenda.studio">bonjour@ascenda.studio</a></div><div className="lg:text-right"><p className="eyebrow">© 2026 Ascenda Studio</p><p className="mt-3 text-sm text-[#6d685d]">Stratégie · Transformation · Transmission</p></div></div></footer>
    </main>
  );
}
