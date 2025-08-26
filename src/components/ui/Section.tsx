import React from 'react';

interface SectionProps {
  id?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
  titleIcon?: React.ReactNode;
  centered?: boolean;
  role?: string;
  ariaLabelledBy?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = 'py-16 px-6',
  titleClassName = 'text-3xl font-bold text-gray-900 mb-4',
  subtitleClassName = 'text-lg text-gray-600 max-w-3xl mx-auto',
  containerClassName = 'max-w-6xl mx-auto',
  titleIcon,
  centered = true,
  role,
  ariaLabelledBy,
}) => {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      className={className}
      role={role}
      aria-labelledby={ariaLabelledBy || titleId}
    >
      <div className={containerClassName}>
        <div className={centered ? 'text-center mb-12' : 'mb-12'}>
          <h2
            id={titleId}
            className={`${titleClassName} ${
              titleIcon ? 'flex items-center gap-3' : ''
            } ${centered ? 'justify-center' : ''}`}
          >
            {titleIcon}
            {title}
          </h2>
          {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
