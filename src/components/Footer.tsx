import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 pt-16 border-t" style={{borderColor:'color-mix(in srgb, var(--color-surface-2) 35%, transparent)'}}>
      <p className="text-sm text-[var(--color-text)] opacity-70 mb-4">
        Heavily inspired by{' '}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-[var(--color-text)] opacity-90 hover:opacity-100 transition-colors duration-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
  &apos;s incredible design.
      </p>
  <p className="text-sm text-[var(--color-text)] opacity-70">
        Want to collaborate on a project?{' '}
  <Link href="/" className="font-medium text-[var(--color-text)] opacity-90 hover:opacity-100 transition-colors duration-300">
          Get in touch
        </Link>
      </p>
    </footer>
  );
}
