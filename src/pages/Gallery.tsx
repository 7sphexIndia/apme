import Container from '../components/common/Container'
import { Pad } from '../components/common/Pad'

export function Gallery() {
  const media = import.meta.glob(
    '../assets/**/*.{png,jpg,jpeg,webp,gif,svg,mp4,webm,mov}',
    { eager: true, as: 'url' },
  ) as Record<string, string>

  const items = Object.entries(media)
    .map(([path, url]) => {
      const file = path.split('/').pop() ?? path
      const ext = file.split('.').pop()?.toLowerCase() ?? ''
      const kind: 'image' | 'video' = ['mp4', 'webm', 'mov'].includes(ext)
        ? 'video'
        : 'image'
      return { path, url, file, kind }
    })
    .sort((a, b) => a.file.localeCompare(b.file))

  return (
    <section className="py-[100px] max-[991px]:py-[60px]">
      <Pad>
        <Container>
          <h2 className="mb-[40px] font-heading text-[36px] font-bold leading-[115%] text-primary max-[991px]:text-[28px]">
            Gallery
          </h2>

          {items.length === 0 ? (
            <p className="text-[18px] text-body max-[991px]:text-[16px]">
              No media found in <code>src/assets</code>. Add images/videos there
              (e.g. <code>src/assets/img</code>, <code>src/assets/video</code>)
              and refresh this page.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item.path}>
                  <div className="overflow-hidden rounded-[10px] bg-white shadow-sm ring-1 ring-border">
                    {item.kind === 'video' ? (
                      <video className="block w-full" controls preload="metadata">
                        <source src={item.url} />
                        Sorry, your browser doesn’t support embedded videos.
                      </video>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.file}
                        className="block aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="px-4 py-3">
                      <div className="truncate text-sm text-body">{item.file}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Pad>
    </section>
  )
}

