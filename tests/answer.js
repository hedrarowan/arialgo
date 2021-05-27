var findMedianSortedArrays = function(nums1, nums2) {
  let sorted = nums1.concat(nums2).sort(function(a,b){return a - b})


  let indices;

  if(sorted.length % 2 === 0) {
      indices = [(sorted.length / 2) - 1, (sorted.length/2)]
  } else {
      indices = Math.floor(sorted.length/2)
  }



  if(Array.isArray(indices)) {
      return (sorted[indices[0]] + sorted[indices[1]]) / 2
  } else {
      return sorted[indices]
  }
};

module.exports = findMedianSortedArrays
