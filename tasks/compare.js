export function compare(firstArr, secArr) {

  return firstArr.every((item, i) => {
    return firstArr.length === secArr.length && item === secArr[i]
  })
}