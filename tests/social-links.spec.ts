import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * These tests verify that:
 * 1. Social media links are present and functional
 * 2. Defunct platforms (like Google+) are not present
 * 3. All social icons link to correct destinations
 *
 * Note: Test expectations use values from test.config.ts, which sources the
 * social list from siteConfig.social — so these tests track whatever this
 * fork configures, including an empty list for a charity with no social
 * presence yet.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Check that Google+ link is not present
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    // Also check that Google Plus label is not present
    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display every configured social media link', async ({ page }) => {
    test.skip(testConfig.socialLinks.length === 0, 'No social links configured for this site')

    // Navigate to the homepage
    await page.goto('/')

    // Verify each configured social link renders with its aria-label
    for (const social of testConfig.socialLinks) {
      const link = page.locator(`footer a[aria-label="${social.ariaLabel}"]`)
      await expect(link).toBeVisible()
      const href = await link.getAttribute('href')
      expect(href).toBe(social.url)
    }
  })

  test('should have exactly the configured number of social media icons', async ({ page }) => {
    test.skip(testConfig.socialLinks.length === 0, 'No social links configured for this site')

    // Navigate to the homepage
    await page.goto('/')

    // Count only links whose aria-label matches a configured social platform
    const selector = testConfig.socialLinks
      .map((social) => `footer a[aria-label="${social.ariaLabel}"]`)
      .join(', ')
    const socialMediaLinks = page.locator(selector)
    await expect(socialMediaLinks).toHaveCount(testConfig.socialLinks.length)
  })
})
