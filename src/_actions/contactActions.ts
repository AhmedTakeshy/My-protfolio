"use server"
import Mailjet from "node-mailjet";
import { ContactSchema, contactSchema } from "../lib/formSchemas"

export async function contactFormAction(data: ContactSchema): Promise<ServerResponse<null>> {
    try {
        const mailjet = Mailjet.apiConnect(
            `${process.env.MAILJET_API_KEY}`,
            `${process.env.MAILJET_SECRET_KEY}`,
        )
        const result = await contactSchema.safeParseAsync(data);
        if (!result.success) {
            return {
                statusCode: 400,
                status: "Error",
                errorMessage: result.error.errors[0].message,
            }
        }
        const { name, email, subject, message, } = result.data
        const request = await mailjet
            .post("send", { version: "v3.1" })
            .request({
                Messages: [
                    {
                        From: {
                            Email: `ahmedtakeshy@takeshy.tech`,
                            Name: "Ahmed Takeshy"
                        },
                        To: [
                            {
                                Email: email,
                                Name: name
                            },
                        ],
                        TemplateID: 5796614,
                        TemplateLanguage: true,
                        Subject: `Confirmation of Your Inquiry`,
                        Variables: { first_name: `${name}` }
                    },
                    {
                        From: {
                            Email: `ahmedtakeshy@takeshy.tech`,
                            Name: "Portfolio Website"
                        },
                        To: [
                            {
                                Email: "ahmedtakeshy7@gmail.com",
                                Name: name
                            },
                        ],
                        subject: `New Inquiry from personal website`,
                        textPart: `Email from: personal website contact`,
                        htmlPart: `
                        <h3>From: ${name}</h3>
                        <h3>Email: ${email}</h3>
                        <h3>Subject: ${subject}</h3>
                        <p>Message: ${message}</p>
                        `,
                    }
                ]
            })
        const res = await JSON.parse(JSON.stringify(request.body))
        if (res.Messages[0].Status !== "success") {
            return {
                statusCode: 502,
                status: "Error",
                errorMessage: "Internal Server Error with sending the confirmation email",
            }
        }
        return {
            statusCode: 200,
            status: "Success",
            successMessage: "Contact form submitted successfully",
            data: null,
        }
    } catch (error) {
        return {
            statusCode: 500,
            status: "Error",
            errorMessage: "Internal Server Error",
        }
    }
}