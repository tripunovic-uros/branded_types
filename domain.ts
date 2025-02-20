import { z } from "zod";
import { DomainError } from "./exempel-bra";

const emailSchema = z.string().email()//.brand<'Email'>();
type Email = z.infer<typeof emailSchema>// & { readonly __brand: unique symbol };

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
