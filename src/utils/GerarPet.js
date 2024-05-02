import imgPet from "../assets/isolated-happy-smiling-dog-white-background-portrait-4.jpg";
import nomes from "../assets/json/nomes";
import cidadesSp from "../assets/json/cidades"; // Corrigir o nome da importação

const GerarPets = () => {
  const pets = [];
  nomes.forEach((nome, index) => {
    const id = index + 1; // IDs começando de 1
    const cidadeIndex = Math.floor(Math.random() * cidadesSp.length); // Corrigir o nome da variável para cidadesSp
    const cidade = cidadesSp[cidadeIndex]; // Corrigir o nome da variável para cidadesSp
    const especie = index % 2 === 0 ? "cachorro" : "gato"; // Alternando entre cachorro e gato
    const sexo = index % 2 === 0 ? "macho" : "femea"; // Alternando entre macho e fêmea
    const porte =
      index % 3 === 0 ? "pequeno" : index % 3 === 1 ? "medio" : "grande"; // Alternando entre pequeno, médio e grande
    const estado = "SP"; // Definindo um estado padrão
    const dataPublicacao = new Date().toLocaleDateString(); // Data de publicação atual
    const descricaoPadrao = `Este é ${nome}, um ${especie} ${sexo} de porte ${porte}. Ele está procurando um novo lar em ${cidade}, ${estado}. Entre em contato com o autor para mais informações.`;
    const autor = {
      nome: "Kauê Marin",
      email: "kauezudo123@email.com",
      telefone: "(11) 95863-8232",
      cachorros: [], // Lista vazia de cachorros
    };

    const pet = {
      id,
      nome,
      cidade,
      especie,
      sexo,
      porte,
      estado,
      imagem: imgPet,
      dataPublicacao,
      visualizacoes: Math.floor(Math.random() * 1000), // Número aleatório de visualizações
      descricao: descricaoPadrao,
      autor,
    };

    pets.push(pet);
  });

  // Armazenar os pets no localStorage
  localStorage.setItem("pets", JSON.stringify(pets));

  return pets;
};

export default GerarPets;
