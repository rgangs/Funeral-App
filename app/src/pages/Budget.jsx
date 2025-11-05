import React, { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PieChart, Receipt } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency, formatDate } from "@/utils";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

const categories = ["venue", "catering", "flowers", "transportation", "memorial", "other"];

export default function BudgetPage() {
  const { funeral } = useCurrentFuneral();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    description: "",
    amount: "",
    category: "venue",
    paid_by: "",
    date: "",
    notes: "",
  });

  const { data: expenses = [] } = useQuery({
    queryKey: ["expenses", funeral?.id],
    queryFn: () => base44.entities.Expense.filter({ funeral_id: funeral?.id }, "-date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  const addExpense = useMutation({
    mutationFn: (payload) => base44.entities.Expense.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses", funeral?.id] });
      setFormState({ description: "", amount: "", category: "venue", paid_by: "", date: "", notes: "" });
    },
  });

  const totals = useMemo(() => {
    const sum = expenses.reduce((acc, expense) => acc + Number(expense.amount ?? 0), 0);
    const byCategory = categories.map((category) => ({
      category,
      amount: expenses
        .filter((expense) => expense.category === category)
        .reduce((acc, expense) => acc + Number(expense.amount ?? 0), 0),
    }));
    return { sum, byCategory };
  }, [expenses]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id || !formState.amount || Number.isNaN(Number(formState.amount))) {
      return;
    }
    addExpense.mutate({ ...formState, amount: Number(formState.amount), funeral_id: funeral.id });
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Budget tracker</h1>
        <p className="text-sm text-[#a3a3a3]">Log expenses, share responsibility, and keep visibility across the team.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <Receipt className="h-5 w-5 text-[#d4a5a5]" />
              Expense log
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {expenses.length === 0 ? (
              <p className="text-sm text-[#a3a3a3]">No expenses recorded yet.</p>
            ) : (
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <div key={expense.id} className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/60 p-4 text-sm">
                    <div className="flex flex-col gap-2 text-[#c5c5c5] md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-lg font-light text-[#f5f5f5]">{expense.description}</p>
                        <p className="text-xs uppercase tracking-widest text-[#a3a3a3]">{expense.category}</p>
                      </div>
                      <span className="text-lg font-medium text-[#d4a5a5]">{formatCurrency(expense.amount)}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#a3a3a3]">
                      <span>Paid by {expense.paid_by || "Unknown"}</span>
                      <span>{formatDate(expense.date)}</span>
                    </div>
                    {expense.notes && <p className="mt-2 text-sm text-[#c5c5c5]">{expense.notes}</p>}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-[#0f0f0f]/70">
            <CardHeader>
              <CardTitle className="text-[#f5f5f5]">Add expense</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Description"
                  value={formState.description}
                  onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
                  required
                />
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Amount"
                  value={formState.amount}
                  onChange={(event) => setFormState((prev) => ({ ...prev, amount: event.target.value }))}
                  required
                />
                <div>
                  <label className="mb-2 block text-sm text-[#a3a3a3]">Category</label>
                  <select
                    value={formState.category}
                    onChange={(event) => setFormState((prev) => ({ ...prev, category: event.target.value }))}
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-2 text-sm text-[#f5f5f5]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  placeholder="Paid by"
                  value={formState.paid_by}
                  onChange={(event) => setFormState((prev) => ({ ...prev, paid_by: event.target.value }))}
                  required
                />
                <Input
                  type="date"
                  value={formState.date}
                  onChange={(event) => setFormState((prev) => ({ ...prev, date: event.target.value }))}
                  required
                />
                <Textarea
                  rows={3}
                  placeholder="Notes"
                  value={formState.notes}
                  onChange={(event) => setFormState((prev) => ({ ...prev, notes: event.target.value }))}
                />
                <Button
                  type="submit"
                  disabled={addExpense.isPending || !funeral?.id}
                  className="w-full bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
                >
                  {addExpense.isPending ? "Saving..." : "Add expense"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-[#0f0f0f]/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
                <PieChart className="h-5 w-5 text-[#d4a5a5]" />
                Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-[#c5c5c5]">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-3">
                <p>Total recorded: {formatCurrency(totals.sum)}</p>
              </div>
              <div className="space-y-3">
                {totals.byCategory.map((entry) => (
                  <div key={entry.category} className="flex items-center justify-between">
                    <span className="capitalize">{entry.category}</span>
                    <span>{formatCurrency(entry.amount)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
