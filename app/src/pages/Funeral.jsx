import React from "react";
import ChecklistManager from "@/components/checklist/ChecklistManager";
import { Card, CardContent } from "@/components/ui/card";
import { FUNERAL_TASKS } from "@/data/checklists";

export default function FuneralPage() {
  return (
    <div className="px-6 py-10">
      <div className="mb-8 space-y-3">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Funeral service planning</h1>
        <p className="text-sm text-[#a3a3a3]">
          Organize the ceremony details, key participants, and timing for the funeral service.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardContent>
            <ChecklistManager
              category="funeral"
              title="Ceremony checklist"
              defaultTasks={FUNERAL_TASKS}
            />
          </CardContent>
        </Card>
        <Card className="bg-[#0f0f0f]/70">
          <CardContent className="space-y-4 text-sm text-[#c5c5c5]">
            <h2 className="text-lg font-light text-[#f5f5f5]">Tips</h2>
            <ul className="space-y-3">
              <li>Coordinate with the venue for arrival times and AV needs.</li>
              <li>Assign a point person for guest seating and accessibility support.</li>
              <li>Prepare printed programs or digital order of service.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
