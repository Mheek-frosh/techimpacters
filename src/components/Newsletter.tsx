"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Simulate subscription - in production, connect to your email service
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
            <Mail className="text-white" size={28} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Stay in the Loop
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Get updates on our projects, impact stories, and opportunities to get involved. No spam—just meaningful content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-4 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder:text-blue-200 focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            <span>Subscribe</span>
            <Send size={18} />
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-200 font-medium">
            Thanks for subscribing! We&apos;ll be in touch.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
