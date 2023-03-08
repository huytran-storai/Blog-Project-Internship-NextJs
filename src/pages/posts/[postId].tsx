import React from "react";
import Format from "../../../layout/format";
import Author from "../../../components/_child/author";
import Image from "next/image";
import Related from "../../../components/_child/related";
import getPost from "../../../lib/config_API";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import fetcher from "../../../lib/fetcher";
import Spinner from "../../../components/_child/spinner";
import Error from "../../../components/_child/error";
interface Props {
  fallback: {
    "api/posts": any;
  };
}
export default function Page({ fallback }: Props) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data}></Article>
    </SWRConfig>
  );
}
interface ArticleProps {
  title?: string;
  subtitle?: string;
  category?: string;
  img?: string;
  published?: string;
  author?: any;
  description?: string;
}
function Article({
  title,
  subtitle,
  category,
  img,
  published,
  author,
  description,
}: ArticleProps): JSX.Element {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author}></Author> : ""}
        </div>
        <div className="post-py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title || ""}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle || ""}</p>
          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} alt="food"></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || ""}
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}
interface Params {
  params?: any;
}
export async function getStaticProps({ params }: Params) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: { params: { postId: string } }[];
  fallback: boolean;
}> {
  const posts = await getPost();
  const paths = posts.map((value: any) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
