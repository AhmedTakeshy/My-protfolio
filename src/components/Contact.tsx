"use client"
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import Link from "next/link";
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
      if (res.status === "Success") {
        form.reset()
        toast.success("Successful", { description: res.successMessage, })
      }
    } catch {
      toast.error("Error", { description: "Internal Server Error with sending the confirmation email", })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-16">
          <div className="flex items-center justify-start flex-1 mb-12 lg:mb-0">
            <div>
              <p className="eyebrow mb-3">04 — Contact</p>
              <h2 className="text-[40px] lg:text-[64px] leading-[1.05] font-semibold text-ink mb-6">
                Let&apos;s work <br />
                together
              </h2>
              <p className="max-w-sm text-muted">
                Open to Senior/Staff Frontend and Full-Stack roles, remote-first.
                Reach out directly, or use the form.
              </p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitContact)}
              className="flex flex-col items-start flex-1 p-6 pb-10 border rounded-lg border-border bg-surface gap-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <input
                        {...field}
                        className={`!bg-transparent border-b border-border py-3 outline-none w-full placeholder:text-muted text-ink focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
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
                        className={`!bg-transparent border-b border-border py-3 outline-none w-full placeholder:text-muted text-ink focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
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
                        className={`!bg-transparent border-b border-border py-3 outline-none w-full placeholder:text-muted text-ink focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all`}
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
                        className={`!bg-transparent border-b border-border py-3 outline-none w-full placeholder:text-muted text-ink focus:border-accent focus-visible:outline-none focus-visible:bg-transparent autofill:bg-transparent transition-all resize-none mb-12 `}
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
              <div className="flex items-center gap-x-6 text-muted">
                <Link
                  aria-label="Email me!"
                  aria-details="email link"
                  title="link to my email"
                  className="hover:text-accent transition-colors"
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
                  className="hover:text-accent transition-colors"
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
                  className="hover:text-accent transition-colors"
                >
                  <BsMessenger
                    aria-label="icon"
                    aria-description="icon for messenger"
                    className="text-[1.5rem]" />
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
