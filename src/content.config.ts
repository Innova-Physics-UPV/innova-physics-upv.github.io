// Content collections. A station on the story's beamline is one YAML file:
// moving `now: true` when a season closes is the only edit the story needs
// each year. The museum of past seasons (/seasons) uses the same shape.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const station = defineCollection({
  loader: glob({ base: './src/content/seasons', pattern: '**/*.yaml' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      /** The label above the title, e.g. "2025-26 · ALOHA-0". */
      season: z.string(),
      title: z.string(),
      body: z.string(),
      /** Status as drawing: solid built, hatched simulated, outlined not built yet. */
      marker: z.enum(['solid', 'hatched', 'outlined']),
      /** One picture per station: a photo, a machine figure or the art line. */
      picture: z.discriminatedUnion('kind', [
        z.object({ kind: z.literal('photo'), src: image(), alt: z.string() }),
        z.object({ kind: z.literal('figure'), figure: z.enum(['aloha-0-section', 'aloha-1-section']) }),
        z.object({ kind: z.literal('art'), text: z.string() }),
      ]),
      caption: z.object({ lead: z.string(), text: z.string().optional(), credit: z.string().optional() }).optional(),
      link: z.object({ href: z.string(), label: z.string() }).optional(),
      /** A line in the label style under the body, e.g. a Logbook entry still to come. */
      note: z.string().optional(),
      /** The current season: the beam stops here. */
      now: z.boolean().default(false),
    }),
});

const pastSeason = defineCollection({
  loader: glob({ base: './src/content/past-seasons', pattern: '**/*.yaml' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      season: z.string(),
      title: z.string(),
      body: z.string(),
      marker: z.enum(['solid', 'hatched', 'outlined']).default('solid'),
      picture: z
        .discriminatedUnion('kind', [
          z.object({ kind: z.literal('photo'), src: image(), alt: z.string() }),
          z.object({ kind: z.literal('art'), text: z.string() }),
        ])
        .optional(),
      caption: z.object({ lead: z.string(), text: z.string().optional(), credit: z.string().optional() }).optional(),
      /** Copy still to come from the team: rendered with a visible placeholder label. */
      placeholder: z.boolean().default(false),
    }),
});

export const collections = { seasons: station, pastSeasons: pastSeason };
