const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const ID = $("#8-Digit Employee ID");
    const Name = $("#Full Name");
    const Ext = $("#4-Digit Extension");
    const Email = $("#email_address");
    const Department = $("#department");

    let isValid = true;
    if (id.value == "") {
        id.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        id.nextElementSibling.textContent = " ";
    }

    if (fullName.value == " ") {
        fullName.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        fullName.nextElementSibling.textContent = " ";
    }

    if (ext.value == " ") {
        ext.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        ext.nextElementSibling.textContent = " ";
    }

    if (email.value == " ") {
        email.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        email.nextElementSibling.textContent = " ";
    }

    if (department.value == " ") {
        department.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    } else {
        department.nextElementSibling.textContent = " ";
    }

    if (isValid == true) {
        $("form").submit();
    }
};

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let addEmployeeForm = document.getElementById('addEmployeeForm');
let employeeCountCell = document.getElementById('employeeCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let currentEmployeeCount = parseInt(employeeCountCell.innerText);

// ADD EMPLOYEE
form.addEventListener("submit"), (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
}
    // GET THE VALUES FROM THE TEXT BOXES
    let newItem = document.getElementById('8-Digit Employee ID').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    let cellDelete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    const employeeIDCell = document.getElementById("8-Digit Employee ID");
    const fullNameCell = document.getElementById("Full Name");
    const extCell = document.getElementById("4-Digit Ext");
    const emailCell = document.getElementById("email_address");
    const departmentCell = document.getElementById("department");
    const text = document.createTextNode("Hello World!");

    cell.appendChild(text);
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    // APPEND DELETE BUTTON TO LI
    li.appendChild(deleteBtn)

    // RESET THE FORM
    const resetForm = () => {
        $("form").reset();
        $("#8-Digit Employee ID").nextElementSibling.textContent = "*";
        $("#Full Name").nextElementSibling.textContent = "*";
        $("#4-Digit Extension").nextElementSibling.textContent = "*";
        $("#email_address").nextElementSibling.textContent = "*";
        $("#department").nextElementSibling.textContent = "*";
        $("#email_address").focus();
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        $("#register").addEventListener("click", processEntries);
        $("#reset_form").addEventListener("click", resetForm);
        $("#email_address").focus();
    });

// document.getElementById('myForm').requestFullscreen();
    
// SET FOCUS BACK TO THE ID TEXT BOX
   // document.getElementById("myText").focus();

// DELETE EMPLOYEE
let count = 0; // Initializing the count variable

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
function addEmployee() {
  count++; // Increment count when a new employee is added
  updateCount();
}

function deleteEmployee() {
  if (count > 0) {
    count--; // Decrement count when an employee is deleted
    updateCount();
  }
}

function updateCount() {
    // Get the output tag element
    const outputTag = document.getElementById('output');
    
    // Display the count in the output tag
    outputTag.textContent = No. of (Employees); $(count); 
}

// Delete Row
    deleteRow(e.target.path-to-tr-tag.rowIndex) 
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // REMOVE THE SELECTED LI
        list.removeChild(e.target.parentElement)
        checkMessageDisplay()
    }
}
