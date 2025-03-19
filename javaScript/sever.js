import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

let text = [];

app.post("/post", (req, res) => {
  const { texto } = req.body;
  text.push(texto);

  res.status(200).json({ msg: "the text", texto });
});

app.get("/get", (req, res) => {
  const result = text[text.length - 1];
  res.status(200).json(result);
});

app.listen(3000, () => {
  console.log("the server is running in the port 3000");
});
