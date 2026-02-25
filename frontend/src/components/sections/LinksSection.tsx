import Image from 'next/image';
import { SocialLink } from "@/types/links";
import { ICON_PATHS } from "@/constants/iconpath";

interface PropsData {
  links: SocialLink[];
}

export const LinksSection = ({ links }: PropsData) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {links.map((item) => {
        const iconSrc = ICON_PATHS[item.app] || "/image/icon/mago.png";

        return (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full p-4 bg-amber-50/40 backdrop-blur-sm border border-amber-800/30 rounded-lg flex items-center gap-4 hover:bg-amber-100/60 hover:border-amber-800 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-900/10 border border-amber-800/20 flex items-center justify-center overflow-hidden shadow-inner">
              <Image
                src={iconSrc}
                alt={`Icono de ${item.app}`}
                width={32}
                height={32}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between w-full">
                <span className="font-cinzel text-base md:text-lg text-amber-950 font-bold tracking-wider uppercase">
                  {item.app}
                </span>
                <span className="text-amber-800 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>

              {item.user && (
                <span className="font-crimson text-sm text-amber-800/70 font-semibold leading-tight">
                  {item.user}
                </span>
              )}

              {item.description && (
                <p className="font-crimson text-sm text-amber-900/60 italic mt-0.5 leading-tight">
                  {item.description}
                </p>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};
