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
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-slate-900 selection:text-white">
      <style>{`
        @keyframes slowDrift { 0% { transform: scale(1) translateY(0); } 50% { transform: scale(1.04) translateY(-8px); } 100% { transform: scale(1) translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp .85s ease both; }
        .delay-1 { animation-delay: .12s; }
        .delay-2 { animation-delay: .24s; }
        .delay-3 { animation-delay: .36s; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] grayscale contrast-125"
          style={{ backgroundImage: "url('/images/dem-terrain.jpg')", animation: "slowDrift 36s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#f8fafc]" />
        <div className="absolute left-0 top-0 h-px w-full bg-slate-200" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center text-slate-800">
              <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M7 14 24 6l17 8-17 8L7 14Z" />
                <path d="M7 24 24 16l17 8" />
                <path d="M7 34 24 26l17 8" />
              </svg>
            </div>
            <div>
              <div className="text-3xl font-black uppercase tracking-[0.18em]">Stratum</div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Geological Services</div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-500 md:flex">
            <a href="#" className="border-b border-slate-900 pb-3 text-slate-950">Home</a>
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
          <div className="fade-up">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
              Geological & Hydrogeological Consulting
            </p>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.98] tracking-[-0.055em] md:text-8xl">
              Stratum
              <span className="block">Geological</span>
              <span className="block">Services</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Practical, transparent geological support for exploration and mining projects across Western Australia.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a href="mailto:contact@stratumgeo.com" className="rounded-sm bg-slate-950 px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-slate-700">
                Request Consultation
              </a>
              <a href="#services" className="rounded-sm border border-slate-300 bg-white/70 px-8 py-5 text-sm font-black uppercase tracking-wider text-slate-800 transition hover:-translate-y-1 hover:border-slate-700">
                View Services
              </a>
            </div>
          </div>

          <div className="fade-up delay-2 rounded-sm border border-slate-200 bg-white/85 p-10 shadow-xl shadow-slate-200/70 backdrop-blur-sm transition hover:border-slate-400">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500">Technical Consulting</p>
            <div className="mb-8 h-px w-28 bg-slate-300" />

            <h2 className="text-4xl font-black leading-tight tracking-tight">
              Clear interpretation. Practical field support. Better decisions.
            </h2>

            <div className="mt-10 grid grid-cols-2 border-t border-slate-200 text-slate-600">
              <div className="border-b border-r border-slate-200 p-6 pl-0 transition hover:bg-slate-50">
                <MapIcon />
                <div className="mt-4 text-2xl font-black uppercase text-slate-950">WA</div>
                <div className="mt-1 text-slate-500">Pilbara • Yilgarn</div>
              </div>
              <div className="border-b border-slate-200 p-6 transition hover:bg-slate-50">
                <PickIcon />
                <div className="mt-4 text-2xl font-black uppercase text-slate-950">Gold</div>
                <div className="mt-1 text-slate-500">Exploration Support</div>
              </div>
              <div className="border-r border-slate-200 p-6 pl-0 transition hover:bg-slate-50">
                <DropIcon />
                <div className="mt-4 text-2xl font-black uppercase text-slate-950">Hydro</div>
                <div className="mt-1 text-slate-500">Groundwater Systems</div>
              </div>
              <div className="p-6 transition hover:bg-slate-50">
                <LensIcon />
                <div className="mt-4 text-2xl font-black uppercase text-slate-950">Field</div>
                <div className="mt-1 text-slate-500">Site-Based Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8fafc] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 border-b border-slate-200 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="fade-up">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-slate-500">Services</p>
              <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
                Simple, useful, field-ready services.
              </h2>
            </div>
            <p className="fade-up delay-1 max-w-2xl text-lg leading-9 text-slate-600">
              Practical geological and hydrogeological support for teams that need clear answers and reliable field execution.
            </p>
          </div>

          <div className="grid gap-5 pt-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className={`fade-up delay-${(index % 3) + 1} rounded-sm border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-200/80`}>
                <div className="mb-6 text-slate-600">{service.icon}</div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-8 border-t border-slate-200 pt-16 md:grid-cols-4">
            {["Practical", "Responsive", "Client Focused", "Field Ready"].map((item) => (
              <div key={item} className="border-l border-slate-300 pl-5">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 border-b border-slate-200 pb-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="fade-up">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-slate-500">About Stratum Geo</p>
              <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
                Small team. Practical mindset.
              </h2>
            </div>

            <div className="fade-up delay-1 space-y-7 text-lg leading-9 text-slate-600">
              <p>
                Stratum Geology Services is a team of five geological professionals with experience in gold exploration, hydrogeology, GIS, project generation and field problem solving.
              </p>
              <p>
                We help mining and exploration teams improve project KPIs through practical, field-focused geological and hydrogeological support.
              </p>
              <p>
                Our goal is to increase productivity and effectiveness while keeping solutions cost-efficient and aligned with the operational realities of the mining industry. Safety and HSE are the centre of everything we do.
                We understand that strong technical outcomes must go hand in hand with safe field execution, clear communication and responsible decision-making.
                We work closely with clients to reduce uncertainty, solve practical and theoretical problems and support better decisions in the field and in the
              </p>
            </div>
          </div>

          <div className="grid gap-8 pt-16 md:grid-cols-3">
            {cards.map((card, index) => (
              <div key={card.title} className={`fade-up delay-${index + 1} group`}>
                <div className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
                  <img src={card.image} alt={card.title} className="h-64 w-full object-cover grayscale contrast-105 transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <h3 className="mt-7 text-lg font-black uppercase tracking-wide">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f8fafc] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-slate-500">Contact</p>
            <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
              Need site-based geological support?
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              Available for FIFO and site-based support across Western Australia, including the Pilbara, Yilgarn and Kalgoorlie regions.
            </p>

            <div className="mt-14 grid gap-10 border-t border-slate-200 pt-12 md:grid-cols-2">
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700">Contact</div>
                <div className="space-y-2 text-lg text-slate-700">
                  <div>Matias Spielberg / Geologist</div>
                  <div>+61 428 987 515</div>
                  <div>contact@stratumgeology.com</div>
                </div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700">Regions</div>
                <div className="text-lg text-slate-700">Pilbara • Yilgarn • Kalgoorlie</div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700">Availability</div>
                <div className="text-lg text-slate-700">FIFO & Site-Based Support</div>
              </div>
              <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700">Support</div>
                <div className="text-lg text-slate-700">Logging • Sampling • Mapping • Wells</div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-2 rounded-sm border border-slate-200 bg-white p-10 shadow-sm transition hover:border-slate-400 hover:shadow-xl hover:shadow-slate-200/80">
            <p className="mb-8 text-sm font-black uppercase tracking-[0.22em] text-slate-500">Send an Inquiry</p>
            <div className="grid gap-6">
              <input type="text" placeholder="Name" className="border border-slate-200 bg-white px-5 py-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500" />
              <input type="text" placeholder="Company" className="border border-slate-200 bg-white px-5 py-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500" />
              <input type="email" placeholder="Email" className="border border-slate-200 bg-white px-5 py-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500" />
              <input type="text" placeholder="Project / Inquiry" className="border border-slate-200 bg-white px-5 py-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500" />
              <textarea rows="6" placeholder="Tell us about your project" className="border border-slate-200 bg-white px-5 py-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500" />
              <button className="mt-4 rounded-sm bg-slate-950 px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-slate-700">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <div className="font-black uppercase tracking-[0.18em] text-slate-950">STRATUM <span className="text-slate-500">GEOLOGY</span></div>
          <div>© 2026 Stratum Geology Services. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

