import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';

export function FeedbackForm() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ rating, feedback });
    setRating(0);
    setFeedback('');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4 font-['Poppins']">Your Feedback Matters</h2>
          <p className="text-gray-600 text-center mb-8 font-['Poppins']">
            Help us improve our services by sharing your experience
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-2"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hover || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                  Share your experience
                </label>
                <textarea
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition font-['Poppins']"
                  placeholder="Tell us what you think..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition flex items-center justify-center space-x-2 font-['Poppins']"
              >
                <span>Submit Feedback</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4.5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-['Poppins']">
                "Excellent resource for understanding legal rights and procedures!"
              </p>
              <p className="text-sm text-gray-500 mt-2 font-['Poppins']">Ankush Shah</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-['Poppins']">
                "The cybersecurity tools helped me secure my online presence."
              </p>
              <p className="text-sm text-gray-500 mt-2 font-['Poppins']">Rootvik</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-['Poppins']">
                "Very helpful services information and quick response."
              </p>
              <p className="text-sm text-gray-500 mt-2 font-['Poppins']">Arun</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}