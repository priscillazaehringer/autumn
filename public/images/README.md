# public/images

Drop the source media files into this directory using the exact filenames
below. On Vercel (Linux) filenames are case-sensitive, so `.JPEG` and `.jpeg`
are NOT the same file — match the case exactly.

## Required files

Referenced by `src/pages/index.astro`:
- `maplegrove.jpg` (video poster)
- `maplegrove_new.mp4` (hero video)
- `maplegrove-start.JPEG`
- `maplegrove-beforerain.JPEG`
- `maplegrove-rain.JPEG`
- `maplegrove-afterrain.JPEG`
- `maplegrove-finished.JPEG`

Referenced by `src/pages/about.astro`:
- `about_autumn.mp4`
- `galena.jpeg` (also used as the video poster)
- `Autumn-Zaehringer-scaled.jpg`
- `chalkthewalk.png`
- `chalkartfest.png`
- `chalkfest.png`
- `herkyonparade.png`
- `temeart.svg`

Referenced by `src/pages/pet-portraits.astro`:
- `Autumn-Zaehringer-scaled.jpg` (shared with about page)
- `portraits/portrait-1.jpg`

## Notes

- Images and videos served from `public/` are copied verbatim into the
  build output and referenced by absolute path (`/images/foo.jpg`).
- If you rename a file here, update every reference in `src/pages/`.
- The `.gitkeep` files in this directory and `portraits/` exist only so the
  empty folders are tracked by git. Delete them once real media is added.
