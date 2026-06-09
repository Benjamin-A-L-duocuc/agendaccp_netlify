import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/posts/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    phone: z.string().optional(),
    scheduleWeekdays: z.string().optional(),
    scheduleSaturday: z.string().optional(),
    scheduleSunday: z.string().optional(),
    email: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
});

export const collections = {
  'posts': posts,
};
