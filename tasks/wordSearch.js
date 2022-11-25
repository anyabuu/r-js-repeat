export function wordSearch (string) {

  return string.split(' ').reduce((prev, item) => {

    if (item.length > prev.length) {
      prev = item;
    }
    return prev
  })
}