import { TagsService } from "../../services/tags/tags.service";
import { useQuery } from "react-query";

export default function useTags() {
  const { getAll } = TagsService;
  const { data, isLoading } = useQuery(["tags"], () => getAll());

  return {
    tagsList: data?.data || [],
  };
}
