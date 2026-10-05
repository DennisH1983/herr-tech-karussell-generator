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
  // Fixed height + matching line-height instead of inline-flex centering:
  // html2canvas mis-places text inside flex pills, which pushed the label
  // towards the bottom edge in exported PNGs.
  const baseStyle: CSSProperties = {
    display: 'inline-block',
    height: 30,
    lineHeight: '28px',
    padding: '0 14px',
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

  if (strikethrough) {
    // Drawn as an element, not text-decoration: html2canvas renders
    // line-through at the wrong height (it showed up above the text).
    return (
      <span style={baseStyle}>
        <span style={{ position: 'relative', display: 'inline-block', opacity: 0.7 }}>
          {children}
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
            }}
          />
        </span>
      </span>
    )
  }

  return <span style={baseStyle}>{children}</span>
}
