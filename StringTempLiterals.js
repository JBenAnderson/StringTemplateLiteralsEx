//create the array
const customerArray = [];

//Adding sample customer objects to array
customerArray.push({ name: "Eve", email: "eve@mit.edu", purchases: 7, id: 0 });

//prompt for customer login using string template literals in ES6
`Hello ${customerArray[0].name}, 
is your email still currently ${customerArray[0].email}?  
Thank you for your ${customerArray[0].purchases} purchases!
Your identification number is ${customerArray[0].id}.`;
