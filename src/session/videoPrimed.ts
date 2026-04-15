/**
 * Session flags for background video loading.
 *
 * Goal: once a clip loads successfully, avoid re-running the IO + idle gating
 * on subsequent route mounts, and keep that state for the current tab session.
 */
const HERO_KEY = 'apme_video_hero_primed'
const CTA_KEY = 'apme_video_cta_primed'

function readFlag(key: string) {
  try {
    return typeof window !== 'undefined' && window.sessionStorage?.getItem(key) === '1'
  } catch {
    return false
  }
}

function writeFlag(key: string) {
  try {
    window.sessionStorage?.setItem(key, '1')
  } catch {
    // ignore
  }
}

let heroBackgroundPrimed = false
let ctaBackgroundPrimed = false

if (typeof window !== 'undefined') {
  heroBackgroundPrimed = readFlag(HERO_KEY)
  ctaBackgroundPrimed = readFlag(CTA_KEY)
}

export function isHeroVideoPrimed() {
  return heroBackgroundPrimed
}

export function markHeroVideoPrimed() {
  heroBackgroundPrimed = true
  if (typeof window !== 'undefined') writeFlag(HERO_KEY)
}

export function isCtaVideoPrimed() {
  return ctaBackgroundPrimed
}

export function markCtaVideoPrimed() {
  ctaBackgroundPrimed = true
  if (typeof window !== 'undefined') writeFlag(CTA_KEY)
}
