import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg-login.png";
import logo from "../../assets/dog.png";
import styles from "./cadastro.module.css"; // Importando o CSS Module
import InputField from "./inputField/InputField";
import RadioButtonGroup from "./radioButtonGroup/RadioButtonGroup";
import SubmitButton from "./submitButton/SubmitButton";
import LinkToLogin from "./linkToLogin/LinkToLogin";

export const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    genero: "",
    data_nascimento: "",
    cidade: "",
    estado: "",
    endereco: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <section className={styles.formContainerCadastro} style={{ marginTop: "20rem" }}>
      <div className={styles.bg}>
        <img src={bg} alt="Background" />
      </div>

      <div className={styles.formRegister}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.logoRegisterBox}>
            <img src={logo} alt="Logo Register" />
          </div>

          <InputField label="Nome completo" type="text" name="nome" value={formData.nome} onChange={handleChange} />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
          <InputField label="Senha" type="password" name="senha" value={formData.senha} onChange={handleChange} />
          <InputField label="Telefone" type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
          <InputField label="Cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
          <InputField label="Estado" type="text" name="estado" value={formData.estado} onChange={handleChange} />
          <InputField label="Endereço" type="text" name="endereco" value={formData.endereco} onChange={handleChange} />

          <RadioButtonGroup label="Sexo" name="genero" options={["feminino", "masculino", "outro"]} value={formData.genero} onChange={handleChange} />

          <label htmlFor="data_nascimento">
            <b>Data de Nascimento:</b>
          </label>
          <input
            type="date"
            name="data_nascimento"
            id="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
            required
          />
          <br /><br /><br />

          <SubmitButton text="Salvar" />
          <LinkToLogin />
        </form>
      </div>
    </section>
  );
};