import React from 'react';

interface SectionProps {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="flex items-center mb-6">
        <i className={`${icon} text-3xl text-blue-500 mr-4`}></i>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </section>
  );
};

export default Section;
