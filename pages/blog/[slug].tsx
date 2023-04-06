import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typing";
import PortableText from "react-portable-text";
import HamberMenu from "../../components/Layout/HamberMenu";
import { useRecoilValue } from "recoil";
import { menuState } from "../../atoms/menuAtom";
import Navbar from "../../components/Layout/Navbar";

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  const open = useRecoilValue(menuState);
  return (
    <main className="bg-hero-pattern pb-10">
      {open ? <HamberMenu /> : null}
      <Navbar />

      <div
        className="w-full bg-cover bg-left md:bg-center h-[35rem] sm:h-[40rem]"
        style={{ backgroundImage: `url(${urlFor(post.mainImage).url()!})` }}
      >
        <div className="flex items-center justify-center h-full w-full bg-neutral-900 bg-opacity-70">
          <h1 className="text-white text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      <article className="max-w-6xl mx-auto p-5 border-2 mt-8 border-y-0 shadow-lg border-[#FF821E] rounded-[2.5rem]">
        <div className="mt-10">
          <PortableText
            className="text-white text-justify font-[vazir] px-8"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `
        *[_type == "post"]{
            _id,
            slug {
                current
            }
        }
    `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        'comments': *[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true],
        description,
        mainImage,
        slug,
        body,
    }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 seconds, itll update the old caches version
  };
};
