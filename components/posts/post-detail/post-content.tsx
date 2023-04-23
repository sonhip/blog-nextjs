import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_DATA = {
  slug: 'getting-started-with-nextjs-1',
  title: 'Getting Started With Next',
  image: 'getting-started-with-next.png',
  excerpt:
    'Nextjs is a the react framework for production - it makes building fullstack react',
  date: '2022-02-10',
  content: 'some content',
};

type Props = {};

export default function PostContent({}: Props) {
  const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_DATA.title} image={imagePath} />
      {DUMMY_DATA.content}
    </article>
  );
}
