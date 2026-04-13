import { PageHero } from '../components/common/PageHero'
import { QuickContactSection } from '../components/pages/contact/quickcontact'
import { ContactForm } from '../components/pages/contact/ContactForm'
import { ContactMap } from '../components/pages/contact/ContactMap'
import { SocialMediaSection } from '../components/pages/contact/SocialMediaSection'
import { FAQSection } from '../components/pages/contact/FAQSection'

export function Contact() {
  return (
    <>
      <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        contentClassName="max-w-[1100px]"
        badge={{
          text: 'WE\'RE HERE TO HELP',
          iconSrc: '/img/green-dot.svg',
          animate: true,
          iconSize: 11,
        }}
        title={
          <>
            Get in Touch
          </>
        }
        subtitle={
          <>
            Have questions about APME 2026? Our team is ready to assist you with submissions, registration, and all conference-related inquiries.
          </>
        }
      />
      <QuickContactSection />  
      <ContactForm />
      <ContactMap />
      <SocialMediaSection />
      <FAQSection />
    </>
  )
}


