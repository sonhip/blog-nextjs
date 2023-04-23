import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { PostItemProps } from '@/utils/types';
import { Fragment } from 'react';

const DUMMY_DATA: PostItemProps[] = [
  {
    slug: 'getting-started-with-nextjs-1',
    title: 'Getting Started With Next',
    image: 'getting-started-with-next.png',
    excerpt:
      'Nextjs is a the react framework for production - it makes building fullstack react',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting Started With Next',
    image: 'getting-started-with-next.png',
    excerpt:
      'Nextjs is a the react framework for production - it makes building fullstack react',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting Started With Next',
    image: 'getting-started-with-next.png',
    excerpt:
      'Nextjs is a the react framework for production - it makes building fullstack react',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-4',
    title: 'Getting Started With Next',
    image: 'getting-started-with-next.png',
    excerpt:
      'Nextjs is a the react framework for production - it makes building fullstack react',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs-5',
    title: 'Getting Started With Next',
    image: 'getting-started-with-next.png',
    excerpt:
      'Nextjs is a the react framework for production - it makes building fullstack react',
    date: '2022-02-10',
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}
