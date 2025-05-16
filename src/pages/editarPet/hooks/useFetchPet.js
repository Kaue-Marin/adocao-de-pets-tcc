import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchPet(id) {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/pets/${id}`);
        setPet(data);
      } catch (error) {
        console.error("Erro ao obter dados do pet:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetData();
  }, [id]);

  return { pet, loading, setPet };
}
