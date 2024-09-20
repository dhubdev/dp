import type { FormatToken } from "../interface";

export const purify = (str: string) => str.toLowerCase().trim()

export const slugify = (str: string) => {
  return str.toLowerCase().trim().replace(/\s+/g, '-') // Convert to lowercase and replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove non-word characters except -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Remove leading -
    .replace(/-+$/, ''); // Remove trailing -
}

export const isValid = (fieldMap: Record<string, any>, fields: Record<string, any>) => {

  Object.keys(fieldMap)
  .map(key => (fieldMap[key] = fields[key]))

  delete fieldMap['undefined']

  for (const [key] of Object.entries(fieldMap)) {
    if (!fieldMap[key]) {
      return { flag: false, message: `${key} field is required` }
    }
  }
  return { flag: true, message: "" }
}
export function format(date: Date, format: string): string {
  const months: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const tokens: Record<FormatToken, string> = {
    YYYY: date.getFullYear().toString(),
    MM: String(date.getMonth() + 1).padStart(2, '0'), // Months are zero-indexed
    MMM: months[date.getMonth()],
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
  };

  // Ensure `MMM` is processed before `MM` to avoid partial replacements
  return format.replace(/YYYY|MMM|MM|DD|HH|mm|ss/g, (match) => tokens[match as FormatToken]);
}

/**
 * Converts an image file to a data URL for preview.
 * @param file The image file to convert.
 * @returns A promise that resolves with the data URL of the image.
 */
export const convertImageToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Event listener for when the file is successfully read
      reader.onload = () => {
          if (reader.result) {
              resolve(reader.result as string);
          } else {
              reject('FileReader result is empty');
          }
      };

      // Event listener for when there's an error reading the file
      reader.onerror = () => {
          reject('Failed to read file');
      };

      // Start reading the file as a data URL
      reader.readAsDataURL(file);
  });
}
