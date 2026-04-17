'use client';

import { useMemo, useState } from 'react';
import { publications } from '@/data/publications';

export default function PublicationsPage() {
    const [selectedYear, setSelectedYear] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const years = useMemo(() => {
        return [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
    }, []);

    const filtered = useMemo(() => {
        let result = publications;
        if (selectedYear !== 'all') {
            result = result.filter((p) => p.year === parseInt(selectedYear));
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.authors.toLowerCase().includes(q) ||
                    p.venue.toLowerCase().includes(q)
            );
        }
        return result;
    }, [selectedYear, searchQuery]);

    const filterKey = `${selectedYear}:${searchQuery.trim().toLowerCase()}`;

    const grouped = useMemo(() => {
        const map = {};
        filtered.forEach((p) => {
            if (!map[p.year]) map[p.year] = [];
            map[p.year].push(p);
        });
        return Object.entries(map).sort(([a], [b]) => b - a);
    }, [filtered]);

    return (
        <main className="max-w-screen-xl mx-auto px-8 pt-32 pb-20">
            {/* Header */}
            <header className="mb-24">
                <div className="max-w-3xl">
                    <div className="text-primary font-semibold text-sm tracking-tight mb-3">Publications</div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
                        Archive &amp; Research
                    </h1>
                    <p className="text-xl text-on-surface-variant leading-relaxed font-normal max-w-2xl">
                        A definitive index of our contributions to conversational AI, published at top-tier venues
                        including ICLR, NeurIPS, AAAI, ACL, EMNLP, SIGIR, and ACM Multimedia.
                    </p>
                </div>

                {/* Search + Filters */}
                <div className="mt-12 space-y-4">
                    <div className="max-w-md relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">search</span>
                        <input
                            type="text"
                            placeholder="Search papers, authors, venues..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface-low border border-zinc-200/50 rounded-xl px-12 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm text-on-surface"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200/50 pb-6">
                        <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest mr-4">Filter</span>
                        <button
                            onClick={() => setSelectedYear('all')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedYear === 'all' ? 'bg-zinc-900 text-white' : 'bg-surface-low text-zinc-600 hover:bg-zinc-200'
                                }`}
                        >
                            All
                        </button>
                        {years.map((y) => (
                            <button
                                key={y}
                                onClick={() => setSelectedYear(String(y))}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedYear === String(y) ? 'bg-zinc-900 text-white' : 'bg-surface-low text-zinc-600 hover:bg-zinc-200'
                                    }`}
                            >
                                {y}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-on-surface-variant">{filtered.length} publication{filtered.length !== 1 ? 's' : ''}</p>
                </div>
            </header>

            {/* Publication List */}
            <section className="space-y-24">
                {grouped.map(([year, papers], groupIndex) => (
                    <div
                        key={`${filterKey}:${year}`}
                        className="animate-in"
                        style={{ '--animate-delay': `${groupIndex * 70}ms` }}
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">{year}</h2>
                            <div className="h-[1px] flex-1 bg-zinc-200/50" />
                        </div>
                        <div className="space-y-8">
                            {papers.map((p, i) => (
                                <article
                                    key={`${filterKey}:${year}:${i}`}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-8 border-b border-zinc-200/30 animate-in"
                                    style={{ '--animate-delay': `${Math.min(i * 35, 280)}ms` }}
                                >
                                    <div className="md:col-span-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-600">
                                            {p.venue}
                                        </span>
                                    </div>
                                    <div className="md:col-span-10 flex flex-col">
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2 leading-tight"
                                        >
                                            {p.title}
                                        </a>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{p.authors}</p>
                                        <div className="flex items-center gap-4 mt-3">
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-blue-600 font-semibold text-xs hover:underline underline-offset-4"
                                            >
                                                <span className="material-symbols-outlined text-sm">description</span>
                                                Paper
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div key={`empty:${filterKey}`} className="text-center py-20 text-on-surface-variant text-lg animate-in">
                        No publications found matching your criteria.
                    </div>
                )}
            </section>
        </main>
    );
}
