import { useEffect, useState } from "react";
// import { Auth } from "firebase/auth";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const movieCollectionRef = collection(db, "Questions");

export const useMovieList = () => {
  const [quesList, setQuesList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setQuesList(filterData);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieList();
  }, []);

  return quesList;
};
