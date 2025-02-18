import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PostLayout from '@/components/PostLayout';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostPageProps) {
  const { slug } = params;
  const postPath = join(process.cwd(), 'src/content/posts', `${slug}.mdx`);
  const fileContent = readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <PostLayout
      title={data.title}
      date={data.date}
      tags={data.tags}
    >
      <MDXRemote source={content} />
    </PostLayout>
  );
}

export async function generateStaticParams() {
  // This would typically read all posts and return their slugs
  return [
    { slug: 'nextjs-14' },
  ];
}
