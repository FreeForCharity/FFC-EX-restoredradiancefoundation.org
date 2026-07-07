import React from 'react'
import { render } from '@testing-library/react'
import Events from '@/components/home-page/Events'

// Locks in the perceived-performance + accessibility behavior of the
// third-party iframe embeds: each lazy-loads and sits over a decorative,
// reduced-motion-safe loading skeleton.
describe('iframe embeds', () => {
  describe('Events widget', () => {
    // The Events iframe's loading="lazy" / src / sandbox contract is covered by
    // __tests__/components/Events.test.tsx; only the skeleton is asserted here.
    it('renders a decorative, reduced-motion-safe loading skeleton', () => {
      const { container } = render(<Events />)
      const skeleton = container.querySelector('[aria-hidden="true"].animate-pulse')
      expect(skeleton).not.toBeNull()
      expect(skeleton?.className).toContain('pointer-events-none')
      expect(skeleton?.className).toContain('motion-reduce:animate-none')
    })
  })
})
