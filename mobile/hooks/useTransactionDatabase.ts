import { useSQLiteContext } from "expo-sqlite";

export interface TransactionDatabase {
  id: number;
  title: string;
  value: string;
  type: string;
  category: string;
  subcategory: string;
  installments: number;
  paid: boolean;
  createdAt: Date;
  paymentDate: Date;
}

export function useTransactionDatabase() {
  const db = useSQLiteContext()

  async function create({ title, value, type, category, subcategory, installments,
    paid, createdAt, paymentDate
  }: Omit<TransactionDatabase, "id">) {
    const statement = await db.prepareSync(
      `
        INSERT INTO transactions (title, value, type, category, subcategory, installments, paid, createdAt, paymentDate)
        VALUES($title, $value, $type, $category, $subcategory, $installments, $paid, $createdAt, $paymentDate)
      `
    )

    try {
      const result = await statement.executeAsync({
        $title: title,
        $value: value,
        $type: type,
        $category: category,
        $subcategory: subcategory,
        $installments: installments,
        $paid: paid,
        $createdAt: createdAt,
        $paymentDate: paymentDate,
      })

      const  insertdRowId = result.lastInsertRowId.toString()

      return { insertdRowId }
    } catch (error) {
      throw error
    }
  }

  return { create }
}