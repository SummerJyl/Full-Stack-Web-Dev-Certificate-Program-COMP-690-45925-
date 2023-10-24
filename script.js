// form.addEventListener('submit', (e) => {

// });

// /eslint - env browser*/

// var i, h2, div, h2Elements, faqs;
    
// var $ = function (id) {
//     "use strict";
//     return window.document.getElementById(id);
// };

// var toggle = function(e) {
//     "use strict";
//     h2 = e.currentTarget;
//     div = h2.nextElementsSibling;
//     h2Elements = faqs.getElementByTagName("employees");
//     for (let i = 0; i < h2Elements.length; i += 1) {
//         if (h2Elements[i] !== e.currentTarget) {
//             h2Elements[i].removeAttributes("class");
//             h2Elements[i].nextElementsSibling.removeAttributes("class")
//         }
// }
// if (h2.hasAttribute("class")) {
//     h2.removeAttributes("class");
// } else {
//     h2.setAttribute("class", "minus");
// }
// if (div.hasAttribute("class")) {
//     div.removeAttributes("class");
// } else {
//     div.setAttribute("class", "minus");
//     }
// };    
// let selectRow = null;

// function onFormSubmit() {
//   let formData = readFormData();
//   if (selectRow == null) insertNewRecord(formData);
//   else updateRecord(formData);
//   resetForm();
// }
// function readFormData() {
//     var formData = {};
//     formData["name"] = document.getElementById("8-digit id").value;
//     formData["city"] = document.getElementById("full name").value;
//     formData["salary"] = document.getElementById("4-digit extension").value;
//     formData["city"] = document.getElementById("email").value;
//     formData["salary"] = document.getElementById("select department").value;
//     console.log(formData);
//     return formData;
//   }  
// function readFormData() {
//     var formData = {};
//     formData["id"] = document.getElementById("id").value;
//     formData["name"] = document.getElementById("name").value;
//     formData["ext"] = document.getElementById("ext").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["department"] = document.getElementById("department").value;
//     console.log(formData);
//     return formData;
//   }
// function insertNewRecord(data) {
//     let table = document
//       .getElementById("empList")
//       .getElementsByTagName("tbody")[0];
//     let newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.name;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.ext;
//     cell4 = newRow.insertCell(3);
//     cell3.innerHTML = data.email;
//     cell4 = newRow.insertCell(4);
//     cell3.innerHTML = data.department;
//     cell4 = newRow.insertCell(5);
//     cell3.innerHTML = data.delete;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
//   }


// // Load event:

// // window.addEventListener('load', function() {
// // // Code to be executed when the page finishes loading
// //     console.log('Page loaded');
// //   });

// // <script>
// //     let myVariable = "getAllFormElements";
// //     console.log(myVariable);
// //         </script>

// // // Get the form element
// // const form = document.querySelector('form');

// // // Create a submit event listener for the form
// // form.addEventListener('submit', function(event) {

// // // Your code to handle the form submission goes here
// // });        

// // // Get the form element
// // const form = document.getElementById("addForm");

// // // Add event listener for form submission
// // form.addEventListener("submit", function(event) {

// // // Prevent the form from submitting
// //   event.preventDefault();

// //   // Get all the form elements
// //   const inputs = form.elements;

// // // Create an object to store the values
// //   const values = {};

// // // Loop through each form element
// //   for (let i = 0; i < inputs.length; i++) {

// //     // Get the current form element
// //     const input = inputs[i];

// // // Ignore form elements without a name attribute
// //     if (!input.name) {
// //       continue;
// //     }

// // // Add the value to the values object
// //     values[input.name] = input.value;
// //   }

// // // Display the values in the console
// //   console.log(values);
// // });