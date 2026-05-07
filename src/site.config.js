// SITE CONFIG — single source of truth for artist-specific identity.
//
// When forking this codebase for a new artist, this is the file to edit.
// Replace each value with the new artist's details, then replace the
// Sanity project ID and any Cloudinary URLs scattered through page files.
//
// Note: `domain` here must match the `site` field in astro.config.mjs.

export const siteConfig = {
  // ---------- IDENTITY ----------
  artistName: 'Autumn Zaehringer',
  artistFirstName: 'Autumn',
  artistAlternateName: 'Autumn Z',
  brandName: 'Autumn Z Art',
  jobTitle: 'Chalk, Mural, Window, and Pet Portrait Artist',

  // ---------- LOCATION ----------
  city: 'Cedar Rapids',
  state: 'IA',
  country: 'US',

  // ---------- ONLINE ----------
  domain: 'https://autumnzart.com',
  email: 'aezaehri@gmail.com',
  instagramHandle: 'autzart', // no @, just the handle

  // ---------- SANITY ----------
  sanityProjectId: 'bywgwr6x',
  sanityDataset: 'production',
  sanityApiVersion: '2024-01-01',

  // ---------- DEFAULT META ----------
  defaultTitle: 'Autumn Z Art',
  defaultDescription: 'Award-winning chalk and public art for businesses, festivals, and communities.',
  personDescription: 'Iowa-based artist creating chalk festival pieces, hand-painted windows, custom murals, and oil pet portraits. Travels worldwide for commissions.',
  websiteDescription: 'Iowa chalk, mural, and pet portrait artist. Booking commissions worldwide.',
  businessDescription: 'Custom chalk art, murals, hand-painted windows, and oil pet portraits for businesses, festivals, and private clients. Commissions open for 2026 and 2027.',

  // ---------- DEFAULT SOCIAL SHARE IMAGE ----------
  ogImage: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119838/maplegrove_qa3oyf.jpg',

  // ---------- STATUS BAR ----------
  // Shown when there's no upcoming public-facing event in Sanity.
  statusFallback: 'Booking summer festivals · 2026',
}

// ---------- DERIVED HELPERS ----------
// These are computed once so pages don't repeat the same string concatenation.

export const instagramUrl = `https://instagram.com/${siteConfig.instagramHandle}`
export const mailtoLink = `mailto:${siteConfig.email}`
