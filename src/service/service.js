import { doc, getDoc, collection, getDocs,query,where, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";


export const getDocumentData = async (collection, document) => {
  const docRef = doc(db, collection, document);
  const docSnap = await getDoc(docRef);
  
  return docSnap.data(); 
};

 const getCollectionData = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  
  return querySnapshot.docs.map(doc => doc.data());
};

  export const getDocumentByName = async (collectionName, projectName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("name", "==", projectName));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.empty ? null : querySnapshot.docs[0].data();
};

 const create = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Error creating document in ${collectionName}:`, error);
      throw error;
    }
  };
  
 const update = async (collectionName, id, data) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, data);
      return { id, ...data };
    } catch (error) {
      console.error(`Error updating document ${id} in ${collectionName}:`, error);
      throw error;
    }
  };
 const remove = async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return id;
    } catch (error) {
      console.error(`Error deleting document ${id} from ${collectionName}:`, error);
      throw error;
    }
  };
  export const getTopOrBestSellers = async (index) => {
    const collections = ["woman", "man", "fitness", "boxing"];
    
    try {
      const allProducts = (
        await Promise.all(collections.map((collection) => getCollectionData(collection)))
      ).flat(); 
      return allProducts
        .sort((a, b) => b.sales - a.sales)
        .slice(0, index);
    } catch (error) {
      console.error("Error fetching best sellers:", error);
      throw error;
    }
  };

  export const getRandomProducts = async (index) => {
    const collections = ["woman", "man", "fitness", "boxing"];
    
    try {
      const allProducts = (
        await Promise.all(collections.map((collection) => getCollectionData(collection)))
      ).flat(); 

      const shuffledProducts = allProducts.sort(() =>Math.random() - 0.5);
      return shuffledProducts.slice(0, index);
    } catch (error) {
      console.error("Error fetching random products:", error);
      throw error;
    }
  };

  export const getLatestProducts = async (index) => {
    const collections = ["woman", "man", "fitness", "boxing"];
    
    try {
      const allProducts = (
        await Promise.all(collections.map((collection) => getCollectionData(collection)))
      ).flat(); 
      return allProducts
        .sort((a, b) => b.id - a.id)
        .slice(0, index);
    } catch (error) {
      console.error("Error fetching best sellers:", error);
      throw error;
    }
  };

  export const getRelatedProducts = async (category, currentProductId) => {
    const collections = ["woman", "man", "fitness", "boxing"];
    let relatedProducts = [];
  
    try {
      for (const collectionName of collections) {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          const productData = doc.data();
          if (productData.id !== currentProductId) {
            relatedProducts.push(productData);
          }
        });
      }
  
      return relatedProducts.slice(0, 6);
    } catch (error) {
      console.error("Error fetching related products:", error);
      return [];
    }
  };
  export const getAllWomenProducts = () => getCollectionData('woman');
  export const getAllManProducts = () => getCollectionData('man');
  export const getAllFitnessProducts = () => getCollectionData('fitness');
  export const getAllBoxingProducts = () => getCollectionData('boxing');
  export const getAllTopSellerProducts = () => getCollectionData('top-seller');
