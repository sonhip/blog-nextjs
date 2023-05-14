import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import { PostItemProps } from '@/utils/types';

export default function PostDetailPage(props: { post: PostItemProps }) {
  return <PostContent post={props.post} />;
}
export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postFilesName: any = getPostsFiles();
  const slugs: any[] = postFilesName.map((fileName: string) =>
    fileName.replace(/\.md$/, '')
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
