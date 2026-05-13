export default function StratumGeoLandingPage() {
  const MapIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 42 21 36l12 6 20-10v22L33 64 21 58 10 64V42Z" transform="translate(0 -10)" />
      <path d="M21 26v22M33 32v22" />
      <path d="M39 14c5 1 9 5 10 10M43 22h.01" />
    </svg>
  )

  const PickIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 18c13-8 26-7 36 4" />
      <path d="M36 22 16 50" />
      <path d="M31 29 43 41" />
    </svg>
  )

  const DropIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6S14 29 14 42a18 18 0 0 0 36 0C50 29 32 6 32 6Z" />
      <path d="M24 44c2 5 6 8 12 8" />
    </svg>
  )

  const LensIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="27" cy="27" r="17" />
      <path d="M40 40 56 56" />
      <path d="M19 27h16M27 19v16" />
    </svg>
  )

  const CoreIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 10h16M24 54h16" />
      <path d="M28 10v44M36 10v44" />
      <path d="M24 20h16M24 32h16M24 44h16" />
    </svg>
  )

  const CubeIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6 54 18v28L32 58 10 46V18L32 6Z" />
      <path d="M10 18 32 30 54 18" />
      <path d="M32 30v28" />
    </svg>
  )

  const ReportIcon = () => (
    <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h20l10 10v38H18V8Z" />
      <path d="M38 8v12h10" />
      <path d="M25 30h16M25 39h16M25 48h10" />
    </svg>
  )

  const services = [
    { icon: <CoreIcon />, title: "Logging Support", desc: "RC, diamond core, sampling and field logging support." },
    { icon: <DropIcon />, title: "Hydrogeology", desc: "Monitoring, groundwater sampling, wells and hydrochemistry." },
    { icon: <LensIcon />, title: "Field Interpretation", desc: "Mineralisation, alteration and structural observations." },
    { icon: <MapIcon />, title: "GIS & Mapping", desc: "Maps, DEMs, lineaments and spatial interpretation." },
    { icon: <CubeIcon />, title: "Conceptual Models", desc: "Simple, clear geological and hydrogeological models." },
    { icon: <ReportIcon />, title: "Technical Reports", desc: "Concise reports, reviews and project documentation." },
  ]

  const cards = [
    { image: "/images/rc-rig.jpg", title: "RC Drilling Support", desc: "Flexible site support for active drilling programs." },
    { image: "/images/pilbara-field.jpg", title: "Field Geology", desc: "Practical mapping and interpretation in exploration environments." },
    { image: "/images/diamond-core.jpg", title: "Core Logging", desc: "Clear logging, sampling and technical observation." },
  ]

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1F2933] font-sans selection:bg-[#0B1F3A] selection:text-white">
      <style>{`
        @keyframes slowDrift { 0% { transform: scale(1.05) translateY(0); } 50% { transform: scale(1.12) translateY(-10px); } 100% { transform: scale(1.05) translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp .85s ease both; }
        .delay-1 { animation-delay: .12s; }
        .delay-2 { animation-delay: .24s; }
        .delay-3 { animation-delay: .36s; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-[#F7F8FA]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-75 grayscale contrast-125"
          style={{ backgroundImage: "url('/images/dem-terrain.jpg')", animation: "slowDrift 36s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[#F7F8FA]/45 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8FA]/95 via-[#F7F8FA]/72 to-[#0B1F3A]/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-transparent to-[#F7F8FA]" />
        <div className="absolute left-0 top-0 h-px w-full bg-[#D9DEE5]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center text-[#0B1F3A]">
              <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M7 14 24 6l17 8-17 8L7 14Z" />
                <path d="M7 24 24 16l17 8" />
                <path d="M7 34 24 26l17 8" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-black uppercase tracking-[0.18em] text-[#1A1D21]">Stratum</div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#52616F]">Geological Services</div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-bold uppercase tracking-widest text-[#52616F] md:flex">
            <a href="#" className="border-b border-[#0B1F3A] pb-3 text-[#0B1F3A]">Home</a>
            <a href="#services" className="transition hover:text-[#0B1F3A]">Services</a>
            <a href="#about" className="transition hover:text-[#0B1F3A]">About</a>
            <a href="#contact" className="transition hover:text-[#0B1F3A]">Contact</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
          <div className="fade-up">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">
              Geological & Hydrogeological Consulting
            </p>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.98] tracking-[-0.055em] text-[#1A1D21] md:text-8xl">
              Stratum
              <span className="block">Geological</span>
              <span className="block">Services</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#52616F]">
              Practical, transparent geological support for exploration and mining projects across Western Australia.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a href="mailto:contact@stratumgeology.com" className="rounded-sm bg-[#0B1F3A] px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-[#173B66]">
                Request Consultation
              </a>
              <a href="#services" className="rounded-sm border border-[#B8C1CC] bg-white/75 px-8 py-5 text-sm font-black uppercase tracking-wider text-[#0B1F3A] transition hover:-translate-y-1 hover:border-[#0B1F3A] hover:bg-white">
                View Services
              </a>
            </div>
          </div>

          <div className="fade-up delay-2 rounded-sm border border-[#D9DEE5] bg-white/88 p-10 shadow-xl shadow-[#0B1F3A]/10 backdrop-blur-sm transition hover:border-[#0B1F3A]/40">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">Technical Consulting</p>
            <div className="mb-8 h-px w-28 bg-[#0B1F3A]/35" />

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1A1D21]">
              Clear interpretation. Practical field support. Better decisions.
            </h2>

            <div className="mt-10 grid grid-cols-2 border-t border-[#D9DEE5] text-[#0B1F3A]">
              <div className="border-b border-r border-[#D9DEE5] p-6 pl-0 transition hover:bg-[#F1F4F7]">
                <MapIcon />
                <div className="mt-4 text-2xl font-black uppercase text-[#1A1D21]">WA</div>
                <div className="mt-1 text-[#52616F]">Pilbara • Yilgarn</div>
              </div>
              <div className="border-b border-[#D9DEE5] p-6 transition hover:bg-[#F1F4F7]">
                <PickIcon />
                <div className="mt-4 text-2xl font-black uppercase text-[#1A1D21]">Gold</div>
                <div className="mt-1 text-[#52616F]">Exploration Support</div>
              </div>
              <div className="border-r border-[#D9DEE5] p-6 pl-0 transition hover:bg-[#F1F4F7]">
                <DropIcon />
                <div className="mt-4 text-2xl font-black uppercase text-[#1A1D21]">Hydro</div>
                <div className="mt-1 text-[#52616F]">Groundwater Systems</div>
              </div>
              <div className="p-6 transition hover:bg-[#F1F4F7]">
                <LensIcon />
                <div className="mt-4 text-2xl font-black uppercase text-[#1A1D21]">Field</div>
                <div className="mt-1 text-[#52616F]">Site-Based Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#EEF2F6] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 border-b border-[#D9DEE5] pb-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="fade-up">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">Services</p>
              <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-[#1A1D21] md:text-6xl">
                Simple, useful, field-ready services.
              </h2>
            </div>
            <p className="fade-up delay-1 max-w-2xl text-lg leading-9 text-[#52616F]">
              Practical geological and hydrogeological support for teams that need clear answers and reliable field execution.
            </p>
          </div>

          <div className="grid gap-5 pt-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className={`fade-up delay-${(index % 3) + 1} rounded-sm border border-[#D9DEE5] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#0B1F3A]/45 hover:shadow-xl hover:shadow-[#0B1F3A]/10`}>
                <div className="mb-6 text-[#0B1F3A]">{service.icon}</div>
                <h3 className="text-2xl font-black text-[#1A1D21]">{service.title}</h3>
                <p className="mt-4 leading-7 text-[#52616F]">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-8 border-t border-[#D9DEE5] pt-16 md:grid-cols-4">
            {["Practical", "Responsive", "Client Focused", "Field Ready"].map((item) => (
              <div key={item} className="border-l border-[#0B1F3A]/35 pl-5">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-[#0B1F3A]">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 border-b border-[#D9DEE5] pb-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="fade-up">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">About Stratum Geo</p>
              <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-[#1A1D21] md:text-6xl">
                Small team. Practical mindset.
              </h2>
            </div>

            <div className="fade-up delay-1 space-y-7 text-lg leading-9 text-[#52616F]">
              <p>
                Stratum Geology Services is a team of five geological professionals with experience in gold exploration, hydrogeology, GIS, project generation and field problem solving.
              </p>
              <p>
                We help mining and exploration teams improve project KPIs through practical, field-focused geological and hydrogeological support.
              </p>
              <p>
                Our goal is to increase productivity and effectiveness while keeping solutions cost-efficient and aligned with the operational realities of the mining industry. Safety and HSE are at the centre of everything we do.
              </p>
              <p>
                We work closely with clients to reduce uncertainty, solve practical and technical problems, and support better decisions in the field and in the office.
              </p>
            </div>
          </div>

          <div className="grid gap-8 pt-16 md:grid-cols-3">
            {cards.map((card, index) => (
              <div key={card.title} className={`fade-up delay-${index + 1} group`}>
                <div className="overflow-hidden rounded-sm border border-[#D9DEE5] bg-white shadow-sm">
                  <img src={card.image} alt={card.title} className="h-64 w-full object-cover grayscale contrast-105 transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <h3 className="mt-7 text-lg font-black uppercase tracking-wide text-[#1A1D21]">{card.title}</h3>
                <p className="mt-4 leading-7 text-[#52616F]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#EEF2F6] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">Contact</p>
            <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-[#1A1D21] md:text-6xl">
              Need site-based geological support?
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#52616F]">
              Available for FIFO and site-based support across Western Australia, including the Pilbara, Yilgarn and Kalgoorlie regions.
            </p>

            <div className="mt-14 grid gap-10 border-t border-[#D9DEE5] pt-12 md:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0B1F3A]">Contact</div>
                <div className="space-y-2 text-lg text-[#52616F]">
                  <div>Matias Spielberg / Geologist</div>
                  <div>+61 428 987 515</div>
                  <div>contact@stratumgeology.com</div>
                </div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0B1F3A]">Regions</div>
                <div className="text-lg text-[#52616F]">Pilbara • Yilgarn • Kalgoorlie</div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0B1F3A]">Availability</div>
                <div className="text-lg text-[#52616F]">FIFO & Site-Based Support</div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0B1F3A]">Support</div>
                <div className="text-lg text-[#52616F]">Logging • Sampling • Mapping • Wells</div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-2 rounded-sm border border-[#D9DEE5] bg-white p-10 shadow-sm transition hover:border-[#0B1F3A]/45 hover:shadow-xl hover:shadow-[#0B1F3A]/10">
            <p className="mb-8 text-sm font-black uppercase tracking-[0.22em] text-[#0B1F3A]">Send an Inquiry</p>
            <div className="grid gap-6">
              <input type="text" placeholder="Name" className="border border-[#D9DEE5] bg-white px-5 py-5 text-[#1A1D21] outline-none transition placeholder:text-slate-400 focus:border-[#0B1F3A]" />
              <input type="text" placeholder="Company" className="border border-[#D9DEE5] bg-white px-5 py-5 text-[#1A1D21] outline-none transition placeholder:text-slate-400 focus:border-[#0B1F3A]" />
              <input type="email" placeholder="Email" className="border border-[#D9DEE5] bg-white px-5 py-5 text-[#1A1D21] outline-none transition placeholder:text-slate-400 focus:border-[#0B1F3A]" />
              <input type="text" placeholder="Project / Inquiry" className="border border-[#D9DEE5] bg-white px-5 py-5 text-[#1A1D21] outline-none transition placeholder:text-slate-400 focus:border-[#0B1F3A]" />
              <textarea rows="6" placeholder="Tell us about your project" className="border border-[#D9DEE5] bg-white px-5 py-5 text-[#1A1D21] outline-none transition placeholder:text-slate-400 focus:border-[#0B1F3A]" />
              <button className="mt-4 rounded-sm bg-[#0B1F3A] px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-[#173B66]">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D9DEE5] bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-[#52616F] md:flex-row">
          <div className="font-black uppercase tracking-[0.18em] text-[#1A1D21]">STRATUM <span className="text-[#0B1F3A]">GEOLOGY</span></div>
          <div>© 2026 Stratum Geology Services. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
