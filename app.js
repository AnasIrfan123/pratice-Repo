// //Get the references to the input fields and the button
// var titleInput = document.getElementById('title');
// var descriptionInput = document.getElementById('description');
// var submitButton = document.getElementById('submitBtn');
// var deleteButton = document.getElementById('deleteBtn');

// // Create an empty array to store the data
// const arr = [];

// // Button click event handler
// submitButton.addEventListener('click', function () {
//     // Get the values of title and description
//     var titleValue = titleInput.value;
//     var descriptionValue = descriptionInput.value;

//     // Create an object to store the data
//     const obj = {
//         title: titleValue,
//         description: descriptionValue
      
//     };

//     // Push the object to the array
//     arr.push(obj);

//     // Print the array to the console
//     console.log(arr);

// });

// deleteButton.addEventListener('click', function () {
//    if (arr.length > 0) {
//     const deletedData = arr.pop();
//     console.log(deletedData);
//    }
// });


// NEW ES6 ADVANCE JAVA **************

// let names = 'Anas';
// console.log(`my name is ${names}`);

// let fruits = 500;
// fruits > 300 ? console.log('per kg 500 rs only'): console.log('thank you purchase 1 kg mix friuts'); //ye ternary operator ha jis sy easily kam time me kam ho jata ha

//ye else if condition
// totalAssets = 30000;
// totalAssets > 50000 ? console.log('shaddi mubarak'): totalAssets > 25000 ? console.log('guzara bhot muskil ha'): console.log('larka kamata nh ha nikamma ha');

//ye else if condition ternary oper ha agr total assets ki value 50000 thou s ziada hogi to shadi mubrak warna else if condi agr or kam hoe to else condi

// var name1 = 'ans'  //make the variable
// var name1 = 'anas'   // re declare the variable (true)
// name1 = 'Anas'    //re assign the variable  (true)
// console.log(name1);   //var me ye sb ho jayega 

// let name2 = 'an'       //make the variable
// /*let name2 = 'anas' */ // let re declare the variable (false)
// name2 = 'Anas'      // let re assign the variable (true)
// console.log(name2); //  consol me re assign wali value ayegi

//let re declare krne nh deta // re assign kr sakte ha

// const name3 = 'Anas'   //make the variable
// /* const name3 = 'a'  // const   re declare  (false)
// name3 = 'ana' */     //const   re assign the variable  (false)
// console.log(name3);

//const me na he re declare ho sakta ha na he re assign 

//  .../ spread oper
// const arr = [1, 2, 3, 4]
// const arr2 = [...arr, 5, 6, 7]
// console.log(arr2);//arr k andr arr2 ki value a jayegi spread oper sy (ye 1 arry k andr 2sre arry ki value mtlb 2sra arry a rha ha 2 arry merge ho gaya ha)

//    rest oper
// function sumVal(...num) {
//     console.log(num);
// }
// sumVal (1,2,3,4,5,6,7); // ye 1 func sy rest opera sy 1 arr banalya ha 


// ---------------------------------------------------------------------


function onRegistered(){

    // Sabhi input fields ko hasil karo
   const allInputs = document.getElementsByTagName('input')
   const FullName = allInputs[0]
   const Email = allInputs[1]
   const Password = allInputs[2]
   const ConfirmPasswird = allInputs[3]
   
   if (!FullName.value || !Email.value || !Password.value || !ConfirmPasswird.value) {
       alert('please filled the all  input fields')
       return
   }

   if (FullName.value.length < 3) {
       alert('please insert your FullName with minimum 3 letters!')
       return
   }
   //email condition

   // Validate email format
   if (!isValidEmail(Email.value)) {
       alert('Please insert a proper email');
       return;
   }
   
   function isValidEmail(Email) {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(Email);
   }

   if (Password.value !== ConfirmPasswird.value) {
       alert('password is not matchable with confirm password')
       return  
   } 
   console.log(FullName.value);
   console.log(Email.value);
   console.log(Password.value);
   
   // Ek users array banayein
   let users = [];
   
   // User object ko tayar karein
   user = {
       fullName: FullName.value,
       email: Email.value,
       password: Password.value
   }
   // User object ko users array mein daal kar store karein
   users.push(user)
   
   // Users array ko console par print karein
   console.log(users);
   
   for (var i = 0; i < allInputs.length; i++) {
       allInputs[i].value = ''         //clear the all inputs fields
   }
}

