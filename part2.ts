//Branded types tillåter oss då att vid compile time skapa en unik identifierare av en typ
//utan att behöva skapa en behållare, en klass
type Brand<K, T> = K & { __brand: T }
type Firstname = Brand<string, "Firstname">
type Lastname = Brand<string, "Lastname">

//@ts-ignore
const first_name: Firstname = 'Uros';
const last_name: Lastname = 'Tripunovic' as Lastname;

function greeting(first_name: Firstname, last_name: Lastname) {
  console.log(`Greetings ${first_name} ${last_name}`);
}

console.log(greeting(first_name, last_name));
console.log(greeting(last_name, first_name));
//Jätte oklar för utvecklaren vad "Type 'Lastname' is not assignable to type '{ __brand: "Firstname"; }'." betyder
//man måste köra type assertions här
