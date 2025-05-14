export const RenderInput = ({ label, id, type = "text", required = true, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);
