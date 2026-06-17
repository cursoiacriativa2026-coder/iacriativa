import { useEffect, useState, type ReactNode } from "react";

const checkoutUrl = "https://pay.hotmart.com/E103583426A?checkoutMode=10";
const countdownDurationInSeconds = ((3 * 24 + 4) * 60 + 20) * 60;
const professorImage =
  "https://i.ibb.co/WvgBWn7S/Chat-GPT-Image-26-de-jan-de-2026-16-09-14.png";
const familyImage =
  "https://i.ibb.co/jZPzB7dc/Chat-GPT-Image-20-de-mar-de-2026-11-51-00.png";

const beforeItems = [
  "O dia todo no celular consumindo conteúdos vazios.",
  "Pouco foco nos estudos ou em atividades produtivas.",
  "Mais isolamento no quarto e menos conversa com a família.",
  "Mente ansiosa, presa em dopamina rápida e sem direção.",
];

const afterItems = [
  "Criando projetos próprios e criativos com inteligência artificial.",
  "Orgulho de mostrar para a família o que está aprendendo.",
  "Mais raciocínio lógico, criatividade e iniciativa.",
  "Usando tecnologia como ferramenta, não como vício.",
];

const learningModules = [
  {
    step: "01",
    title: "Pequenos Criadores",
    image: "https://i.ibb.co/N6RJNysT/CAPA-02-removebg-preview.png",
    items: ["Criar vídeos incríveis com IA", "Criar o próprio livro infantil"],
  },
  {
    step: "02",
    title: "Pequenos Criadores Digitais",
    image: "https://i.ibb.co/kVjcm1Zx/CAPA01-removebg-preview.png",
    items: ["Criar os próprios quadrinhos (gibis)", "Criar imagens com qualidade"],
  },
  {
    step: "03",
    title: "Guia Prático",
    image: "https://i.ibb.co/zHLZ1dHr/capa3-removebg-preview.png",
    items: ["Criar letras de músicas + instrumental"],
  },
];

const bonuses = [
  {
    label: "BÔNUS 1",
    title: "Como criar um cartão de visita criativo",
    image: "https://i.ibb.co/chSbWddM/capa-bonus1-removebg-preview.png",
  },
  {
    label: "BÔNUS 2",
    title: "Criando um panfleto divertido",
    image: "https://i.ibb.co/4nQ6zL2q/panfleto-removebg-preview.png",
  },
  {
    label: "BÔNUS 3",
    title: "Criando frases que vendem no Facebook",
    image: "https://i.ibb.co/S70hpsBH/Design-sem-nome-removebg-preview.png",
  },
  {
    label: "BÔNUS 4",
    title: "Criando logomarcas simples",
    image: "https://i.ibb.co/wNPzNcBR/Design-sem-nome-1-removebg-preview.png",
  },
];

const includes = [
  "Aulas 100% gravadas para assistir no próprio ritmo.",
  "Linguagem simples para crianças a partir de 6 anos.",
  "Ferramentas que rodam direto no navegador.",
  "Acesso imediato e garantia total de 30 dias.",
];

const socialProofs = [
  {
    title: "Trabalho de aluno 1",
    parent: "Adriana, mãe da Flávia",
    image: "https://i.ibb.co/6RxMyn0S/Whats-App-Image-2026-02-26-at-16-21-13.jpg",
  },
  {
    title: "Trabalho de aluno 2",
    parent: "Mara, mãe do Yuri",
    image: "https://i.ibb.co/FLHZvkyB/Whats-App-Image-2026-02-26-at-16-21-12-1.jpg",
  },
  {
    title: "Trabalho de aluno 3",
    parent: "Fabricia, mãe do Bruno",
    image: "https://i.ibb.co/s9JKhxwy/Whats-App-Image-2026-02-26-at-16-21-12-2.jpg",
  },
  {
    title: "Trabalho de aluno 4",
    parent: "Luiz, pai do Rafael",
    image: "https://i.ibb.co/n88FnYCf/Whats-App-Image-2026-02-26-at-16-20-43.jpg",
  },
];

const faqs = [
  {
    question: "Qual a idade ideal para fazer o curso?",
    answer:
      "O curso foi desenhado com linguagem simples e didática para crianças a partir de 6 anos. Adolescentes também aproveitam o conteúdo.",
  },
  {
    question: "Precisa de um computador potente?",
    answer:
      "Não. As ferramentas de IA usadas nas aulas rodam direto no navegador. Se o computador ou tablet acessa a internet sem travar, já é suficiente.",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer:
      "As aulas são 100% gravadas. A criança pode assistir no próprio ritmo, pausar, voltar e revisar quando quiser.",
  },
  {
    question: "Os pais precisam participar de todas as aulas?",
    answer:
      "Não é obrigatório, porque a didática foi pensada para a criança entender. Ainda assim, a participação dos pais em algumas atividades fortalece o vínculo familiar.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 30 dias a partir da compra. Se achar que o conteúdo não agregou para sua família, basta acionar o suporte e solicitar a devolução.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M4 12h16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-4 w-4 shrink-0 text-[#00D97E]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

type CtaLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

function CtaLink({ children, href = checkoutUrl, variant = "primary", className = "" }: CtaLinkProps) {
  const external = href.startsWith("http");
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-black uppercase tracking-[0.08em] transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00D97E]/40";
  const variants = {
    primary:
      "cta-sheen bg-[#00D97E] text-[#001F3F] shadow-[0_20px_70px_rgba(0,217,126,0.3)] hover:-translate-y-1 hover:bg-[#1bef99]",
    secondary:
      "border border-white/35 text-white hover:-translate-y-1 hover:border-white hover:bg-white/10",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function CountdownBanner() {
  const [remainingSeconds, setRemainingSeconds] = useState(countdownDurationInSeconds);

  useEffect(() => {
    const startedAt = Date.now();

    const updateCountdown = () => {
      const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
      const cyclePosition = elapsedSeconds % countdownDurationInSeconds;
      setRemainingSeconds(countdownDurationInSeconds - cyclePosition);
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const timeParts = [
    { label: "dias", value: days },
    { label: "horas", value: hours },
    { label: "min", value: minutes },
    { label: "seg", value: seconds },
  ];

  return (
    <div className="sticky top-0 z-50 border-b-4 border-[#FACC15] bg-gradient-to-r from-[#8B0000] via-[#D60000] to-[#8B0000] px-4 py-4 text-white shadow-[0_18px_60px_rgba(139,0,0,0.38)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-7">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-white sm:text-lg">
          Oferta por apenas R$ 27 termina em
        </p>
        <div className="flex items-center justify-center gap-2 font-black text-white sm:gap-3" aria-live="polite">
          {timeParts.map((part, index) => (
            <span key={part.label} className="inline-flex items-center gap-2">
              <span className="rounded-xl bg-white px-3 py-2 text-3xl leading-none text-[#B00000] shadow-[0_10px_24px_rgba(0,0,0,0.2)] tabular-nums sm:px-4 sm:text-5xl">
                {String(part.value).padStart(2, "0")}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-white/90 sm:text-xs">
                {part.label}
              </span>
              {index < timeParts.length - 1 ? <span className="text-3xl text-[#FACC15] sm:text-5xl">:</span> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-950 selection:bg-[#FACC15] selection:text-[#001F3F]">
      <CountdownBanner />
      <section className="relative isolate min-h-screen overflow-hidden bg-[#001F3F] text-white">
        <div
          className="hero-zoom absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 13, 32, 0.98) 0%, rgba(0, 31, 63, 0.88) 43%, rgba(0, 31, 63, 0.28) 100%), url(${familyImage})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,217,126,0.18),transparent_30%),linear-gradient(180deg,transparent_0%,rgba(0,13,32,0.78)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-12">
          <div className="motion-rise max-w-4xl">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.34em] text-[#FACC15]">
              Curso online para pais e filhos
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
              <span className="block text-[#00D97E]">IA Criativa para Crianças</span>
              <span className="mt-5 block text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                transforme tempo de tela em criação.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl">
              Um método prático para ensinar seu filho a usar inteligência artificial com criatividade,
              segurança e propósito, sem virar refém do algoritmo.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CtaLink>Quero começar por R$ 27</CtaLink>
              <CtaLink href="#metodo" variant="secondary">Conhecer o método</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#050910] py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="motion-rise motion-delay-1">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#00D97E]">
              O problema não é a tecnologia
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-none tracking-[-0.05em] sm:text-6xl">
              O problema é deixar o algoritmo educar sozinho.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-2xl text-xl leading-9 text-slate-300">
              Proibir a tela costuma gerar briga. O caminho do curso é outro: colocar a criança no papel
              de autora. Ela aprende a perguntar melhor, criar projetos e mostrar resultados concretos
              para a família.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1E8]">
        <div className="grid min-h-[680px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#001F3F]/60">
                Momento em família
              </p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] text-[#001F3F] sm:text-6xl">
                Mais do que aulas, um motivo para sentar junto.
              </h2>
              <p className="mt-7 text-lg leading-8 text-slate-700">
                As atividades foram desenhadas para que você possa participar quando quiser. Imagine criar
                com seu filho um livro de histórias, uma música ou uma ideia visual em um fim de semana.
                A tecnologia vira ponte, não parede.
              </p>
            </div>
          </div>
          <div className="min-h-[420px] bg-cover bg-center lg:min-h-full" style={{ backgroundImage: `url(${familyImage})` }} />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#00A968]">
              Transformação em casa
            </p>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">
              Do consumo passivo para projetos que dão orgulho.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 border-y border-slate-200 py-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-black text-slate-400">Antes do curso</h3>
              <ul className="mt-8 divide-y divide-slate-200">
                {beforeItems.map((item) => (
                  <li key={item} className="py-5 text-lg leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#00A968]">Depois do curso</h3>
              <ul className="mt-8 divide-y divide-slate-200">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-4 py-5 text-lg font-semibold leading-7 text-slate-900">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#001F3F] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#FACC15]">
              O que vão aprender
            </p>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
              Projetos práticos para crianças criarem com IA.
            </h2>
            <p className="mt-7 text-lg leading-8 text-blue-100/80">
              O conteúdo é dividido em trilhas simples, com tarefas criativas que a criança consegue
              entender, construir e mostrar para a família.
            </p>
          </div>

          <div className="mt-16 border-t border-white/15">
            {learningModules.map((module) => (
              <div
                key={module.title}
                className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[90px_170px_0.75fr_1.15fr] md:items-center lg:grid-cols-[120px_210px_0.75fr_1.15fr]"
              >
                <span className="text-5xl font-black tracking-[-0.08em] text-white/20">{module.step}</span>
                <div className="learning-cover w-40 md:w-full">
                  <img
                    src={module.image}
                    alt={`Capa ${module.title}`}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-black leading-tight text-white">{module.title}</h3>
                <ul className="space-y-4">
                  {module.items.map((item) => (
                    <li key={item} className="flex gap-3 text-lg font-semibold leading-7 text-blue-50">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-y border-[#FACC15]/35 py-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#FACC15]">
                Super Bônus Exclusivos
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Garantindo sua vaga hoje, você também leva todo esse material complementar de presente.
              </h3>
              <p className="mt-5 text-lg leading-8 text-blue-100/75">
                Os bônus ajudam a acelerar os resultados com criações úteis, divertidas e fáceis de aplicar.
              </p>
            </div>
            <div className="divide-y divide-white/15">
              {bonuses.map((bonus) => (
                <div key={bonus.label} className="grid gap-5 py-5 sm:grid-cols-[104px_120px_1fr] sm:items-center">
                  <span className="text-sm font-black uppercase tracking-[0.22em] text-[#00D97E]">
                    {bonus.label}
                  </span>
                  <img
                    src={bonus.image}
                    alt={`Capa ${bonus.title}`}
                    className="bonus-cover h-28 w-28 object-contain sm:h-24 sm:w-24"
                    loading="lazy"
                  />
                  <p className="text-xl font-black leading-7 text-white">{bonus.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050910] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#00D97E]">
                Veja por dentro
              </p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
                Um exemplo real do método em vídeo.
              </h2>
              <p className="mt-7 text-lg leading-8 text-slate-300">
                Assista ao vídeo curto e veja como a proposta sai da teoria: a criança entende, cria e
                mostra resultado com clareza.
              </p>
            </div>

            <div className="video-frame relative mx-auto aspect-[9/16] w-full max-w-[390px] overflow-hidden bg-black shadow-[0_30px_120px_rgba(0,217,126,0.16)] lg:mr-0">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/RTxAuNtN2OM"
                title="Vídeo do curso IA Criativa para Crianças"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-24 border-t border-white/15 pt-14">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#FACC15]">
                Prova social
              </p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
                Trabalhos de alunos que já colocaram a IA para criar.
              </h2>
            </div>

            <div className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {socialProofs.map((proof) => (
                <figure key={proof.title} className="proof-media group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <img
                      src={proof.image}
                      alt={`${proof.title} - ${proof.parent}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-5 border-t border-white/15 pt-4">
                    <p className="text-lg font-black text-white">{proof.title}</p>
                    <p className="mt-1 text-sm font-semibold text-blue-100/70">{proof.parent}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#00A968]">
              Acesso imediato
            </p>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">
              Comece hoje por menos de 1 real por dia.
            </h2>
            <p className="mt-7 text-lg leading-8 text-slate-700">
              A oferta promocional do curso IA Criativa para Crianças libera o conteúdo completo,
              com pagamento seguro pela Hotmart e suporte por e-mail.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#001F3F] p-8 text-white shadow-[0_30px_90px_rgba(0,31,63,0.28)] sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-200">Oferta especial</p>
            <p className="mt-7 text-lg text-blue-100">
              De <span className="text-red-300 line-through">R$ 303,70</span>
            </p>
            <p className="mt-2 text-5xl font-black tracking-[-0.08em] text-[#FACC15] sm:text-6xl">R$ 27,00</p>
            <ul className="mt-8 space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-blue-50">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CtaLink className="mt-9 w-full">Quero garantir meu acesso</CtaLink>
            <p className="mt-5 text-center text-sm font-semibold text-blue-100/70">
              Valor promocional por tempo limitado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div className="relative min-h-[560px] overflow-hidden bg-[#001F3F]">
            <img
              src={professorImage}
              alt="Professor Junior Cristiano Alberti"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#00A968]">O professor</p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">
                Quem é Junior Cristiano Alberti?
              </h2>
              <p className="mt-7 text-xl font-semibold leading-8 text-slate-800">
                Pai, educador e profissional de tecnologia desde 2004.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Junior criou este método primeiro para o próprio filho. Ao perceber horas de consumo vazio,
                decidiu não proibir a tecnologia, mas ensinar a dominá-la. O resultado virou um caminho
                prático para outras famílias.
              </p>
              <blockquote className="draw-line mt-10 border-l-4 border-[#00D97E] pl-6 text-xl font-black leading-8 text-[#001F3F]">
                "A tecnologia não vai a lugar nenhum. A escolha que temos como pais é se nossos filhos
                serão escravos do algoritmo ou mestres da inteligência artificial."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050910] py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#FACC15]">Risco zero</p>
          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
            30 dias de garantia total.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Compre hoje, teste as aulas com seu filho e veja se faz sentido para a sua família. Se não
            notar valor no conteúdo, você pode solicitar 100% do dinheiro de volta dentro do prazo.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink>Quero acessar sem risco</CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <p className="text-center text-sm font-black uppercase tracking-[0.26em] text-[#00A968]">
            Perguntas frequentes
          </p>
          <h2 className="mt-5 text-center text-4xl font-black leading-none tracking-[-0.055em] text-slate-950 sm:text-6xl">
            Dúvidas antes de começar?
          </h2>
          <div className="mt-14 border-t border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-slate-200 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl font-black text-slate-950">
                  <span>{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-t from-[#001F3F] to-[#003366] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <h2 className="text-4xl font-black leading-none tracking-[-0.055em] sm:text-6xl">
            A decisão agora está nas suas mãos.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-blue-100">
            Você pode deixar a tela continuar no modo automático ou pode dar ao seu filho ferramentas para
            construir, criar e pensar melhor usando IA.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink>Quero tirar meu filho do modo zumbi</CtaLink>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-6 py-12 text-center text-sm text-slate-400 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
            <a className="transition hover:text-white" href="https://instagram.com/junioralberti" target="_blank" rel="noreferrer">
              @junioralberti
            </a>
            <a className="transition hover:text-white" href="mailto:cursoiacriativa2026@gmail.com">
              cursoiacriativa2026@gmail.com
            </a>
          </div>
          <p className="mt-8">Alberti Soluções Ltda</p>
          <p className="mt-2">Copyright {new Date().getFullYear()} - Todos os direitos reservados.</p>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-6 text-slate-500">
            Este site não faz parte do Facebook ou da Meta. Também não é endossado por essas empresas.
          </p>
        </div>
      </footer>
    </main>
  );
}
