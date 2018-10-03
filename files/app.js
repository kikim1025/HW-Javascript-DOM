// Check index of employee on employeeList. Return -1 if not found.
const checkIndexEmployee = function(employeeList, name) {
    let index = -1;
    for (let i = 0; i< employeeList.length; i++) {
        if (employeeList[i].name === name) {
            index = i;
        }
    }
    return index;
}

const showViewPage = function() {
    $("main").empty();
    $("main").append(`<div id="viewPage"></div>`);
    view("#viewPage", employeeList)
}

const view = function(id, employeeList) {
    for (let employee of employeeList) {
        $(id).append(`<div class= employeeBox>${employee.name}
                      <hr>${employee.officeNum}
                      <hr>${employee.phoneNum}</div>`);
    }
}

const showVerifyPage = function() {
    $("main").empty();
    $("main").append(`<input id="input-name" type="text" placeholder="name"/>
                      <button id="btn-verify">Verify</button>
                      <hr>
                      <div id="result"></div>`);
    $("#btn-verify").on("click", verify); //since cant event delegate with on function right now
}

const verify = function() {
    $("#result").empty();
    let name = $("#input-name").val();
    let answer = "no"; 
    console.log(checkIndexEmployee(employeeList, name));
    if (checkIndexEmployee(employeeList, name) !== -1) {
        answer = "yes";
    }
    $("#result").append(answer); 
} 

const showAddPage = function() {
    $("main").empty();
    $("main").append(`<input id="input-name" type="text" placeholder="name"/>
                      <input id="input-officeNum" type="text" placeholder="office number"/>
                      <input id="input-phoneNum" type="text" placeholder="phone number"/>
                      <button id="btn-add">Add</button>
                      <br>
                      <div id="viewPage"></div>`)
    $("#btn-add").on("click", add); //since cant event delegate with on function right now
}

const add = function() {
    $("#viewPage").empty();
    let name = $("#input-name").val();
    if (checkIndexEmployee(employeeList, name) !== -1) {
        alert("Employee already present!");
    } else {
        let officeNum = $("#input-officeNum").val();
        let phoneNum = $("#input-phoneNum").val();
        employeeList.push({name: name, officeNum: officeNum, phoneNum: phoneNum});
    }
    view("#viewPage", employeeList);
}

const showUpdatePage = function () {
    $("main").empty();
    $("main").append(`<input id="input-name" type="text" placeholder="name"/>
                      <input id="input-officeNum" type="text" placeholder="office number"/>
                      <input id="input-phoneNum" type="text" placeholder="phone number"/>
                      <button id="btn-update">Update</button>
                      <br>
                      <div id="viewPage"></div>`)
    $("#btn-update").on("click", update); //since cant event delegate with on function right now
}

const update = function() {
    $("#viewPage").empty();
    let name = $("#input-name").val();
    let index = checkIndexEmployee(employeeList, name);
    if (index !== -1) {
        employeeList[index].officeNum = $("#input-officeNum").val();
        employeeList[index].phoneNum = $("#input-phoneNum").val();
    } else {
        alert("Employee not present!");    
    }
    view("#viewPage", employeeList);
}

const showDeletePage = function () {
    $("main").empty();
    $("main").append(`<input id="input-name" type="text" placeholder="name"/>
                      <button id="btn-delete">Delete</button>
                      <br>
                      <div id="viewPage"></div>`)
    $("#btn-delete").on("click", deletee); //since cant event delegate with on function right now
}

const deletee = function() {
    $("#viewPage").empty();
    let name = $("#input-name").val();
    let index = checkIndexEmployee(employeeList, name);
    if (index !== -1) {
        employeeList.splice(index, 1);
    } else {
        alert("Employee not present!");    
    }
    view("#viewPage", employeeList);
}

$("#page-view").on("click", showViewPage);
$("#page-verify").on("click", showVerifyPage);
$("#page-add").on("click", showAddPage);
$("#page-update").on("click", showUpdatePage);
$("#page-delete").on("click", showDeletePage);

//initialize the main page with employee list
showViewPage();