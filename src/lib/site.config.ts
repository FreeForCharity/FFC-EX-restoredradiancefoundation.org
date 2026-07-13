/**
 * Central site configuration for this Free-For-Charity-supported site.
 *
 * EDIT THIS FILE to customize a new FFC-supported nonprofit site.
 * Most values that vary between sites flow from here so individual
 * pages, metadata, sitemap, robots, and security headers stay in sync.
 *
 * After editing, run `npm run check:drift` to verify nothing here drifts
 * away from FFC best practices (placeholder URLs left in, etc.).
 */

export type SiteSocialLink = {
  /** Display label, also used for aria-label. */
  label: string
  /** Absolute https URL. Empty string disables the link. */
  href: string
}

export type SiteAddress = {
  /** Heading shown above the address (e.g. "Main Address"). */
  label: string
  /** Address text, one entry per visual line. */
  lines: readonly string[]
  /** Google Maps (or other) link opened when the address is clicked. */
  mapUrl: string
}

export type SiteConfig = {
  /** Display name of the charity (used in titles, OG/Twitter cards). */
  name: string
  /** Short tagline used in the default title template. */
  tagline: string
  /** Plain-language description used for the <meta description> tag. */
  description: string
  /**
   * Shorter description tuned for OG/Twitter social card previews.
   * Falls back to `description` if empty. Aim for <= 200 chars and avoid
   * em-dashes — some card renderers break on them.
   */
  shortDescription: string
  /**
   * Canonical production URL with no trailing slash.
   * Used by metadataBase, sitemap, and robots. The drift check verifies that
   * this is updated whenever public/CNAME points to a custom domain, and
   * that public/.well-known/security.txt no longer carries the placeholder.
   */
  url: string
  /**
   * Twitter / X handle including the leading @ — e.g. `@freeforcharity`.
   * Empty string omits the twitter:site meta entirely. Handles without `@`
   * are auto-prefixed so a typo doesn't silently break attribution.
   */
  twitterHandle: string
  /**
   * Primary contact email. Used by your own pages; security.txt carries
   * its own `Contact:` line and is not auto-derived from this value.
   * Keep them in sync manually when you change either.
   */
  contactEmail: string
  /** SEO keywords used in the root layout metadata. */
  keywords: readonly string[]
  /** Default theme color (used by manifest and meta tag). */
  themeColor: string
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[]
  /** IRS Employer Identification Number (tax ID), e.g. 'XX-XXXXXXX'. */
  ein: string
  /**
   * Year (or ISO date) the organization was founded, e.g. '2014'.
   * Emitted as schema.org `foundingDate`. Omit to skip it.
   */
  foundingDate?: string
  /**
   * schema.org nonprofit status URL, e.g. 'https://schema.org/Nonprofit501c3'.
   * FFC-supported sites are 501(c)(3) organizations; omit to skip it.
   */
  nonprofitStatus?: string
  /**
   * Other names the organization is known by (brands, abbreviations).
   * Emitted as schema.org `alternateName`. Omit to skip it.
   */
  alternateNames?: readonly string[]
  /**
   * Primary phone number. `display` is the human-readable form shown to users;
   * `tel` is the value used in the `tel:` link (digits, optionally E.164).
   */
  phone: { display: string; tel: string }
  /** Physical office addresses shown in the footer contact column. */
  addresses: readonly SiteAddress[]
  /** GuideStar / Candid transparency profile links shown in the footer. */
  guidestar: { profileUrl: string; directProfileUrl: string }
  /**
   * Parent / umbrella organization, when this site is "a project of" another
   * nonprofit. Omit for a standalone charity (the footer clause is hidden).
   */
  parentOrg?: { name: string; url: string; hubUrl: string }
  /**
   * Third-party integration endpoints. Each fork points these at its own
   * accounts — the domains are already allow-listed in the CSP, so only the
   * path/ID changes here.
   */
  integrations: {
    /** Zeffy donation-form embed URL (the iframe `src`). */
    zeffyDonationUrl: string
    /** Jotform "apply for care" application form URL. */
    applicationFormUrl: string
    /** SociableKit Facebook-events widget iframe URL. */
    sociableKitEventsWidgetUrl: string
    /** Microsoft Forms application-form URL (https://forms.office.com/r/<id>). */
    microsoftFormUrl: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Restored Radiance Foundation',
  tagline: 'Restorative skincare and support for oncology survivors',
  description:
    'Restored Radiance Foundation empowers oncology survivors with safe, science-backed skincare education, restorative facial services, and access to oncology-approved products that support healing during and after cancer treatment. Our website is under construction.',
  shortDescription:
    'Empowering oncology survivors with science-backed skincare education, restorative care, and support during and after cancer treatment.',
  url: 'https://restoredradiancefoundation.org',
  twitterHandle: '',
  contactEmail: 'rrfskin@gmail.com',
  keywords: [
    'nonprofit',
    '501c3',
    'oncology survivors',
    'cancer recovery',
    'skincare education',
    'restorative care',
    'Restored Radiance Foundation',
  ],
  themeColor: '#5D4859',
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
  social: [{ label: 'Instagram', href: 'https://www.instagram.com/restoredradiancefoundation' }],
  // IRS-recognized 501(c)(3) per the charity's onboarding application
  // (WHMCS client 419). EIN shown in the footer; nonprofitStatus emits
  // schema.org Nonprofit501c3.
  ein: '42-2751966',
  nonprofitStatus: 'https://schema.org/Nonprofit501c3',
  phone: { display: '(469) 379-2789', tel: '4693792789' },
  addresses: [],
  guidestar: { profileUrl: '', directProfileUrl: '' },
  integrations: {
    // Restored Radiance Foundation's live Zeffy donation form. Uses the
    // /embed/ path (rather than the /en-US/donation-form/ page URL) since
    // that's the iframe-embeddable route; the CSP frame-src already
    // allow-lists zeffy.com for this.
    zeffyDonationUrl:
      'https://www.zeffy.com/embed/donation-form/cancer-took-a-lot-lets-help-survivors-reclaim-their-skin-and-their-confidence',
    // Restored Radiance Foundation's live Jotform application form, linked
    // from the Apply Now section.
    applicationFormUrl: 'https://form.jotform.com/261858987137072',
    sociableKitEventsWidgetUrl:
      'https://widgets.sociablekit.com/facebook-page-events/iframe/25631700',
    microsoftFormUrl: 'https://forms.office.com/r/vePxGq6JqG',
  },
}

/**
 * Compose a fully-qualified URL on this site.
 *
 * The path is required to be a same-origin absolute path (starting with `/`).
 * This rules out protocol-relative inputs like `//evil.com` that could leak
 * into a future redirect or canonical link.
 */
export function siteUrl(path = '/'): string {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) {
    throw new TypeError(
      `siteUrl: path must be a same-origin absolute path starting with a single "/" (got: ${JSON.stringify(path)})`
    )
  }
  const base = siteConfig.url.replace(/\/$/, '')
  return `${base}${path}`
}

/**
 * Returns the Twitter handle with a guaranteed leading `@`.
 * Returns `undefined` (so the meta tag is omitted) if the handle is empty
 * or is just an `@` with no body — emitting a bare `@` would advertise a
 * malformed handle to Twitter's scraper.
 */
export function twitterSite(): string | undefined {
  const raw = siteConfig.twitterHandle.trim().replace(/^@+/, '')
  if (!raw) return undefined
  return `@${raw}`
}

/** Returns the OG/Twitter card description, falling back to the longer page description. */
export function cardDescription(): string {
  return siteConfig.shortDescription.trim() || siteConfig.description
}
