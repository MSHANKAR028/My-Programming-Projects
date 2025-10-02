// Monday September 22nd 
 function numberOfMatches(teams: number):number{
    let sum = 0;
    while(teams > 1){
        let matches = Math.trunc(teams/2)
        sum+=matches
        teams = teams % 2 === 0 ? matches : matches+1
    }
    return sum;
 }
 console.log(numberOfMatches(7))

 class ArrayWrapper{
    private nums: number[]

    constructor(nums:number[]){
        this.nums = nums
    }
     valueOf(): number {
       let sum = 0;
       for(let num of this.nums){
        sum+= num
       }
       return sum
    }
    toString(): string {
        //return JSON.stringify(this.nums)
        return "["+this.nums.join(",")+ "]"
    }

 }

 function findClosest(x: number, y: number, z:number):number{
    let pos01 = Math.abs(x-z)
    let pos02 = Math.abs(y-z)
    if(pos01 < pos02){
        return 1
    }
    else if(pos02 < pos01){
        return 2
    }
    else
        return 0
 }
 console.log(findClosest(2,5,6))

 //Tuesday September 23th 

function multiple(num: number):number{
    if(num % 2 == 0 ){
        return num
    }
    else 
       return  num * 2
}
console.log(multiple(5))

function mutipleInOneLine(n:number):number{
    return n % 2 === 0 ? n : n * 2
}
console.log(mutipleInOneLine(5))

function naiveMutliple(num:number):number{
    let mutipleOfTwo = 2
    let mutipleOfN = num
    while( mutipleOfTwo !== mutipleOfN){
        if(mutipleOfTwo > mutipleOfN){
            mutipleOfN += num
        }
        else
            mutipleOfTwo += 2
    }
    return mutipleOfN
}
console.log(naiveMutliple(5))



class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumOfBT(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const leftSum = sumOfBT(root.left);
    const rightSum = sumOfBT(root.right);
    return root.val + leftSum + rightSum;
}
let  root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(8);

console.log(sumOfBT(root))



function rangeSum(root:TreeNode|null, low:number, high: number):number{
    if(!root){
        return 0;
    }
    let leftSum = rangeSum(root.left, low, high)
    let rightSum = rangeSum(root.right, low, high)
    let mySum = root.val >= low && root.val <= high ? root.val : 0

    return mySum+leftSum+rightSum;

}
let boot = new TreeNode(10)
boot.left = new TreeNode(5)
boot.right = new TreeNode(15)
boot.left.left = new TreeNode(3)
boot.left.right = new TreeNode(7)
boot.right.right = new TreeNode(18)
console.log(rangeSum(boot, 7, 15))


// Naive Version:
function smallerThanOthers(nums:number[]):number[]{
    let res:number[] = []
    for(let i = 0; i < nums.length; i++){
        let count = 0; 
        let numI = nums[i]?? 0
        for(let j = 0; j < nums.length; j++){
            let numJ = nums[j] ?? 0
            if(numJ < numI){
                count++;
            }
        }
        res.push(count)
    }
    return res;
}
console.log(smallerThanOthers([8,1,2,2,3]))

//Optimized:
function binary(arr:number[], start: number, end:number, target:number):number{
    let ans = -1
    while(start <= end){
        let mid = Math.trunc(start + (end-start)/2)
        let array = arr[mid] ?? 0
        if(array === target){
           ans = mid
           end = mid - 1
        }
        else if(array > target){
            end = mid - 1 
        }
        else {
            start = mid + 1
        }
    }
    return ans
}

function smallerThanOtherNumber(nums:number[]):number[]{
    let array = nums.toSorted()
    let res: number[] = [] 
    for( let num of nums){
        let count = binary(array, 0, array.length - 1, num)
        res.push(count)
    }
    return res
}
console.log(smallerThanOtherNumber([8,1,2,2,3]))

// Wednesday September 24th

class ParkingSystem{
    private big:number
    private med:number
    private small:number

    constructor(big:number, med:number, small:number){
        this.big = big
        this.med = med
        this.small = small 
    }
    addCar(Cartype:number):boolean{
        switch(Cartype){
            case 1: 
                if(this.big <= 0){
                return false 
            }
                this.big--
                return true
            case 2:
                if(this.med <= 0){
                    return false 
                }
                this.med--
                return true 
            case 3:
                if(this.small <= 0){
                    return false 
                }
                this.small--
                return true;
        }
        return false

    }

}

function decode(encoded:number[], first:number){
    let actual: number[] = []
    let tmp = first
    actual.push(first)
    for(let i = 0; i< encoded.length; i++){
        let encode = encoded[i] ?? 0
        tmp = tmp ^ encode
        actual.push(tmp)
    }
    return actual
}
console.log(decode([1,2,3],1))
function xorOperation(N: number, start: number): number {
    let array: number[] = []
    for (let i = 0; i < N; i++) {
        array.push(start + 2 * i)
    }

    let tmp = 0
    for (let i = 0; i < N; i++) {
        tmp ^= array[i] ?? 0
    }
    return tmp
}
console.log(xorOperation(5, 0))
//Thursday September 25th
function findCenter(graph: number[][]): number {
    let map = new Map<number, number>()
    for (let i = 0; i < graph.length; i++) {
        let edge: number[] = graph[i]!
        for (let j = 0; j < edge.length; j++) {
            let node = edge[j] ?? 0
            let count = map.get(node) ?? 0
            count++
            map.set(node, count)
        }
    }

    for (let entry of map.entries()) {
        let [key, value] = entry  
        if (value === graph.length) {
            return key
        }
    }
    return -1
}
console.log(findCenter([[1,2],[2,3],[4,2]]))

function getTargetCopy( original: TreeNode | null, copy: TreeNode | null,target: TreeNode | null): TreeNode | null {
    let queueOfOri: (TreeNode | null)[] = [];
    let queueOfCopy: (TreeNode | null)[] = [];

    queueOfOri.push(original);
    queueOfCopy.push(copy);

    while (queueOfOri.length > 0) {
        let oriNode = queueOfOri.shift();
        let copyNode = queueOfCopy.shift();

        if (oriNode === target) {
            return copyNode ?? null;
        }

        if (oriNode?.left !== null) {
            queueOfOri.push(oriNode!.left);
            queueOfCopy.push(copyNode!.left);
        }
        if (oriNode?.right !== null) {
            queueOfOri.push(oriNode!.right);
            queueOfCopy.push(copyNode!.right);
        }
    }
    return null;
}

// Friday September 26th 
function numberOfSteps(num:number):number{
    let count = 0
    while(num > 0){
        if(num % 2 == 0){
        num = Math.trunc(num/=2)
        count++
        }
        else{
            num-=1
            count++
        }
    }
    return count
}
console.log(numberOfSteps(14))

type Fn = (n: number, i: number) => any
function filter(arr: number[], fn: Fn): number[] {
    let res:number[] = []
    for(let i =0; i < arr.length; i++){
        let array = arr[i] ?? 0
        let bool = fn(array, i)
        if(bool){
            res.push(array)
        }
    }
    return res
};
console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }))

type Tn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Tn, init: number): number {
    let val = init
    for(let i = 0; i < nums.length; i++){
        let array = nums[i] ?? 0
        val = fn(val, array)
    }
    return val
};
console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; }, 0))