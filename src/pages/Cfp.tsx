import { PageHero } from '../components/common/PageHero'
import Container from '../components/common/Container'
import { Pad } from '../components/common/Pad'
import tagGreen from '../assets/img/tag-green.svg'

export function Cfp() {
  return (
    <>
      <PageHero
        className="h-[703px] max-h-[703px]"
        overlayClassName="bg-[#0B1F3B]"
        contentAlign="center"
        badge={{
          text: 'DUBAI, UAE • NOV 15–17, 2026',
          iconSrc: tagGreen,
        }}
        title={<>Call for Papers</>}
        subtitle={
          <>
            Join the world&apos;s leading researchers in Applied Physics, Mathematics &amp; Energy.
            Submit your groundbreaking research to APME 2026 and help shape the future of
            scientific innovation.
          </>
        }
      />

      <section className="py-[100px] max-[991px]:py-[60px]">
        <Pad>
          <Container>
            <h2 className="mb-[20px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
              Submission details
            </h2>
            <p className="text-[18px] text-body max-[991px]:text-[16px]">
              Replace this section with your CFP tracks, important dates, and submission steps.
            </p>
          </Container>
        </Pad>
      </section>
    </>
  )
}

