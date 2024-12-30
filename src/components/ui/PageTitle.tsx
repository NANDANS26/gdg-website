interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: PageTitleProps) {
  return (
    <h1 className={`page-title ${className}`}>
      {children}
    </h1>
  )
}