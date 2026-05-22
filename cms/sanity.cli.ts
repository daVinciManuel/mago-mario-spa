import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'lyay7gpr',
    dataset: 'production'
  },
  deployment: {
    appId: 'yx62dprhqmaxczjcj9jw659e',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
