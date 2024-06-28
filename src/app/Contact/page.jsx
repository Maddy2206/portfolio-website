"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Textarea } from "@/components/ui/textarea";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
          toast.success("Your message has been sent successfully", {
            position: "top-right",
          });
        },
        (error) => {
          setError(true);
          toast.error("Something went wrong", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ToastContainer position="top-right" />
      <div className="flex flex-col lg:flex-row gap-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-10 mb-10">
        {/* Text container */}
        <div className="flex items-center justify-center text-4xl lg:text-6xl">
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 lg:gap-8 bg-red-50 rounded-xl text-xl p-6 lg:p-12"
          style={{ maxWidth: "100%" }}
        >
          <span>Dear Medhansh,</span>
          <Textarea
            className="bg-transparent border border-black outline-none"
            name="user_message"
            placeholder="Enter your message"
          />

          <span>My Email address is</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Enter your email address"
            required
          />
          <Button className="self-start lg:self-center">Send</Button>
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
