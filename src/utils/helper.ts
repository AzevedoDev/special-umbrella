export const slugify = (url: string | null | undefined) =>
  url?.replace(/(\s)/g, '-')

export const removeSlashesAndEmptySpaces = (url: string | null | undefined) =>
  slugify(url)?.replace(/-/g, '')

export const removeAccents = (url: string | null | undefined) =>
  url?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
