// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6



var trap = function(height) {
  let area = 0
  if(height.length === 1) {return 0}
  const search = (baseline, toTraverse) => {
    if(toTraverse.length === 0) {return}
    let i = 0
    while (toTraverse[i] === baseline) {i++}
    if(i !== 0) {i--}
    let j = i + 1
    let count = 0
    let anomoly = 0
    while (toTraverse[j] < toTraverse[i]) {
      if (toTraverse[i] - toTraverse[j] !== toTraverse[i]) {
        anomoly += toTraverse[i] - (toTraverse[i] - toTraverse[j])
      }
      count++
      j++
    }
    if (j !== toTraverse.length) {
      area += toTraverse[i] * count - anomoly
      search(toTraverse[j], toTraverse.slice(j, toTraverse.length))
    } else {
      search(toTraverse[i + 1], toTraverse.slice(i + 1, toTraverse.length))
    }
  }
  search(0, height)
  return area
};