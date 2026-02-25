'use client';

import { useState } from 'react';

interface GameCardProps {
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
  url?: string;
  accentColor: string;
  icon: string;
  tags: string[];
}

export default function GameCard({
  title,
  description,
  status,
  url,
  accentColor,
  icon,
  tags,
}: GameCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered && status === 'live' ? accentColor : 'var(--border)'}`,
        borderRadius: '12px',
        padding: '28px',
        cursor: status === 'live' ? 'pointer' : 'default',
        transition: 'all 0.25s',
        transform: hovered && status === 'live' ? 'translateY(-4px)' : 'none',
        boxShadow: hovered && status === 'live' 
          ? `0 8px 32px ${accentColor}22` 
          : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}
      onClick={() => status === 'live' && url && window.open(url, '_blank')}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: status === 'live' ? accentColor : 'var(--border)',
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.25s',
      }} />

      {/* Icon + Status */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '2rem', lineHeight: 1 }}>{icon}</span>
        <span style={{
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          padding: '4px 10px',
          borderRadius: '20px',
          background: status === 'live' 
            ? `${accentColor}22` 
            : 'var(--surface-raised)',
          color: status === 'live' ? accentColor : 'var(--text-muted)',
          border: `1px solid ${status === 'live' ? accentColor + '44' : 'var(--border)'}`,
          fontFamily: 'var(--font-mono), monospace',
        }}>
          {status === 'live' ? '● LIVE' : '○ SOON'}
        </span>
      </div>

      {/* Title */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-syne), sans-serif',
          fontWeight: 800,
          fontSize: '1.3rem',
          color: 'var(--text)',
          letterSpacing: '0.05em',
          marginBottom: '8px',
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          letterSpacing: '0.02em',
        }}>
          {description}
        </p>
      </div>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            padding: '3px 8px',
            borderRadius: '4px',
            background: 'var(--surface-raised)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
            fontFamily: 'var(--font-mono), monospace',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {status === 'live' && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.7rem',
          color: accentColor,
          letterSpacing: '0.08em',
          marginTop: '4px',
          opacity: hovered ? 1 : 0.6,
          transition: 'opacity 0.25s',
        }}>
          {'PLAY NOW →'}
        </div>
      )}
    </div>
  );
}