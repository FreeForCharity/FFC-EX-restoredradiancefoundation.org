import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/page-metadata'

const PAGE_NAME = 'Donation Policy'
const CANONICAL_PATH = '/donation-policy'

// Bare page name as title (the root layout template appends the brand);
// per-page OG/Twitter handling is documented in src/lib/page-metadata.ts.
export const metadata: Metadata = pageMetadata({
  title: PAGE_NAME,
  description: 'Donation Policy for Restored Radiance Foundation website',
  canonical: CANONICAL_PATH,
})

export default function DonationPolicy() {
  return (
    <div className="ffc-container py-16">
      <BreadcrumbSchema name={PAGE_NAME} path={CANONICAL_PATH} />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          <p>
            Restored Radiance Foundation is a qualified 501(c)(3) nonprofit organization (EIN:
            42-2751966). Donations are tax-deductible to the full extent allowed by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>
            Donations support our mission to provide skincare education, restorative care, and
            oncology-approved products to oncology survivors by funding:
          </p>
          <ul>
            <li>Skincare education programs</li>
            <li>Restorative facial treatment services</li>
            <li>Oncology-approved skincare products</li>
            <li>Administrative costs necessary to operate our programs</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            Donations are processed securely through our payment partners. You will receive a
            receipt for tax purposes via email after your donation is processed.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. However, if you believe an error has
            occurred, please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information is kept confidential and will not be shared with third parties except
            as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email:{' '}
            <a href="mailto:rrfskin@gmail.com" className="text-primary underline">
              rrfskin@gmail.com
            </a>
            <br />
            Phone: (469) 379-2789
          </p>
        </div>
      </div>
    </div>
  )
}
