"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function leftSum(nums) {
    let sum = 0;
    let left = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] ?? 0;
        left[i] = sum;
        sum += num;
    }
    return left;
}
function rightSum(nums) {
    let sum = 0;
    let right = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i] ?? 0;
        right[i] = sum;
        sum += num;
    }
    return right;
}
function final(nums) {
    let leftArray = leftSum(nums);
    let rightArray = rightSum(nums);
    let finalArray = [];
    let difference = 0;
    for (let i = 0; i < nums.length; i++) {
        let left = leftArray[i] ?? 0;
        let right = rightArray[i] ?? 0;
        difference = Math.abs(left - right);
        finalArray[i] = difference;
    }
    return finalArray;
}
console.log(leftSum([10, 4, 8, 3]));
console.log(rightSum([10, 4, 8, 3]));
console.log(final([10, 4, 8, 3]));
console.log(final([1]));
function countPairs(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] ?? 0;
        for (let j = i + 1; j < nums.length; j++) {
            let num1 = nums[j] ?? 0;
            if (num + num1 < target) {
                count++;
            }
        }
    }
    return count;
}
console.log(countPairs([-1, 1, 2, 3, 1], 2));
// Naive Approach
function findPermutationDifference(s, t) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        for (let j = 0; j < t.length; j++) {
            let cg = t.charAt(j);
            if (ch == cg) {
                sum += Math.abs(i - j);
            }
        }
    }
    return sum;
}
;
console.log(findPermutationDifference("abc", "bac"));
//Optimized 
function findPermutationDifferences(s, t) {
    let map = new Map();
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        map.set(ch, i);
    }
    for (let i = 0; i < t.length; i++) {
        let ch = t.charAt(i);
        let j = map.get(ch);
        sum += Math.abs(i - j);
    }
    return sum;
}
console.log(findPermutationDifferences("abc", "bac"));
function balancedStringSplits(str) {
    let finalCount = 0;
    let RCount = 0;
    let LCount = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch == "R") {
            RCount++;
        }
        if (ch == "L") {
            LCount++;
        }
        if (RCount === LCount) {
            finalCount++;
            RCount = 0;
            LCount = 0;
        }
    }
    return finalCount;
}
console.log(balancedStringSplits("RLRRLLRLRL"));
function minMoves(seats, students) {
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
function maxWidthOfVertical(points) {
    points.sort((a, b) => a[0] - b[0]);
    let maxWidth = 0;
    for (let i = 1; i < points.length; i++) {
        const diff = points[i][0] - points[i - 1][0];
        maxWidth = Math.max(maxWidth, diff);
    }
    return maxWidth;
}
console.log(maxWidthOfVertical([[8, 7], [9, 9], [7, 4], [9, 7]]));
function minOperations(nums, k) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] ?? 0;
        sum += num;
    }
    while (sum % k > 0) {
        sum--;
        count++;
    }
    return count;
}
console.log(minOperations([3, 9, 7], 5));
function minOperations01(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] ?? 0;
        sum += num;
    }
    let remainder = sum % k;
    return remainder;
}
console.log(minOperations01([3, 9, 7], 5));
function createTarget(index, nums) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        let indx = index[i] ?? 0;
        let num = nums[i] ?? 0;
        target.splice(indx, 0, num);
    }
    return target;
}
console.log(createTarget([0, 1, 2, 2, 1], [0, 1, 2, 3, 4]));
function maxWords(sentences) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i] ?? " ";
        let word = sentence.split(" ");
        let count = word.length;
        max = Math.max(count, max);
    }
    return max;
}
console.log(maxWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
function reversePrefix(word, ch) {
    let pos = word.indexOf(ch);
    if (pos === -1) {
        return word;
    }
    let result = "";
    for (let i = pos; i >= 0; i--) {
        let char = word.charAt(i);
        result += char;
    }
    for (let i = pos + 1; i < word.length; i++) {
        let char = word.charAt(i);
        result += char;
    }
    return result;
}
console.log(reversePrefix("abcdefd", "d"));
function minOperationsThreshold(nums, k) {
    let count = 0;
    for (let num of nums) {
        if (num < k) {
            count++;
        }
    }
    return count;
}
console.log(minOperationsThreshold([2, 11, 10, 1, 3], 10));
function countBit(num) {
    let countBit = 0;
    while (num > 0) {
        if (num % 2 == 1) {
            countBit++;
        }
        num = Math.trunc(num / 2);
    }
    return countBit;
}
function sumOfTheIndicies(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] ?? 0;
        let value = countBit(i);
        if (value === k) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfTheIndicies([5, 10, 1, 5, 2], 1));
function truncateSentence(strs, k) {
    let words = strs.split(" ");
    let Kwords = [];
    for (let i = 0; i < k; i++) {
        let word = words[i] ?? "";
        Kwords.push(word);
    }
    let final = Kwords.join(" ");
    return final;
}
console.log(truncateSentence("Hello how are you Contestant", 4));
function truncateSentences(strs, k) {
    let words = strs.split(" ");
    words.splice(k, words.length - k);
    return words.join(" ");
}
console.log(truncateSentences("Hello how are you Contestant", 4));
function decompress(nums) {
    let result = [];
    for (let i = 1; i < nums.length; i += 2) {
        let freq = nums[i - 1] ?? 0;
        let val = nums[i] ?? 0;
        for (let t = 0; t < freq; t++) {
            result.push(val);
        }
    }
    return result;
}
console.log(decompress([1, 2, 3, 4]));
function removeOuterParenthesis(str) {
    let result = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch === "(") {
            if (count !== 0) {
                result += ch;
            }
            count++;
        }
        if (ch === ")") {
            count--;
            if (count !== 0) {
                result += ch;
            }
        }
    }
    return result;
}
console.log(removeOuterParenthesis("(()())(())"));
function countGoodTrplets(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrI = arr[i] ?? 0;
        for (let j = i + 1; j < arr.length; j++) {
            let arrJ = arr[j] ?? 0;
            for (let k = j + 1; k < arr.length; k++) {
                let arrK = arr[k] ?? 0;
                if (Math.abs(arrI - arrJ) <= a && Math.abs(arrJ - arrK) <= b && Math.abs(arrI - arrK) <= c) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(countGoodTrplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
function stableMountains(heights, threshold) {
    let final = [];
    for (let i = 1; i < heights.length; i++) {
        let previous = heights[i - 1] ?? 0;
        if (previous > threshold) {
            final.push(i);
        }
    }
    return final;
}
console.log(stableMountains([1, 2, 3, 4, 5], 2));
function arrayStringsEqual(word1, word2) {
    let combinedWord1 = word1.join("");
    let combinedWord2 = word2.join("");
    return combinedWord1 === combinedWord2;
}
console.log(arrayStringsEqual(["ab", "c"], ["a", "bc"]));
function sumOfSubarray(nums, start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        let numsI = nums[i] ?? 0;
        sum += numsI;
    }
    return sum;
}
function sumOfVariable(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let numI = nums[i] ?? 0;
        let end = i + 1;
        let start = Math.max(0, i - numI);
        sum += sumOfSubarray(nums, start, end);
    }
    return sum;
}
console.log(sumOfVariable([2, 3, 1]));
function goodNumbers(num1, num2, k) {
    let count = 0;
    for (let i = 0; i < num1.length; i++) {
        let numI = num1[i] ?? 0;
        for (let j = 0; j < num2.length; j++) {
            let numJ = num2[j] ?? 0;
            let divisor = numJ * k;
            if (divisor !== 0 && numI % divisor === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(goodNumbers([1, 3, 4], [1, 3, 4], 1));
function decodeTheString(key, message) {
    let map = new Map();
    map.set(" ", " ");
    let i = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let ch of key) {
        if (map.get(ch)) {
            continue;
        }
        let val = alphabet.charAt(i);
        i++;
        map.set(ch, val);
    }
    let decipherMessage = "";
    for (let ch of message) {
        let val = map.get(ch);
        decipherMessage += val;
    }
    return decipherMessage;
}
console.log(decodeTheString("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
function countDigits(num) {
    let str = "" + num;
    let count = 0;
    for (let ch of str) {
        let val = Number.parseInt(ch);
        if (val !== 0 && num % val === 0) {
            count++;
        }
    }
    return count;
}
console.log(countDigits(1248));
function minimumSum4Digits(num) {
    let str = "" + num;
    let arr = str.split("");
    arr.sort();
    console.log(arr);
    let arr0 = Number.parseInt(arr[0] ?? "0");
    let arr1 = Number.parseInt(arr[1] ?? "0");
    let arr2 = Number.parseInt(arr[2] ?? "0");
    let arr3 = Number.parseInt(arr[3] ?? "0");
    let new1 = arr0 * 10 + arr2;
    let new2 = arr1 * 10 + arr3;
    let sum = new1 + new2;
    return sum;
}
console.log(minimumSum4Digits(2932));
//# sourceMappingURL=Sprint6.js.map