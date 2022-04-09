import { readJSON } from "../helpers/readers.js";

const sjson = await readJSON(
  "/Users/rayologist/Desktop/ultrasound-corpus/server/src/models/json/squliq-atayal.json"
);

const mbjson = await readJSON(
    "/Users/rayologist/Desktop/ultrasound-corpus/server/src/models/json/mandarin-beijing.json"
  );
const mtjson = await readJSON(
    "/Users/rayologist/Desktop/ultrasound-corpus/server/src/models/json/mandarin-taiwan.json"
  );

console.log(sjson.map(data=>data.segment));
// console.log(mbjson.map(data=>data.segment));