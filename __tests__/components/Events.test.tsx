import React from 'react'
import { render, screen } from '@testing-library/react'
import Events from '@/components/home-page/Events'
import { siteConfig } from '@/lib/site.config'
import { restoreSiteConfig } from '../helpers/site-identity'

describe('Events component', () => {
  // This site has no events widget configured (the template's was a
  // supporting-organization account); exercise the embed with a test URL.
  beforeEach(() => {
    siteConfig.integrations = {
      ...siteConfig.integrations,
      sociableKitEventsWidgetUrl: 'https://widgets.sociablekit.com/facebook-page-events/iframe/1',
    }
  })
  afterEach(restoreSiteConfig)

  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('renders the SociableKit events iframe from siteConfig with safe attributes', () => {
    render(<Events />)
    const iframe = screen.getByTitle('Facebook Events')
    expect(iframe).toBeInTheDocument()
    expect(iframe.getAttribute('src')).toBe(siteConfig.integrations.sociableKitEventsWidgetUrl)
    expect(iframe.getAttribute('loading')).toBe('lazy')
    expect(iframe.getAttribute('sandbox')).toContain('allow-scripts')
  })
})
