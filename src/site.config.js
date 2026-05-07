// SITE CONFIG — single source of truth for artist-specific identity,
// media URLs, and service offerings.
//
// When forking this codebase for a new artist, this is the file to edit.
// Replace each value with the new artist's details, then replace Sanity
// content. The Cloudinary URLs below should be replaced with the new
// artist's media uploaded to their own Cloudinary account.
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

  // ---------- MEDIA ----------
  // All Cloudinary (or other absolute) URLs the site references.
  // When forking, upload the new artist's media to Cloudinary and paste
  // the Secure URLs here. Add `f_auto,q_auto/` after `/upload/` in each
  // URL to let Cloudinary serve modern formats automatically.
  media: {
    // Homepage hero
    heroVideo: 'https://res.cloudinary.com/dztnasb08/video/upload/q_auto/f_auto/v1778119897/maplegrove_new_uh5eys.mp4',
    heroPoster: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119838/maplegrove_qa3oyf.jpg',

    // About page
    aboutVideo: 'https://res.cloudinary.com/dztnasb08/video/upload/q_auto/f_auto/v1778120506/about_autumn_ortp8i.mp4',
    aboutPoster: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119819/galena_chozmw.jpg',

    // Artist headshot (used on /about and /pet-portraits)
    artistPortrait: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119827/Autumn-Zaehringer-scaled_uuzmbb.jpg',

    // Homepage "rain story" sequence — five frames of one chalk piece
    // from start to finish, including the rain that hit mid-chalk.
    story: {
      start: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119828/maplegrove-start_tx49tn.jpg',
      beforeRain: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119825/maplegrove-beforerain_es8hn5.jpg',
      rain: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119822/maplegrove-rain_qurbzg.jpg',
      afterRain: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119824/maplegrove-afterrain_bepzvq.jpg',
      finished: '/images/maplegrove-finished.JPEG', // not yet on Cloudinary
    },

    // Festival logos (about page logo wall)
    festivalLogos: [
      { name: 'Mt. Vernon Chalk the Walk', src: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119816/chalkthewalk_ygjd7b.png' },
      { name: 'Chalk Art Fest', src: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119828/chalkartfest_tlopqu.png' },
      { name: 'Chalkfest', src: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119817/chalkfest_butqhz.png' },
      { name: 'Herky on Parade', src: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119818/herkyonparade_gcehzs.png' },
      { name: 'Tempe Festival of the Arts', src: 'https://res.cloudinary.com/dztnasb08/image/upload/q_auto/f_auto/v1778119825/temeart_pow3tk.svg' },
    ],
  },

  // ---------- SERVICES ----------
  // The service mix /services renders, also used to derive the makesOffer
  // schema in BaseLayout. To remove a service, delete its entry. To add
  // one, append a new object with the same shape.
  //
  // `mediumKey` matches the `medium` field on Sanity project documents
  // — the /services page pulls one featured project image per medium
  // and attaches it to the matching service row.
  services: [
    {
      slug: 'chalk',
      label: 'Chalk',
      tagline: 'Pavement, festivals, a single weekend.',
      voice: 'Festival commissions, brand activations, public art weekends. Designed for photography, with the work washing away in the next rain.',
      surface: 'Pavement, sidewalk, walls',
      leadTime: '4–6 weeks',
      priceRange: 'By scope',
      placeholder: 'Chalk · festival commission',
      mediumKey: 'chalk',
      schemaName: 'Chalk art',
      schemaDescription: 'Festival commissions, brand activations, public art weekends. Designed for photography.',
    },
    {
      slug: 'windows',
      label: 'Windows',
      tagline: 'Live painted on glass.',
      voice: 'Holiday windows, grand openings, anything seasonal. The work goes up on-site and comes off cleanly once the season ends.',
      surface: 'Storefront glass',
      leadTime: '2–3 weeks',
      priceRange: 'By scope',
      placeholder: 'Window · holiday storefront',
      mediumKey: 'window',
      schemaName: 'Window painting',
      schemaDescription: 'Holiday windows, grand openings, seasonal storefront art. Live painted on glass.',
    },
    {
      slug: 'portraits',
      label: 'Pet portraits',
      tagline: 'Hand-painted oil. One animal per canvas.',
      voice: 'Painted from a photo on a 5×7 wrapped canvas. Booked through a calendar of weekly ship dates.',
      surface: '5×7 wrapped canvas',
      leadTime: 'Picks a ship date',
      priceRange: '$147 flat',
      placeholder: 'Pet portrait · 5×7 oil on canvas',
      mediumKey: 'portrait',
      schemaName: 'Pet portraits',
      schemaDescription: 'Hand-painted oil portraits on 5×7 wrapped canvas. One animal per canvas.',
      // Optional fixed price for schema.org Offer
      schemaPriceUSD: '147',
    },
    {
      slug: 'murals',
      label: 'Murals',
      tagline: 'Permanent work, public-facing.',
      voice: 'Interior or exterior, hand-painted. For businesses and communities ready to commit to a wall for a decade.',
      surface: 'Interior + exterior walls',
      leadTime: '6–10 weeks',
      priceRange: 'By scope',
      placeholder: 'Mural · interior accent wall',
      mediumKey: 'mural',
      schemaName: 'Murals',
      schemaDescription: 'Permanent interior and exterior murals for businesses and communities.',
    },
    {
      slug: 'commissions',
      label: 'Custom & other',
      tagline: 'Something else in mind?',
      voice: "Ink, grayscale, digital, or a format I haven't tried yet. If it's strange and worth doing, get in touch.",
      surface: 'Varies',
      leadTime: 'Varies',
      priceRange: 'By scope',
      placeholder: 'Custom commission · ink + grayscale study',
      mediumKey: 'other',
      schemaName: 'Custom commissions',
      schemaDescription: 'Ink, grayscale, digital, or experimental formats by request.',
    },
  ],
}

// ---------- DERIVED HELPERS ----------
// These are computed once so pages don't repeat the same string concatenation.

export const instagramUrl = `https://instagram.com/${siteConfig.instagramHandle}`
export const mailtoLink = `mailto:${siteConfig.email}`
