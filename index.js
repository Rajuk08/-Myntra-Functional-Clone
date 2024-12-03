// let wishlistItems;
// onLoad();

// function onLoad() {
//   let wishlistItemsStr = localStorage.getItem('bagItems');
//   wishlistItems = wishlistItemsStr ? JSON.parse(wishlistItemsStr) : [];
//   displayItemsOnHomePage();
//   displaywishlistIcon();
// }

// function addTowishlist(itemId) {
//   wishlistItems.push(itemId);
//   localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
//   displaywishlistIcon();
// }

// function displaywishlistIcon() {
//   let wishlistItemCountElement = document.querySelector('.wishlist-item-count');
//   if (wishlistItems.length > 0) {
//     console.log('I am here');
//     wishlistItemCountElement.style.visibility = 'visible';
//     wishlistItemCountElement.innerText = wishlistItems.length;
//   } else {
//     wishlistItemCountElement.style.visibility = 'hidden';
//   }
// }

let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}
