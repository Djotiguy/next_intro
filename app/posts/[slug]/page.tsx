"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import DefaultImage from "@/public/5.png";
import { Eye, MessageCircle } from "lucide-react";
import { usePost } from "@/hooks/usePost";

export default function SinglePostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data: post, isFetching, error } = usePost(slug);

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      <div className="flex mt-10 p-4">
        <div className="mx-auto max-w-7xl lg:flex items-center justify-center">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                {post?.title}
              </h1>
              <div className="flex justify-between items-center p-3 mb-3">
                <div className="flex justify-center items-center gap-3">
                  <Avatar>
                    <AvatarImage src={DefaultImage.toString()} />
                    {/* <AvatarFallback>{post?.author}</AvatarFallback> */}
                  </Avatar>
                  <div>
                    {post?.createdAt && (
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Posted on {new Date(post?.createdAt).toDateString()} by{" "}
                        {/* {post?.author} */}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex itmes-center gap-1">
                  <MessageCircle size={24} />
                  <p className="text-slate-500"> {post?.nbComments} </p>
                </div>
                <div className="flex itmes-center gap-1">
                  <Eye size={24} />
                  {/* <p className="text-slate-500"> {post?.nbViews} </p> */}
                </div>
              </div>
              <Separator />

              <div
                className="mt-6"
                dangerouslySetInnerHTML={{
                  __html: post?.content as string,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
