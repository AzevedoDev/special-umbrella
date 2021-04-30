export const slugify = (url: string | null | undefined) =>
  url?.replace(/(\s)/g, '-')
