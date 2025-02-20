//Java tänk?
class Firstname {
  readonly first_name: string
  constructor(first_name: string) {
    //some validation
    this.first_name = first_name;
  }
}

class Lastname {
  readonly last_name: string
  constructor(last_name: string) {
    //some validation
    this.last_name = last_name;
  }
}


const first_name = new Firstname('Uros');
const last_name = new Lastname('Tripunovic');

function greeting(first_name: Firstname, last_name: Lastname) {
  console.log(`Greetings ${first_name} ${last_name}`);
}

console.log(greeting(first_name, last_name));
console.log(greeting(last_name, last_name));

//Onödigt att hålla en ett objekt utan beteende när vi egentligen bara vill beskriva en data typ
//TypeScript kommer behöva kompilera mer kod i onödan samt att klasser kan bli extended med Object.Prototype tror jag
//BONUS: Interfaces är mutable medan types är immutable

interface A {
  b: string
}

//Du kan slänga på hur mycket som helst efter att A har skapats
interface A {
  c: number
}

const test: A = { b: 'hehe', c: 10 };

type A1 = { b: string };
type A1 = { c: number }; //Går bara att skapa en gång
type B1 = A1 & { c: number }
const test1: B1 = { b: 'hehehe', c: 10 }
