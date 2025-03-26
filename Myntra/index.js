let bagitem;
onload();

function onload(){
    let bagitemstr = localStorage.getItem('bagitem');
    bagitem = bagitemstr? JSON.parse(bagitemstr) : [];
    displaytohomepag();
    displaycount();
}

function addtobag(itemid) {
    bagitem.push(itemid);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    displaycount()

}
function displaycount() {
    let count = document.querySelector('.count');
    if (bagitem.length>0) {
    count.style.visibility = 'visible';
    count.innerText = bagitem.length;
    }else{
        count.style.visibility = 'hidden';
    }
}

function displaytohomepag(){
let itemsinfo = document.querySelector('.list-items');

let innerHTML='';
items.forEach(item => {
    innerHTML+= `<div class="item">
    <img class="item-image" src="${item.item_image}">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.reviews}k
    </div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">Rs. ${item.current_price}</span>
      <span class="orginal">Rs. ${item.orginal}</span>
      <span class="discount">(${item.discount}% OFF)</span></div>
    <div>
    <button class="add-items" onclick="addtobag(${item.id})">
        <i class="fa-solid fa-bag-shopping"></i>
        Add To Bag</button>
        </div>
    </div>`;
});

itemsinfo.innerHTML= innerHTML;
};