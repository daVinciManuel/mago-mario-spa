import { ctaButton, trustSeal, microscopy } from './objects'
import { homePage } from './homePage'
import { linksPage } from './linksPage'
import { contactPage } from './contactPage'

export const schemaTypes = [
  // Shared objects (must be registered before documents that reference them)
  ctaButton,
  trustSeal,
  microscopy,

  // Singleton documents
  homePage,
  linksPage,
  contactPage,
]
