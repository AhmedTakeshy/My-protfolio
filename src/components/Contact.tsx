"use client"
import { useState } from "react";
import { fadeIn } from "../lib/variants";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import Link from "next/link";
import { MotionDiv, MotionForm } from "../lib/motionsDev";
import { ContactSchema, contactSchema } from "@/lib/formSchemas";
import { contactFormAction } from "@/_actions/contactActions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form"
import { ImSpinner9 } from 'react-icons/im'
import { toast } from "sonner";



export default function Contact() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })


  async function submitContact(data: ContactSchema) {
    setIsPending(true)
    try {
      const result = await contactSchema.safeParseAsync(data)
      if (!result.success) {
        setIsPending(false)
        return
      }

      const res = await contactFormAction(result.data)
      console.log("🚀 ~ submitContact ~ res:", res)
      if (res.status === "Success") {
        form.reset()
        toast.success("Successful", { description: res.successMessage, })
      }
    } catch (error) {
      console.log("🚀 ~ submitContact ~ error:", error)
      toast.error("Error", { description: "Internal Server Error with sending the confirmation email", })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <MotionDiv
            variants={fadeIn("down", 0.3)}
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
          <Form {...form}>
            <MotionForm
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onSubmit={form.handleSubmit(submitContact)}
              className="flex flex-col items-start flex-1 p-6 pb-24 border shadow-md rounded-2xl gap-y-6 shadow-white "
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className={`!bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
                        type="text"
                        placeholder={`Full name*`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className={`!bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
                        type="email"
                        placeholder={`Email*`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className={`!bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
                        type="text"
                        placeholder={`Topic`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <textarea
                        {...field}
                        className={`!bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all resize-none mb-12 `}
                        placeholder={`Message...`}
                        spellCheck={true}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button type="submit" className="btn btn-lg">
                {isPending ? (<span className="flex items-center gap-x-2">
                  <ImSpinner9 className={`ease-in-out animate-spin`} />
                  Submitting...
                </span>) : "Send message"}
              </button>
              <div className="flex items-center gap-x-6">
                <Link
                  aria-label="Email me!"
                  aria-details="email link"
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
                  aria-label="Whatsapp link"
                  aria-details="whatsapp link"
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
                  aria-label="Messenger link"
                  aria-details="messenger link"
                  title="link to my messenger"
                >
                  <BsMessenger
                    aria-label="icon"
                    aria-description="icon for messenger"
                    className="text-[1.5rem]" />
                </Link>
              </div>
            </MotionForm>
          </Form>
        </div>
      </div>
    </section>
  );
};
