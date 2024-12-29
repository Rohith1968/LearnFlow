const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuid } = require("uuid"); //for randomising the file-name.

const express = require("express");

const router = express.Router();

router.get("/get/preSignedURL", async (req, res) => {
  const contentType = req.query.contentType;

  // Generate a unique file name
  const fileName =
    req.query.fileName.split(".")[0] +
    "-" +
    uuid() +
    "." +
    contentType.split("/")[1];

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME, // Use environment variable for security
    Key: fileName,
    ContentType: contentType,
  });

  try {
    const url = await getSignedUrl(command, { expiresIn: 3600 });
    res.json({
      url,
      fileName,
    });
  } catch (error) {
    // Handle any errors in URL generation
    console.error("Error generating pre-signed URL:", error);
    res.status(500).send("Error generating pre-signed URL");
  }
});

module.exports = router;
