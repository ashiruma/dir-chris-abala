import Link from 'next/link';

export function PortfolioHeader() {
  return (
    <header className="bg-background border-b border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-green-600 via-yellow-400 to-red-600 rounded-full flex items-center justify-center text-6xl font-bold text-white mb-6 shadow-2xl">
          CA
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-3 text-foreground">Chrispine Abala</h1>
        <p className="text-2xl text-muted-foreground">Visual Storyteller</p>
        
        <div className="flex justify-center gap-4 mt-8">
          <Link href="#work" className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition">
            View Work
          </Link>
          <Link href="#contact" className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}