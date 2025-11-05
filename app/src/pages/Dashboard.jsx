import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Heart, Users, MessageCircle, Flower2, CalendarDays, Receipt, ImageIcon } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createPageUrl, formatCurrency, formatDate } from "@/utils";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

const useChecklistSummary = (category, funeralId) =>
  useQuery({
    queryKey: ["checklist", category, funeralId, "summary"],
    queryFn: () =>
      base44.entities.ChecklistItem.filter({ category, funeral_id: funeralId }),
    enabled: Boolean(funeralId),
    initialData: [],
  });

export default function DashboardPage() {
  const { funeral } = useCurrentFuneral();
  const { data: guests = [] } = useQuery({
    queryKey: ["guests", funeral?.id],
    queryFn: () =>
      base44.entities.Guest.filter({ funeral_id: funeral?.id }, "created_date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });
  const { data: expenses = [] } = useQuery({
    queryKey: ["expenses", funeral?.id],
    queryFn: () =>
      base44.entities.Expense.filter({ funeral_id: funeral?.id }, "-created_date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });
  const { data: photos = [] } = useQuery({
    queryKey: ["photos", funeral?.id],
    queryFn: () => base44.entities.Photo.filter({ funeral_id: funeral?.id }, "-created_date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });
  const funeralTasks = useChecklistSummary("funeral", funeral?.id);
  const wakeTasks = useChecklistSummary("wake", funeral?.id);
  const memorialTasks = useChecklistSummary("memorial", funeral?.id);

  const guestCount = guests.length;
  const innerCircleCount = guests.filter((guest) => guest.is_inner_circle).length;
  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount ?? 0), 0);
  const completedTasks = [funeralTasks, wakeTasks, memorialTasks].reduce((sum, query) => {
    const tasks = query.data ?? [];
    return sum + tasks.filter((task) => task.completed).length;
  }, 0);
  const totalTasks = [funeralTasks, wakeTasks, memorialTasks].reduce(
    (sum, query) => sum + (query.data?.length ?? 0),
    0
  );

  return (
    <div className="px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-light text-[#f5f5f5]">Welcome back</h1>
          <p className="text-sm text-[#a3a3a3]">
            {funeral ? `Planning for ${funeral.deceased_name}` : "Complete the setup to begin planning."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" className="border-[#d4a5a5]/30 text-[#d4a5a5]">
            <Link to={createPageUrl("FuneralSetup")}>Update details</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]">
            <Link to={createPageUrl("Invitations")}>Send invitations</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <CalendarDays className="h-5 w-5 text-[#d4a5a5]" />
              Upcoming service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[#c5c5c5]">
            <p><strong className="text-[#f5f5f5]">Date:</strong> {formatDate(funeral?.funeral_date)}</p>
            <p><strong className="text-[#f5f5f5]">Location:</strong> {funeral?.funeral_location ?? "—"}</p>
            <p><strong className="text-[#f5f5f5]">Type:</strong> {funeral?.funeral_type ?? "—"}</p>
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <Users className="h-5 w-5 text-[#d4a5a5]" />
              Guests & inner circle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[#c5c5c5]">
            <p><strong className="text-[#f5f5f5]">Guests:</strong> {guestCount}</p>
            <p><strong className="text-[#f5f5f5]">Inner circle:</strong> {innerCircleCount}</p>
            <Button asChild variant="outline" size="sm" className="mt-3 border-[#d4a5a5]/30 text-[#d4a5a5]">
              <Link to={createPageUrl("GuestList")}>Manage guests</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <Receipt className="h-5 w-5 text-[#d4a5a5]" />
              Budget overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[#c5c5c5]">
            <p><strong className="text-[#f5f5f5]">Logged expenses:</strong> {expenses.length}</p>
            <p><strong className="text-[#f5f5f5]">Total amount:</strong> {formatCurrency(totalExpenses)}</p>
            <Button asChild variant="outline" size="sm" className="mt-3 border-[#d4a5a5]/30 text-[#d4a5a5]">
              <Link to={createPageUrl("Budget")}>Track spending</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <Heart className="h-5 w-5 text-[#d4a5a5]" />
              Planning progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ProgressRow
              title="Funeral service"
              completed={funeralTasks.data?.filter((task) => task.completed).length ?? 0}
              total={funeralTasks.data?.length ?? 0}
            />
            <ProgressRow
              title="Wake"
              completed={wakeTasks.data?.filter((task) => task.completed).length ?? 0}
              total={wakeTasks.data?.length ?? 0}
            />
            <ProgressRow
              title="Memorial"
              completed={memorialTasks.data?.filter((task) => task.completed).length ?? 0}
              total={memorialTasks.data?.length ?? 0}
            />
            <div className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-3 text-sm text-[#c5c5c5]">
              <strong className="text-[#f5f5f5]">Overall progress:</strong> {completedTasks} of {totalTasks} tasks completed
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <ImageIcon className="h-5 w-5 text-[#d4a5a5]" />
              Recent memories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-[#c5c5c5]">
            {photos.length === 0 ? (
              <p>No photos uploaded yet. Start gathering memories with your family.</p>
            ) : (
              <ul className="space-y-2">
                {photos.slice(0, 4).map((photo) => (
                  <li key={photo.id} className="rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-3">
                    <p className="text-[#f5f5f5]">{photo.caption || "Shared memory"}</p>
                    <p className="text-xs text-[#a3a3a3]">Added {formatDate(photo.created_date)}</p>
                  </li>
                ))}
              </ul>
            )}
            <Button asChild variant="outline" size="sm" className="border-[#d4a5a5]/30 text-[#d4a5a5]">
              <Link to={createPageUrl("PhotoGallery")}>Open gallery</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Card className="bg-[#0f0f0f]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <MessageCircle className="h-5 w-5 text-[#d4a5a5]" />
              Stay connected
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-[#c5c5c5]">
              Use the inner circle chat to coordinate tasks, share updates, and support one another in real time.
            </p>
            <Button asChild className="bg-[#d4a5a5]/10 border border-[#d4a5a5]/30 text-[#d4a5a5]">
              <Link to={createPageUrl("InnerChat")}>Open chat</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const ProgressRow = ({ title, completed, total }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-[#c5c5c5]">
        <span>{title}</span>
        <span>
          {completed}/{total}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#2a2a2a]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
