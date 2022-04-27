import express from "express";
import { checkIfUrlExists } from "./utils/checkUrlExist";
import { checkIfUrlIsValid } from "./utils/checkUrlValid";
import { createShortUrl } from "./utils/createShortUrl";
import { findUrl } from "./utils/findUrl";

const app = express();
const port = process.env.PORT || 3033;

app.use(express.json());

app.post("/shorten", checkIfUrlIsValid, checkIfUrlExists, createShortUrl);
app.get("/:urlId", findUrl);

app.listen(port, () => console.log(`Listening on port ${port}`));
