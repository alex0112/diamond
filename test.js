let fs = require('familysearch-javascript-sdk');

console.log("fs----------------------------");
console.log(fs);
console.log("----------------------------");



// Authenticate:

let client = new fs.FamilySearch({
    client_id: 'a02f100000PUJl5AAH',
    environment: 'integration',
    access_token: 'SOME_ACCESS_TOKEN'
});

console.log("client----------------------------");
console.log(client);
console.log("----------------------------");


client.getAccessToken().then(function(accessToken) {
  client.getCurrentUser().then(function(response) {
    let user = response.getUser();
    console.log('Hello ' + user.getContactName());
  });
});


// Get a person (start with user)

// Does that person have incomplete ordinances?  Add them to incomplete ordinances list
/* 
   if (person.allOrdinances == true) {
   push(needsOrdinances, person);
   }
 */


// Is that person missing one or both parents?  Add them to the work to be completed list.
/* 
   if (person.getMother == null) {
   person.needsMother = true;
   push(needsParent, person);
   }
   if (person.getFather == null) {
   person.needsFather = true;
   push(needsParent, person);
   }

 */


