import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ImageIcon } from "lucide-react";

import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/utils";
import useCurrentFuneral from "@/hooks/useCurrentFuneral";

export default function PhotoGalleryPage() {
  const { funeral } = useCurrentFuneral();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({ photo_url: "", caption: "", uploaded_by: "" });

  const { data: photos = [] } = useQuery({
    queryKey: ["photos", funeral?.id],
    queryFn: () => base44.entities.Photo.filter({ funeral_id: funeral?.id }, "-created_date"),
    enabled: Boolean(funeral?.id),
    initialData: [],
  });

  const addPhoto = useMutation({
    mutationFn: (payload) => base44.entities.Photo.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos", funeral?.id] });
      setFormState({ photo_url: "", caption: "", uploaded_by: "" });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!funeral?.id || !formState.photo_url.trim()) {
      return;
    }
    addPhoto.mutate({
      ...formState,
      funeral_id: funeral.id,
    });
  };

  return (
    <div className="px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-light text-[#f5f5f5]">Photo gallery</h1>
        <p className="text-sm text-[#a3a3a3]">Gather cherished memories to share with family and friends.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="text-[#f5f5f5]">Shared memories</CardTitle>
          </CardHeader>
          <CardContent>
            {photos.length === 0 ? (
              <p className="text-sm text-[#a3a3a3]">No photos yet. Invite your inner circle to contribute.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {photos.map((photo) => (
                  <figure
                    key={photo.id}
                    className="overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a]/60"
                  >
                    <div className="aspect-square w-full bg-[#1a1a1a]">
                      {photo.photo_url ? (
                        <img src={photo.photo_url} alt={photo.caption || "Shared memory"} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#2a2a2a]">
                          <ImageIcon className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <figcaption className="space-y-2 p-4 text-sm text-[#c5c5c5]">
                      <p className="text-[#f5f5f5]">{photo.caption || "Untitled memory"}</p>
                      <p className="text-xs text-[#a3a3a3]">
                        Shared by {photo.uploaded_by || "Anonymous"} • {formatDate(photo.created_date)}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-[#0f0f0f]/70">
          <CardHeader>
            <CardTitle className="text-[#f5f5f5]">Add a new photo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Image URL"
                value={formState.photo_url}
                onChange={(event) => setFormState((prev) => ({ ...prev, photo_url: event.target.value }))}
                required
              />
              <Input
                placeholder="Who is sharing this?"
                value={formState.uploaded_by}
                onChange={(event) => setFormState((prev) => ({ ...prev, uploaded_by: event.target.value }))}
              />
              <Textarea
                rows={4}
                placeholder="Caption or memory"
                value={formState.caption}
                onChange={(event) => setFormState((prev) => ({ ...prev, caption: event.target.value }))}
              />
              <Button
                type="submit"
                disabled={addPhoto.isPending || !funeral?.id}
                className="w-full bg-gradient-to-r from-[#d4a5a5] to-[#c19a9a] text-[#0a0a0a]"
              >
                {addPhoto.isPending ? "Saving..." : "Share memory"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
