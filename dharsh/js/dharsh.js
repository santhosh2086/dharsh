function showlogin(){
    document.getElementById('loginBox').style.display = 'flex';
    document.getElementById('overlayBg').style.display = 'block';
}

function cancel(){
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('overlayBg').style.display = 'none';
}
function login2(){
  email=document.getElementById("loginEmail").value;
  pass=document.getElementById("loginPassword").value;
  conpass=document.getElementById("loginConfirmPassword").value;
  if(!email||!pass||!conpass){
  alert("Please fill all");
return;}
if(pass!==conpass){
  alert("Please Check the password")
  return;}
alert("Login Successful for "+email);
cancel();

}
  let totalSeconds = 23 * 3600 + 59 * 60 + 59;

const hrs = document.getElementById("tHrs");
const min = document.getElementById("tMin");
const sec = document.getElementById("tSec");

function updateTimer() {

    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    hrs.textContent = String(h).padStart(2, "0");
    min.textContent = String(m).padStart(2, "0");
    sec.textContent = String(s).padStart(2, "0");

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        clearInterval(timer);
        alert("Time's Up!");
    }
}

updateTimer();
const timer = setInterval(updateTimer, 1000);
  const grid=document.getElementById("productGrid");
  const original=Array.from(grid.children);
const searchInput = document.getElementById("searchbar");
const searchBtn = document.getElementById("search");

function doSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    All();
    return;
  }

  const matching = original.filter(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();
    const dis=card.dataset.discount;
    const price=card.dataset.price;
    return title.includes(query) || category.includes(query)||dis.includes(query)||price.includes(query);
  });

  grid.innerHTML = "";

  if (matching.length === 0) {
    grid.innerHTML = `<p>No products found for "${searchInput.value}"</p>`;
  } else {
    matching.forEach(card => grid.appendChild(card));
  }

  document.getElementById("sectionTitle").textContent = `Results for "${searchInput.value}"`;
}
  function All(){ 
 grid.innerHTML = "";
  original.forEach(card => grid.appendChild(card));
}
  function ele(){
   const matching = original.filter(card => card.dataset.category === "electronics");

  grid.innerHTML = "";
  matching.forEach(card => grid.appendChild(card));
  }
  function fash(){
   const matching = original.filter(card => card.dataset.category === "fashion");

  grid.innerHTML = "";
  matching.forEach(card => grid.appendChild(card));
  }
  function beauty(){
   const matching = original.filter(card => card.dataset.category === "beauty");

  grid.innerHTML = "";
  matching.forEach(card => grid.appendChild(card));
  }
  function home(){
   const matching = original.filter(card => card.dataset.category === "home");

  grid.innerHTML = "";
  matching.forEach(card => grid.appendChild(card));
  }
  function kitch(){
   const matching = original.filter(card => card.dataset.category === "kitchen");

  grid.innerHTML = "";
  matching.forEach(card => grid.appendChild(card));
  }
  function low(){
    const cards=Array.from(grid.children);
    cards.sort((a,b)=>{const priceA=Number(a.dataset.price);
      const priceB=Number(b.dataset.price);
      return priceA-priceB;
    });
    grid.innerHTML="";
    cards.forEach(card=>grid.appendChild(card));
  }
  function high(){
    const cards=Array.from(grid.children);
    cards.sort((a,b)=>{const priceA=Number(a.dataset.price);
      const priceB=Number(b.dataset.price);
      return priceB-priceA;
    });
    grid.innerHTML="";
    cards.forEach(card=>grid.appendChild(card));
  }
  function dis() {
    const cards = Array.from(grid.children);
 
    cards.sort((a, b) => {
      return Number(b.dataset.discount) - Number(a.dataset.discount);
    });
 
    grid.innerHTML = "";
    cards.forEach(card => grid.appendChild(card));
  }
let cartData = [];

// Add to cart — event delegation so it works for every product card
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  const card = btn.closest(".card");
  const name = card.querySelector("h3").textContent;
  const price = Number(card.dataset.price);
  const img = card.querySelector("img").getAttribute("src");

  const existing = cartData.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cartData.push({ name, price, img, qty: 1 });
  }

  updateCartCount();
  btn.textContent = "Added ✓";
  setTimeout(() => { btn.textContent = "Add to cart"; }, 900);
});

function updateCartCount() {
  const count = cartData.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById("cartCount");
  countEl.textContent = count;
  countEl.style.display = count > 0 ? "flex" : "none";
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (cartData.length === 0) {
    container.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
    totalEl.textContent = "₹0";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cartData.forEach((item, index) => {
    total += item.price * item.qty;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${item.img}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-price">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</div>
        <div class="qty-row">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
        <button class="remove-item" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    container.appendChild(row);
  });

  totalEl.textContent = `₹${total}`;
}

function changeQty(index, delta) {
  cartData[index].qty += delta;
  if (cartData[index].qty <= 0) {
    cartData.splice(index, 1);
  }
  updateCartCount();
  renderCart();
}

function removeItem(index) {
  cartData.splice(index, 1);
  updateCartCount();
  renderCart();
}

function cart() {
  document.getElementById("cartPanel").style.display = "flex";
  document.getElementById("cartOverlayBg").style.display = "block";
  renderCart();
}

function closeCart() {
  document.getElementById("cartPanel").style.display = "none";
  document.getElementById("cartOverlayBg").style.display = "none";
}

function checkout() {
  if (cartData.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Proceeding to checkout — total: " + document.getElementById("cartTotal").textContent);
}