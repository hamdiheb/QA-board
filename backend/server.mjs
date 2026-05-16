import express from "express";
import cors from "cors";

const APP = express();
const PORT = 3000;

const QUESTIONS = [
  {
    id: 1,
    question: "Who am I?",
    vote: 0,
  },
  {
    id: 2,
    question: "Where am I?",
    vote: 0,
  },
];

APP.use(cors());
