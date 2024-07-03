import info from "../../../assets/img/info.svg"
import { Diagram } from "../../../components/diagram";
import { History } from "../../../components/history";

const mockVacations = [
  {
    id: 1,
    type: "Отпуск",
    dateStart: "03 марта 2023",
    dateEnd: "23 марта 2023",
    day: 20
  },
  {
    id: 2,
    type: "Отгул",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    day: 4
  },
  {
    id: 3,
    type: "Отгул",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    day: 4
  },
  {
    id: 4,
    type: "Отгул",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    day: 4
  },
  {
    id: 5,
    type: "Отгул",
    dateStart: "03 марта 2023",
    dateEnd: "07 марта 2023",
    day: 4
  },
]
export const Vacation = () => {
  return (
    <section className="flex md:flex-row flex-col gap-4 mb-10 text-primary-text ">
      <div className="flex flex-col gap-4 rounded-xl bg-secondary-bg md:w-2/5 w-full p-[30px]">
        <div className="flex items-center gap-2">
          <h5 className="text-2xl text-primary-text">Статистика</h5>
          <button>
            <img src={info} />
          </button>
        </div>
        <Diagram />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between border rounded-2xl py-3 px-[10px] border-primary-border">
           <span className="flex items-center before:content-['•'] before:mr-2 before:text-green before:text-2xl">Доступно сейчас</span>
           <span>32 дня</span>
          </div>
          <div className="flex items-center justify-between border rounded-2xl py-3 px-[10px] border-primary-border">
           <span className="flex items-center before:content-['•'] before:mr-2 before:text-yellow before:text-2xl">Запланировано</span>
           <span>8 дня</span>
          </div>
          <div className="flex items-center justify-between border rounded-2xl py-3 px-[10px] border-primary-border">
           <span className="flex items-center before:content-['•'] before:mr-2 before:text-red before:text-2xl">Использовано/недоступно</span>
           <span>4 дня</span>
          </div>
          
        </div>
      </div>
      <div className="rounded-xl bg-secondary-bg md:w-3/5 w-full p-[30px]">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl text-primary-text">История отпусков</h5>
          <button className="text-sm text-tertiary-text">Посмотреть все</button>
        </div>
        <div className="grid grid-cols-3 mt-4 text-secondary-text py-4 px-2 border-b border-primary-border">
          <div>Тип</div>
          <div>Даты отпуска</div>
          <div className="text-right">Количество дней</div>
        </div>
        {mockVacations.map((e) =>
          <History key={e.id} {...e} />
        )}
      </div>
    </section>
  );
}

