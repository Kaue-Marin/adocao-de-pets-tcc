export function TextAreaField({ id, label, value, onChange, required = true }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <textarea id={id} value={value} onChange={onChange} required={required}></textarea>
    </div>
  );
}