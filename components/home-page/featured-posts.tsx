import { PostItemProps } from '@/utils/types';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-post.module.css';

export default function FeaturedPosts(props: { posts: PostItemProps[] }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
