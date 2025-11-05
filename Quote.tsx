import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
}

const Quote: React.FC<QuoteProps> = ({ children, author }) => {
  return (
    <blockquote className="my-6 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 rounded-r-lg">
      <p className="italic text-gray-700 dark:text-gray-300">
        "{children}"
      </p>
      {author && (
        <cite className="block text-right mt-2 not-italic text-gray-500 dark:text-gray-400">
          — {author}
        </cite>
      )}
    </blockquote>
  );
};

export default Quote;
