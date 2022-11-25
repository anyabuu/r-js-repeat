export function deleteDuplicate(arr) {

  return arr.reduce((accArr, curr) => {

    if (!accArr.includes(curr)) {
      accArr.push(curr)
    }
    return accArr
  }, [])
}