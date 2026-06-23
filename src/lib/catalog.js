import axios from 'axios'

const catalogUrl = `${import.meta.env.BASE_URL}data/catalog.json`
const listUrl = (slug) => `${import.meta.env.BASE_URL}data/lists/${slug}.json`

export const loadCatalog = () => axios.get(catalogUrl).then((res) => res.data)

export const loadListAnswers = (slug) =>
  axios.get(listUrl(slug)).then((res) => res.data.answers ?? [])

export const loadFullList = async (catalog, slug) => {
  const stub = findListBySlug(catalog, slug)
  if (!stub) {
    return null
  }

  const answers = await loadListAnswers(slug)
  return {...stub, answers}
}

export const getListsForCategory = (catalog, categorySlug) =>
  (catalog?.lists ?? []).filter((list) =>
    list.categories?.includes(categorySlug)
  )

export const getCategoriesWithLists = (catalog) => {
  if (!catalog?.categories) {
    return []
  }

  return catalog.categories.map((category) => ({
    ...category,
    lists: getListsForCategory(catalog, category.slug),
  }))
}

export const findListBySlug = (catalog, listSlug) =>
  catalog?.lists?.find((list) => list.slug === listSlug)

export const getListInCategory = (catalog, categorySlug, listSlug) => {
  const list = findListBySlug(catalog, listSlug)
  if (!list?.categories?.includes(categorySlug)) {
    return null
  }

  return list
}
