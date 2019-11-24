export function importAll(r) {
  const images = {}
  r.keys().map(item => {
    images[item.replace('./', '')] = r(item)
    return item
  })
  return images
}
