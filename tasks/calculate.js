export function calculate(arr) {

  return arr.reduce((acc, curr) => {
    return acc + Math.pow(curr , 2)
  })
}