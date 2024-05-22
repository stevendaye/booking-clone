import { HotelFormData } from "../forms/ManageHotel/ManageHotelForm";

const DEFAULT_FILE_NAME_PREFIX = "image";
const DEFAULT_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const convertToFiles = async (
  imageFiles: HotelFormData["imageFiles"],
  fileNamePrefix: string = DEFAULT_FILE_NAME_PREFIX,
  mimeTypes: string[] = DEFAULT_MIME_TYPES
): Promise<File[]> => {
  const files: File[] = [];

  let mimeTypeIndex = 0;

  for (const [index, file] of imageFiles.entries()) {
    if (file instanceof ArrayBuffer) {
      const mimeType = mimeTypes[mimeTypeIndex % mimeTypes.length];
      files.push(
        new File([file], `${fileNamePrefix}${index}`, { type: mimeType })
      );
      mimeTypeIndex++;
    } else if (typeof file === "string") {
      let dataUrl = file;
      if (!dataUrl.startsWith("data:")) {
        // Assume the string is base64 encoded without the data URL prefix
        dataUrl = `data:${
          mimeTypes[mimeTypeIndex % mimeTypes.length]
        };base64,${file}`;
      }
      const byteString = atob(dataUrl.split(",")[1]);
      const byteNumbers = new Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        byteNumbers[i] = byteString.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const mimeType = mimeTypes[mimeTypeIndex % mimeTypes.length];
      files.push(
        new File([byteArray], `${fileNamePrefix}${index}`, { type: mimeType })
      );
      mimeTypeIndex++;
    } else if (file !== null) {
      console.error(`Invalid file type at index ${index}:`, file);
    }
  }

  return files;
};

export default convertToFiles;
