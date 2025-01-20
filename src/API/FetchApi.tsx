import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", 
});

interface PostData {
  id: string;
  title: string;
  description: string; 
  price: number; 
  image: string; 
}

interface UpdateResponse {
  data: PostData;
}


export const git_users = async () => {
  const res = await api.get("/products");
  return res.status === 200 ? res.data : [];
};
export const deletePost = async (id: string) => {
  const res = await api.delete(`/products/${id}`);
  return res.status === 200;
};


export const updatePost = async (id: string): Promise<UpdateResponse> => {

  const updatedData = {
    title: "Updated Product Title", 
  };

  const response = await api.put(`/products/${id}`, updatedData);
  return { data: response.data }; 
};
