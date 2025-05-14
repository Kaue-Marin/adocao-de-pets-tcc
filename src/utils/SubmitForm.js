import axios from "axios";
import cidadesSp from "../assets/json/cidades";

export const submitForm = async (e, form, imagemPet, setForm, setImagemPet, setFileName) => {
  e.preventDefault();

  const formData = new FormData();
  Object.entries(form).forEach(([key, value]) =>
    formData.append(key, value)
  );

  if (imagemPet) {
    formData.append("imagemPet", imagemPet);
  }

  try {
    const response = await axios.post("http://localhost:3001/pets", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Cadastro concluído:", response.data);

    // Resetar formulário
    setForm({
      idDono: form.idDono,
      tutor: "",
      celular: "",
      email: "",
      descricaoPet: "",
      localizacaoPet: "",
      especie: "Cachorro",
      sexo: "Macho",
      porte: "Pequeno",
      cidade: cidadesSp[0],
      estado: "São Paulo",
      nomeAnimal: "",
    });
    setImagemPet(null);
    setFileName("");
  } catch (error) {
    console.error("Erro ao cadastrar pet:", error);
  }
};
