import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200/20">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-2">CoAgent Lab</div>
                    <p className="text-xs font-light text-zinc-500">
                        © {new Date().getFullYear()} CoAgent Lab, Singapore Management University. All rights reserved.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-xs font-light tracking-wide uppercase">
                    <a
                        href="https://scis.smu.edu.sg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-blue-500 transition-colors"
                    >
                        SMU SCIS
                    </a>
                    <a
                        href="https://scholar.google.com.sg/citations?user=W2b08EUAAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-blue-500 transition-colors"
                    >
                        Google Scholar
                    </a>
                    <a
                        href="https://www.smu.edu.sg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 font-bold hover:text-blue-500 transition-colors"
                    >
                        University Portal
                    </a>
                </div>
            </div>
        </footer>
    );
}
