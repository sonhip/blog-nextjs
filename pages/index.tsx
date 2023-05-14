import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosted } from '@/lib/posts-util';
import { Fragment } from 'react';

export default function HomePage(props: { posts: any[] }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosted();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
