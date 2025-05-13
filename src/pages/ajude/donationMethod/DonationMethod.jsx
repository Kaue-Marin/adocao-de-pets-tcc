import styles from "../ajude.module.css";

export const DonationMethod = () => (
  <div className={styles.donationMethods}>
    <h4>Transferência bancária:</h4>
    <p>
      Você pode fazer uma doação através de TED ou depósito em conta para o
      seguinte banco:
    </p>
    <ul>
      <li>Banco do Brasil</li>
      <li>Agência: 3118-6</li>
      <li>Conta-corrente: 42305-x</li>
      <li>Associação Amigo Não se Compra</li>
      <li>CNPJ: 28.551.625/0001-60</li>
    </ul>
    <p>
      Por favor, inclua "Doação" no campo de descrição ao fazer a
      transferência.
    </p>

    <h4>Outras formas:</h4>
    <p>
      Além de doações em dinheiro, também aceitamos doações de suprimentos
      para animais, como comida, brinquedos, cobertores, etc. Entre em
      contato conosco para mais informações sobre como doar itens físicos.
    </p>
  </div>
);