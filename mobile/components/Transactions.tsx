import { View, Text } from "react-native";
import { SalaryIcon } from "./icons/SalaryIcon";

const transactions = [
  {
    "title": "Salario",
    "value": "1.700,00",
    "totalValue": true,
    "type": "receita",
    "category": "Receita",
    "subcategory": "Salario",
    "installments": 0,
    "paid": true,
    "createdAt": "2024-04-08",
    "paymentDate": "2024-04-08"
  },
  {
    "title": "Cartão",
    "value": "400,00",
    "totalValue": false,
    "type": "despesa",
    "category": "Despesa",
    "subcategory": "Cartão de crédito",
    "installments": 4,
    "paid": false,
    "createdAt": "2024-01-30",
    "paymentDate": "2024-02-08"
  },
]

export function Transactions() {

  return (
    <>
      {transactions.map(transaction => (
        <View className="my-2 py-4 px-4 bg-backgroundGreenAndLetters rounded-md flex-row gap-4 justify-between items-center">
          <View className="flex-row  gap-2">
            <View className="bg-blueButton px-3 py-3 rounded-lg">
              <SalaryIcon color={"#F1FFF3"} />
            </View>

            <View className="justify-center" >
              <Text
                style={{ fontFamily: "Poppins_500Medium" }}
                className="text-lettersAndIcons text-lg"
              >
                {transaction.title}
              </Text>
              <Text
                style={{ fontFamily: "Poppins_600SemiBold" }}
                className="text-oceanBlueButton text-sm"
              >
                {transaction.paymentDate}
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{ fontFamily: "Poppins_500Medium" }}
              className={`${transaction.type === "despesa" ? "text-red" : "text-lettersAndIcons"} text-xl`}
            >
              R$ {transaction.value}
            </Text>
            <View>
              <Text
                className={`${transaction.type === "despesa" ? "text-red" : "text-lettersAndIcons"} text-base`}
              >
                {transaction.totalValue === true ? "Mensal" : "Parcelado"}
              </Text>
              <Text
                className={`${transaction.type === "despesa" ? "text-red" : "text-lettersAndIcons"} text-base`}
              >
                {transaction.category}
              </Text>
            </View>

          </View>
        </View>
      ))}
    </>
  );
}