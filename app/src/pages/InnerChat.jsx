import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MessageCircle } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/utils";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

export default function InnerChatPage() {
  const { funeral } = useCurrentFuneral();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({ sender_name: "", sender_email: "", content: "" });

  const { data: messages = [] } = useQuery({
    queryKey: ["messages", funeral?.id],
    queryFn: () => base44.entities.Message.filter({ funeral_id: funeral?.id }, "-timestamp"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  const sendMessage = useMutation({
    mutationFn: (payload) => base44.entities.Message.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages", funeral?.id] });
      setFormState({ sender_name: "", sender_email: "", content: "" });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id || !formState.content.trim()) {
      return;
    }
    sendMessage.mutate({
      ...formState,
      funeral_id: funeral.id,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Inner circle chat</h1>
        <p className="text-sm text-[#a3a3a3]">
          Keep close family and friends aligned with gentle updates and encouragement.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#f5f5f5]">
              <MessageCircle className="h-5 w-5 text-[#d4a5a5]" />
              Conversation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-sm text-[#a3a3a3]">No messages yet. Be the first to reach out.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/60 p-4">
                    <div className="flex flex-col gap-1 text-sm text-[#c5c5c5]">
                      <div className="flex flex-wrap items-center gap-2 text-[#f5f5f5]">
                        <span className="font-medium">{message.sender_name || "Anonymous"}</span>
                        <span className="text-xs uppercase tracking-widest text-[#a3a3a3]">
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap text-[#c5c5c5]">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="text-[#f5f5f5]">Share an update</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                value={formState.sender_name}
                onChange={(event) => setFormState((prev) => ({ ...prev, sender_name: event.target.value }))}
                required
              />
              <Input
                type="email"
                placeholder="Email (shared with inner circle only)"
                value={formState.sender_email}
                onChange={(event) => setFormState((prev) => ({ ...prev, sender_email: event.target.value }))}
                required
              />
              <Textarea
                rows={6}
                placeholder="Write a gentle update, encouragement, or coordination note."
                value={formState.content}
                onChange={(event) => setFormState((prev) => ({ ...prev, content: event.target.value }))}
                required
              />
              <Button
                type="submit"
                disabled={sendMessage.isPending || !funeral?.id}
                className="w-full bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
              >
                {sendMessage.isPending ? "Sending..." : "Post message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
