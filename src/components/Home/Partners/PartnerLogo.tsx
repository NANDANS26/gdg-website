interface PartnerLogoProps {
  name: string;
  logo: string;
  website: string;
}

export function PartnerLogo({ name, logo, website }: PartnerLogoProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
    >
      <img
        src={logo}
        alt={name}
        className="h-12 object-contain"
      />
    </a>
  );
}