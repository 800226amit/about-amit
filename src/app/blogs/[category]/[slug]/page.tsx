import path from 'path';
import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import mdxMermaid from 'mdx-mermaid';
import MermaidClient from '@/components/mdx/MermaidClient';

type BlogPageProps = {
    params: Promise<{
        category: string;
        slug: string;
    }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
    const { category, slug } = await params;

    const filePath = path.join(
        process.cwd(),
        'src/app/blogs/_blogs',
        category,
        `${slug}.md`
    );

    let markdown = '';

    try {
        markdown = await fs.readFile(filePath, 'utf8');
    } catch {
        markdown = '# The Blogs are comming soon';
    }

    const mdxMermaidPlugin =
        (mdxMermaid as unknown as { default?: typeof mdxMermaid }).default ??
        mdxMermaid;

    const mermaidConfig = {
        theme: {
            light: 'default',
            dark: 'default'
        },
        mermaid: {
            theme: 'default',
            themeVariables: {
                textColor: '#111827',
                primaryTextColor: '#111827',
                lineColor: '#111827',
                fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
            }
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
            <div className="container mx-auto px-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg p-8">
                   <div>
                     <MDXRemote
                        source={markdown}
                        options={{
                            mdxOptions: {
                                remarkPlugins: [remarkGfm, [mdxMermaidPlugin, mermaidConfig]]
                            }
                        }}
                        components={{
                            h1: (props) => <h1 className="text-3xl font-bold text-gray-900 mb-4" {...props} />,
                            h2: (props) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                            h3: (props) => <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2" {...props} />,
                            p: (props) => <p className="mb-4" {...props} />,
                            ul: (props) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                            ol: (props) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
                            li: (props) => <li {...props} />,
                            a: (props) => <a className="text-amber-700 underline hover:text-amber-600" {...props} />,
                            code: (props) => <code className="bg-amber-50 text-amber-900 px-1 py-0.5 rounded" {...props} />,
                            img: (props) => (
                                <img
                                    className="my-4 max-w-full rounded-lg border border-amber-200/40 shadow-sm"
                                    loading="lazy"
                                    {...props}
                                />
                            ),
                            mermaid: MermaidClient,
                            Mermaid: MermaidClient
                        }}
                    />
                   </div>
                </div>
            </div>
        </section>
    );
}
