export const RenderSelect = ({ label, id, value, onChange, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}:</label>
    <select id={id} value={value} onChange={onChange}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
