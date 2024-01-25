"use client"
import React, { FormEventHandler, useRef } from "react";
import useInput from "../hooks/use-input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fadeIn } from "../variants";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import Link from "next/link";
import { MotionDiv, MotionForm } from "../motionsDev";


const toastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const inputIsNotEmpty = (value: string): boolean => value.trim().length > 0;
  const emailIsNotEmpty = (value: string): boolean =>
    value.includes("@") && value.trim().length > 1;

  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(inputIsNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailIsNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageInputIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(inputIsNotEmpty);

  let isFormValid = false;
  if (nameInputIsValid && emailInputIsValid && messageInputIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetMessageInput();

    console.log("Form submitted");
    emailjs
      .sendForm(
        "service_edqe2lb",
        "template_bcf4t7l",
        form.current as unknown as HTMLFormElement,
        "H7vIAHifEiSRhOFza"
      )
      .then(
        (result) => {
          toast.success("Your message has been received!", toastConfig);
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong!", toastConfig);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <MotionDiv
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-start flex-1"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase pointer-events-none text-accent">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 pointer-events-none">
                Let&apos;s work <br />
                together
              </h2>
            </div>
          </MotionDiv>
          <MotionForm
            ref={form}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={formSubmitHandler}
            className="flex flex-col items-start flex-1 p-6 pb-24 border shadow-md rounded-2xl gap-y-6 shadow-white "
          >
            <input
              className={` !bg-transparent border-b py-3 outline-none w-full
              ${nameInputHasError
                  ? "placeholder:text-pink-600"
                  : "placeholder:text-white"
                } focus:border-accent transition-all `}
              type="text"
              name="name"
              value={enteredName}
              placeholder={`${nameInputHasError ? "Must NOT be empty!" : "Your Name"
                }`}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              required
            />
            <input
              className={` !bg-transparent border-b py-3 outline-none w-full
               ${emailInputHasError
                  ? "placeholder:text-pink-600"
                  : "placeholder:text-white"
                } focus:border-accent transition-all `}
              type="email"
              name="email"
              value={enteredEmail}
              placeholder={`${emailInputHasError ? "Must NOT be empty!" : "Your Email"
                }`}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
            />
            <textarea
              className={`!bg-transparent border-b py-3 outline-none w-full
              ${messageInputHasError
                  ? "placeholder:text-pink-600"
                  : "placeholder:text-white"
                } focus:border-accent transition-all resize-none mb-12 `}
              name="message"
              value={enteredMessage}
              placeholder={`${messageInputHasError ? "Must NOT be empty!" : "Your Message"
                }`}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              required
              spellCheck={true}
            />

            <button type="submit" className="btn btn-lg">
              Send message
            </button>
            <div className="flex items-center gap-x-6">
              <Link
                aria-label="email"
                aria-description="email link"
                title="link to my email"
                href="mailto:ahmedtakeshy@gmail.com">
                <HiOutlineMail
                  aria-label="icon"
                  aria-description="icon for email"
                  className="text-[1.75rem]" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=905511635796"
                target={"_blank"}
                rel="noreferrer noopener"
                aria-label="whatsapp"
                aria-description="whatsapp link"
                title="link to my whatsapp"
              >
                <BsWhatsapp
                  aria-label="icon"
                  aria-description="icon for whatsapp"
                  className="text-[1.5rem]" />
              </Link>
              <Link
                href="https://m.me/ahmed.takeshy.1"
                target={"_blank"}
                rel="noreferrer noopener"
                aria-label="messenger"
                aria-description="messenger link"
                title="link to my messenger"
              >
                <BsMessenger
                  aria-label="icon"
                  aria-description="icon for messenger"
                  className="text-[1.5rem]" />
              </Link>
            </div>
          </MotionForm>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

