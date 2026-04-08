import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'CoAgent Lab — Conversational AI Research at SMU',
  description: 'CoAgent Lab is a Conversational AI research group at Singapore Management University (SMU), led by Prof. Lizi Liao. We focus on proactive conversational AI, multimodal search & recommendation, and interdisciplinary AI applications.',
  keywords: ['Conversational AI', 'NLP', 'Dialogue Systems', 'SMU', 'Lizi Liao', 'CoAgent Lab'],
  openGraph: {
    title: 'CoAgent Lab — Conversational AI Research at SMU',
    description: 'Proactive Conversational AI research at Singapore Management University',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-on-surface font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
