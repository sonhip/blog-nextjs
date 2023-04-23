import AllPosts from '@/components/posts/all-posts';
import { PostItemProps } from '@/utils/types';

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
export default function AllPostPage() {
  return <AllPosts posts={DUMMY_DATA} />;
}
