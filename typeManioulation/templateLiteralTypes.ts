type World = "world";

type Greeting = `hello ${World}`;

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// =>  "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  ): void;
};

type Greeting2 = "hello world";

type UpperCaseGreeting = Uppercase<Greeting2>;
// Capitalize, Uncapitalize, Lowercase
