export function SelectField({ id, label, value, onChange, options = [], required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <select id={id} value={value} onChange={onChange} required={required}>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}