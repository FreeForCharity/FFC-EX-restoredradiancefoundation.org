import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../../../src/components/home-page/Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Restored Radiance Foundation/i })
    ).toBeInTheDocument()
  })

  it('mounts under the #hero section landmark id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#hero')).not.toBeNull()
  })
})
