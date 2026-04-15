import Container from '../../common/Container'
import DarkIconTitle from '../../common/DarkIconTitle'
import { Pad } from '../../common/Pad'
import { Reveal } from '../../common/Reveal'

const SOCIALS = [
  {
    name: 'Facebook',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2864_12088)">
          <path d="M26.25 0H3.75C1.68187 0 0 1.68187 0 3.75V26.25C0 28.3181 1.68187 30 3.75 30H26.25C28.3181 30 30 28.3181 30 26.25V3.75C30 1.68187 28.3181 0 26.25 0Z" fill="#1976D2" />
          <path d="M25.3125 15H20.625V11.25C20.625 10.215 21.465 10.3125 22.5 10.3125H24.375V5.625H20.625C17.5181 5.625 15 8.14313 15 11.25V15H11.25V19.6875H15V30H20.625V19.6875H23.4375L25.3125 15Z" fill="#FAFAFA" />
        </g>
        <defs>
          <clipPath id="clip0_2864_12088">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    href: 'https://facebook.com',
  },
  {
    name: 'X (Twitter)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2864_12095)">
          <rect x="-18" y="-18" width="67" height="67" fill="#D9D9D9" />
          <path d="M16.0033 14.4843L22.7544 24.1407H19.9838L14.4747 16.261V16.2605L13.6659 15.1038L7.23047 5.89844H10.0011L15.1945 13.3275L16.0033 14.4843Z" fill="black" />
          <path d="M26.7584 0H3.24156C1.45134 0 0 1.45134 0 3.24156V26.7584C0 28.5487 1.45134 30 3.24156 30H26.7584C28.5487 30 30 28.5487 30 26.7584V3.24156C30 1.45134 28.5487 0 26.7584 0ZM19.135 25.4406L13.5601 17.3271L6.58044 25.4406H4.77653L12.7592 16.1619L4.77653 4.54401H10.865L16.144 12.2269L22.7533 4.54401H24.5572L16.9452 13.3924H16.9447L25.2235 25.4406H19.135Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_2864_12095">
            <rect width="30" height="30" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    href: 'https://twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2864_12103)">
          <path d="M25.9091 0H4.09091C1.83156 0 0 1.83156 0 4.09091V25.9091C0 28.1684 1.83156 30 4.09091 30H25.9091C28.1684 30 30 28.1684 30 25.9091V4.09091C30 1.83156 28.1684 0 25.9091 0Z" fill="#0077B5" />
          <path d="M10.809 8.18182C10.809 8.68751 10.659 9.18184 10.378 9.60231C10.0971 10.0228 9.69778 10.3505 9.23058 10.544C8.76339 10.7375 8.2493 10.7882 7.75332 10.6895C7.25735 10.5909 6.80177 10.3473 6.44419 9.98976C6.08661 9.63218 5.8431 9.1766 5.74444 8.68063C5.64579 8.18465 5.69642 7.67056 5.88994 7.20337C6.08346 6.73617 6.41117 6.33685 6.83164 6.0559C7.25211 5.77495 7.74644 5.625 8.25213 5.625C8.93024 5.625 9.58058 5.89438 10.0601 6.37387C10.5396 6.85337 10.809 7.50371 10.809 8.18182Z" fill="white" />
          <path d="M10.2309 12.4466V23.7426C10.2313 23.8259 10.2153 23.9085 10.1837 23.9857C10.1522 24.0628 10.1057 24.1329 10.0469 24.192C9.98812 24.2511 9.91825 24.298 9.84131 24.3299C9.76436 24.3619 9.68185 24.3784 9.59851 24.3784H6.90362C6.82029 24.3786 6.73774 24.3624 6.6607 24.3306C6.58367 24.2988 6.51368 24.2521 6.45475 24.1932C6.39583 24.1343 6.34913 24.0643 6.31734 23.9872C6.28556 23.9102 6.26931 23.8277 6.26953 23.7443V12.4466C6.26953 12.2784 6.33634 12.1171 6.45525 11.9982C6.57417 11.8793 6.73545 11.8125 6.90362 11.8125H9.59851C9.76639 11.813 9.92723 11.88 10.0458 11.9988C10.1643 12.1177 10.2309 12.2787 10.2309 12.4466Z" fill="white" />
          <path d="M24.3173 18.3273V23.7955C24.3176 23.8721 24.3026 23.948 24.2734 24.0188C24.2442 24.0896 24.2013 24.154 24.1471 24.2082C24.0929 24.2623 24.0286 24.3053 23.9577 24.3345C23.8869 24.3637 23.811 24.3786 23.7344 24.3784H20.8366C20.76 24.3786 20.6841 24.3637 20.6133 24.3345C20.5425 24.3053 20.4781 24.2623 20.4239 24.2082C20.3698 24.154 20.3268 24.0896 20.2976 24.0188C20.2684 23.948 20.2535 23.8721 20.2537 23.7955V18.496C20.2537 17.7051 20.4855 15.0324 18.1861 15.0324C16.4048 15.0324 16.0418 16.8614 15.9702 17.683V23.7955C15.9702 23.9486 15.9099 24.0956 15.8025 24.2047C15.695 24.3138 15.5489 24.3762 15.3957 24.3784H12.5969C12.5204 24.3784 12.4447 24.3633 12.374 24.334C12.3034 24.3047 12.2393 24.2617 12.1853 24.2076C12.1313 24.1534 12.0885 24.0891 12.0594 24.0184C12.0303 23.9477 12.0154 23.8719 12.0156 23.7955V12.3972C12.0154 12.3207 12.0303 12.2449 12.0594 12.1742C12.0885 12.1035 12.1313 12.0392 12.1853 11.9851C12.2393 11.9309 12.3034 11.8879 12.374 11.8586C12.4447 11.8293 12.5204 11.8142 12.5969 11.8142H15.3957C15.5504 11.8142 15.6986 11.8756 15.808 11.9849C15.9173 12.0943 15.9787 12.2425 15.9787 12.3972V13.3824C16.6401 12.3903 17.6202 11.625 19.7116 11.625C24.3446 11.625 24.3173 15.9511 24.3173 18.3273Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_2864_12103">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    href: 'https://linkedin.com',
  },
  {
    name: 'Instagram',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2864_12115)">
          <path d="M1.87464 2.04235C-0.482861 4.4911 -0.000361279 7.09235 -0.000361279 14.9948C-0.000361279 21.5573 -1.14536 28.1361 4.84714 29.6848C6.71839 30.1661 23.2984 30.1661 25.1671 29.6823C27.6621 29.0386 29.6921 27.0148 29.9696 23.4861C30.0084 22.9936 30.0084 7.00485 29.9684 6.50235C29.6734 2.7436 27.3596 0.577346 24.3109 0.138596C23.6121 0.0373456 23.4721 0.00734559 19.8871 0.00109559C7.17089 0.00734559 4.38339 -0.558905 1.87464 2.04235Z" fill="url(#paint0_linear_2864_12115)" />
          <path d="M14.9953 3.92475C10.4566 3.92475 6.14656 3.521 4.50031 7.746C3.82031 9.491 3.91906 11.7573 3.91906 15.0023C3.91906 17.8498 3.82781 20.526 4.50031 22.2573C6.14281 26.4848 10.4878 26.0798 14.9928 26.0798C19.3391 26.0798 23.8203 26.5323 25.4866 22.2573C26.1678 20.4948 26.0678 18.2623 26.0678 15.0023C26.0678 10.6748 26.3066 7.881 24.2078 5.7835C22.0828 3.6585 19.2091 3.92475 14.9903 3.92475H14.9953ZM14.0028 5.921C23.4703 5.906 24.6753 4.8535 24.0103 19.4748C23.7741 24.646 19.8366 24.0785 14.9966 24.0785C6.17156 24.0785 5.91781 23.826 5.91781 14.9973C5.91781 6.066 6.61782 5.926 14.0028 5.9185V5.921ZM20.9078 7.75975C20.1741 7.75975 19.5791 8.35475 19.5791 9.0885C19.5791 9.82225 20.1741 10.4173 20.9078 10.4173C21.6416 10.4173 22.2366 9.82225 22.2366 9.0885C22.2366 8.35475 21.6416 7.75975 20.9078 7.75975ZM14.9953 9.3135C11.8541 9.3135 9.30782 11.861 9.30782 15.0023C9.30782 18.1435 11.8541 20.6898 14.9953 20.6898C18.1366 20.6898 20.6816 18.1435 20.6816 15.0023C20.6816 11.861 18.1366 9.3135 14.9953 9.3135ZM14.9953 11.3098C19.8766 11.3098 19.8828 18.6948 14.9953 18.6948C10.1153 18.6948 10.1078 11.3098 14.9953 11.3098Z" fill="white" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_2864_12115" x1="1.93216" y1="28.085" x2="29.814" y2="3.95357" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFDD55" />
            <stop offset="0.5" stop-color="#FF543E" />
            <stop offset="1" stop-color="#C837AB" />
          </linearGradient>
          <clipPath id="clip0_2864_12115">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

    ),
    href: 'https://instagram.com',
  },
]

export function SocialMediaSection() {
  return (
    <section className="bg-light-bg py-[80px] max-[991px]:py-[50px]">
      <Pad>
        <Container>
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.8fr_1fr] lg:gap-[100px] items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start">
              <Reveal className="mb-[30px]">
                <DarkIconTitle
                  iconSrc="/img/share_tag.svg"
                >
                  STAY CONNECTED
                </DarkIconTitle>
              </Reveal>
              <Reveal className="mb-[44px]">
                <h2 className="font-heading text-[36px] font-bold leading-[46px] text-primary max-[991px]:text-[36px]">
                  Follow Us on <span className="text-secondary">Social Media</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[18px] text-body max-w-[520px] max-[991px]:text-[16px]">
                  Stay updated with the latest news, announcements, and highlights from APME 2026
                </p>
              </Reveal>
            </div>

            {/* Right Column: Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {SOCIALS.map((social, idx) => (
                <Reveal key={social.name} delay={idx * 100}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-left justify-center border border-stroke gap-5 overflow-hidden rounded-[10px] bg-white p-5 md:p-[30px] transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      {social.icon}
                    </div>
                    <span className="text-[18px] font-bold text-primary group-hover:text-secondary transition-colors">
                      {social.name}
                    </span>

                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 h-[4px] w-full bg-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                    {/* Default subtle border indicator */}
                    <div className="absolute bottom-0 left-0 h-[4px] w-full bg-transparent" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Pad>
    </section>
  )
}
