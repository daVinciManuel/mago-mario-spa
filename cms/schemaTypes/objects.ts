/**
 * Shared object types reused across multiple documents.
 */
import {defineField, defineType} from 'sanity'

// A CTA button: link + label + optional emoji
export const ctaButton = defineType({
  name: 'ctaButton',
  title: 'Botón CTA',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Texto', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'link', title: 'Enlace', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'emoji', title: 'Emoji (opcional)', type: 'string'}),
  ],
  preview: {select: {title: 'text', subtitle: 'link'}},
})

// Trust seal: short text + emoji
export const trustSeal = defineType({
  name: 'trustSeal',
  title: 'Sello de confianza',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Texto', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'emoji', title: 'Emoji', type: 'string'}),
  ],
  preview: {select: {title: 'text'}},
})

// Microscopy line at the bottom of a CTA section
export const microscopy = defineType({
  name: 'microscopy',
  title: 'Nota al pie',
  type: 'object',
  fields: [
    defineField({name: 'text', title: 'Texto', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'emoji', title: 'Emoji', type: 'string'}),
  ],
  preview: {select: {title: 'text'}},
})
