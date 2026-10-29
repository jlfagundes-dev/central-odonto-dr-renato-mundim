import { createFileRoute } from "@tanstack/react-router";
import fachada from "@/assets/fachada-real.jpg";
import consultorio from "@/assets/consultorio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Odonto | Dentista em Cristalina - GO | Dr. Renato Mundim Costa" },
      { name: "description", content: "Central Odonto, clínica odontológica do Dr. Renato Mundim Costa em Cristalina, Goiás. Clínica geral, estética, implantes e ortodontia." },
      { property: "og:title", content: "Central Odonto — Cristalina, GO" },
      { property: "og:description", content: "Saúde bucal com cuidado e tecnologia, com o Dr. Renato Mundim Costa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5561999999999";

const servicos = [
  { t: "Clínica Geral", d: "Limpeza, restaurações e prevenção para toda a família." },
  { t: "Estética Dental", d: "Clareamento, facetas e harmonia para o seu sorriso." },
  { t: "Implantes", d: "Reabilitação segura e natural de dentes perdidos." },
  { t: "Ortodontia", d: "Aparelhos fixos e alinhadores para dentes alinhados." },
  { t: "Endodontia", d: "Tratamento de canal com conforto e precisão." },
  { t: "Odontopediatria", d: "Atendimento acolhedor para os pequenos sorrisos." },
];

function Tooth({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3c-2.5 0-4 2-4 4.5 0 2 1 3.5 1.5 5.5.6 2.5.8 8 2.7 8 1.6 0 1.6-5 4.8-5s3.2 5 4.8 5c1.9 0 2.1-5.5 2.7-8 .5-2 1.5-3.5 1.5-5.5C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-secondary/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span />
          <nav className="hidden gap-8 font-display text-sm text-secondary-foreground/80 md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#servicos" className="hover:text-primary">Tratamentos</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={WHATS} className="rounded-full bg-primary px-5 py-2 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90">Agendar</a>
        </div>
      </header>

      {/* Hero – fachada */}
      <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden bg-secondary">
        <img src={fachada} alt="Fachada da Central Odonto em Cristalina" className="absolute inset-0 h-full w-full object-cover object-[50%_25%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <p className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" /> Cristalina · Goiás
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-secondary-foreground md:text-6xl">
            Mais saúde para o seu sorriso.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-secondary-foreground/80">
            Odontologia completa com o Dr. Renato Mundim Costa, em um ambiente moderno, limpo e acolhedor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATS} className="rounded-full bg-primary px-8 py-3 font-display font-semibold text-primary-foreground shadow-soft transition hover:opacity-90">Agende sua consulta</a>
            <a href="#servicos" className="rounded-full border border-secondary-foreground/40 px-8 py-3 font-display font-semibold text-secondary-foreground transition hover:bg-secondary-foreground/10">Tratamentos</a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <img src={consultorio} alt="Consultório odontológico" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-soft" />
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">O Doutor</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Dr. Renato Mundim Costa</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cirurgião-Dentista · Clínica Geral Ortodontia</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Na Central Odonto, cada paciente é atendido com atenção, escuta e transparência. Unimos técnica, biossegurança rigorosa e tecnologia para oferecer tratamentos confortáveis e resultados duradouros.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[["100%", "Esterilização"], ["Família", "Todas as idades"], ["Moderno", "Equipamentos"]].map(([a, b]) => (
                <div key={b} className="rounded-xl border bg-card p-4">
                  <p className="font-display font-bold text-primary">{a}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-muted py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Tratamentos</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Cuidado completo para o seu sorriso</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div key={s.t} className="group rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Tooth className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Tooth className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">Sorrisos transformam histórias.</h2>
          <p className="mt-4 text-muted-foreground">Agende sua avaliação e dê o primeiro passo para um sorriso mais saudável.</p>
          <a href={WHATS} className="mt-8 inline-block rounded-full bg-primary px-10 py-4 font-display font-semibold text-primary-foreground shadow-soft transition hover:opacity-90">Falar no WhatsApp</a>
        </div>
      </section>

      {/* Contato */}
      <footer id="contato" className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">Central Odonto</p><p className="mt-1 text-sm text-secondary-foreground/70">Dr. Renato Mundim Costa</p>
          </div>
          <div className="text-sm text-secondary-foreground/80">
            <p className="font-display font-semibold text-primary">Endereço</p>
            <p className="mt-2">Centro, Cristalina – GO</p>
            <p className="mt-4 font-display font-semibold text-primary">Horário</p>
            <p className="mt-2">Seg a Sex · 8h às 18h</p>
          </div>
          <div className="text-sm text-secondary-foreground/80">
            <p className="font-display font-semibold text-primary">Contato</p>
            <p className="mt-2">(61) 99999-9999</p>
            <a href={WHATS} className="mt-4 inline-block underline hover:text-primary">WhatsApp</a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-secondary-foreground/50">© {new Date().getFullYear()} Central Odonto · Dr. Renato Mundim Costa</p>
      </footer>
    </div>
  );
}
