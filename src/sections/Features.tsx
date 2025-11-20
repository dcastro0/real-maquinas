import { Reveal } from "../components/Reveal";

const features = [
  {
    title: "Fabricação Própria",
    desc: "Controle total de qualidade do aço ao acabamento final.",
    icon: "🏭"
  },
  {
    title: "Logística Própria",
    desc: "Entrega especializada de grandes estruturas em toda região.",
    icon: "🚛"
  },
  {
    title: "Projetos Sob Medida",
    desc: "Engenharia personalizada para sua necessidade específica.",
    icon: "📐"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-bg-paper border-b border-text-secondary/10 -mt-20 relative z-20 mx-4 md:mx-auto container rounded-2xl shadow-xl">
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="flex flex-col items-center text-center p-4 group">
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{feature.icon}</span>
              <h3 className="text-xl font-bold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}