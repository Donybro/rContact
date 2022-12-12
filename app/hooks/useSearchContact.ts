import { ContactService } from "../services/contact/contact.service";
import { useQuery } from "react-query";

export default function useSearchContact(q: string) {
  const { search } = ContactService;
  const { data, error, isLoading } = useQuery(["search-contacts", [q]], () =>
    search(q)
  );

  return {
    contactsList: data?.data || [],
    error,
    isLoading,
  };
}
