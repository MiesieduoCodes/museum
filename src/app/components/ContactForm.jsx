// /components/ContactForm.js
export default function ContactForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form submitted!");
    };
  
    return (
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  }
  