import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
  }),
);

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
