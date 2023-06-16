// Write your solution in this file!
let employee = {
    name : 'Kennedy Mwalyo' ,
    StreetAddress : 'Matuu'
};
 function updateEmployeeWithKeyAndValue(employee ,name ,StreetAddress){
    let updatedemployee = {... employee};
   updatedemployee.name = 'John'
   return updatedemployee;
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee ,name ,StreetAddress){
  employee.name = 'Jake'
  return employee;
 }
 function deleteFromEmployeeByKey(employee , name , StreetAddress){
    let employee = {
        name : 'Kennedy Mwalyo' ,
        StreetAddress : 'Matuu'
    };
    let deletdob = {...employee}
    delete deletdob.name;
    return deletdob;
 }
 function destructivelyDeleteFromEmployeeByKey(employee , name ,StreetAddress){
    delete employee.name;
    return employee;
 }