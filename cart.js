// shared cart stuff - used by index.html and cart.html
// cart lives in localStorage so no backend needed (per device only though)

const CART_KEY = "zitasCart";
const CONTACT_EMAIL = "sinclairzita@hotmail.com";
// web3forms key - submissions go to whatever email this key was made for
const WEB3FORMS_KEY = "f9b07fa7-40a6-4f3f-a4a2-2e41d4ac0a3d";

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart){
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
  updateCartBadge();
}

function cartCount(){
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge(){
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const n = cartCount();
  badge.textContent = n;
  badge.hidden = n === 0; // dont show a "0" bubble
}

function money(n){
  return "£" + n.toFixed(2);
}

// little helper for the web3forms post, returns true if it went through
async function sendForm(data){
  data.append("access_key", WEB3FORMS_KEY);
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
    const result = await res.json();
    return !!result.success;
  } catch {
    return false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  updateCartBadge();
});
