import React from "react";
import ChecklistManager from "@/components/checklist/ChecklistManager";
import { Card, CardContent } from "@/components/ui/card";
import { WAKE_TASKS } from "@/data/checklists";

export default function WakePage() {
  return (
    <div className="px-6 py-10">
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Wake coordination</h1>
        <p className="text-sm text-[#a3a3a3]">
          Plan the post-service gathering with warmth, comfort, and thoughtful details.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardContent>
            <ChecklistManager category="wake" title="Wake checklist" defaultTasks={WAKE_TASKS} />
          </CardContent>
        </Card>
        <Card className="bg-[#0f0f0f]/70">
          <CardContent className="space-y-4 text-sm text-[#c5c5c5]">
            <h2 className="text-lg font-light text-[#f5f5f5]">Ideas</h2>
            <ul className="space-y-3">
              <li>Offer guests a memory jar to share their stories.</li>
              <li>Prepare a slideshow or playlist with favorite moments.</li>
              <li>Coordinate transportation support for close family members.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
