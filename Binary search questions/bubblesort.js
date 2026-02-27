//   const arr=["pankaj","satyarth","satyam","pratik","priyanshu"];

//   for(let i=0;i < arr.length;i++){
//     for(let j=0;j < arr.length -i - 1;j++){
//         if(arr[j].toLowerCase() > arr[j+1].toLowerCase()){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
//   }

//   console.log(arr);


// console.log("2" > 1)

// console.log(null == undefined)
// console.log(null === undefined)


// const user = {
//   name: "Pankaj",
//   address: {
//     city: "Delhi"
//   }
// };

// const copyUser = { ...user };  // shallow copy

// copyUser.address.city = "Mumbai";

// console.log(user.address.city); 
// // ❌ Output: "Mumbai"



// const arr=[5, 2, 9, 1, 5, 6];


// const copyarr=[...arr];

// copyarr[2]=100;
// console.log(arr); // Original array remains unchanged
// console.log(copyarr); // Modified copy of the array


// console.log([] + {})

 const arr=[5, 2, 9, 1, 5, 6];
  arr.forEach((element) => {
    console.log(element +2);
  });

  arr.map((element) => {
    console.log(element);
  });


