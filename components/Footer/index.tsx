import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center mt-16 py-8 border-t border-slate-200">
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-black transition-colors duration-200 flex items-center justify-center gap-2 underline"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" /> This is daily trial weekly coding
        repository
      </Link>
    </footer>
  );
}
