/**
 * contactPage — singleton document.
 * Maps 1-to-1 with ContactPageData from @/types/contact.ts
 */
import { defineField, defineType } from 'sanity'

// ── Trust Seal Item ───────────────────────────────────────────────────────
const trustSeal = defineType({
  name: 'trustSeal',
  title: 'Sello de Confianza',
  type: 'object',
  fields: [
    defineField({
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'text',
      title: 'Texto descriptivo',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'link',
      title: 'Enlace (opcional)',
      type: 'string',
      description: 'Ej: tel:+34123456789 o https://...',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
      emoji: 'emoji',
    },
    prepare({ title, subtitle, emoji }) {
      return {
        title: `${emoji} ${title}`,
        subtitle: subtitle,
      }
    },
  },
})

// ── Contact Page Document ─────────────────────────────────────────────────
export const contactPage = defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  __experimental_omnisearch_visibility: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Título principal',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción / introducción',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'services',
      title: 'Servicios',
      description: 'Lista de servicios ofrecidos',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (r) => r.min(1),
    }),

    defineField({
      name: 'trustSeals',
      title: 'Sellos de Confianza',
      description: 'Elementos de confianza (zona, respuesta, etc.)',
      type: 'array',
      of: [trustSeal],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: 'Página de Contacto',
        subtitle: title ?? description,
      }
    },
  },
})
