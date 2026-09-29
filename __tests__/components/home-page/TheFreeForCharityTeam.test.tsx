import React from 'react'
import { render, screen } from '@testing-library/react'
import Team from '../../../src/components/home-page/TheFreeForCharityTeam'
import { PENDING_TEXT, siteConfig } from '../../../src/lib/site.config'

describe('TheFreeForCharityTeam', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: `The ${siteConfig.name} Team` })).toBeInTheDocument()
  })

  it('shows the pending placeholder, not the template sample team', () => {
    render(<Team />)
    expect(screen.getByText(PENDING_TEXT).closest('a')).toBeNull()
    expect(screen.queryByText(/Clarke Moyer|Free For Charity/)).not.toBeInTheDocument()
  })

  it('mounts under the #team section landmark id', () => {
    const { container } = render(<Team />)
    expect(container.querySelector('#team')).not.toBeNull()
  })
})
