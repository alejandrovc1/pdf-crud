import express from 'express';
import { TokenValidation } from '../middlewares/verifyToken';
import * as pdf from '../controllers/pdf.controller';
import multer from '../middlewares/multer';

const router = express.Router();

router.use(TokenValidation);

router.route('/')
  .post(multer, pdf.createPDF)
  .get(pdf.allPDF);

  router.route("/:id")
  .get(pdf.readPDF)
  .put(multer, pdf.updatePDF)
  .delete(pdf.deletePDF);

export default router;