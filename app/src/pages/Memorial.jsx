import React from "react";
import ChecklistManager from "@/components/checklist/ChecklistManager";
import { Card, CardContent } from "@/components/ui/card";
import { MEMORIAL_TASKS } from "@/data/checklists";

export default function MemorialPage() {
  return (
    <div className="px-6 py-10">
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Memorial celebration</h1>
        <p className="text-sm text-[#a3a3a3]">
          Create a lasting tribute with meaningful rituals, mementos, and shared remembrance.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardContent>
            <ChecklistManager
              category="memorial"
              title="Memorial checklist"
              defaultTasks={MEMORIAL_TASKS}
            />
          </CardContent>
        </Card>
        <Card className="bg-[#0f0f0f]/70">
          <CardContent className="space-y-4 text-sm text-[#c5c5c5]">
            <h2 className="text-lg font-light text-[#f5f5f5]">Remember</h2>
            <ul className="space-y-3">
              <li>Invite guests to contribute photos ahead of time.</li>
              <li>Arrange a memory table or digital tribute wall.</li>
              <li>Coordinate a charitable donation in their honor.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
