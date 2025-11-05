import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, CheckCircle2, Circle } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const checklistQueryKey = (category, funeralId) => ["checklist", category, funeralId];

const bootstrapTasks = async ({ defaultTasks, category, funeralId }) => {
  if (!defaultTasks?.length || !funeralId) {
    return;
  }
  const existing = await base44.entities.ChecklistItem.filter(
    { funeral_id: funeralId, category },
    undefined,
    1
  );
  if (existing.length > 0) {
    return;
  }
  await Promise.all(
    defaultTasks.map((task) =>
      base44.entities.ChecklistItem.create({
        funeral_id: funeralId,
        category,
        title: task.title,
        description: task.description ?? "",
        completed: Boolean(task.completed),
      })
    )
  );
};

export default function ChecklistManager({ category, title, defaultTasks = [] }) {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const { data: funerals = [] } = useQuery({
    queryKey: ["funerals"],
    queryFn: () => base44.entities.FuneralDetails.list("-created_date", 1),
    initialData: [],
  });

  const funeral = funerals[0];

  useQuery({
    queryKey: ["checklist-bootstrap", category, funeral?.id],
    enabled: Boolean(funeral?.id) && defaultTasks.length > 0,
    queryFn: () => bootstrapTasks({ category, funeralId: funeral?.id, defaultTasks }),
  });

  const { data: tasks = [] } = useQuery({
    queryKey: checklistQueryKey(category, funeral?.id),
    queryFn: () =>
      base44.entities.ChecklistItem.filter(
        {
          funeral_id: funeral?.id,
          category,
        },
        "-created_date"
      ),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  const createMutation = useMutation({
    mutationFn: (payload) => base44.entities.ChecklistItem.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: checklistQueryKey(category, funeral?.id) });
      setShowForm(false);
      setFormData({ title: "", description: "" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.ChecklistItem.update(id, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: checklistQueryKey(category, variables.data.funeral_id) });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id || !formData.title.trim()) {
      return;
    }
    createMutation.mutate({
      ...formData,
      funeral_id: funeral.id,
      category,
      completed: false,
    });
  };

  const toggleComplete = (task) => {
    updateMutation.mutate({
      id: task.id,
      data: {
        ...task,
        completed: !task.completed,
      },
    });
  };

  const progress = useMemo(() => {
    if (!tasks.length) {
      return { completed: 0, total: 0, percentage: 0 };
    }
    const completed = tasks.filter((task) => task.completed).length;
    const percentage = Math.round((completed / tasks.length) * 100);
    return { completed, total: tasks.length, percentage };
  }, [tasks]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-light text-[#f5f5f5]">{title}</h2>
          <p className="text-sm text-[#a3a3a3]">
            {progress.completed} of {progress.total} completed ({progress.percentage}%)
          </p>
        </div>
        <Button
          onClick={() => setShowForm((prev) => !prev)}
          size="sm"
          className="bg-[#d4a5a5]/10 border border-[#d4a5a5]/20 text-[#d4a5a5] hover:bg-[#d4a5a5]/20"
        >
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Card className="bg-[#1a1a1a]/60">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Task title"
                    value={formData.title}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, title: event.target.value }))
                    }
                    required
                  />
                  <Textarea
                    placeholder="Description (optional)"
                    value={formData.description}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, description: event.target.value }))
                    }
                  />
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowForm(false)}
                      className="text-[#a3a3a3]"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
                    >
                      Add
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {tasks.length === 0 && (
          <Card className="border-dashed border-[#2a2a2a] bg-[#0a0a0a]/40">
            <CardContent className="py-8 text-center text-sm text-[#a3a3a3]">
              No tasks yet. Start by adding one above.
            </CardContent>
          </Card>
        )}
        {tasks.map((task) => (
          <Card
            key={task.id}
            className={`transition-all duration-300 ${
              task.completed
                ? "border-[#d4a5a5]/30 bg-[#d4a5a5]/5"
                : "border-[#2a2a2a] bg-[#0f0f0f]/70"
            }`}
          >
            <CardContent className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <button
                  type="button"
                  className="mb-3 flex items-center gap-3 text-left text-[#f5f5f5]"
                  onClick={() => toggleComplete(task)}
                >
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-[#d4a5a5]" />
                  ) : (
                    <Circle className="h-5 w-5 text-[#a3a3a3]" />
                  )}
                  <span className="text-lg font-light">{task.title}</span>
                </button>
                {task.description && (
                  <p className="text-sm text-[#a3a3a3]">{task.description}</p>
                )}
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <span className="text-xs uppercase tracking-wider text-[#a3a3a3]">
                  Category: {category}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#2a2a2a] text-[#a3a3a3]"
                  onClick={() => toggleComplete(task)}
                >
                  {task.completed ? "Mark as pending" : "Mark complete"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
