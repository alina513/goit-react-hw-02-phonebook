
export const ContactForm = ({ submit }) => {
  return (
    <form onSubmit={submit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required  />
      <label htmlFor="number">Number</label>
      <input type="tel" name="number" id="number" required  />
      <button type="submit">Add contact</button>
    </form>
  );
};


