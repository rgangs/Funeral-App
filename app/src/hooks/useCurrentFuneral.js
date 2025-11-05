import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

export const FUNERAL_QUERY_KEY = ["funerals"];

export const useCurrentFuneral = () => {
  const query = useQuery({
    queryKey: FUNERAL_QUERY_KEY,
    queryFn: () => base44.entities.FuneralDetails.list("-created_date", 1),
    initialData: [],
  });

  const funeral = query.data?.[0] ?? null;

  return { ...query, funeral };
};

export default useCurrentFuneral;
