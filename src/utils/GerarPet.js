import axios from "axios";

const GerarPets = async () => {
  try {
    // Realizar a requisição para obter os dados do banco de dados
    const response = await axios.get("http://localhost:3001/pets");
    const petsData = response.data;

    // Formatar os dados dos pets de acordo com as especificações
    const pets = petsData.map((pet) => ({
      id: pet.id,
      nome: pet.nomeAnimal,
      cidade: pet.cidade,
      especie: pet.especie,
      sexo: pet.sexo,
      porte: pet.porte,
      estado: pet.estado,
      imagem: `data:${pet.imagemMimeType};base64,${pet.imagemPet}`,
      dataPublicacao: pet.dataPublicacao,
      visualizacoes: pet.visualizacoes,
      descricao: pet.descricaoPet,
      autor: {
        nome: pet.tutor,
        email: pet.email,
        telefone: pet.celular,
        cachorros: [], // Lista vazia de cachorros
      },
    }));

    // Retornar os dados dos pets sem armazenar no localStorage
    return pets;
  } catch (error) {
    console.error("Erro ao buscar os dados dos pets:", error);
    return [];
  }
};

export default GerarPets;
