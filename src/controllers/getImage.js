import urljoin from "url-join";
import langaugeFactory from "../models/model.js";

const handleGetImage = async (req, res) => {
  try {
    const { language, type } = req.body;
    const segment = req.body[type];
    const images = await langaugeFactory(language);
    const data = images.filter((image) => image.segment === segment)[0];

    if (data == null) {
      return res
        .status(400)
        .json({ status: "failed", msg: "Segment not found" });
    }

    data.rawImage = urljoin(
      req.protocol + "://" + req.get("host"),
      "images",
      data.rawImage.replace("ultrasound", "compressed")
    );

    data.tracedImage = urljoin(
      req.protocol + "://" + req.get("host"),
      "images",
      data.tracedImage.replace("ultrasound", "compressed")
    );
    return res.status(200).json({ status: "success", data });
  } catch (error) {
    return res.status(400).json({ status: "failed", msg: error.message });
  }
};

export default handleGetImage;
