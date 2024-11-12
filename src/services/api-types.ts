export type CreateCategory = {
  title: string;
  color: string;
};

export type Category = {
  _id: string;
  title: string;
  color: string;
};

export type CreateTransaction = {
  categoryId: string;
  title: string;
  amount: number;
  type: 'expense' | 'income';
  date: string;
};

export type Transaction = {
  _id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  date: Date;
  category: Category;
};
