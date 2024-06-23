import express from "express";
import cors from "cors";

export const express = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

}

// const errorMiddleware = require("./middleware/error");


// Middleware for Errors
// app.use(errorMiddleware);

