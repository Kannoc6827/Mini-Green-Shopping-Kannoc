const products = [
  { id:1,name:"Áo thun",category:"Áo",price:520000,img:"../img/áo.jpg",desc:"Áo đẹp"},
  { id:2,name:"Giày sneaker",category:"Giày",price:1000000,img:"../img/giày.jpg",desc:"Giày xịn"},
  { id:3,name:"Mũ",category:"Phụ kiện",price:80000,img:"../img/nón.png",desc:"Mũ đẹp"},
  { id:4,name:"Dụng cụ bếp",category:"Dụng cụ",price:350000,img:"../img/bếp.jpg",desc:"Dụng cụ bếp chất lượng"},
  { id:5,name:"Bút",category:"Học tập",price:50000,img:"../img/bút.jpeg",desc:"Bút xịn"},
  { id:6,name:"Quần jean",category:"Áo",price:250000,img:"../img/quần.jpeg",desc:"Áo khoác xịn"},
  { id:7,name:"Dụng cụ sửa chữa",category:"Dụng cụ",price:700000,img:"../img/khác.jpg",desc:"Dụng cụ khác"},
  { id:8,name:"Makeup",category:"Khác",price:200000,img:"../img/son.jpg",desc:"makeup xịn"},
  
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter='all';
let keyword='';

function renderProducts(){
  let list=document.getElementById('productList'); list.innerHTML='';

  let data=products.filter(p=> (currentFilter==='all'||p.category===currentFilter) && p.name.toLowerCase().includes(keyword));

  data.forEach(p=>{
    list.innerHTML+=`
    <div class="col-md-4 mb-4">
      <div class="product-card p-2" onclick="viewDetail(${p.id})">
        <img src="${p.img}" class="w-100">
        <h6>${p.name}</h6>
        <div class="price">${p.price.toLocaleString()} đ</div>
        <button class="btn btn-danger w-100 mt-2" onclick="event.stopPropagation();addToCart(${p.id})">Thêm</button>
      </div>
    </div>`;
  });
}

function viewDetail(id){
  let p=products.find(x=>x.id===id);
  document.getElementById('productDetail').innerHTML=`
    <h4>${p.name}</h4>
    <img src="${p.img}" class="w-100 mb-2">
    <p>${p.desc}</p>
    <div class="price">${p.price.toLocaleString()} đ</div>
    <button class="btn btn-danger w-100" onclick="addToCart(${p.id})">Thêm vào giỏ</button>`;
  new bootstrap.Modal(document.getElementById('productModal')).show();
}

function filterCategory(c){currentFilter=c;renderProducts();}
function searchProduct(){keyword=document.getElementById('searchInput').value.toLowerCase();renderProducts();}

function sortPrice(type){
  if(type==='asc') products.sort((a,b)=>a.price-b.price);
  if(type==='desc') products.sort((a,b)=>b.price-a.price);
  renderProducts();
}

function addToCart(id){
  let item=cart.find(i=>i.id===id);
  if(item) item.qty++; else cart.push({...products.find(p=>p.id===id),qty:1});
  updateCart();
}

function removeFromCart(id){cart=cart.filter(i=>i.id!==id);updateCart();}

function updateCart(){
  localStorage.setItem('cart',JSON.stringify(cart));
  document.getElementById('cartCount').innerText=cart.reduce((a,b)=>a+b.qty,0);

  let html=''; let total=0;
  cart.forEach(i=>{
    total+=i.price*i.qty;
    html+=`<div class='d-flex justify-content-between'>${i.name} x${i.qty} <span>${(i.price*i.qty).toLocaleString()} đ <button onclick='removeFromCart(${i.id})'>X</button></span></div>`;
  });

  document.getElementById('cartItems').innerHTML=html;
  document.getElementById('totalPrice').innerText=total.toLocaleString();
}

function openCart(){new bootstrap.Modal(document.getElementById('cartModal')).show();}

updateCart(); renderProducts();

