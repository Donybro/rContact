import api from "../../api/axios";
import { IContact } from "../../types/contact.interface";

export const TagsService = {
  async getAll() {
    return api.get("/tags");
  },
};
