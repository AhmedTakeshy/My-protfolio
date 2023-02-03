import React, { useRef } from "react";
import useInput from "../hooks/use-input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";

const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};
// const isValid = (value) => value.trim().length > 0;
// const isValidEmail = (value) => value.includes("@") && value.trim().length > 2;

const Contact = () => {
  const form = useRef();

  const inputIsNotEmpty = (value) => value.trim().length > 0;
  const emailIsNotEmpty = (value) =>
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

  // const [validity, setValidity] = useState({
  //   name: true,
  //   email: true,
  //   message: true,
  // });
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const changeHandler = (eve) => {
  //   const { name, value } = eve.target;
  //   return setData((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  const formSubmitHandler = (eve) => {
    eve.preventDefault();
    if (!isFormValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
    // const nameValidation = isValid(data.name);
    // const emailValidation = isValidEmail(data.email);
    // const messageValidation = isValid(data.message);
    // setValidity({
    //   name: nameValidation,
    //   email: emailValidation,
    //   message: messageValidation,
    // });

    // const isFormValid = nameValidation && emailValidation && messageValidation;
    // if (!isFormValid) {
    //   return;
    // }
    // Your message has been received. Thank you for reaching out!
    console.log("Form submitted");
    emailjs
      .sendForm(
        "service_edqe2lb",
        "template_bcf4t7l",
        form.current,
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
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together
              </h2>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={formSubmitHandler}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start shadow-md shadow-white "
          >
            <input
              className={` bg-transparent border-b py-3 outline-none w-full
              ${
                nameInputHasError
                  ? "placeholder:text-pink-600"
                  : "placeholder:text-white"
              } focus:border-accent transition-all `}
              type="text"
              name="name"
              value={enteredName}
              placeholder={`${
                nameInputHasError
                  ? "Invalid name! Please try again."
                  : "Your Name"
              }`}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            <input
              className={` bg-transparent border-b py-3 outline-none w-full
               ${
                 emailInputHasError
                   ? "placeholder:text-pink-600"
                   : "placeholder:text-white"
               } focus:border-accent transition-all `}
              type="text"
              name="email"
              value={enteredEmail}
              placeholder={`${
                emailInputHasError
                  ? "Invalid email! Please try again."
                  : "Your Email"
              }`}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            <textarea
              className={`bg-transparent border-b py-3 outline-none w-full
              ${
                messageInputHasError
                  ? "placeholder:text-pink-600"
                  : "placeholder:text-white"
              } focus:border-accent transition-all resize-none mb-12 `}
              name="message"
              value={enteredMessage}
              placeholder={`${
                messageInputHasError
                  ? "Invalid message! Please try again."
                  : "Your Message"
              }`}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />

            <button type="submit" className="btn btn-lg">
              Send message
            </button>
            <div className="flex items-center gap-x-6">
              <a href="mailto:ahmedtakeshy@gmail.com">
                <HiOutlineMail className="text-[1.75rem]" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=905511635796"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsWhatsapp className="text-[1.5rem]" />
              </a>
              <a
                href="https://m.me/ahmed.takeshy.1"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsMessenger className="text-[1.5rem]" />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Contact;
