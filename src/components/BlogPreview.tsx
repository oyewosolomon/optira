import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
// Assuming blogPosts data is populated with Optira's content elsewhere
import { blogPosts } from '@/data/blogPosts';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlogPreview = () => {
  // Get the 3 most recent blog posts based on date
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    // Section ID can remain #blog or be updated, standard #blog is common
    <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-black" /> {/* Icon remains relevant */}
              {/* Updated label */}
              <span className="text-black font-medium">Optira Insights</span>
            </div>
            {/* Updated Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Articles & Perspectives</h2>
            {/* Updated Description */}
            <p className="text-gray-800 max-w-xl">
              Explore our latest articles and perspectives on startup technology strategy, building high-impact teams, efficient MVP development, and accelerating product-market fit.
            </p>
          </div>
          {/* Updated button text */}
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
              View All Insights {/* Updated button text */}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> {/* Icon remains relevant */}
            </Button>
          </Link>
        </div>

        {/* Blog Posts Display - Assumes BlogPostCard component and blogPosts data structure are appropriate for Optira content */}
        <div className="relative">
          {/* Mobile Horizontal Scroll */}
          <ScrollArea className="w-full">
            <div className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex-none w-[85%] snap-center">
                  {/* BlogPostCard component will render individual posts */}
                  {/* Ensure the blogPosts data imported from '@/data/blogPosts' contains Optira's blog content */}
                  <BlogPostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl || '/placeholder.svg'} // Use actual image URLs from data
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                  />
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {recentPosts.map((post) => (
               <BlogPostCard
                 key={post.id}
                 title={post.title}
                 excerpt={post.excerpt}
                 imageUrl={post.imageUrl || '/placeholder.svg'} // Use actual image URLs from data
                 date={post.date}
                 slug={post.slug}
                 category={post.category}
               />
             ))}
          </div>

          {/* Mobile Pagination Dots (Visual indicator for the 3 posts shown) */}
          {/* Note: These dots are static visual indicators based on showing 3 posts, not dynamic based on scroll position in the provided code */}
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  // You might want to add logic here to make the dots active based on scroll position if needed
                  // For now, keeping the original static appearance as per the provided code
                  className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;