'use client';

import Link from 'next/link';
import { researchAreas } from '@/data/research';
import { news } from '@/data/news';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="AI Lab Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black/60 to-black opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="font-sans text-6xl md:text-8xl text-white font-bold leading-[1.05] tracking-tight mb-8">
              Intelligence.<br />Dialogue.
            </h1>
            <p className="text-zinc-300 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl">
              CoAgent Lab advances the frontiers of conversational AI — from proactive dialogue systems
              to multimodal understanding and real-world applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90 active:scale-95"
              >
                Our Research
              </a>
              <Link
                href="/publications"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/20 active:scale-95"
              >
                Publications
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Research Updates / News */}
      <section className="bg-surface-low py-20 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="font-sans text-3xl font-bold tracking-tight">Research Updates</h2>
            <Link href="/publications" className="text-primary font-medium hover:underline">View All Publications</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured news */}
            <div className="md:col-span-2 bg-white rounded-2xl p-10 flex flex-col justify-between shadow-sm border border-zinc-200/50">
              <div>
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest block mb-4">
                  {news[0]?.date}
                </span>
                <h3 className="font-sans text-3xl font-bold mb-4 text-on-surface tracking-tight">
                  {news[0]?.text}
                </h3>
              </div>
              <div className="mt-12 flex items-center text-primary font-semibold group cursor-pointer">
                {news[0]?.link && (
                  <a href={news[0].link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>Learn More</span>
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </a>
                )}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-zinc-900 rounded-2xl p-10 flex flex-col justify-between text-white">
              <h3 className="font-sans text-2xl font-semibold mb-8 tracking-tight">
                {news[1]?.text}
              </h3>
              <div className="pt-8 border-t border-white/10">
                <p className="text-zinc-400 text-sm font-medium tracking-wide uppercase">{news[1]?.date}</p>
              </div>
            </div>

            {/* Small news items */}
            {news.slice(2, 4).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 shadow-sm border border-zinc-200/50 hover:bg-zinc-50 transition-colors group cursor-pointer">
                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-4">Update</span>
                <h3 className="font-sans text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {item.text}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">{item.date}</p>
                {item.link && <span className="material-symbols-outlined text-zinc-400">open_in_new</span>}
              </div>
            ))}

            {/* Stats */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-zinc-200/50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-sans font-bold text-zinc-900 mb-1 tracking-tighter">50+</p>
                <p className="text-[10px] tracking-[0.2em] text-on-surface-variant uppercase font-bold">Publications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="font-sans text-2xl font-bold tracking-tight">Latest News</h2>
          </div>
          <div className="relative">
            <div className="max-h-[400px] overflow-y-auto pr-4 divide-y divide-zinc-100" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d4d4d8 transparent' }}>
              {news.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 py-4 group"
                >
                  <span className="text-xs font-mono text-on-surface-variant w-24 shrink-0">
                    {item.date}
                  </span>
                  <div className="flex-1 flex items-center gap-2">
                    {item.isNew && (
                      <span className="shrink-0 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                        New
                      </span>
                    )}
                    <p className="text-sm text-on-surface group-hover:text-primary transition-colors">
                      {item.text}
                    </p>
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-zinc-300 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section id="research" />
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Building intelligent agents through rigorous research.
            </h2>
          </div>
          <div className="space-y-12">
            {researchAreas.map((area, i) => (
              <div key={area.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                {i % 2 === 1 && (
                  <div className="order-2 lg:order-1">
                    <span className="text-zinc-400 font-bold text-xs tracking-widest uppercase mb-4 block">
                      Research Area {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-sans text-3xl font-bold mb-6 tracking-tight">{area.title}</h3>
                    <p className="text-on-surface-variant text-xl leading-relaxed mb-8">{area.shortDesc}</p>
                    <Link href="/publications" className="flex items-center gap-3 text-primary font-semibold group">
                      <span>Explore</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  </div>
                )}
                <div className={`overflow-hidden rounded-2xl bg-zinc-100 ${i % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                  <div className="w-full aspect-[2/1] bg-white flex items-center justify-center relative group">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                {i % 2 === 0 && (
                  <div>
                    <span className="text-zinc-400 font-bold text-xs tracking-widest uppercase mb-4 block">
                      Research Area {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-sans text-3xl font-bold mb-6 tracking-tight">{area.title}</h3>
                    <p className="text-on-surface-variant text-xl leading-relaxed mb-8">{area.shortDesc}</p>
                    <Link href="/publications" className="flex items-center gap-3 text-primary font-semibold group">
                      <span>Explore</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-zinc-50">
        <div className="max-w-screen-md mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-10 text-primary">
            <span className="material-symbols-outlined text-3xl">science</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join CoAgent Lab.</h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-6">
            We are actively seeking motivated PhD students, research assistants, and visiting scholars to
            expand the frontiers of conversational AI.
          </p>
          <p className="text-red-600 font-medium text-base leading-relaxed mb-12">
            We are recruiting 0–2 new PhD student(s) every intake batch (apply to the PhD program and list Prof. Liao as a potential advisor).
            Our group also has multiple positions for summer interns and visiting research students.
            Please feel free to email with your CV if you are interested.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://scis.smu.edu.sg/phd/online-application"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-10 py-5 rounded-full font-semibold transition-all hover:bg-zinc-800 active:scale-95"
            >
              Apply for PhD
            </a>
            <Link
              href="/contact"
              className="bg-white border border-zinc-200 text-zinc-900 px-10 py-5 rounded-full font-semibold transition-all hover:bg-zinc-50 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
