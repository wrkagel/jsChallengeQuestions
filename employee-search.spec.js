// use the find method on arrays to implement the function

/*
COMPLETED
*/

function getEmployeeById(employees, id ){
    const found = employees.find(item => item.id == id);
    return found;
    // create a variable "found" and set it to employees.find (which is an array method)
    // "(element => element.property > comparrison)"
    // the test then runs based off of the "id" property
    // when that id is found it is then returned
    // could also be, return found = employees.find(item => item.id == id); to simplify
}

test("Find employee by id", ()=>{
    const employees = [{id:101,name:"Adam"},{id:202,name:"Sierra"},{id:303,name:"Ryan"},{id:404,name:"Tim"}];
    expect(getEmployeeById(employees,303)).toBe(employees[2])
})