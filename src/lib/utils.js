export const formatPrice = (price) => {
  return `£${price.toLocaleString()}`;
};

export const cn = (...classes) => {
    return classes.filter(Boolean).join('');
}