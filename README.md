# Amber Hour Tea Co.

Tea shop site. One index.html file, no backend, hosted on GitHub Pages.

Live at: https://ethansinclair1.github.io/Tea-Web-Prod/

## Payments

Buy buttons use Stripe Payment Links. To hook one up:

Make a Stripe account, go to Payment Links > New, add the tea as a product (currency GBP), copy the link it gives you (buy.stripe.com/...), paste it into the matching `stripeLink` field in the `PRODUCTS` list near the bottom of index.html.

Stripe can also collect shipping address and do tax if you turn those on when making the link.

## Order form

The Order section just opens the visitor's email app addressed to ethansinclair123456789@gmail.com with their order filled in - not a real submit, they still have to hit send. Fine for now, no signup needed. Could swap to Formspree later for an actual auto-send form if it's annoying.

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
- photos are illustrated discs for now instead of real product shots, can swap in real ones whenever
