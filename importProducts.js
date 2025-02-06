import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import products from './products.json' assert { type: "json" };

// Firebase конфигурация
const firebaseConfig = {
  apiKey: "AIzaSyBdnTETRNqxHI4wy72nX76ayBrS0o3lFVs",
  authDomain: "online-shopping-432d2.firebaseapp.com",
  projectId: "online-shopping-432d2",
  storageBucket: "online-shopping-432d2.firebasestorage.app",
  messagingSenderId: "943594378788",
  appId: "1:943594378788:web:9262947636389e096daab1",
  measurementId: "G-69SJ5S2E9N",
};

// Инициализация на Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const importProducts = async () => {
  try {
    const collectionRef = collection(db, "top-seller");

    for (const product of products) {
      await addDoc(collectionRef, product);
      console.log(`Добавен продукт: ${product.name}`);
    }

    console.log("Всички продукти са успешно добавени!");
  } catch (error) {
    console.error("Грешка при добавянето на продукти:", error);
  }
};

importProducts();
