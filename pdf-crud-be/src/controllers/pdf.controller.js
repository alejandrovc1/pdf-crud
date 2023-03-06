import Pdf from "../models/Pdf";
import fs from 'fs-extra';
import path from 'path';

export const createPDF = async (req, res) => {
  try {
    console.log(req.body);
    const { title } = req.body;
    console.log(req.file);
    const pdf = new Pdf({
      title,
      file: req.file.path,
      user: req.userId,
    });
    await pdf.save();
    res.status(200).json({
      message: "PDF saved successfully",
      pdf,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const readPDF = async (req, res) => {
  try {
    const id = req.params.id;
    const pdf = await Pdf.findById(id);
    res.status(200).json(pdf);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const updatePDF = async (req, res) => {
  try {
    const id = req.params.id,
      { title } = req.body;
    if (req.file) {
      const updatedPDF = await Pdf.findByIdAndUpdate(
        id,
        { title, file: req.file.path },
        { new: true }
      );
      res.status(200).json({
        message: "PDF updated successfully",
        updatedPDF
      });
    } else {
      const updatedPDF = await Pdf.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      res.status(200).json({
        message: "PDF updated successfully",
        updatedPDF
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const deletePDF = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPDF = await Pdf.findByIdAndDelete(id);
    if (deletePDF) {
      await fs.unlink(path.resolve(deletedPDF.file));
    }
    res.status(200).json({
      message: "PDF deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
};

export const allPDF = async (req, res) => {
  try {
    const pdfs = await Pdf.find({user: req.userId}).sort("title");
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({
      message: "An error has occurred",
      error,
    });
  }
}