/**
 * homePage — singleton document.
 * Maps 1-to-1 with HomePageData from @/types/home.ts
 */
import {defineField, defineType} from 'sanity'

// ── Service card (used inside the services array) ──────────────────────────
const serviceCard = defineType({
  name: 'serviceCard',
  title: 'Servicio',
  type: 'object',
  fields: [
    defineField({name: 'icon', title: 'Icono (emoji)', type: 'string'}),
    defineField({name: 'title', title: 'Título', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({name: 'link', title: 'Enlace', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'objectPosition',
      title: 'Posición de imagen (CSS)',
      type: 'string',
      description: 'Ej: "center 27%" — controla qué parte de la foto se muestra',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})

// ── homePage document ──────────────────────────────────────────────────────
export const homePage = defineType({
  name: 'homePage',
  title: 'Página de inicio',
  type: 'document',
  // Singleton: only one document of this type should exist
  __experimental_omnisearch_visibility: false,
  fields: [
    // ── Hero section ──
    defineField({
      name: 'hero_section',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'pretitle', title: 'Pre-título', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'title', title: 'Título principal', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 2, validation: (r) => r.required()}),
        defineField({name: 'subtitle2', title: 'Subtítulo 2 (cita)', type: 'text', rows: 2}),
        defineField({
          name: 'cta',
          title: 'Botones CTA',
          type: 'array',
          of: [{type: 'ctaButton'}],
          validation: (r) => r.min(1).max(3),
        }),
        defineField({
          name: 'trustSeals',
          title: 'Sellos de confianza',
          type: 'array',
          of: [{type: 'trustSeal'}],
        }),
      ],
    }),

    // ── Services section ──
    defineField({
      name: 'services_section',
      title: 'Sección de Servicios',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Título', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'subtitle', title: 'Subtítulo', type: 'string'}),
        defineField({
          name: 'services',
          title: 'Servicios',
          type: 'array',
          of: [serviceCard],
          validation: (r) => r.min(1),
        }),
      ],
    }),

    // ── CTA section ──
    defineField({
      name: 'cta_section',
      title: 'Sección CTA final',
      type: 'object',
      fields: [
        defineField({name: 'icon', title: 'Icono (emoji)', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtítulo', type: 'string'}),
        defineField({name: 'title1', title: 'Título línea 1', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'title2', title: 'Título línea 2', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'description1', title: 'Descripción línea 1', type: 'text', rows: 2}),
        defineField({name: 'description2', title: 'Descripción línea 2', type: 'text', rows: 2}),
        defineField({
          name: 'cta',
          title: 'Botones CTA',
          type: 'array',
          of: [{type: 'ctaButton'}],
          validation: (r) => r.min(1).max(3),
        }),
        defineField({
          name: 'microscopy',
          title: 'Nota al pie',
          type: 'microscopy',
        }),
      ],
    }),
  ],

  preview: {
    select: {title: 'hero_section.title'},
    prepare({title}) {
      return {title: 'Página de inicio', subtitle: title}
    },
  },
})
