import Image from 'next/image';
export const OldPaperBg = ({ className = "", ...props }: { className?: string }) =>
(
  <div className={`absolute inset-0 ${className}`} {...props}>
    <Image
      src="/textures/bgOldPaper.webp"
      alt=""
      fill
      quality={75}
      priority
      sizes="100vw"
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  </div>
)
