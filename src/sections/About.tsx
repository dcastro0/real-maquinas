import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section className="bg-brand-secondary py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Não encontrou o que precisa?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Desenvolvemos projetos especiais sob medida para sua fazenda ou empresa. 
            Traga sua ideia e nossa engenharia executa.
          </p>
          <a 
            href="https://wa.me/5538999999999" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-400 text-brand-secondary px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <span>Falar com Engenheiro</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}