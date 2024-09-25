function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  //Method 1 | Using Hash
  const hashMap: Set<string> = new Set();
  let maxCommonPrefix: number = 0;

  //Putting all possible of each element in arr1 into the Set
  for (let num of arr1) {
    // Converting to string
    let str: string = num.toString();

    for (let i = 1; i <= str.length; i++) {
      hashMap.add(str.substring(0, 1));
    }
  }

  console.log(hashMap);

  return maxCommonPrefix;
}

console.log(longestCommonPrefix([1, 10, 100], []));
