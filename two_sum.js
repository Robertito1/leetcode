var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
       let secondSum = target- nums[i]
       let value = nums.slice(i + 1).find(num => num === secondSum)
        if(value !== undefined){
            result.push(i, nums.indexOf(value, i + 1))
            break
        }
        continue
      }
      return result
};