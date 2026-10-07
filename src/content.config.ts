// Content collections. A station on the story's beamline is one YAML file:
// moving `now: true` when a season closes is the only edit the story needs
// each year. The museum of past seasons (/seasons) uses the same shape. A
// research item (paper, poster or write-up) is one folder with its Markdown
// and its pictures side by side.
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
      /** A line in the label style under the body, e.g. a write-up still to come. */
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

const caption = z.object({ lead: z.string(), text: z.string().optional(), credit: z.string().optional() });

const research = defineCollection({
  loader: glob({
    base: './src/content/research',
    pattern: '*/index.{md,mdx}',
    // The folder's name is the item's address: /research/<folder>/.
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(['paper', 'poster', 'write-up']),
      /** As printed on the publication. */
      authors: z.array(z.string()).min(1),
      /** Where it was published or presented; the link goes to the publication itself. */
      venue: z.object({ name: z.string(), url: z.url().optional() }),
      /** Shown to the month. An item still to come gives its expected month. */
      date: z.coerce.date(),
      status: z.enum(['published', 'preprint', 'presented', 'coming']),
      /** One line in the art voice, under the title. */
      aside: z.string(),
      /** The block's picture and the cover's: a photo, or a machine drawn by status. */
      picture: z
        .discriminatedUnion('kind', [
          z.object({ kind: z.literal('photo'), src: image(), alt: z.string(), caption: caption.optional() }),
          z.object({ kind: z.literal('figure'), figure: z.enum(['aloha-0-line', 'aloha-1-line']), caption: caption.optional() }),
        ])
        .optional(),
      /** The machine or stage it is about, e.g. ALOHA-0. */
      machine: z.string().optional(),
      /** The status of every number in it, e.g. SIMULATED · COMSOL. */
      numbers: z.string().optional(),
      /** The department, with its fingerprint line. */
      department: z.string().optional(),
      /** The full text as a PDF: a file in public/research/ or a URL. */
      pdf: z.string().optional(),
      licence: z.string().optional(),
      /** Ultramarine for the machine; gesso (with the gesso masthead) for art and conservation. */
      theme: z.enum(['ultramarine', 'gesso']).default('ultramarine'),
    }),
});

export const collections = { seasons: station, pastSeasons: pastSeason, research };
