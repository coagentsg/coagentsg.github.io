'use client';

import { alumni } from '@/data/team';

export default function AlumniPage() {
    const getInitials = (name) => {
        const parts = name.split(' ');
        return parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
    };

    return (
        <main className="max-w-screen-2xl mx-auto px-8 pt-32 pb-20">
            {/* Header */}
            <div className="mb-24 text-center max-w-3xl mx-auto">
                <h1 className="text-6xl font-bold tracking-tight text-on-surface mb-8">Alumni</h1>
                <p className="text-xl text-on-surface-variant font-normal leading-relaxed">
                    Our alumni continue to make significant contributions across academia and industry.
                    We are proud of their achievements.
                </p>
            </div>

            {/* Alumni Grid */}
            <section className="py-12 px-12 -mx-4 bg-surface-low rounded-[40px] mb-20">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Former Members</h2>
                    <p className="text-on-surface-variant font-medium">Past researchers and students</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {alumni.map((m) => (
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
                                <p className="text-xs text-on-surface-variant mb-4 leading-snug">Alumni</p>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                    Homepage
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
