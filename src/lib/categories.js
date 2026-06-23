export const categoryPath = (slug) => `/category/${slug}`

export const listPath = (categorySlug, listSlug) =>
  `/category/${categorySlug}/${listSlug}`

export const findCategoryBySlug = (categories, slug) =>
  categories?.find((category) => category.slug === slug)

export const listCountLabel = (count) => {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} список`
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} списка`
  }

  return `${count} списков`
}
