const cartHelper = (cart, item) => {
  cart.isUpdated = false;

  if (cart.items?.length > 0) {
    let itemExist = cart.items.find((i) => i.id === item.id);
    let indexOf = cart.items.indexOf(itemExist);

    if (itemExist) {
      itemExist.quantity = itemExist.quantity + 1;
      cart.items.splice(indexOf, 1, itemExist);
      cart.isUpdated = true;
    } else {
      cart.items.push({ ...item, quantity: 1 });
    }
    cart.subTotal = 0;
    cart.grandTotal = 0;

    cart.items.forEach((element) => {
      cart.subTotal += +(+element.price) * +element.quantity;

      cart.grandTotal += +cart.subTotal + +cart.tax;
    });
  } else {
    cart.items.push({ ...item, quantity: 1 });
    cart.subTotal = +item.price;
    cart.grandTotal = +cart.subTotal + +cart.tax;
  }

  return cart;
};

export default cartHelper;

export const updateCartHelper = (cart, item, quantity) => {
  cart.isUpdated = false;

  let itemExist = cart.items.find((i) => i.id === item.id);
  let indexOf = cart.items.indexOf(itemExist);

  if (itemExist) {
    itemExist.quantity = quantity;
    cart.items.splice(indexOf, 1, itemExist);
  }

  cart.subTotal = 0;
  cart.grandTotal = 0;

  cart.items.forEach((element) => {
    cart.subTotal += +(+element.price) * +element.quantity;

    cart.grandTotal += +cart.subTotal + +cart.tax;
  });

  cart.isUpdated = true;

  return cart;
};

export const removeCartHelper = (cart, item) => {
  let indexOf = cart.items.indexOf(item);

  if (indexOf > -1) {
    cart.items.splice(indexOf, 1);
  }

  cart.subTotal = 0;
  cart.grandTotal = 0;

  cart.items.forEach((element) => {
    cart.subTotal += +(+element.price) * +element.quantity;

    cart.grandTotal += +cart.subTotal + +cart.tax;
  });

  return cart;
};
