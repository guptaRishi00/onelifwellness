import React from 'react';

/**
 * Formats text to make any word followed by a colon (:) bold
 * @param {string} text - The text to format
 * @returns {JSX.Element} - Formatted text with bold words before colons
 */
export const formatTextWithColons = (text) => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  // Regular expression to match words followed by colons
  const colonPattern = /(\b\w+):/g;
  
  // Split the text by the pattern and format accordingly
  const parts = text.split(colonPattern);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if the next part is a colon (odd indices after split)
        const nextPart = parts[index + 1];
        const isWordBeforeColon = index % 2 === 1 && parts[index + 1] !== undefined;
        
        if (isWordBeforeColon) {
          return (
            <React.Fragment key={index}>
              <strong className="!font-bold !text-[#022759]">{part}</strong>:
            </React.Fragment>
          );
        }
        
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};

/**
 * Formats text to make words followed by colons bold (alternative implementation)
 * @param {string} text - The text to format
 * @returns {JSX.Element} - Formatted text with bold words before colons
 */
export const formatColonText = (text) => {
  if (!text || typeof text !== 'string') {
    return text;
  }

  // Split text by word boundaries and colons
  const parts = text.split(/(\b\w+:)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part matches the pattern "word:"
        if (/^\w+:$/.test(part)) {
          const word = part.slice(0, -1); // Remove the colon
          return (
            <React.Fragment key={index}>
              <strong className="!font-bold !text-[#022759]">{word}</strong>:
            </React.Fragment>
          );
        }
        
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
