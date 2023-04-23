import { PostItemProps } from '@/utils/types';
import PostItem from './post-item';
import classes from './posts-grid.module.css';

export default function PostsGrid(props: { posts: PostItemProps[] }) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </ul>
  );
}
