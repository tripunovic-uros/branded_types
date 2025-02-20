const emails = ['a@gmail.com', 'b@gmail.com', '...'];

function logstuff(emails: Email[]) { console.log(emails); }

class Email {
  readonly email: string;
  constructor(email: string) {
    this.email = email;
  }

  static isEmail(email: string) {
    if (email.endsWith('@gmail.com')) {
      return new Email(email);
    }
    // throw Error('Sorry my brotha');
  }
}

const validateClassEmails = emails.map(email => Email.isEmail(email));
const filterClassEmails = emails.filter(email => Email.isEmail(email)); //filter muterar inget och vi skapar en instans av email
console.log(filterClassEmails)
logstuff(validateClassEmails)
//Man behöver göra lite extra för att få rätt ryper på saker o ting, om valideringen kastar så måste vi fånga det eller hantera det
//och om vi hade velat använda string properties av email så hade vi varit tvugna att antingen "unwrappa" det eller skrvia Email.email osv.
