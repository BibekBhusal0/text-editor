export const urlPattern = /(https?:\/\/[^\s"'"]+|www\.[^\s"'"]+)/;
export const extractURL = (text: string) => text.match(urlPattern) || [];

export const isValidURL = (text: string) => {
  try {
    new URL(text);
  } catch {
    return false;
  }
  return true;
};

export const makeUrl = (text: string) => {
  try {
    if (text.includes(".") && !text.includes(" ")) {
      return new URL(`https://${text}`).toString();
    }
  } catch (e) {
    return null;
  }

  return null;
};

export const getUrlFromString = (text: string): string | null => {
  if (isValidURL(text)) return text;
  const url = extractURL(text)[0];
  if (url) return url;
  if (text.includes(" ")) return null;
  return makeUrl(text);
};
