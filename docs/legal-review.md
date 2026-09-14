# Policy review and adoption notes

Prepared 14 September 2026 for DevForge. Three dedicated pages are linked from every footer: `/terms/`, `/privacy/` and `/refunds/`.

## Status

These are substantial review drafts published only to the existing owner-private preview. They are explicitly labelled as drafts and have `noindex` metadata. They do not purport to amend an existing client agreement or certify legal compliance. No legal entity, registration number, address or Information Officer appointment has been invented.

## Information needed before adoption

- Registered contracting / responsible-party entity name, legal form, registration details and physical business address.
- Designated Information Officer and the proper contact / request-routing arrangements.
- Existing quotation, deposit, payment, cancellation, notice and refund terms.
- Actual services/provider inventory, operator agreements, security measures, retention schedule, international recipients and transfer safeguards.
- Any specific laws authorising or requiring each category of collection, plus any separately required PAIA manual and procedures.
- Confirmation that the proposed operational commitments accurately reflect DevForge’s practices; appropriate South African legal review before adopting binding terms.

The website currently has no checkout, payment form, enquiry form, analytics, advertising pixels or application-managed cookies. It loads Google Fonts. Hosted access and security services may process request logs and essential cookies; those services must be included in the processing/transfer assessment. No new personal-information collection workflow was added with the policies.

## Drafting choices

- Project-specific agreements govern scope, prices, ownership, service levels and valid commercial risk allocation.
- No automatic deposit forfeiture, invented deposit percentage, standard late fee or blanket non-refundable software policy.
- Cancellation reconciliation accounts for agreed work and lawfully recoverable commitments, preserves statutory rights and avoids double recovery.
- ECTA and CPA consumer scopes are distinguished; custom services are not automatically treated as personalised goods.
- Applicable ECTA seven-day cooling-off and 30-day refund, CPA direct-marketing five-business-day cancellation / 15-business-day refund, fixed-term notice/expiry protections and service-quality remedies are addressed.
- POPIA responsible-party and operator roles, lawful grounds, compatible further processing, safeguards, retention, rights, direct marketing and section 72 transfers are covered. No invented 72-hour POPIA breach deadline or guaranteed encryption claim.

## Official sources checked

- POPIA consolidated official text: https://www.justice.gov.za/legislation/acts/2013-004.pdf
- ECTA (sections 1, 42–44, 46): https://www.gov.za/sites/default/files/gcis_document/201409/a25-02.pdf — section 45’s old marketing provisions were repealed and were not used.
- CPA (sections 14, 16, 54): https://www.gov.za/sites/default/files/gcis_document/201409/321864670.pdf
- CPA regulations, regulation 5: https://www.gov.za/sites/default/files/gcis_document/201409/34180rg9515gon293.pdf
- Current regulator complaint process: https://inforegulator.org.za/complaints/
- Current regulator contact details: https://inforegulator.org.za/contact-us/
- POPIA forms: https://inforegulator.org.za/popia-forms/
- Security-compromise guidance: https://inforegulator.org.za/2025/08/19/fact-sheet-handling-of-security-compromises/

## Maintaining the pages

Edit the content in `scripts/policy-content.mjs` and run `node scripts/generate-policies.mjs`. The generator updates all three static HTML pages and the shared homepage footer. Page layout is in `dist/legal.css`; contents navigation is in `dist/legal.js`. Confirm dates, draft status and metadata deliberately when policies are adopted or revised.
