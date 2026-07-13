import axios from "axios";

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY!;

export async function uploadImage(file: File) {
  
    console.log("API KEY:", IMGBB_API_KEY);
  console.log("FILE:", file);
  
    const formData = new FormData();

  formData.append("image", file);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    formData
  );

  return data.data.url as string;
}