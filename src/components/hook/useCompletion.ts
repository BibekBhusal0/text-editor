import { useState, useCallback } from "react";
import { generateLoremIpsum as generateLoremIpsumOriginal } from "@/utils/lorem";

export const useDummyCompletion = () => {
  const [completion, setCompletion] = useState("");
  const [loading, setLoading] = useState(false);

  const generateLoremIpsum = useCallback(
    (words: number): Promise<string> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const loremIpsum = generateLoremIpsumOriginal(words);
          resolve(loremIpsum);
        }, 2000);
      });
    },
    [generateLoremIpsumOriginal]
  );

  const getAiText = useCallback(
    async (num_words?: number) => {
      setLoading(true);
      try {
        const newCompletion = await generateLoremIpsum(num_words || 100);
        setCompletion(newCompletion);
      } finally {
        setLoading(false);
      }
    },
    [generateLoremIpsum]
  );

  return { completion, loading, getAiText, setCompletion };
};
