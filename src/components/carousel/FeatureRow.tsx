/**
 * FeatureRow — a single marker + label + description row used on features slides.
 *
 * The `icon` field stays in the schema for compatibility, but is no longer
 * rendered: colorful emojis clashed with the calm brand typography. Each row
 * gets a full-height accent rule in the brand color instead.
 */

import type { CSSProperties } from 'react'

export function FeatureRow({
  label,
  description,
  isDark = false,
  headlineFont,
  bodyFont,
  brandPrimary,
  style,
}: {
  icon?: string
  label: string
  description: string
  isDark?: boolean
  headlineFont: string
  bodyFont: string
  brandPrimary?: string
  style?: CSSProperties
}) {
  const labelColor = isDark ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)'
  const descColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, ...style }}>
      <div
        aria-hidden
        style={{
          // Full-height rule next to label + description: stays aligned even
          // though html2canvas shifts small text slightly in exports.
          flexShrink: 0,
          alignSelf: 'stretch',
          width: 3,
          borderRadius: 2,
          background: brandPrimary ?? labelColor,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: headlineFont,
            fontWeight: 600,
            fontSize: 15,
            color: labelColor,
            marginBottom: 2,
            lineHeight: 1.25,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: bodyFont,
            fontWeight: 400,
            fontSize: 12.5,
            color: descColor,
            lineHeight: 1.45,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}
