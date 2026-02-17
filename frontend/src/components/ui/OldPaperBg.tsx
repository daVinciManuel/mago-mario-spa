import Image from 'next/image';
export const OldPaperBg = () =>
(
  <div className="absolute inset-0">
    <Image
      src="/textures/bgOldPaper.webp"
      alt=""
      fill
      quality={90}
      priority
      sizes="100vw"
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  </div>
)

