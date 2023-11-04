import css from "./ContactForm.module.css"
export const ContactForm = ({ submit }) => {
  return (
    <form className={css.form} onSubmit={submit}>
      <label className={css.label} htmlFor="name">Name</label>
      <input className={css.input} type="text" name="name" id="name" required  />
      <label className={css.label} htmlFor="number">Number</label>
      <input className={css.input} type="tel" name="number" id="number" required  />
      <button className={css.button} type="submit">Add contact</button>
    </form>
  );
};


