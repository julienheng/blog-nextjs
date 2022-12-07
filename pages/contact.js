import ContactForm from "../components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get to know me!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
