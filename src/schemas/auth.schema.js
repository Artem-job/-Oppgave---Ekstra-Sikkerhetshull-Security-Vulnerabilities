import z, { email } from "zod";


export const registerSchema = z.object({
    body: z.object({
        username: z.string({ error: 'username must be a string.' }),
        email: z.string({ error: 'email must be a string'}),
        password: z.string({ error: 'password must be a string' }),
    })
})

export const logInSchema = z.object({
    body: z.object({
        email: z.string({ error: 'email must be a string'}),
        password: z.string({ error: 'password must be a string' }),
    })
})