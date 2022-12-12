import { ContactService } from "../services/contact/contact.service";
import { useQuery } from "react-query";

export default function useContactInfo(contact_id: number | undefined) {
  const { getInfoById } = ContactService;
  const { data, isLoading, error } = useQuery(
    ["contact-info", [contact_id]],
    () => getInfoById(Number(contact_id)),
    {
      enabled: !!contact_id,
    }
  );

  return {
    contactInfo: data?.data || null,
    isLoading,
    error,
  };
}
