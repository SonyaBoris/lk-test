export const BaseInput = ({ size, label, type, formState, register, name, placeholder }) => {

  const errorError = formState.errors[name]?.message

  return (
    <div className={`flex flex-col relative text-secondary-text ${size === "s" ? "md:w-2/4 w-full" : "w-full"}`}>
      <label className={`absolute top-[-8px] left-[10px] bg-secondary-bg px-2 text-xs z-10	${errorError ? "border-red text-red" : "border-green text-green"}`}>{label}</label>
      <input
        className={`py-2 px-4 bg-secondary-bg border border-primary-border relative rounded ${errorError ? "border-red text-red" : "border-green text-green"} `}
        type={type}
        placeholder={placeholder ? placeholder : label}
        {...register(name, {
          required: "Введите данные",
          pattern: {
            value: type == "text" ? /^[a-zA-ZА-Яа-я\s]{3,15}$/ : /^[\w\d\S]{3,15}$/,
            message: "Не валидное значение"
          },
        })}
      />
      {errorError && <span className={` absolute bottom-[-24px] ${errorError && "border-red text-red"}`}>{errorError}</span>}
    </div>
  );
}

