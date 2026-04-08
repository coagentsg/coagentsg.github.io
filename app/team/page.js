'use client';

import Link from 'next/link';
import { pi, currentMembers } from '@/data/team';

export default function TeamPage() {
    const getInitials = (name) => {
        const parts = name.split(' ');
        return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
    };

    return (
        <main className="max-w-screen-2xl mx-auto px-8 pt-32 pb-20">
            {/* Hero Title */}
            <div className="mb-24 text-center max-w-3xl mx-auto">
                <h1 className="text-6xl font-bold tracking-tight text-on-surface mb-8">Laboratory Personnel</h1>
                <p className="text-xl text-on-surface-variant font-normal leading-relaxed">
                    An interdisciplinary collective of researchers dedicated to advancing conversational AI
                    and multimodal understanding.
                </p>
            </div>

            {/* Principal Investigator */}
            <section className="mb-40">
                <div className="bg-surface-container rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center">
                            <span className="text-[100px] font-sans font-bold text-zinc-300">LL</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-12 lg:p-20">
                        <span className="text-primary font-semibold tracking-wide text-xs uppercase mb-4 block">Director</span>
                        <h2 className="text-5xl font-bold text-on-surface mb-8 tracking-tight">{pi.name}</h2>
                        <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">{pi.bio}</p>
                        <div className="flex flex-wrap gap-3 mb-12">
                            <span className="px-4 py-1.5 bg-white border border-zinc-200/30 rounded-full text-xs font-medium text-on-surface-variant">
                                Assistant Professor
                            </span>
                            <span className="px-4 py-1.5 bg-white border border-zinc-200/30 rounded-full text-xs font-medium text-on-surface-variant">
                                SMU SCIS
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={pi.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline decoration-2 underline-offset-4"
                            >
                                <span>Homepage</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                            <a
                                href={pi.scholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-zinc-500 font-semibold hover:text-zinc-800 transition-colors"
                            >
                                <span>Google Scholar</span>
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Members */}
            <section className="mb-40">
                <div className="flex items-baseline justify-between mb-16 border-b border-zinc-200/20 pb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface">Research Team</h2>
                    <span className="text-sm font-medium text-on-surface-variant">PhD Students</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentMembers.map((m) => (
                        <a
                            key={m.name}
                            href={m.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white p-4 rounded-3xl border border-zinc-100 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-100 flex items-center justify-center">
                                <span className="text-4xl font-bold text-zinc-300 group-hover:text-zinc-400 apple-transition">
                                    {getInitials(m.name)}
                                </span>
                            </div>
                            <div className="px-2 pb-2">
                                <h4 className="font-bold text-on-surface mb-1">{m.name}</h4>
                                <p className="text-xs text-on-surface-variant mb-4 leading-snug">{m.role}</p>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                    Homepage
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-32 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-on-surface mb-6 tracking-tight">Join the Team</h2>
                <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                    We are actively seeking brilliant minds to contribute to our ongoing research.
                    Explore PhD opportunities and scholarship programs.
                </p>
                <a
                    href="https://scis.smu.edu.sg/phd/online-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
                >
                    Open Positions
                </a>
            </section>
        </main>
    );
}
