import React, { useState } from "react";
import { useAppContext } from "./useAppContext";

export const usePreviewPhotos = () => {
  const { showToast } = useAppContext();
  const [files, setFiles] = useState<(string | ArrayBuffer | null)[]>([]);
  const maxSize = 12 * 1024 * 1024;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    let hasInvalidFiles = false;

    if (!fileList) return;

    for (const file of fileList) {
      if (file.type.startsWith("image/")) {
        if (file.size > maxSize) {
          showToast({
            title: "Error",
            message: "File size must bellow 12MB",
            type: "ERROR",
          });
          hasInvalidFiles = true;
          break;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
          setFiles((files) => [...files, reader.result]);
        };

        reader.readAsDataURL(file);
      } else {
        showToast({
          title: "Error",
          message: "Kindly select an image file. That's what we need ",
          type: "ERROR",
        });
        hasInvalidFiles = true;
        break;
      }
    }

    if (hasInvalidFiles) {
      return setFiles([]);
    }
  };

  return { files, setFiles, handlePhotoChange };
};
