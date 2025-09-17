"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSneakyNumber(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let count = map.get(nums[i]) ?? 0;
        count++;
        map.set(nums[i], count);
    }
    let result = [];
    for (let entry of map.entries()) {
        if (entry[1] > 1) {
            result.push(entry[0]);
        }
    }
    return result;
}
function kidsWithCandies(nums, extracandies) {
    let max = Number.MIN_VALUE;
    for (let num of nums) {
        max = Math.max(num, max);
    }
    let result = [];
    for (let num of nums) {
        let tmp = num + extracandies;
        if (tmp >= max) {
            result.push(true);
        }
        else
            result.push(false);
    }
    return result;
}
function sumofString(str) {
    let sum = 0;
    for (let i = 1; i < str.length; i++) {
        let ch = str.codePointAt(i) ?? 0;
        let ch1 = str.codePointAt(i - 1) ?? 0;
        sum += Math.abs(ch - ch1);
    }
    return sum;
}
function defangingIpaddress(address) {
    let result = "";
    for (let i = 0; i < address.length; i++) {
        let ch = address.charAt(i);
        if (ch === ".") {
            result += "[.]";
        }
        else
            result += ch;
    }
    return result;
}
console.log(defangingIpaddress("1.1.1.1"));
function defangle(address) {
    let res = "";
    for (let ch of address.split("")) {
        if (ch === ".") {
            res += "[.]";
        }
        else
            res += ch;
    }
    return res;
}
console.log(defangle("1.1.1.1"));
function defangleOne(address) {
    return address.replaceAll(".", "[.]");
}
console.log(defangleOne("1.1.1.1"));
function interpret(command) {
    let result = "";
    let tmp = "";
    const map = new Map([
        ["G", "G"],
        ["()", "o"],
        ["(al)", "al"]
    ]);
    for (let ch of command) {
        tmp += ch;
        let translated = map.get(tmp);
        if (translated) {
            result += translated;
            tmp = "";
        }
    }
    return result;
}
function interpret02(command) {
    return command.replaceAll("()", "o").replaceAll("(al)", "al");
}
;
function numJewelsInStone(jewels, stones) {
    let count = 0;
    for (let ch of stones) {
        let check = jewels.includes(ch);
        if (check) {
            count++;
        }
    }
    return count;
}
console.log(numJewelsInStone("aA", "aAAbbbb"));
function IsConsistent(allowed, words) {
    for (let ch of words) {
        let check = allowed.includes(ch);
        if (!check) {
            return false;
        }
    }
    return true;
}
function countConsistent(allowed, words) {
    let count = 0;
    for (let word of words) {
        let consistent = IsConsistent(allowed, word);
        if (consistent) {
            count++;
        }
    }
    return count;
}
console.log(countConsistent("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));
function convertToBinary(num) {
    let binary = "";
    while (num > 0) {
        binary = num % 2 + binary;
        num = Math.trunc(num / 2);
    }
    return binary;
}
function convertDateToBinary(date) {
    let final = "";
    let dates = date.split("-");
    for (date of dates) {
        let str = Number.parseInt(date);
        let value = convertToBinary(str);
        final += value + "-";
    }
    let remove = final.slice(0, -1);
    return remove;
}
function convertDateBinary(date) {
    let result = [];
    let dates = date.split("-");
    for (date of dates) {
        let tmp = Number.parseInt(date);
        let value = convertToBinary(tmp);
        result.push(value);
    }
    return result.join("-");
}
console.log(convertDateToBinary("2080-02-29"));
console.log(convertDateBinary("2080-02-29"));
function largestlocal(data) {
    let m = data.length;
    let n = data[0] ? data[0].length : 0;
    let result = [];
    for (let i = 0; i < m - 2; i++) {
        let row = [];
        for (let j = 0; j < n - 2; j++) {
            let max = Number.MIN_VALUE;
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    max = Math.max(max, data?.[i + k]?.[j + l] ?? 0);
                }
            }
            row.push(max);
        }
        result.push(row);
    }
    return result;
}
console.log(largestlocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]));
function maxFreqSum(str) {
    let map = new Map();
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        let stars = str.charAt(i);
        let count = map.get(stars) ?? 0;
        count++;
        map.set(stars, count);
    }
    let maxVowelFreq = 0;
    let maxConsonantFreq = 0;
    map.forEach((freq, char) => {
        if (vowels.includes(char)) {
            maxVowelFreq = Math.max(maxVowelFreq, freq);
        }
        else {
            maxConsonantFreq = Math.max(maxConsonantFreq, freq);
        }
    });
    return maxVowelFreq + maxConsonantFreq;
}
console.log(maxFreqSum("aeiaeia"));
function runningSum(nums) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] ?? 0;
        result[i] = sum;
    }
    return result;
}
console.log(runningSum([1, 2, 3, 4]));
function reverseDegree(str) {
    let map = new Map([
        ["a", 26],
        ["b", 25],
        ["c", 24],
        ["d", 23],
        ["e", 22],
        ["f", 21],
        ["g", 20],
        ["h", 19],
        ["i", 18],
        ["j", 17],
        ["k", 16],
        ["l", 15],
        ["m", 14],
        ["n", 13],
        ["o", 12],
        ["p", 11],
        ["q", 10],
        ["r", 9],
        ["s", 8],
        ["t", 7],
        ["u", 6],
        ["v", 5],
        ["w", 4],
        ["x", 3],
        ["y", 2],
        ["z", 1]
    ]);
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let index = i + 1;
        let ch = str.charAt(i);
        let val = map.get(ch) ?? 0;
        result += val * index;
    }
    return result;
}
console.log(reverseDegree("abc"));
function reverse(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let map = new Map();
    for (let i = 0, val = 26; i < alphabet.length; i++, val--) {
        let ch = alphabet.charAt(i);
        map.set(ch, val);
    }
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let index = i + 1;
        let ch = str.charAt(i);
        let val = map.get(ch) ?? 0;
        result += val * index;
    }
    return result;
}
console.log(reverse("abc"));
console.info("Data is like data");
function smallerNumber(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let numI = nums[i] ?? 0;
        for (let j = 0; j < nums.length; j++) {
            let numJ = nums[j] ?? 0;
            if (numJ < numI) {
                count++;
            }
        }
        res[i] = count;
    }
    return res;
}
console.log(smallerNumber([8, 1, 2, 2, 3]));
function getMinIndex(nums) {
    if (nums.length === 0) {
        return -1;
    }
    let minValue = nums[0] ?? 0;
    let minIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        let numI = nums[i] ?? 0;
        if (numI < minValue) {
            minValue = numI;
            minIndex = i;
        }
    }
    return minIndex;
}
function getState(nums, k, mul) {
    for (let i = 0; i < k; i++) {
        let index = getMinIndex(nums);
        let num = nums[index] ?? 0;
        nums[index] = num * mul;
    }
    return nums;
}
//# sourceMappingURL=index.js.map