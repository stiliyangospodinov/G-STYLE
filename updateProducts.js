import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase.js";

const updateProductsWithSales = async () => {
  try {
    // Вземи всички продукти от колекцията
    const productsCollection = collection(db, "boxing");
    const productsSnapshot = await getDocs(productsCollection);

    // Обходи всеки продукт
    productsSnapshot.forEach(async (productDoc) => {
      const productRef = doc(db, "boxing", productDoc.id); // Референция към документа
      const randomSales = Math.floor(Math.random() * 101); // Произволна стойност от 0 до 100
      await updateDoc(productRef, { sales: randomSales }); // Добавяне/обновяване на полето `sales`
      console.log(`Updated product ${productDoc.id} with sales: ${randomSales}`);
    });

    console.log("All products updated with sales!");
  } catch (error) {
    console.error("Error updating products with sales:", error);
  }
};

updateProductsWithSales();
