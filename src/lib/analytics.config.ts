// Analytics & tracking IDs — the single place to change them.
//
// These are NOT secrets. They are public, client-side identifiers that get
// baked into the static export and are visible in the page source anyway. They
// live here (rather than hardcoded inside components or read from environment
// variables) so a forking charity — or an automated assistant — can point the
// site at its own accounts by editing this one file.
//
// To use your own accounts, replace the placeholder values below with the IDs
// from each provider's dashboard.
//
// Leaving a value as its placeholder keeps that integration inert for the
// loaders that check `isConfigured` below: the direct GA4 loader, the Meta
// Pixel and Microsoft Clarity. It does NOT apply to GTM. This fork's
// `components/google-tag-manager` reads `gtmId` and renders the container
// snippet unconditionally, so a placeholder there produces a live GTM tag
// pointed at a nonexistent container rather than no tag at all. Stated
// explicitly because the promise above used to be written as though it
// covered everything, and GTM is the one most sites set.
export const analyticsConfig = {
  // Google Tag Manager container ID, e.g. 'GTM-ABC1234'. GTM is the umbrella
  // that can load the others, so this is the main one most sites set.
  gtmId: 'GTM-WKKRTBK8',

  // Google Analytics 4 measurement ID, e.g. 'G-ABC1234567'.
  gaMeasurementId: 'G-7ZB8DM7LEF',

  // Meta (Facebook) Pixel ID.
  metaPixelId: 'XXXXXXXXXXXXXXX',

  // Microsoft Clarity project ID.
  clarityProjectId: 'XXXXXXXXXX',
} as const

// The placeholder values shipped above. The `isConfigured` loaders check
// against this list so that the placeholder promise a few lines up is
// actually honored — for those loaders. GTM does not consult it; see the
// caveat above.
const PLACEHOLDER_IDS: readonly string[] = ['G-XXXXXXXXXX', 'XXXXXXXXXXXXXXX', 'XXXXXXXXXX']

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (six or more consecutive X's) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
