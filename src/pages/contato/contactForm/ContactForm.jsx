import styles from '../Contato.module.css';

export const ContactForm = () => (
  <div className={styles.contactForm}>
    <form action="https://formsubmit.co/contato@petadocao.com" method="post">
      <div className={styles.boxInput}>
        <input type="text" name="name" placeholder="Seu nome" required />
      </div>
      <div className={styles.boxInput}>
        <input type="email" name="email" placeholder="Seu e-mail" required />
      </div>
      <div className={styles.boxInput}>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Sua mensagem..."
          required
        ></textarea>
      </div>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://meusite.com/obrigado" />
      <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
        Enviar
      </button>
    </form>
  </div>
);
