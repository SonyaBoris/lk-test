import chevron from "../../assets/img/chevron-left.svg"

export const Bread = () => {
  return (
    <button className="flex items-center gap-1 py-2 px-4">
      <img src={chevron} alt="" />
      <p className="text-tertiary-text font-semibold text-sm uppercase">Вернуться к сотрудникам</p>
    </button>
  );
}

