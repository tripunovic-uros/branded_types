// Normal types with functions
type Firstname = string;
type Lastname = string;
//Positivt med types finns bara under kompile time och inte run time, ser till att koden har rätt typer utan att behöva ta upp space

const first_name: Firstname = 'Uros';
const last_name: Lastname = 'Tripunovic';

function greeting(first_name: Firstname, last_name: Lastname) {
  console.log(`Greetings ${first_name} ${last_name}`);
}

console.log(greeting(first_name, last_name));
console.log(greeting(last_name, first_name)); //Whoops
//Dåligt om vi försöker göra något komplext med det för types är bara aliases.
//Kan leda till buggar

