import { z } from "zod";
import { DomainError } from "./exempel-bra";

const emailSchema = z.string().email().brand<'Email'>();
type Email = z.infer<typeof emailSchema> & {}
// & {} tvingar TypeScript att behandla typen på nytt istället för att bara använda z.infer som ett alias.
// Med & {} säger vi till TypeScript att expandera typen och ge den det namn vi sagt att den skall heta.

let unknown_string = 'hehe@email.com';

const createEmail = (value: unknown): Email => {
  // const email = emailSchema.safeParse(value);
  // if (!email.success) throw new DomainError('invalid email');
  // return email.data
  return emailSchema.parse(value)
}

const email = createEmail(unknown_string);

const echoEmail = (email: Email) => console.log(email);

echoEmail(email); //it just works
echoEmail('some@gmail.com');
