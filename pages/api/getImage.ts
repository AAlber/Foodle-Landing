import {s3} from './uploadImage'

export const getResourceUrl = async(file:File | null)=>{
  const signedUrlRes = await fetch(`/api/getImage?file=${file ? file.name : ''}`);
  const signedUrlData = await signedUrlRes.json();
  return signedUrlData.imageUrl;
}

export default async function handler(req: any, res: any) {

  try {
    let imageUrl:string = s3.getSignedUrl('getObject', {
        Bucket: 'foodle-bucket',
        Key: req.query.file,
    });
  return res.status(200).json({imageUrl}); 
  } catch (error) {
    console.log(error)
  }
}


  