# Zita's Teas

Tea shop site. One index.html file, no backend, hosted on GitHub Pages.

Live at: https://ethansinclair1.github.io/Tea-Web-Prod/

## Payments

Buy buttons use Stripe Payment Links. Until a tea has a real one, its Buy button just jumps to the contact form instead. To hook one up:

Make a Stripe account, go to Payment Links > New, add the tea as a product (currency GBP), copy the link it gives you (buy.stripe.com/...), paste it into the matching `stripeLink` field in the `PRODUCTS` list near the bottom of index.html.

Stripe can also collect shipping address and do tax if you turn those on when making the link.

Stripe onboarding might ask for a VAT number under "additional information" - leave it blank unless you're actually VAT registered, that's not needed to accept payments.

## Contact form

Sends to ethansinclair123456789@gmail.com through web3forms.com. Access key is already set in `WEB3FORMS_KEY` near the bottom of index.html, so this is live - submissions land straight in the inbox.

## Images to add

Drop these straight into the Tea Web folder, next to index.html, exact filenames below. They'll show up automatically next push - until then they show as a broken image icon.

- `hero-tea.jpg` - the big circle photo at the top of the page
- `creator.jpg` - Zita's photo in the Meet Zita section
- `tea-bg.jpg` - background photo behind the About section
- `prod1.jpg` - Tea One (white tea)
- `prod2.jpg` - Tea Two (green tea)
- `prod3.jpg` - Tea Three (oolong tea)
- `prod4.jpg` - Tea Four (black tea)
- `prod5.jpg` - Tea Five (pu-erh tea)
- `prod6.jpg` - Tea Six (herbal blend)

## Deploying changes

```
git add .
git commit -m "..."
git push
```

Pages redeploys automatically after a push, usually within a minute.

## Before actually selling anything

- swap the stripeLink placeholders for real ones
- Stripe needs your bank details etc before it'll pay out
- check food/cottage licensing rules for where you live, tea counts as a consumable
- write real privacy + shipping/returns pages (footer links are placeholders)
- sort sales tax / Stripe Tax
- replace the footer email/address with real ones
- add the real photos (see Images to add above)
