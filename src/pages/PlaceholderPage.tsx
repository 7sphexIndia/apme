import Container from '../components/common/Container'
import { Pad } from '../components/common/Pad'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <h2 className="mb-[40px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
            {title}
          </h2>
          <p className="text-[18px] text-body max-[991px]:text-[16px]">
            This page is scaffolded in React. Add your existing markup here.
          </p>
        </Container>
      </Pad>
    </section>
  )
}

