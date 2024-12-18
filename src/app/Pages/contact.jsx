// /pages/contact.js
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        Feel free to reach out to us for inquiries or feedback.
      </p>
      <ContactForm />
    </div>
  );
}
