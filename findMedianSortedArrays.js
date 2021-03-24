var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b)
    if(mergedArray.length % 2 !== 0){   
        return mergedArray[(mergedArray.length - 1)/2 ]
    }
    return (mergedArray[mergedArray.length/2] + mergedArray[(mergedArray.length/2) - 1])/2
};

console.log(findMedianSortedArrays([1,2], [3]))