export const getIngredientImgName = (ingredient) => {
  return ingredient.image.slice(20).slice(0, -4);
};
