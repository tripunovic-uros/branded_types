declare const __brand: unique symbol;
export type Branded<T, Brand> = T & { [__brand]: Brand };

type Firstname = Branded<string, "Firstname">
type Lastname = Branded<string, "Lastname">

const first_name: Firstname = 'Uros' as Firstname;
const last_name: Lastname = 'Tripunovic' as Lastname;

function greeting(first_name: Firstname, last_name: Lastname) {
  console.log(`Greetings ${first_name} ${last_name}`);
}

console.log(greeting(first_name, last_name));
console.log(greeting(last_name, first_name));
//Jätte oklar för utvecklaren vad "Type 'Lastname' is not assignable to type '{ __brand: "Firstname"; }'." betyder
//Att ha strängar som branding är inte så jätte säkert då man kan råka skriva samma grej 2 gånger
//Dock behöver man fortfarande type asserta
//Varför vill vi ha branded types? Jo ibland vill vi bara beskriva en datatyp minus all overhead
//Om vi vill validera saker så är klasser klart mycket bättre men om vi vill t.ex. bara unika strängar av env variabler
//Då kan vi slippa allt bök som tillkommer med onödig boilare plate kod samt att vi lättar på runtime.
