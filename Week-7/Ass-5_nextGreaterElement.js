// const arr = [1, 3, 2, 5, 4];
//----------bruit force-------------------------
// for (let i = 0; i < arr.length; i++) {
//   let next = -1;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       next = arr[j];
//       break;
//     }
//   }
//   console.log(arr[i], next);
// }
//-----------------------------------------

//using stack

// int[] findNextGreaterElement(int A[], int n)
// {
//     int ans[n]
//     for( i = 0 to n-1 )
//         ans[i] = -1
//     Create an integer stack S
//     S.push(0)
//     for ( i = 1 to n-1 )
//     {
//         while (S.empty()== False && A[S.top()] < A[i])
//         {
//             ans[S.top()] = A[i]
//             S.pop()
//         }
//         S.push(i)
//     }
//     return ans
// }

// const nextGreater = (arr, n) => {
//   let stack = [];
//   stack.push(0);
//   for (let i = 0; i < n; i++) {
//     while (stack.length != 0 && arr[stack[stack.length - 1]] < arr[i]) {
//       console.log(arr[i], stack.pop());
//     }
//     stack.push(i);
//   }
// };
// const arr = [12, 15, 0, 17, 10];
// nextGreater(arr, arr.length);
//------------------------------------using Stack--------------------------------

const nextGreater = (arr) => {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    while (stack.length) {
      if (arr[i] > stack[stack.length - 1]) {
        console.log(stack.pop(), arr[i]);
      } else break;
    }
    stack.push(arr[i]);
  }

  for (let val of stack) {
    console.log(val, -1);
  }
};

const arr = [1, 2, 0, 3, 5, 3];
nextGreater(arr);
