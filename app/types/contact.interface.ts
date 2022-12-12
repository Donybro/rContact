export interface ITag {
  label: string;
  id: number;
}

export interface IContact {
  id?: number;
  full_name: string;
  phone: string;
  email: string;
  tags: ITag[];
}
