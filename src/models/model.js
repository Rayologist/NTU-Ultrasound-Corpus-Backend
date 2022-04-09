import path from "path";
import { readJSON } from "../helpers/readers.js";
import { LanguageError } from "../helpers/errors.js";
import {
  MANDARIN_MAINLAND,
  MANDARIN_TAIWAN,
  SQULIQ_ATAYAL,
} from "../constants/constants.js";
import { __dirname } from "../constants/constants.js";

const JSONDir = path.resolve(__dirname, "models", "json");

const langaugeFactory = async (language) => {
  switch (language) {
    case MANDARIN_TAIWAN:
      return readJSON(path.join(JSONDir, "mandarin-taiwan.json"));
    case MANDARIN_MAINLAND:
      return readJSON(path.join(JSONDir, "mandarin-beijing.json"));
    case SQULIQ_ATAYAL:
      return readJSON(path.join(JSONDir, "squliq-atayal.json"));
    default:
      throw new LanguageError();
  }
};




export default langaugeFactory;