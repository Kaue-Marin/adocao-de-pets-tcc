export function InputField({ id, label, value, onChange, type = "text", readOnly = false, required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
      />
    </div>
  );
}