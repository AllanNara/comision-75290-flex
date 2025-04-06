import multer from "multer";
import { dirname } from "../utils.js";

const multerMiddleware = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, dirname + "/public/img");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export default multerMiddleware;
