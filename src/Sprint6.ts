
function leftSum(nums:number[]):number[]{
    let sum =0; 
    let left = []
    for(let i = 0; i < nums.length; i++){
        let num = nums[i] ?? 0
        left[i] = sum
        sum += num
    }
    return left; 
}

function rightSum(nums:number[]): number[]{
    let sum = 0; 
    let right = [] 
    for(let i = nums.length-1; i>=0; i--){
        let num = nums[i] ?? 0
        right[i] = sum; 
        sum += num
    }
    return right;
}

function final(nums: number[]):number[]{
    let leftArray = leftSum(nums)
    let rightArray = rightSum(nums)
    let finalArray = [] 
    let difference = 0;
    for(let i = 0; i< nums.length; i++){
        let left = leftArray[i] ?? 0
        let right = rightArray[i] ?? 0
        difference = Math.abs(left - right)
        finalArray[i] = difference

    }
    return finalArray
}

console.log(leftSum([10, 4, 8, 3]))
console.log(rightSum([10, 4, 8, 3]))
console.log(final([10, 4, 8, 3]))
console.log(final([1]))


function countPairs(nums: number[], target:number):number{
    let count = 0;
    for(let i = 0; i< nums.length; i++){
        let num = nums[i] ?? 0
        for(let j = i+1; j < nums.length; j++){
            let num1 = nums[j] ?? 0
            if(num + num1 < target){
                count++
            }
        }
    }
    return count; 

}
console.log(countPairs([-1,1,2,3,1], 2))


// Naive Approach

function findPermutationDifference(s: string, t: string): number {
    let sum = 0; 
    for(let i = 0; i<s.length; i++){
        let ch = s.charAt(i)
        for(let j = 0; j< t.length; j++){
            let cg = t.charAt(j)
            if(ch == cg){
                sum += Math.abs(i-j)
            }
        }
    }
    return sum;
    
};
console.log(findPermutationDifference("abc","bac"))

//Optimized 

function findPermutationDifferences(s:string, t: string ): number{
    let map = new Map()
    let sum = 0; 
    for(let i = 0; i < s.length; i++){
        let ch = s.charAt(i)
        map.set(ch, i)
    }
    for(let i = 0; i< t.length; i++){
        let ch = t.charAt(i)
        let j = map.get(ch)
        sum += Math.abs(i-j)
    }
    return sum;
}
console.log(findPermutationDifferences("abc","bac"))


function balancedStringSplits(str: string):number{
    let finalCount = 0
    let RCount = 0; 
    let LCount = 0
    for(let i =0; i < str.length; i++){
        let ch = str.charAt(i)
        if(ch == "R"){
            RCount++;
        }
        if(ch == "L"){
            LCount++
        }
        if(RCount === LCount){
            finalCount++
            RCount = 0 
            LCount = 0
        }
    }
    return finalCount;
}
console.log(balancedStringSplits("RLRRLLRLRL"))

function minMoves(seats: number[], students: number[]): number {
    let sumOfMoves = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    for (let i = 0; i < seats.length; i++) {
        let seat = seats[i] ?? 0;
        let student = students[i] ?? 0;
        let difference = Math.abs(seat - student);
        sumOfMoves += difference;
    }

    return sumOfMoves;
}
console.log(minMoves([3, 1, 5], [2, 7, 4]));

function maxWidthOfVertical(points: number[][]): number {
  points.sort((a, b) => a[0]! - b[0]!);
  let maxWidth = 0;

  for (let i = 1; i < points.length; i++) {
    const diff = points[i]![0]! - points[i - 1]![0]!;
    maxWidth = Math.max(maxWidth, diff);
  }

  return maxWidth;
}

console.log(maxWidthOfVertical([[8,7],[9,9],[7,4],[9,7]]))


function minOperations(nums:number[], k:number):number{
  let sum = 0; 
  let count = 0; 
  for(let i = 0; i < nums.length; i++){
    let num = nums[i] ?? 0
     sum += num
  }
  while( sum % k > 0){
     sum--
     count++
  }
  return count;
}

console.log(minOperations([3,9,7], 5 ))

function minOperations01(nums:number [], k:number){
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        let num = nums[i] ?? 0
        sum += num;
    }
    let remainder = sum % k

    return remainder;
}
console.log(minOperations01([3, 9, 7], 5))




function createTarget(index:number[], nums: number[]):number[]{
    let target: number[] = [];
    for(let i = 0; i < index.length; i++){
        let indx = index[i] ?? 0
        let num = nums[i] ?? 0
        target.splice(indx, 0, num)
    }
    return target 
}
console.log(createTarget([0,1,2,2,1],[0,1,2,3,4]))