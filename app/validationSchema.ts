import { z } from 'zod';

export const createClientSchema = z.object({
    name: z.string().min(1, 'Name is required').max(191),
    email: z.string().min(1, 'E-mail is required').max(191),
    avatar: z.string().min(1, 'Avatar web address is required').max(191),
    organization: z.string().min(1, 'Organization name is required').max(191),
    assigned_user: z.string().min(1, 'Assigned user name is required').max(191)
});
