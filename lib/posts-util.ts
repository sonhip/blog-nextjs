import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file name extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}
export function getAllPosts() {
  const postFiles: any = getPostsFiles();

  const allPosts = postFiles.map((postFile: string) => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA: any, postB: any) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosted() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);
  return featuredPosts;
}
