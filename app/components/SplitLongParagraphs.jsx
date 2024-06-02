import React from "react";

const SplitLongParagraphs = ({ children }) => {
  const text = children.props.children; // Accessing the content inside <p> tag

  const breakParagraph = (text, wordsPerChunk) => {
    const sentences = text.split(". "); // Splitting text into sentences
    const chunks = [];
    let currentChunk = "";

    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i];

      // Checking if adding the current sentence will exceed the word limit
      if ((currentChunk + sentence).split(" ").length <= wordsPerChunk) {
        currentChunk += sentence + " "; // Adding sentence to current chunk
      } else {
        // If adding the sentence exceeds the word limit, start a new chunk
        chunks.push(currentChunk.trim());
        currentChunk = sentence + ". "; // Starting new chunk with the current sentence
      }
    }

    if (currentChunk !== "") {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  };

  const wordsPerChunk = 100; // Adjust this value according to your preference

  const paragraphChunks = breakParagraph(text, wordsPerChunk);

  return (
    <div>
      {paragraphChunks.map((chunk, index) => (
        <p
          key={index}
          className="text-normal text-gray-300 mt-2 break-words"
        >
          {chunk}
        </p>
      ))}
    </div>
  );
};

export default SplitLongParagraphs;
