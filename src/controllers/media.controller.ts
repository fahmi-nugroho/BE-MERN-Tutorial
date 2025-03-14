import { Response } from "express";
import { IReqUser } from "../utils/interfaces";
import uploader from "../utils/uploader";

export default {
  async single(req: IReqUser, res: Response) {
    if (!req.file) {
      return void res.status(400).json({
        data: null,
        message: "File is not exist",
      });
    }
    try {
      const result = await uploader.uploadSingle(
        req.file as Express.Multer.File
      );
      res.status(200).json({
        data: result,
        message: "success upload file",
      });
    } catch {
      return void res.status(500).json({
        data: null,
        message: "failed upload file",
      });
    }
  },
  async multiple(req: IReqUser, res: Response) {
    if (!req.files || req.files.length === 0) {
      return void res.status(400).json({
        data: null,
        message: "File is not exist",
      });
    }
    try {
      const result = await uploader.uploadMultiple(
        req.files as Express.Multer.File[]
      );
      res.status(200).json({
        data: result,
        message: "success upload files",
      });
    } catch {
      return void res.status(500).json({
        data: null,
        message: "failed upload files",
      });
    }
  },
  async remove(req: IReqUser, res: Response) {
    try {
      const { fileUrl } = req.body as { fileUrl: string };
      const result = await uploader.remove(fileUrl);
      res.status(200).json({
        data: result,
        message: "success remove file",
      });
    } catch {
      return void res.status(500).json({
        data: null,
        message: "failed remove files",
      });
    }
  },
};
