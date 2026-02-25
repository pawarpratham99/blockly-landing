'use client';

import ThemeToggle from '@/components/ThemeToggle';
import GameCard from '@/components/GameCard';

const GAMES = [
  {
    title: 'Maze',
    description: 'Navigate your character through increasingly complex mazes using sequences, loops, and conditionals. A complete introduction to algorithmic thinking.',
    status: 'live' as const,
    url: 'https://blockly-rebuild.vercel.app/maze.html',
    accentColor: '#00d4e0',
    icon: '⬡',
    tags: ['sequences', 'loops', 'conditionals', 'beginner'],
  },
  {
    title: 'Bird',
    description: 'Guide a bird through obstacles by writing programs that control its flight path. Introduces angles, conditions and more complex logic.',
    status: 'live' as const,
    url: 'https://blockly-rebuild.vercel.app/bird.html',
    accentColor: '#3dd68c',
    icon: '◈',
    tags: ['angles', 'conditions', 'intermediate'],
  },
  {
    title: 'Turtle',
    description: 'Draw geometric patterns and artwork by programming a turtle to move and turn. Explores loops, variables and creative computation.',
    status: 'live' as const,
    url: 'https://blockly-rebuild.vercel.app/turtle.html',
    accentColor: '#b388ff',
    icon: '◎',
    tags: ['drawing', 'loops', 'variables', 'creative'],
  },
  {
    title: 'Music',
    description: 'Draw geometric patterns and artwork by programming a turtle to move and turn. Explores loops, variables and creative computation.',
    status: 'live' as const,
    url: 'https://blockly-rebuild.vercel.app/music.html',
    accentColor: '#b388ff',
    icon: '◎',
    tags: ['drawing', 'loops', 'variables', 'creative'],
  },
];

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      transition: 'background 0.25s',
    }}>

      {/* HEADER */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '60px',
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{
            fontSize: '1.3rem',
            color: 'var(--accent-cyan)',
          }}>⬡</span>
          <span style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: '0.95rem',
            letterSpacing: '0.15em',
            color: 'var(--text)',
          }}>BLOCKLY REBUILD</span>
        </div>

        <ThemeToggle />
      </header>

      {/* HERO */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 40px 60px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--accent-cyan)',
          border: '1px solid var(--accent-cyan)',
          borderRadius: '20px',
          padding: '5px 16px',
          marginBottom: '28px',
          opacity: 0.8,
        }}>
          OPEN SOURCE · BLOCK BASED · MODERN
        </div>

        <h1 style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          lineHeight: 1.1,
          letterSpacing: '0.04em',
          color: 'var(--text)',
          marginBottom: '24px',
        }}>
          Classic coding games,<br />
          <span style={{ color: 'var(--accent-cyan)' }}>rebuilt</span> for the modern web.
        </h1>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          maxWidth: '560px',
          margin: '0 auto 48px',
          letterSpacing: '0.03em',
        }}>
          The beloved Blockly Games, redesigned from the ground up. 
          Same logic puzzles you love, now with a premium developer-grade interface.
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginBottom: '16px',
        }}>
          {[
            { value: '3', label: 'GAMES' },
            { value: '10', label: 'LEVELS EACH' },
            { value: '∞', label: 'LOGIC' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontWeight: 800,
                fontSize: '2rem',
                color: 'var(--accent-cyan)',
                lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                marginTop: '6px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '40px',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
        }}>GAMES</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* GAME CARDS */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 40px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
      }}>
        {GAMES.map(game => (
          <GameCard key={game.title} {...game} />
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '24px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
        }}>
          BLOCKLY REBUILD — Built on top of{' '}
          
            <a href="https://blockly.games"
            target="_blank"
            style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
      >
            Blockly Games
          </a>
        </span>
        <span style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
        }}>
          OPEN SOURCE
        </span>
      </footer>

    </div>
  );
}