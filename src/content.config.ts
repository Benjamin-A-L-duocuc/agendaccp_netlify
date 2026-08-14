import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const PostsPhone = z.object({
  number: z.string(),
  timeLabel: z.string().optional(),
  blockLabel: z.string().optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/posts/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    phone: z.string().optional(),
    phones: z.array(PostsPhone).optional(),
    moreInfo: z.string().optional(),
    location: z.string().optional(),
    scheduleMonTue: z.string().optional(),
    scheduleWedFri: z.string().optional(),
    scheduleSaturday: z.string().optional(),
    email: z.string().optional(),
    whatsapp: z.string().optional(),
    links: z.string().optional(),
  }),
});

export const collections = {
  'posts': posts,
};
