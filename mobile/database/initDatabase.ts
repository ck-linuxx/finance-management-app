import { type SQLiteDatabase } from "expo-sqlite"

export async function InitDatabase(database: SQLiteDatabase){
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS user (
      name TEXT NOT NULL,
      transactions REFERENCES transactions
    )

    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      value TEXT NOT NULL,
      totalValue BOOLEAN,
      type TEXT NOT NULL,
      category TEXT NOT NULL
      subcategory TEXT NOT NULL,
      installments INTEGER,
      paid BOOLEAN,
      createdAt DATE,
      paymentDate DATE,
    );
  `)
}