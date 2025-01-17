import { useQuery } from "react-query";
import axios from "axios";
import { Post } from "@prisma/client";

const getPostSlug = async (slug: string) => {
  const { data } = await axios.get(`/api/posts/${slug}`);
  return data as Post;
};

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostSlug(slug),
    enabled: !!slug,
  });
}
