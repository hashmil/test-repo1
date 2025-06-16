import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Portfolio
        </Link>
        <div className="flex gap-6">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
