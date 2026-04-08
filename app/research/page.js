'use client';

import Link from 'next/link';
import { researchAreas } from '@/data/research';

export default function ResearchPage() {
    return (
        <>
            <main className="max-w-screen-2xl mx-auto px-8 md:px-12 pt-40 pb-32">
                {/* Header */}
                <header className="mb-32">
                    <div className="max-w-4xl">
                        <span className="text-primary font-semibold tracking-wide text-sm uppercase mb-6 block">Research</span>
                        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
                            Active inquiry for a <br /> <span className="text-zinc-400">smarter conversation.</span>
                        </h1>
                        <p className="mt-10 text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                            Our laboratory operates at the intersection of natural language processing, multimodal understanding,
                            and human-centered AI. We explore how intelligent agents can proactively assist and understand humans.
                        </p>
                    </div>
                </header>

                {/* Research Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Main Feature Card */}
                    <section className="md:col-span-12 bg-surface-container rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100">
                        <div className="grid md:grid-cols-2">
                            <div className="p-12 md:p-16 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="bg-blue-50 text-blue-600 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">Core Focus</span>
                                    </div>
                                    <h2 className="font-sans text-3xl md:text-4xl font-bold text-zinc-900 mb-8 leading-tight">
                                        {researchAreas[0].title}
                                    </h2>
                                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-light">
                                        {researchAreas[0].description}
                                    </p>
                                </div>
                                <div className="mt-12 flex flex-wrap gap-2">
                                    {researchAreas[0].keywords.map((kw) => (
                                        <span key={kw} className="px-4 py-1.5 bg-white border border-zinc-200/50 rounded-full text-xs font-medium text-on-surface-variant">
                                            {kw}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[400px] md:h-full bg-zinc-100 overflow-hidden flex items-center justify-center">
                                <span className="text-[120px] opacity-30 group-hover:opacity-50 transition-opacity duration-700">{researchAreas[0].icon}</span>
                            </div>
                        </div>
                    </section>

                    {/* Stats Card */}
                    <section className="md:col-span-4 bg-zinc-900 text-white rounded-3xl p-12 flex flex-col justify-between shadow-2xl">
                        <div>
                            <h3 className="font-sans text-xl font-semibold mb-12">Research Impact</h3>
                            <div className="space-y-12">
                                <div>
                                    <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-3">Top Venues</div>
                                    <div className="text-5xl font-bold tracking-tight">15+</div>
                                </div>
                                <div>
                                    <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-3">Publications</div>
                                    <div className="text-5xl font-bold tracking-tight">50+</div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-sm font-medium">Active Research</span>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-mono">2025-26</span>
                        </div>
                    </section>

                    {/* Other research area cards */}
                    {researchAreas.slice(1).map((area) => (
                        <section key={area.id} className="md:col-span-4 bg-surface-low rounded-3xl p-10 flex flex-col justify-between group hover:bg-white border border-transparent hover:border-zinc-200 hover:shadow-xl transition-all duration-300">
                            <div>
                                <span className="text-4xl mb-6 block">{area.icon}</span>
                                <h3 className="font-sans text-2xl font-bold text-zinc-900 mb-6 leading-tight">{area.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">{area.shortDesc}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-zinc-200/50">
                                {area.keywords.slice(0, 3).map((kw) => (
                                    <span key={kw} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">{kw}</span>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Key Papers mini-cards */}
                    <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        {researchAreas.map((area) => (
                            <section key={area.id} className="bg-surface-low p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-zinc-100">
                                <h4 className="font-sans text-lg font-bold text-zinc-900 mb-2">{area.title}</h4>
                                <p className="text-zinc-500 text-xs leading-relaxed mb-6 font-light">{area.keyPapers[0]}</p>
                                <div className="flex items-center gap-2 text-[10px] font-semibold text-zinc-400">
                                    <span className="material-symbols-outlined text-sm">description</span>
                                    <span>Key Paper</span>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>

            {/* CTA */}
            <section className="bg-zinc-50 py-32 px-8 border-t border-zinc-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-sans text-4xl md:text-5xl text-zinc-900 font-bold mb-8 tracking-tight">Collaborate with us.</h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                        We welcome collaborations with researchers, industry partners, and institutions worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            Get in Touch
                        </Link>
                        <Link href="/publications" className="bg-white text-zinc-900 border border-zinc-200 px-10 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-colors">
                            Our Publications
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
