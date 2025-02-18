import { format } from 'date-fns';

interface PostLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  tags?: string[];
}

export default function PostLayout({ children, title, date, tags }: PostLayoutProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center justify-between">
          <time className="text-gray-600">{formattedDate}</time>
          {tags && tags.length > 0 && (
            <div className="flex gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div className="prose lg:prose-lg mx-auto">{children}</div>
    </article>
  );
}
