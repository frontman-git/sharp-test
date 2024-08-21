const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./images";
const outputDir = "./output";

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const images = files.filter((file) => {
    return /\.(jpg|jpeg|png)$/i.test(file);
  });
  if (!fs.existsSync(outputDir)) {
    fs.mkdir(outputDir, { recursive: true });
  }
  images.forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
  });
});
