export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};

export interface Category {
  id: number;
  title: string;
}

export interface Item {
  id: number;
  name: string;
  count: number;
  category_id: Category['id'];
  category: Category;
}
