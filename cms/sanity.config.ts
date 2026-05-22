import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'mago-mario-spa',

  projectId: 'lyay7gpr',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), presentationTool({
    previewUrl: {
      origin: 'https://magomario.netlify.app/',
      previewMode: {
        enable: 'api/draft-mode/enable'
      }
    }
  })],

  schema: {
    types: schemaTypes,
  },
})
