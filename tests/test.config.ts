/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

import { analyticsConfig } from '../src/lib/analytics.config'
import { siteConfig } from '../src/lib/site.config'

export const testConfig = {
  /**
   * Mission Video Configuration
   * Used in: tests/mission-video.spec.ts
   */
  missionVideo: {
    ariaLabel: 'Free For Charity mission video',
    playLabel: 'Play the Free For Charity mission video',
    title: "Learn about Free For Charity's mission to help nonprofits reduce costs",
  },

  /**
   * Application Form Configuration
   * Used in: tests/application-form.spec.ts
   */
  applicationForm: {
    buttonText: 'Apply to Become a Supported Charity',
    modalTitle: 'Charity Application Form',
    loadingText: 'Loading application form...',
    closeButtonAriaLabel: 'Close application form',
  },

  /**
   * Events Section Configuration
   * Used in: tests/events.spec.ts
   */
  events: {
    sectionId: 'events',
    heading: 'Upcoming Events',
    footerLinkText: 'Events',
    iframeTitle: 'Facebook Events',
    facebookLinkText: 'View all events on Facebook',
    facebookUrl: 'https://www.facebook.com/freeforcharity',
    descriptionText: 'volunteer opportunities',
    // Sourced from siteConfig so the expected iframe src always matches what the
    // Events component renders (single source of truth).
    widgetUrl: siteConfig.integrations.sociableKitEventsWidgetUrl,
  },

  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  // Sourced from siteConfig.social (single source of truth) so the tests
  // track whatever this fork configures — including an empty list for a
  // charity with no social presence yet. Entries disabled via an empty href
  // are excluded, mirroring the footer's own filter.
  socialLinks: siteConfig.social
    .filter((s) => s.href)
    .map((s) => ({ url: s.href, ariaLabel: s.label })),

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    // Mirrors the footer's conditional: the "US 501c3" suffix only renders
    // once siteConfig.nonprofitStatus is set (i.e. after IRS determination).
    text: `All Rights Are Reserved by ${siteConfig.name}${siteConfig.nonprofitStatus ? ' a US 501c3 Non Profit' : ''}`,
    searchText: 'All Rights Are Reserved',
    // The permanent "Supported by" attribution (FFC footer standard) — sourced
    // from siteConfig.supportedBy, which is required and always rendered.
    supportedByUrl: siteConfig.supportedBy.url,
    supportedByText: siteConfig.supportedBy.name,
    // Sourced from siteConfig so the parent-org link expectations track the
    // footer (which now shows the org name, not the raw URL, as link text).
    linkUrl: siteConfig.parentOrg?.url ?? '',
    linkText: siteConfig.parentOrg?.name ?? siteConfig.name,
  },

  /**
   * Animated Numbers Configuration
   * Used in: tests/animated-numbers.spec.ts
   */
  animatedNumbers: {
    sectionHeading: 'Results - 2023',
    statistics: [
      { description: 'Organizational partners', value: '221' },
      { description: 'Total volunteers', value: '3' },
      {
        description: 'Organizations accessing technical assistance offerings',
        value: '221',
      },
      { description: 'Volunteer hours contributed to the organization', value: '25' },
    ],
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   *
   * Sourced from the same src/lib/analytics.config.ts the component reads, so
   * the expected ID always matches what the build embedded.
   */
  googleTagManager: {
    id: analyticsConfig.gtmId,
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   */
  logo: {
    // The header renders the logo alt from siteConfig.name.
    headerAlt: siteConfig.name,
    heroAlt: 'Hero image',
    navBarAriaLabel: `${siteConfig.name} home`,
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
