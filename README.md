# Amber Hour Tea Co. — website

A single-page tea shop site. No backend, no build step — it's one `index.html`
file. Payments are handled entirely by Stripe's own hosted checkout page, so
GitHub Pages (free static hosting) is enough to run the whole thing.

---

## 1. Try it locally first

Just double-click `index.html`, or open it in a browser. Everything works
except the "Buy" buttons, which will explain they're not connected yet.

---

## 2. Connect real payments (Stripe Payment Links)

You don't need to write any payment code. Stripe generates a hosted checkout
page for you per product.

1. Go to https://dashboard.stripe.com and create a free account.
2. Stripe will ask for business details (this is Stripe verifying **you**,
   so they can pay you out — see the checklist in Section 5).
3. In the dashboard, go to **Payment Links** → **+ New**.
4. Add a product: name (e.g. "Silver Needle White Tea"), price, and currency.
   Turn on "Adjustable quantity" if you want customers to buy more than one.
5. Under **After payment**, you can set a thank-you message or a redirect
   back to your site.
6. Click **Create link**. Stripe gives you a URL like:
   `https://buy.stripe.com/xxxxxxxxxxxx`
7. Repeat for all 7 teas.
8. Open `index.html`, find the `PRODUCTS` array near the bottom, and replace
   each `stripeLink: "REPLACE_ME_..."` with the real URL for that tea:

   ```js
   stripeLink: "https://buy.stripe.com/xxxxxxxxxxxx"
   ```

That's it — no server, no API keys in your code. Stripe hosts the actual
card-entry page, so you're never handling raw card numbers yourself.

**Shipping & tax:** in the same Payment Link setup, Stripe lets you turn on
"Collect shipping address" and "Automatic tax" (tax calculation may require
a paid Stripe Tax add-on depending on volume — check current pricing in your
dashboard).

---

## 3. Put the code on GitHub

If you've never used GitHub before:

1. Create a free account at https://github.com.
2. Click **+** → **New repository**. Name it e.g. `amber-hour-tea`. Keep it
   Public (required for free GitHub Pages). Don't add a README (you already
   have one).
3. On your own computer, install Git if you don't have it:
   - Mac: already installed, or `brew install git`
   - Windows: https://git-scm.com/download/win
   - Linux: `sudo apt install git`
4. Open a terminal in the folder containing `index.html` and `README.md`,
   then run:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/amber-hour-tea.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username. GitHub will
   prompt you to log in the first time.

From now on, whenever you change the site:

```bash
git add .
git commit -m "describe what you changed"
git push
```

---

## 4. Turn on GitHub Pages (free hosting)

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main`, folder `/ (root)`, then **Save**.
4. Wait about a minute. Your site will be live at:
   `https://YOUR-USERNAME.github.io/amber-hour-tea/`
5. Optional: buy a custom domain (e.g. from Namecheap or Google Domains,
   ~$10–15/year) and point it at GitHub Pages via the "Custom domain" field
   on that same settings page. GitHub will show you the DNS records to add
   at your domain registrar.

Every time you `git push`, the live site updates automatically within a
minute or two.

---

## 5. What I can't do for you — real business setup

The website is the easy part. Selling a consumable product legally and
actually getting paid involves a few things only you can complete:

- **Stripe identity verification.** Stripe will ask for your legal name/business
  name, address, bank account (for payouts), and a tax ID (SSN or EIN in the
  US, equivalent elsewhere). Payments won't pay out until this is done.
- **Business registration.** Depending on where you are, you may need to
  register as a sole proprietor, LLC, or similar, and get a business license
  from your city/county. Requirements vary a lot by country and state.
- **Food regulations.** Because tea is a consumable, most places require
  some form of cottage food license, food handler's permit, or food business
  registration before you can legally sell it — even online. Check your local
  health department; this is one of the few areas where getting it wrong has
  real consequences.
- **Labeling.** Many jurisdictions require ingredient lists, net weight, and
  a business address on the package itself, not just the website.
- **Sales tax.** You're responsible for figuring out where you owe sales tax
  and remitting it — Stripe Tax can calculate it automatically at checkout,
  but registering with tax authorities is on you.
- **Shipping.** Decide carriers/rates and how you'll actually pack and mail
  orders. Stripe Payment Links can collect a shipping address, but fulfillment
  is manual on your end unless you connect a shipping tool.
- **Policies.** The footer has placeholder links for a Privacy Policy and a
  Shipping & Returns page — write real ones (or use a free generator like
  Termly) before you start taking real orders. Many payment processors and
  some jurisdictions require these.
- **A real support email/address.** Replace `hello@example.com` and the
  placeholder address in the footer.
- **Product photos (optional).** The site currently uses illustrated "brew
  discs" instead of photos, colored to match each tea's real liquor color —
  this was a deliberate design choice so you didn't need photos to launch.
  If you'd like real photos later, I'm happy to help wire them into the
  cards; just say the word.

---

## 6. Quick content checklist before you go live

- [ ] All 7 `stripeLink` values replaced with real Stripe Payment Links
- [ ] Footer email, address updated
- [ ] Privacy Policy / Shipping & Returns pages written and linked
- [ ] Stripe account fully verified (bank account added, payouts enabled)
- [ ] Local food/business registration sorted
- [ ] Custom domain connected (optional)
