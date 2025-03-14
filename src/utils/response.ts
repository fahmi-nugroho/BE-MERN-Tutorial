import { Response } from "express";
import * as Yup from "yup";

type Pagination = {
  totalPages: number;
  current: number;
  total: number;
};

export default {
  success(res: Response, data: any, message: string) {
    res.status(200).json({
      meta: {
        status: 200,
        message: message,
      },
      data,
    });
  },
  error(res: Response, error: unknown, message: string) {
    if (error instanceof Yup.ValidationError) {
      return void res.status(400).json({
        meta: {
          status: 400,
          message: message,
        },
        data: error.errors,
      });
    } else {
      return void res.status(400).json({
        meta: {
          status: 400,
          message: message,
        },
        data: null,
      });
    }
  },
  unauthorized(res: Response, message: string = "unauthorized") {
    res.status(403).json({
      meta: {
        status: 403,
        message: message,
      },
      data: null,
    });
  },
  pagination(
    res: Response,
    data: any[],
    pagination: Pagination,
    message: string
  ) {
    res.status(200).json({
      meta: {
        status: 200,
        message: message,
      },
      data,
      pagination,
    });
  },
};
