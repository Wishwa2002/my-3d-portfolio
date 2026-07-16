import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const serviceId =
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

  const templateId =
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

  const publicKey =
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  console.log("EmailJS configuration:", {
    serviceId,
    templateId,
    publicKeyLoaded: Boolean(publicKey),
  });

  if (!serviceId || !templateId || !publicKey) {
    alert("EmailJS environment variables are missing.");
    return;
  }

  setLoading(true);

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: form.name,
        from_email: form.email,
        to_name: "Wishwa Wijayananda",
        to_email: "jananawishwa69@gmail.com",
        message: form.message,
        reply_to: form.email,
      },
      {
        publicKey,
      }
    );

    console.log("Email sent:", result.status, result.text);

    alert(
      "Thank you. I will get back to you as soon as possible."
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS status:", error.status);
    console.error("EmailJS message:", error.text);
    console.error("Complete error:", error);

    alert(
      `Email failed: ${error.text || "Unknown EmailJS error"}`
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      className="mt-20 w-full px-5 sm:px-10 md:px-16 xl:mt-40 xl:px-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-10 xl:flex-row">
        {/* Contact form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="w-full rounded-2xl bg-black-100 p-8 xl:flex-[0.75]"
        >
          <p className={styles.sectionSubText}>Get in touch</p>

          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">
                Your Name
              </span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                required
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">
                Your Email
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>

            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">
                Your Message
              </span>

              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                className="resize-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth animation */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="h-[350px] w-full md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;