export const sellProduct = async (user, _id, price, discount, name, postStoredProducts, addToBasket, discountPrice, navigateTo, toast) => {

    const currentPath = window.location.pathname;

    if (user?._id) {
        const result = await postStoredProducts({
            action: 'added',
            productId: _id,
            price: discountPrice(price, discount),
        });
        const data = {
            itemId: result.item,
            price: result.price,
            imageUrl: result.imageUrl,
            productType: result.productType,
            name: result.name,
            _id: result._id,
        };
        addToBasket(data);
        toast(`Артикул ${name} е добавен в количката.`);
    } else {
        toast('Трябва да се логнете преди да продължите.');
        navigateTo(`/login?redirect=${currentPath}`);
    }
};