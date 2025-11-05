import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPageUrl } from "@/utils";
import useCurrentFuneral, { FUNERAL_QUERY_KEY } from "@/hooks/useCurrentFuneral";

const initialState = {
  deceased_name: "",
  relationship: "",
  birth_date: "",
  death_date: "",
  funeral_type: "catholic",
  funeral_date: "",
  funeral_location: "",
  obituary: "",
  funeral_contact_email: "",
  funeral_contact_phone: "",
};

const Field = ({ label, className, children }) => (
  <div className={className}>
    <label className="mb-2 block text-sm font-medium text-[#a3a3a3]">{label}</label>
    {children}
  </div>
);

export default function FuneralSetupPage() {
  const { funeral, isLoading } = useCurrentFuneral();
  const [formState, setFormState] = useState(initialState);
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (funeral) {
      setFormState((prev) => ({ ...prev, ...funeral }));
      setIsDirty(false);
    }
  }, [funeral]);

  const mutation = useMutation({
    mutationFn: (payload) =>
      funeral ? base44.entities.FuneralDetails.update(funeral.id, payload) : base44.entities.FuneralDetails.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FUNERAL_QUERY_KEY });
      setIsDirty(false);
      navigate(createPageUrl("Dashboard"));
    },
  });

  const updateField = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(formState);
  };

  return (
    <div className="flex justify-center px-6 py-10">
      <div className="w-full max-w-3xl">
        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="text-2xl font-light text-[#f5f5f5]">
              {funeral ? "Update funeral details" : "Create your remembrance"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name of the deceased">
                  <Input
                    placeholder="Full name"
                    value={formState.deceased_name}
                    onChange={(event) => updateField("deceased_name", event.target.value)}
                    required
                  />
                </Field>
                <Field label="Your relationship">
                  <Input
                    placeholder="Relationship"
                    value={formState.relationship}
                    onChange={(event) => updateField("relationship", event.target.value)}
                    required
                  />
                </Field>
                <Field label="Birth date">
                  <Input
                    type="date"
                    value={formState.birth_date}
                    onChange={(event) => updateField("birth_date", event.target.value)}
                  />
                </Field>
                <Field label="Date of passing">
                  <Input
                    type="date"
                    value={formState.death_date}
                    onChange={(event) => updateField("death_date", event.target.value)}
                  />
                </Field>
                <Field label="Funeral type">
                  <select
                    value={formState.funeral_type}
                    onChange={(event) => updateField("funeral_type", event.target.value)}
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a]/70 px-4 py-2 text-sm text-[#f5f5f5]"
                  >
                    <option value="catholic">Catholic</option>
                    <option value="humanist">Humanist</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Funeral date and time">
                  <Input
                    type="datetime-local"
                    value={formState.funeral_date}
                    onChange={(event) => updateField("funeral_date", event.target.value)}
                  />
                </Field>
                <Field label="Funeral location" className="md:col-span-2">
                  <Input
                    placeholder="Venue or address"
                    value={formState.funeral_location}
                    onChange={(event) => updateField("funeral_location", event.target.value)}
                  />
                </Field>
                <Field label="Primary contact email">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formState.funeral_contact_email}
                    onChange={(event) => updateField("funeral_contact_email", event.target.value)}
                  />
                </Field>
                <Field label="Primary contact phone">
                  <Input
                    placeholder="Phone number"
                    value={formState.funeral_contact_phone}
                    onChange={(event) => updateField("funeral_contact_phone", event.target.value)}
                  />
                </Field>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#a3a3a3]">
                  Obituary / life story
                </label>
                <Textarea
                  rows={6}
                  placeholder="Share their story, values, and any details you would like to remember"
                  value={formState.obituary}
                  onChange={(event) => updateField("obituary", event.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <span className="text-sm text-[#a3a3a3]">
                  {isDirty ? "Unsaved changes" : funeral ? "All details saved" : "Ready to begin"}
                </span>
                <Button
                  type="submit"
                  disabled={mutation.isPending || isLoading}
                  className="bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
                >
                  {mutation.isPending ? "Saving..." : funeral ? "Save updates" : "Create memorial"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
