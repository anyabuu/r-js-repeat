export function searchWord (string) {

  return string.split(' ').reduce((prev, item) => {

    if (item.length > prev.length) {
      prev = item;
    }
    return prev
  })
}