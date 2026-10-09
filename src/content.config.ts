// Content collections. A station on the story's beamline is one YAML file:
// moving `now: true` when a season closes is the only edit the story needs
// each year. The museum of past seasons (/seasons) uses the same shape. A
// research item (paper, poster or write-up) is one folder with its Markdown
// and its pictures side by side.
//
// A text on the story, in the museum or on a team card is one string, or the
// three languages side by side (`en:`, `es:`, `va:`); see src/i18n/index.ts.
// A research item is in the language it was written in.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.union([z.string(), z.object({ en: z.string(), es: z.string(), va: z.string() })]);
const textCaption = z.object({ lead: text, text: text.optional(), credit: z.string().optional() });

const station = defineCollection({
  loader: glob({ base: './src/content/seasons', pattern: '**/*.yaml' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      /** The label above the title, e.g. "2025-26 · ALOHA-0". */
      season: text,
      title: text,
      body: text,
      /** Status as drawing: solid built, hatched simulated, outlined not built yet. */
      marker: z.enum(['solid', 'hatched', 'outlined']),
      /** One picture per station: a photo, a machine figure or the art line. */
      picture: z.discriminatedUnion('kind', [
        z.object({ kind: z.literal('photo'), src: image(), alt: text }),
        z.object({ kind: z.literal('figure'), figure: z.enum(['aloha-0-section', 'aloha-1-section']) }),
        z.object({ kind: z.literal('art'), text: text }),
      ]),
      caption: textCaption.optional(),
      /** An address on the site is opened in the reader's language when the page exists in it. */
      link: z.object({ href: z.string(), label: text }).optional(),
      /** A line in the label style under the body, e.g. a write-up still to come. */
      note: text.optional(),
      /** The current season: the beam stops here. */
      now: z.boolean().default(false),
    }),
});

const pastSeason = defineCollection({
  loader: glob({ base: './src/content/past-seasons', pattern: '**/*.yaml' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      season: text,
      title: text,
      body: text,
      marker: z.enum(['solid', 'hatched', 'outlined']).default('solid'),
      picture: z
        .discriminatedUnion('kind', [
          z.object({ kind: z.literal('photo'), src: image(), alt: text }),
          z.object({ kind: z.literal('art'), text: text }),
        ])
        .optional(),
      caption: textCaption.optional(),
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

// A team member is one YAML file. Nobody is published without consent: a
// file without `consent: true` is never rendered.
const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '*.yaml' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: text,
      /** As the card prints it, e.g. DIRECTION or APPLIED PHYSICS · W. */
      department: text,
      /** In colour, 3:4. Without one the card shows a placeholder tile. */
      photo: image().optional(),
      alt: text.optional(),
      /** The LinkedIn handle, the part after linkedin.com/in/: the card links to the profile. */
      linkedin: z
        .string()
        .regex(/^[A-Za-z0-9_%-]+$/, 'Only the handle, the part after linkedin.com/in/')
        .optional(),
      consent: z.boolean().default(false),
      order: z.number().int(),
    }),
});

export const collections = { seasons: station, pastSeasons: pastSeason, research, team };
