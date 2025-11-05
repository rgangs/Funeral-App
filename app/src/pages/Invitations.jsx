import React, { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/utils";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

const templates = {
  classic: {
    title: "With Love and Gratitude",
    body: "Join us in honoring a remarkable life lived with grace and warmth.",
  },
  modern: {
    title: "Celebrating a Life Well-Lived",
    body: "We gather to share stories, music, and love in remembrance.",
  },
  floral: {
    title: "In Blooming Memory",
    body: "Surrounded by flowers and cherished memories, we celebrate together.",
  },
};

export default function InvitationsPage() {
  const { funeral } = useCurrentFuneral();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    template: "classic",
    custom_message: "",
    event_details: "",
  });

  const { data: invitations = [] } = useQuery({
    queryKey: ["invitations", funeral?.id],
    queryFn: () => base44.entities.Invitation.filter({ funeral_id: funeral?.id }),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  useEffect(() => {
    if (invitations.length > 0) {
      setFormState((prev) => ({
        ...prev,
        ...invitations[0],
      }));
    }
  }, [invitations]);

  const mutation = useMutation({
    mutationFn: (payload) =>
      invitations[0]
        ? base44.entities.Invitation.update(invitations[0].id, payload)
        : base44.entities.Invitation.create(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["invitations", funeral?.id] }),
  });

  const templateContent = useMemo(() => templates[formState.template], [formState.template]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id) return;
    mutation.mutate({ ...formState, funeral_id: funeral.id });
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Invitations</h1>
        <p className="text-sm text-[#a3a3a3]">
          Craft heartfelt invitations for guests and inner circle members.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="text-[#f5f5f5]">Compose invitation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-[#a3a3a3]">Template</label>
                <select
                  value={formState.template}
                  onChange={(event) => setFormState((prev) => ({ ...prev, template: event.target.value }))}
                  className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-2 text-sm text-[#f5f5f5]"
                >
                  <option value="classic">Classic</option>
                  <option value="modern">Modern</option>
                  <option value="floral">Floral</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-[#a3a3a3]">Event details</label>
                <Textarea
                  rows={4}
                  placeholder="Service date, time, location..."
                  value={formState.event_details}
                  onChange={(event) => setFormState((prev) => ({ ...prev, event_details: event.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-[#a3a3a3]">Custom message</label>
                <Textarea
                  rows={6}
                  placeholder="Share personal words of remembrance and invitation."
                  value={formState.custom_message}
                  onChange={(event) => setFormState((prev) => ({ ...prev, custom_message: event.target.value }))}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={mutation.isPending || !funeral?.id}
                className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
              >
                {mutation.isPending ? "Saving..." : invitations.length > 0 ? "Update invitation" : "Save invitation"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-[#161616]/60 text-[#f5f5f5]">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-2xl border border-[#d4a5a5]/20 bg-[#0f0f0f]/80 p-6">
              <p className="text-sm uppercase tracking-widest text-[#d4a5a5]">{templateContent.title}</p>
              <h2 className="mt-4 text-3xl font-light">{funeral?.deceased_name || "Your loved one"}</h2>
              <p className="mt-2 text-sm text-[#c5c5c5]">{templateContent.body}</p>
              <div className="mt-6 space-y-2 text-sm text-[#c5c5c5]">
                <p>
                  <strong className="text-[#f5f5f5]">Service:</strong> {formatDate(funeral?.funeral_date)}
                </p>
                <p>
                  <strong className="text-[#f5f5f5]">Location:</strong> {funeral?.funeral_location || "To be confirmed"}
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-[#d4a5a5]/20 bg-[#d4a5a5]/10 p-4 text-sm text-[#f5f5f5]">
                {formState.event_details || "Event details will appear here."}
              </div>
              <p className="mt-6 whitespace-pre-wrap text-sm text-[#c5c5c5]">
                {formState.custom_message || "Your message will appear here."}
              </p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#0a0a0a]/60 p-4 text-sm text-[#c5c5c5]">
              <p className="font-medium text-[#f5f5f5]">Share with guests</p>
              <p className="mt-2">
                Copy this message into your preferred email or messaging tool. You can also print it directly from your browser.
              </p>
              <Input
                readOnly
                value={funeral?.funeral_contact_email || "Provide a contact email in funeral setup."}
                className="mt-3"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
