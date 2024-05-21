
import { S3Client, ListBucketsCommand, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
require('dotenv').config();
// region: '<your-region>',
// us-west-1:25d60071-c77b-4ce7-b153-902b2fbcf9e0 us-west-1
const s3Client = new S3Client({
  region: 'us-west-1',
  credentials: {
    accessKeyId: "AKIARAWLTUA6QRF4QG4L" as string,
    secretAccessKey: "Djf/6BJqBHZN/TzfuBUuQyfiLfw6dy0K1N4te5BS" as string
  }
});
// const REGION ='YOUR_DESIRED_REGION_HERE';
const uploadFile = async (fileName: string, bucketName: string, file: File) => {
  const S3_BUCKET = 'mykuttanadu';
  console.log(process.env.AWS_ACCESS_KEY_ID as string)
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    region: 'us-west-1',
  };
  await s3Client.send(
    new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: fileName,
      Body: file,
      ContentType: 'image/jpg',
      ContentEncoding: 'base64'
    })
  )
  return {
    url: fileName
  };
};

export { s3Client, uploadFile };