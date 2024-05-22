import multer from "multer";

const storage = multer.memoryStorage();
const uploadImage = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export default uploadImage;
