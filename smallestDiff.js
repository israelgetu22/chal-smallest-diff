function returnDifference(arr1, arr2){
  let currentMin = Math.abs(arr1[0] - arr2[0]);

  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      let min = Math.abs(arr1[i] - arr2[j]);
      if (min < currentMin){
        currentMin = min;
      }
    }
  }
  return currentMin;
}

//Time complexity O(n^2)
//Space complexity O(1)?

Sefton Dockstader — Today at 11:18 AM
//smallest difference when a pair consists of one item from one array and one from the other array.
function smallestDifference(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let i = 0;
    let x = 0;
    let smallestDiff = Number.MAX_SAFE_INTEGER;
 
    while (i < arr1.length && x < arr2.length)
    {
        if (Math.abs(arr1[i] - arr2[x]) < smallestDiff)
            smallestDiff = Math.abs(arr1[i] - arr2[x])

        if (arr1[i] < arr2[x])
            i++;
        else
            x++;
    }
    return smallestDiff;
};



//smallest difference all inclusive
function smallestDifference(arr1, arr2){
    myArr = arr1.concat(arr2);
    myArr.sort();
    let smallestDiff = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < myArr.length; i++){
        if(Math.abs(myArr[i] - myArr[i+1]) < smallestDiff){
            smallestDiff = Math.abs(myArr[i] - myArr[i+1]);
        };
    };
    return smallestDiff;

    const takeway = (arr1, arr2) => {
      let differences = []
      for(let i = 0; i < arr1.length; i++) {
          for(let j = 0; j < arr2.length; j++) {
              if(arr1[i] >= arr2[j]){
                  let diff1 = arr1[i] - arr2[j]
                  differences.push(diff1)
              } else {
                  let diff2 = arr2[j] - arr1[i]
                  differences.push(diff2)
              }
          }   
      }
      let smallest = Math.min(...differences)
      return smallest
  } 