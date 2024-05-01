import * as z from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long"
    }).max(50, {
        message: "Name must be at most 50 characters long"
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    subject: z.string().max(50, {
        message: "Subject must be at most 50 characters long"
    }),
    message: z.string().min(12, {
        message: "Message must be at least 12 characters long"
    })
});

export type ContactSchema = z.infer<typeof contactSchema>;