import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Cybersecurity in 2024",
    excerpt: "Learn about the latest trends in cybersecurity and how to protect yourself online.",
    author: "Dr. Rajesh Kumar",
    date: "March 15, 2024",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Legal Rights Every Indian Should Know",
    excerpt: "A comprehensive and super easy guide to fundamental legal rights in India.",
    author: "Adv. Priya Sharma",
    date: "March 12, 2024",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Crime Prevention: Community Guidelines",
    excerpt: "How communities & people can work together to prevent crime in their neighborhoods.",
    author: "Inspector Vikram Singh",
    date: "March 10, 2024",
    category: "Crime Prevention",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Latest Insights & Updates</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-['Poppins']">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-purple-500 hover:text-purple-600 transition">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition font-['Poppins']">
              Load More Articles
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}