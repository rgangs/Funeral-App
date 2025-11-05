import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, Mail, UserPlus } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

const RSVP_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "attending", label: "Attending" },
  { value: "not_attending", label: "Not attending" },
];

export default function GuestListPage() {
  const { funeral } = useCurrentFuneral();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", is_inner_circle: false });

  const { data: guests = [] } = useQuery({
    queryKey: ["guests", funeral?.id],
    queryFn: () => base44.entities.Guest.filter({ funeral_id: funeral?.id }, "created_date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  const createGuest = useMutation({
    mutationFn: (payload) => base44.entities.Guest.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests", funeral?.id] });
      setFormState({ name: "", email: "", phone: "", is_inner_circle: false });
    },
  });

  const updateGuest = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Guest.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["guests", funeral?.id] }),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id) return;
    createGuest.mutate({ ...formState, funeral_id: funeral.id });
  };

  const toggleInnerCircle = (guest) => {
    updateGuest.mutate({ id: guest.id, data: { ...guest, is_inner_circle: !guest.is_inner_circle } });
  };

  const updateRsvp = (guest, status) => {
    updateGuest.mutate({ id: guest.id, data: { ...guest, rsvp_status: status } });
  };

  const sendInvitation = (guest) => {
    alert(`Use your email client to send an invitation to ${guest.email}.`);
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-light text-[#f5f5f5]">Guest list</h1>
          <p className="text-sm text-[#a3a3a3]">Invite loved ones and track RSVPs.</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="bg-[#0f0f0f]/70 xl:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <UserPlus className="h-5 w-5 text-[#d4a5a5]" />
              Add guest
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Full name"
                value={formState.name}
                onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                required
              />
              <Input
                type="email"
                placeholder="Email address"
                value={formState.email}
                onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                required
              />
              <Input
                placeholder="Phone number"
                value={formState.phone}
                onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <label className="flex items-center gap-3 text-sm text-[#c5c5c5]">
                <Checkbox
                  checked={formState.is_inner_circle}
                  onChange={(checked) => setFormState((prev) => ({ ...prev, is_inner_circle: checked }))}
                />
                Add to inner circle
              </label>
              <Button
                type="submit"
                disabled={createGuest.isPending || !funeral?.id}
                className="w-full bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
              >
                {createGuest.isPending ? "Adding..." : "Add guest"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/70 xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#f5f5f5]">Your guests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {guests.length === 0 ? (
              <p className="text-sm text-[#a3a3a3]">No guests yet. Use the form to invite someone.</p>
            ) : (
              <div className="space-y-4">
                {guests.map((guest) => (
                  <div
                    key={guest.id}
                    className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/60 px-4 py-4 text-sm text-[#c5c5c5]"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-base font-light text-[#f5f5f5]">{guest.name}</p>
                        <p className="text-xs uppercase tracking-widest text-[#a3a3a3]">
                          {guest.is_inner_circle ? "Inner circle" : "Guest"}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {RSVP_OPTIONS.map((option) => (
                          <Button
                            key={option.value}
                            size="sm"
                            variant={guest.rsvp_status === option.value ? "default" : "outline"}
                            className={
                              guest.rsvp_status === option.value
                                ? "bg-[#d4a5a5] text-[#0a0a0a]"
                                : "border-[#2a2a2a] text-[#c5c5c5]"
                            }
                            onClick={() => updateRsvp(guest, option.value)}
                            type="button"
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-wrap gap-3 text-xs text-[#a3a3a3]">
                        <span>{guest.email}</span>
                        {guest.phone && <span>{guest.phone}</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#2a2a2a] text-[#c5c5c5]"
                          onClick={() => toggleInnerCircle(guest)}
                          type="button"
                        >
                          {guest.is_inner_circle ? "Remove inner circle" : "Add inner circle"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#d4a5a5]/40 text-[#d4a5a5]"
                          onClick={() => sendInvitation(guest)}
                          type="button"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Send invite
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
