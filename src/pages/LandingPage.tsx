import { useState } from "react";

const NAV_ITEMS = ["Início", "Peças", "Acessórios", "Serviços", "Sobre", "Contato"];

const NAV_ANCHORS: Record<string, string> = {
  "Início": "início",
  "Peças": "categorias",
  "Acessórios": "categorias",
  "Serviços": "categorias",
  "Sobre": "sobre",
  "Contato": "contato",
};

const WHATSAPP_URL = "https://wa.me/5519991910436";

const FEATURES = [
  {
    icon: (
      <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
    title: "ALTO DESEMPENHO",
    desc: "Peças de qualidade para máxima performance da sua moto.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "QUALIDADE GARANTIDA",
    desc: "Produtos selecionados e testados pelas melhores marcas.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "ATENDIMENTO RÁPIDO",
    desc: "Suporte ágil e eficiente para você não ficar parado.",
  },
];

const CATEGORIES = [
  {
    title: "PEÇAS",
    image: "/pecas-moto.png",
    contain: true,
  },
  {
    title: "ACESSÓRIOS",
    image: "/acessorios-moto.png",
    contain: true,
  },
  {
    title: "SERVIÇOS",
    image: "/servicos-moto.png",
    contain: false,
    extraZoom: true,
  },
];

const BRANDS = ["YAMAHA", "HONDA", "Kawasaki", "SUZUKI", "BMW Motorrad", "MOTUL", "NGK", "PRO TORK"];

const FAQS = [
  { q: "Quais tipos de peças vocês vendem?", a: "Trabalhamos com peças originais e paralelas para as principais marcas de motocicletas do mercado, incluindo motor, freios, suspensão, elétrica e muito mais." },
  { q: "Vocês oferecem garantia nos produtos?", a: "Sim! Todos os nossos produtos possuem garantia do fabricante. Peças originais seguem a política da marca e peças paralelas têm garantia de 90 dias." },
  { q: "Como posso fazer um pedido?", a: "Você pode fazer seu pedido diretamente pelo nosso site, por WhatsApp ou visitando nossa loja. Nossa equipe está pronta para te ajudar!" },
  { q: "Onde fica a loja física?", a: "Estamos na Rua Rio Grande do Sul, 154 — Vila Santana, Campinas/SP. Venha nos visitar!" },
];

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.102 1.523 5.824L.057 24l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.214-3.727.978.994-3.636-.235-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">

      {/* NAVBAR — apenas o símbolo (bandeira) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/98 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <img
            src="/pakuka-symbol.png"
            alt="Pakuka Motos"
            className="h-12 w-12 object-contain"
            style={{ mixBlendMode: "screen", filter: "brightness(1.4) contrast(0.9)" }}
          />
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href={`#${NAV_ANCHORS[item]}`}
                className={`text-sm font-semibold tracking-wider transition-colors hover:text-red-500 ${i === 0 ? "text-red-500" : "text-gray-200"}`}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${NAV_ANCHORS[item]}`} className="text-sm font-semibold text-gray-200 hover:text-red-500 transition-colors" onClick={() => setMenuOpen(false)}>
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="início" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-6 pb-20">
          <div className="max-w-lg">
            {/* Logo grande próximo ao topo */}
            <div className="mb-6 inline-block">
              <img
                src="/pakuka-logo-white.png"
                alt="Pakuka Motos"
                className="h-36 md:h-44 object-contain drop-shadow-2xl"
                style={{ filter: "brightness(1.2) contrast(1.05) drop-shadow(0 4px 12px rgba(0,0,0,0.95))" }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 uppercase tracking-tight drop-shadow-lg">
              <span className="text-white block">PEÇAS E</span>
              <span className="text-red-500 block">ACESSÓRIOS</span>
              <span className="text-white block">PARA MOTOS</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed drop-shadow">
              As melhores peças e acessórios para a sua motocicleta.<br className="hidden md:block" />
              Qualidade garantida e atendimento especializado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider transition-colors rounded"
              >
                <WhatsAppIcon />
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DESTAQUE */}
      <section className="bg-red-700 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-4 flex-shrink-0">
            <img
              src="/pecas-moto.png"
              alt="Peças de moto"
              className="w-24 h-24 object-cover rounded shadow-lg"
            />
            <img
              src="/acessorios-moto.png"
              alt="Acessórios de moto"
              className="w-24 h-24 object-cover rounded shadow-lg hidden sm:block"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight">
              A MELHOR SELEÇÃO DE<br />PEÇAS PARA SUA MOTO
            </h2>
            <p className="text-red-200 mt-2 font-medium">Encontre tudo o que você precisa em um só lugar</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-red-500 font-bold text-sm tracking-widest mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="py-16 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black uppercase text-center mb-10">
            NOSSAS <span className="text-red-500">CATEGORIAS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <div className={`aspect-[4/3] overflow-hidden flex items-center justify-center ${cat.contain ? "bg-[#1a1a1a]" : "bg-gray-800"}`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className={`w-full h-full transition-transform duration-500 ${cat.extraZoom ? "scale-125 group-hover:scale-150" : "group-hover:scale-105"} ${cat.contain ? "object-cover brightness-95" : "object-cover brightness-75 group-hover:brightness-90"}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-black text-xl mb-3">{cat.title}</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-colors rounded"
                  >
                    CONFIRA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section className="py-20 bg-[#0d0000] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0000] via-transparent to-[#0d0000]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">Oferta Especial</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
            APROVEITE NOSSAS <span className="text-white">PROMOÇÕES</span>
          </h2>
          <div className="mb-8">
            <span className="text-6xl md:text-8xl font-black text-red-500">20% OFF</span>
            <p className="text-white text-xl md:text-2xl font-bold mt-2">EM PEÇAS SELECIONADAS</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest transition-colors rounded text-lg"
          >
            <WhatsAppIcon />
            CONSULTE-NOS
          </a>
        </div>
      </section>

      {/* SOBRE — fundo com moto, sem foto ou ícone sobreposto */}
      <section id="sobre" className="relative py-16 overflow-hidden">
        {/* Moto como plano de fundo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black uppercase mb-2">
              SOBRE A <span className="text-red-500">PAKUKA</span>
            </h2>

            <p className="text-red-400 font-semibold italic text-lg mb-5">
              "Não é sobre motos. É sobre pessoas."
            </p>

            <p className="text-gray-200 leading-relaxed mb-4">
              Com mais de <strong className="text-white">20 anos de experiência</strong>, a Pakuka é referência em peças, acessórios e serviços para motocicletas em Campinas e região. Nossa jornada foi construída na base da confiança e do relacionamento humano.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Nossa equipe é formada por profissionais devidamente treinados, capacitados e focados em trazer a melhor experiência aos clientes. Acreditamos que por trás de cada moto existe uma pessoa com sonhos, metas e histórias — e é essa pessoa que nos move todos os dias.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                    </svg>
                  ),
                  title: "20+ anos",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v13h14V7M9 7V5h6v2" />
                    </svg>
                  ),
                  title: "Variedade",
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                    </svg>
                  ),
                  title: "Equipe treinada",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 100-6 3 3 0 000 6zM9 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 3-5 7-5s7 2 7 5M15 15c4 0 7 2 7 5"
                      />
                    </svg>
                  ),
                  title: "Foco nas pessoas",
                }
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                  <div className="mb-1">{item.icon}</div>
                  <span className="text-xs text-gray-300 font-medium">{item.title}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-12 bg-[#111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black uppercase text-center mb-8">
            MARCAS EM <span className="text-red-500">DESTAQUE</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-gray-500 hover:text-white font-black text-lg tracking-widest transition-colors cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CONTATO */}
      <section id="contato" className="py-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-black uppercase mb-8">
                PERGUNTAS <span className="text-red-500">FREQUENTES</span>
              </h2>
              <div className="space-y-2">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-200">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-red-500 flex-shrink-0 ml-2 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTATO FORM */}
            <div>
              <h2 className="text-3xl font-black uppercase mb-8">
                ENTRE EM <span className="text-red-500">CONTATO</span>
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Meu nome é ${form.name || "[nome]"}. ${form.message || ""}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest transition-colors rounded text-sm"
                >
                  <WhatsAppIcon />
                  ENVIAR PELO WHATSAPP
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
            <div>
              <img
                src="/pakuka-logo-white.png"
                alt="Pakuka Motos"
                className="h-10 object-contain mb-3"
                style={{ filter: "brightness(1.15) contrast(1.1)" }}
              />
              <p className="text-gray-500 text-sm">Oficina · Peças & Acessórios</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Endereço</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rua Rio Grande do Sul, 154<br />
                Vila Santana — Campinas/SP
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">Fale Conosco</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
              >
                <WhatsAppIcon />
                (19) 99191-0436
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs text-center">
              © {new Date().getFullYear()} Pakuka Motos. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
