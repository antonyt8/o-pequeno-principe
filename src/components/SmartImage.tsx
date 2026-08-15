import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

import { useI18n } from "@/lib/i18n";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Classe aplicada ao contêiner que segura o esqueleto. */
  wrapperClassName?: string;
};

/**
 * Imagem com estado de carregamento (skeleton) para evitar que ilustrações
 * grandes "pipoquem" na tela.
 */
export function SmartImage({ src, alt, className, wrapperClassName, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { t } = useI18n();

  // Imagens em cache já podem estar completas antes do onLoad do React.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName ?? ""}`}>
      {!loaded && (
        <span
          aria-hidden="true"
          className="img-skeleton absolute inset-0 block"
          title={t("loadingImage")}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${className ?? ""} transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
        {...rest}
      />
    </span>
  );
}
