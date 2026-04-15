/**
 * Same-origin paths so `<video>` can load (Google Drive direct MP4 sets
 * Cross-Origin-Resource-Policy: same-site, which blocks cross-origin playback).
 *
 * Dev: Vite proxies these paths to Drive (see vite.config.ts).
 * Production: upload `hero-video.mp4` and `cta-video.mp4` into `public_html/video/` on your host.
 *
 * Share links (source files):
 * - Hero: https://drive.google.com/file/d/1OPrkA7dTGBx1CeehcFGxKkxoGfDTHhNJ/view?usp=sharing
 * - CTA: https://drive.google.com/file/d/1VAmWeT4Fhf6IfQkTwPC7Py2DALmQvO0C/view?usp=sharing
 */
export const HERO_DRIVE_FILE_ID = '1OPrkA7dTGBx1CeehcFGxKkxoGfDTHhNJ'
export const CTA_DRIVE_FILE_ID = '1VAmWeT4Fhf6IfQkTwPC7Py2DALmQvO0C'

export const HERO_VIDEO_SRC = '/video/hero-video.mp4'
export const CTA_VIDEO_SRC = '/video/cta-video.mp4'
