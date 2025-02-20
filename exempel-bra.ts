import type { Branded } from "./part2-1";

const emails = ['a@gmail.com', 'b@gmail.com', '...'];

type Email = Branded<string, 'Email'>;
const validatedEmails = emails.filter((email) => isEmail(email));

function isEmail(email: string): email is Email {
  return email.endsWith('@gmail.com');
}


function storeStuff(emails: Email[]) { console.log(emails); }

storeStuff(validatedEmails);
//Varför returnerar typen i detta filter då? Vi har en type guard som används tillsammans med type narrowing, typescript är smart nog
//till skillnad från att skapa ett nytt objekt av respektive typ
//En annan styrka med detta är att trots att vi har typen Email, vi kommer ha tillgång till alla string properties utan att behöva unwrappa något.
//För att få denna typsäkerhet så kräver det att allt är i predikatet som omvandlar string till email, dvs vi inte har as keyword t.ex.

const email: string = 'hej@gmail.com1'
if (isEmail(email)) {
  email
}
email
//Detta går att trixa vidare med asserts type narrowing om vi vill slippa allt i if-else block

export class DomainError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, DomainError.prototype);
  }
}
function assertEmail(email: string): asserts email is Email {
  if (!email.endsWith('@gmail.com')) {
    throw new DomainError('Domain error my guy');
  }
}
try {
  assertEmail(email)
  email
} catch (error: unknown) {
  if (error instanceof DomainError) {
    console.log(error.message)
  }
}
//Ser lite ut som våra domän objekt, kan vara nice speciellt om vi inte har logik i domän primitverna. 
//asserted type narrowing kräver att man kastar men type narrowing utan kräver att man är i korrekt if block eller bygger datatypen på ett specifikt sätt.

