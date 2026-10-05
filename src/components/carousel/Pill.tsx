/**
 * Pill — rounded-rectangle tag component for slide decorations.
 * Used in problem-slides (strikethrough), details-slides (tags), etc.
 */

import type { CSSProperties } from 'react'

export function Pill({
  children,
  strikethrough = false,
  isDark = false,
  brandPrimary,
  style,
}: {
  children: React.ReactNode
  strikethrough?: boolean
  isDark?: boolean
  brandPrimary?: string
  style?: CSSProperties
}) {
  // line-height 1 with equal vertical padding keeps the label centered in the
  // browser without relying on flex alignment.
  const baseStyle: CSSProperties = {
    display: 'inline-block',
    lineHeight: 1,
    padding: '8px 14px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 500,
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)'}`,
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
    color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)',
    position: 'relative',
    whiteSpace: 'nowrap',
    ...style,
  }

  // The label carries data-export-nudge: html2canvas draws small pill text
  // too low, so export-png lifts it in the cloned DOM (preview is unaffected).
  return (
    <span style={baseStyle}>
      <span style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
        <span data-export-nudge style={{ opacity: strikethrough ? 0.7 : 1 }}>
          {children}
        </span>
        {strikethrough && (
          // Drawn as an element, not text-decoration: html2canvas renders
          // line-through at the wrong height.
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: -2,
              right: -2,
              top: '50%',
              height: 2,
              marginTop: -1,
              background: brandPrimary ?? '#ef4444',
              opacity: 0.85,
            }}
          />
        )}
      </span>
    </span>
  )
}
