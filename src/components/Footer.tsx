import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 pt-16 border-t border-slate-800/50">
      <p className="text-sm text-slate-500 mb-4">
        Heavily inspired by{' '}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-slate-400 hover:text-slate-200 transition-colors duration-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
  &apos;s incredible design.
      </p>
      <p className="text-sm text-slate-500">
        Want to collaborate on a project?{' '}
        <Link href="/" className="font-medium text-slate-300 hover:text-white transition-colors duration-300">
          Get in touch
        </Link>
      </p>
    </footer>
  );
}
