import { PostItemProps } from '@/utils/types';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
type Props = {
  posts: PostItemProps[];
};
export default function AllPosts(props: Props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
