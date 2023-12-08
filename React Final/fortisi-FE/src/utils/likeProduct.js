export const likeProduct = async (user, isLiked, setIsLiked) => {
    if (user?._id) {
        setIsLiked(!isLiked);
        const response = await likeProduct({
            isLiked,
            productDetails: { imageUrl, productType, price, name, _id, discount, category },
            userId: user._id,
        });
        toast(response);
    }
}