import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";

const phrases = [
  "Take it slow.",
  "Honor every memory.",
  "Plan together.",
];

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-8"
      >
        <div className="flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a5a5] to-[#c19a9a]">
            <span className="text-3xl">🕊️</span>
          </div>
        </div>
        <h1 className="text-5xl font-light text-[#f5f5f5]">In Remembrance</h1>
        <p className="text-lg font-light text-[#c5c5c5]">
          A gentle companion for planning funerals, wakes, and memorials. Organize every detail with compassion,
          collaboration, and clarity.
        </p>
        <div className="grid gap-3 text-sm text-[#a3a3a3] sm:grid-cols-3">
          {phrases.map((phrase) => (
            <div key={phrase} className="rounded-xl border border-[#2a2a2a] bg-[#0f0f0f]/60 px-4 py-3">
              {phrase}
            </div>
          ))}
        </div>
        <Button asChild className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]">
          <Link to={createPageUrl("FuneralSetup")}>Begin the journey</Link>
        </Button>
      </motion.div>
    </div>
  );
}
