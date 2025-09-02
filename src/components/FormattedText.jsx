import React from 'react';

/**
 * Component that automatically formats text to make words followed by colons bold
 * @param {string} children - The text content to format
 * @param {string} className - Additional CSS classes
 */
const FormattedText = ({ children, className = '' }) => {
  if (!children || typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  // Regular expression to find words followed by colons
  const formatText = (text) => {
    // Split by word boundaries that end with colons
    const parts = text.split(/(\b\w+:)/g);
    
    return parts.map((part, index) => {
      // Check if this part matches "word:"
      if (/^\w+:$/.test(part)) {
        const word = part.slice(0, -1); // Remove colon
        return (
          <React.Fragment key={index}>
            <strong className="!font-bold !text-[#022759]">{word}</strong>:
          </React.Fragment>
        );
      }
      
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <span className={className}>
      {formatText(children)}
    </span>
  );
};

export default FormattedText;
