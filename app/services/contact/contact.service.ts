import api from "../../api/axios";
import { IContact } from "../../types/contact.interface";

export const ContactService = {
  async create(formData: IContact) {
    return api.post("/contacts", formData);
  },
  async edit(formData: IContact, id: number) {
    return api.patch(`/contacts/${id}`, formData);
  },
  async delete(id: number) {
    return api.delete(`/contacts/${id}`);
  },
  async getAll() {
    return api.get<IContact[]>("/contacts");
  },
  async getInfoById(id: number) {
    return api.get<IContact>(`/contacts/${id}`);
  },
  async search(q: string) {
    return api.get<IContact[]>(`/contacts?q=${q}`);
  },
};
