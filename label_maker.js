let myInfo = {
  name : "Mohammed Bennis",
  address : "Parker Street",
  city : "Bronx",
  state : "New York",
  zip : "10462",
};
function printContact(myInfo) {
  console.log(myInfo.name)
  console.log(myInfo.address)
  
  //string concatination
  console.log(myInfo.city + ",",myInfo.state,myInfo.zip);


//template literal
console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
  
}
printContact(myInfo);