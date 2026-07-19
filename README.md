# Zita's Teas

Tea shop site. Two pages (index.html, cart.html), no backend, hosted on GitHub Pages.

Live at: https://ethansinclair1.github.io/Tea-Web-Prod/

## Cart and checkout

Each tea has a +/- counter instead of a direct buy button. The cart itself is stored in the browser's localStorage under the key `zitasCart` - no backend needed, but it's per-device, not shared across a customer's phone and laptop.

`cart.html` is a separate page (the cart icon in the nav links there) showing the cart contents, running total, and a checkout form (name, email, address). There's no real card payment yet - submitting the form just emails you the order details through web3forms so you can follow up and arrange payment manually. The page explicitly tells the customer payments aren't automated yet.

To eventually take real card payments off the cart, you'd want either:
- Stripe Checkout Sessions (needs a small serverless function somewhere, since creating a Checkout Session requires your secret API key, which can't live in this public HTML) - probably the real long-term option, or
- Payment Links per tea if you want something simpler but less integrated with the cart

Stripe onboarding might ask for a VAT number under "additional information" - leave it blank unless you're actually VAT registered, that's not needed to accept payments.

## Contact form

Actually delivers to whatever inbox the `WEB3FORMS_KEY` access key is registered to - right now that's still ethansinclair123456789@gmail.com, since that key was created for that address. The `CONTACT_EMAIL` constant in index.html/cart.html is now sinclairzita@hotmail.com, but changing that constant alone doesn't move where submissions land - it only affects the mailto fallback and error message text. To actually redirect form deliveries to sinclairzita@hotmail.com, get a new access key from web3forms.com for that address and swap `WEB3FORMS_KEY` in both index.html and cart.html.

## Images to add

Drop these straight into the Tea Web folder, next to index.html, exact filenames below. They'll show up automatically next push - until then they show as a broken image icon.

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

- wire up real Stripe payments off the cart (see Cart and checkout above)
- Stripe needs your bank details etc before it'll pay out
- check food/cottage licensing rules for where you live, tea counts as a consumable
- write real privacy + shipping/returns pages (footer links are placeholders)
- sort sales tax / Stripe Tax
- replace the footer email/address with real ones
- add the real photos (see Images to add above)
