interface PartnerIconProps {
  name: string;
  icon: React.ReactNode;
  website: string;
}

export function PartnerIcon({ name, icon, website }: PartnerIconProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-gray-900 dark:text-white font-medium">{name}</span>
    </a>
  )
}