# Laurine Karrer Studio — Gift vouchers

This folder contains the complete gift-voucher addition for the existing Next.js website.

## Included offers

- Body Ritual Massage · 60 min · €85
- Body Ritual Massage · 90 min · €101
- Higher pressure · +€10
- Sophrology Session · 60 min · €60
- Breathwork + Ice Bath + Sauna · €29
- Custom gift amount · €25–€300

The buyer personalises the voucher with **To**, **From** and a message. Payment is completed through Stripe Checkout. After payment, a unique digital voucher is emailed to the buyer first.

## Files to add

- `app/gift-voucher/page.tsx`
- `app/gift-voucher/success/page.tsx`
- `components/GiftVoucherForm.tsx`
- `components/GiftVoucherForm.module.css`
- `netlify/functions/create-voucher-checkout.mjs`
- `netlify/functions/stripe-webhook.mjs`
- `netlify.toml`

## Netlify environment variables

Add these in **Netlify → Site configuration → Environment variables**. Never commit them to GitHub.

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RESEND_API_KEY`
- `VOUCHER_FROM_EMAIL` — for example `Laurine Karrer Studio <gifts@laurinekarrer.com>`

In Stripe, create a webhook endpoint pointing to:

`https://laurinekarrer.com/.netlify/functions/stripe-webhook`

Subscribe it to `checkout.session.completed`, then copy its signing secret into `STRIPE_WEBHOOK_SECRET`.

The form never accepts a price sent blindly by the browser. Every fixed price is verified again on the server, and the custom amount is limited to €25–€300.
