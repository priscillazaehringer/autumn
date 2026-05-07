import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { siteConfig } from '../site.config.js'

export const sanityClient = createClient({
  projectId: siteConfig.sanityProjectId,
  dataset: siteConfig.sanityDataset,
  apiVersion: siteConfig.sanityApiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)