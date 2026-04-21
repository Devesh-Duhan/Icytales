const Input = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  className = "",
  containerClassName = "",
  error,
  ...props
}) => {
  const inputId = id || name;
  const commonStyles =
    "w-full rounded-[25px] border border-[#E3E4E5] bg-white px-4 py-3 text-sm text-[#0F0200] outline-none transition focus:border-pink focus:ring-0";

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {label ? (
        <label
          htmlFor={inputId}
          className="text-[16px] text-lightbrown font-medium"
        >
          {label}
        </label>
      ) : null}

      {type === "select" ? (
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          className={`${commonStyles} ${className} ${error ? "border-red-500" : ""}`}
          {...props}
        >
          {options?.map((option) => (
            <option
              key={option.value ?? option}
              value={option.value ?? option}
              className="text-sm"
            >
              {option.label ?? option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${commonStyles} ${className} ${error ? "border-red-500" : ""}`}
          {...props}
        />
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
