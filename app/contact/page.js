import Link from 'next/link';

export default function ContactPage() {
    return (
        <main className="max-w-screen-xl mx-auto px-8 pt-32 pb-20">
            {/* Header */}
            <div className="mb-24 text-center max-w-3xl mx-auto">
                <h1 className="text-6xl font-bold tracking-tight text-on-surface mb-8">Contact</h1>
                <p className="text-xl text-on-surface-variant font-normal leading-relaxed">
                    Interested in our research? Want to join the lab or collaborate?
                    We&apos;d love to hear from you.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32">
                <div className="bg-surface-low rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-zinc-200">
                    <span className="material-symbols-outlined text-primary text-3xl mb-6 block">location_on</span>
                    <h3 className="text-xl font-bold text-on-surface mb-4 tracking-tight">Location</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                        School of Computing and Information Systems<br />
                        Singapore Management University<br />
                        80 Stamford Road, Singapore 178902
                    </p>
                </div>

                <div className="bg-surface-low rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-zinc-200">
                    <span className="material-symbols-outlined text-primary text-3xl mb-6 block">mail</span>
                    <h3 className="text-xl font-bold text-on-surface mb-4 tracking-tight">Email</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                        For general inquiries about the lab, please reach out to Prof. Lizi Liao.
                    </p>
                    <a
                        href="https://liziliao.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-4"
                    >
                        Prof. Liao&apos;s Homepage
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>

                <div className="bg-surface-low rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-zinc-200">
                    <span className="material-symbols-outlined text-primary text-3xl mb-6 block">school</span>
                    <h3 className="text-xl font-bold text-on-surface mb-4 tracking-tight">Join Us</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                        We are actively seeking motivated PhD students, research assistants, and visiting scholars.
                    </p>
                    <a
                        href="https://scis.smu.edu.sg/phd/online-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity inline-block"
                    >
                        Apply for PhD
                    </a>
                </div>

                <div className="bg-surface-low rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-zinc-200">
                    <span className="material-symbols-outlined text-primary text-3xl mb-6 block">link</span>
                    <h3 className="text-xl font-bold text-on-surface mb-4 tracking-tight">Links</h3>
                    <div className="flex flex-col gap-3">
                        <a href="https://scholar.google.com.sg/citations?user=W2b08EUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline underline-offset-4 font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            Google Scholar
                        </a>
                        <a href="https://scis.smu.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline underline-offset-4 font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            SMU SCIS
                        </a>
                        <a href="https://www.smu.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline underline-offset-4 font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            Singapore Management University
                        </a>
                    </div>
                </div>
            </div>

            {/* Lab Reports CTA */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-20 border-t border-zinc-200/50 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-3xl font-bold text-on-surface mb-6">Visit Us</h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        We welcome visitors and potential collaborators. Please reach out to arrange a meeting.
                    </p>
                    <div className="flex items-center gap-3 text-sm font-semibold text-on-surface">
                        <span className="material-symbols-outlined text-blue-600">location_on</span>
                        80 Stamford Road, Singapore 178902
                    </div>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200/30">
                    <h3 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Quick Links</h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/team" className="text-sm text-zinc-700 hover:text-primary transition-colors font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">groups</span>
                            Meet the Team
                        </Link>
                        <Link href="/publications" className="text-sm text-zinc-700 hover:text-primary transition-colors font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">library_books</span>
                            Our Publications
                        </Link>
                        <Link href="/research" className="text-sm text-zinc-700 hover:text-primary transition-colors font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">science</span>
                            Research Areas
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
