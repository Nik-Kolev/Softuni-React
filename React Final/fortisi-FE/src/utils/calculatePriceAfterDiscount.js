export const discountPrice = (regularPrice, discount) => {
    return (regularPrice * ((100 - discount) / 100)).toFixed();
};

export const discountSave = (regularPrice, discount) => {
    return (regularPrice - regularPrice * ((100 - discount) / 100)).toFixed();
};
