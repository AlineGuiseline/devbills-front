import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { APIService } from '../services/api';
import { Category, Transaction } from '../services/api-types';
import { formatDate } from '../utils/format.date';
import {
  CreateCategoryData,
  CreateTransactionData,
  TransactionsFilterData,
} from '../validators/types';

interface FetchAPIProps {
  createCategory: (data: CreateCategoryData) => Promise<void>;
  createTransaction: (data: CreateTransactionData) => Promise<void>;
  fetchCategories: () => Promise<void>;
  fetchTransactions: (filters: TransactionsFilterData) => Promise<void>;
  categories: Category[];
  transactions: Transaction[];
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps);

type FetchAPIProviderProps = {
  children: ReactNode;
};

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    await APIService.createTransaction({
      ...data,
      date: formatDate(data.date),
      amount: Number(data.amount.replace(/[^0-9]/g, '')),
    });
  }, []);

  const createCategory = useCallback(async (data: CreateCategoryData) => {
    await APIService.createCategory(data);
  }, []);

  const fetchCategories = useCallback(async () => {
    const data = await APIService.getCategories();

    setCategories(data);
  }, []);

  const fetchTransactions = useCallback(
    async (filters: TransactionsFilterData) => {
      const transactions = await APIService.getTransactions({
        ...filters,
        beginDate: formatDate(filters.beginDate),
        endDate: formatDate(filters.endDate),
      });

      setTransactions(transactions);
    },
    [],
  );

  return (
    <FetchAPIContext.Provider
      value={{
        categories,
        transactions,
        createCategory,
        fetchCategories,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </FetchAPIContext.Provider>
  );
}

export function useFetchAPI(): FetchAPIProps {
  return useContext(FetchAPIContext);
}
