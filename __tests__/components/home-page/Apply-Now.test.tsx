import React from 'react'
import { render, screen } from '@testing-library/react'
import ApplyNow from '../../../src/components/home-page/Apply-Now'

describe('Apply-Now', () => {
  it('renders the section heading', () => {
    render(<ApplyNow />)
    expect(screen.getByRole('heading', { name: /Apply Now/i })).toBeInTheDocument()
  })

  it('mounts under the #apply section landmark id', () => {
    const { container } = render(<ApplyNow />)
    expect(container.querySelector('#apply')).not.toBeNull()
  })

  it('links out to the application form', () => {
    render(<ApplyNow />)
    const link = screen.getByRole('link', { name: /Apply Now/i })
    expect(link).toHaveAttribute('href', 'https://form.jotform.com/261858987137072')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
