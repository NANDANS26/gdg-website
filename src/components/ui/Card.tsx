interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-sm border border-gray-100
        ${hover ? 'hover:shadow-lg hover:border-primary-100 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};