/**
 * linksPage — singleton document.
 * Maps 1-to-1 with LinksPageData from @/types/links.ts
 */
import { defineField, defineType } from 'sanity'

// ── Social link item ───────────────────────────────────────────────────────
const socialLink = defineType({
  name: 'socialLink',
  title: 'Enlace',
  type: 'object',
  fields: [
    defineField({
      name: 'app',
      title: 'Red / Plataforma',
      type: 'string',
      description: 'Ej: Instagram, YouTube, Web Oficial',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'link',
      title: 'URL',
      type: 'url',
      validation: (r) => r.required().uri({ allowRelative: false }),
    }),
    defineField({
      name: 'user',
      title: 'Usuario / handle',
      type: 'string',
      description: 'Ej: @mariowenceslao (opcional)',
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'app', subtitle: 'user' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ?? '' }
    },
  },
})

// ── linksPage document ─────────────────────────────────────────────────────
export const linksPage = defineType({
  name: 'linksPage',
  title: 'Página de Links',
  type: 'document',
  __experimental_omnisearch_visibility: false,
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre visible',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción / tagline',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: 'Foto de perfil para la página de links',
      options: { hotspot: true },
    }),
    defineField({
      name: 'links',
      title: 'Enlaces',
      type: 'array',
      of: [socialLink],
      validation: (r) => r.min(1),
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'description' },
    prepare({ title, subtitle }) {
      return { title: 'Página de Links', subtitle: title ?? subtitle }
    },
  },
})
