'use client';

import { useTheme } from '@/app/providers';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      style={{
        background: 'var(--surface-raised)',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        borderRadius: '6px',
        padding: '6px 14px',
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '0.65rem',
        cursor: 'pointer',
        letterSpacing: '0.08em',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        (e.target as HTMLButtonElement).style.borderColor = 'var(--accent-cyan)';
        (e.target as HTMLButtonElement).style.color = 'var(--accent-cyan)';
      }}
      onMouseLeave={e => {
        (e.target as HTMLButtonElement).style.borderColor = 'var(--border)';
        (e.target as HTMLButtonElement).style.color = 'var(--text-muted)';
      }}
    >
      {theme === 'dark' ? '◑ LIGHT' : '◑ DARK'}
    </button>
  );
}