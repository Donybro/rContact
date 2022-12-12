import { ContactService } from "../../services/contact/contact.service";
import { useQuery } from "react-query";

export default function useContactList() {
  const { getAll } = ContactService;
  const { data, isLoading, error } = useQuery("contact-list", () => getAll());

  return {
    contactsList: data?.data || [],
    isLoading,
    error,
  };
}
