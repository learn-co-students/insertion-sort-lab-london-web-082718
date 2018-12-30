function findMinAndRemove(array){
  let minimum = array[0]
  let minIndex = 0
  for (let i =0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return minimum
}

function insertionSort(array){
  let sorted = []
  let newMin
  while (array.length > 0) {
    let newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
