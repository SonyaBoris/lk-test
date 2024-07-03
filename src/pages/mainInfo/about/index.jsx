import user from "../../../assets/img/moc-user-1.png"
import { Team } from "../../../components/team";
import { Button } from "../../../ui/button";
import { Arrow } from "../../../ui/arrow";
import { Info } from "../../../ui/info";
import { useState } from "react";
import { ModalEdit } from "../../../components/modalEdit";
import { ModalTeam } from "../../../components/modalTeam";

export const About = () => {

 const mokTeam = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenTeamModal, setIsOpenTeamModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <section className="flex md:flex-row flex-col gap-4 mb-10 items-start ">
      <div className="rounded-xl bg-secondary-bg  md:w-3/5 w-full p-[30px]">
        <div className="flex items-center justify-between mb-8">
          <h5 className="text-2xl text-primary-text">Персональная информация</h5>
          <button onClick={() => setIsOpenModal(true)}
            className="text-sm text-tertiary-text">Изменить</button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6 s:flex-row flex-col">
            <Info desc={"Имя"} content={"Юрий"} width={"s:w-2/4 w-full"} />
            <Info desc={"Фамилия"} content={"Герыш"} width={"s:w-2/4 w-full"} />
          </div>
          <Info desc={"Отчество"} content={"Андреевич"} width={"w-full"} />
          <div className="flex gap-6 s:flex-row flex-col">
            <Info desc={"Дата рождения"} content={"06.01.2014"} width={"s:w-2/4 w-full"} />
            <Info desc={"Дата трудоустройства"} content={"15.05.2020"} width={"s:w-2/4 w-full"} />
          </div>
          <div className="flex gap-6 s:flex-row flex-col">
            <Info desc={"Страна"} content={"Россия"} width={"s:w-2/4 w-full"} />
            <Info desc={"Город"} content={"Красноярск"} width={"s:w-2/4 w-full"} />
          </div>
          <div className="flex gap-6 s:flex-row flex-col">
            <Info desc={"Должность"} content={"UI/UX designer"} width={"s:w-2/4 w-full"} />
            <Info desc={"Электронная почта"} content={"test@gmail.com"} width={"s:w-2/4 w-full"} />
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-secondary-bg  md:w-2/5 w-full p-[30px] flex flex-col s:gap-10 gap-8">
        <div className="flex items-center justify-between">
          <h5 className="text-2xl text-primary-text">Загрузка сотрудника</h5>
          <span className="text-sm text-another-text font-semibold">100%</span>
        </div>
        <div className="flex s:gap-[124px] gap-2 s:flex-row flex-col">
          <div className="flex flex-col gap-2">
            <p className="text-s text-tertiary-text">Название проекта</p>
            <p className="text-s text-primary-text">MedPoint 24</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-s text-tertiary-text">Тип проекта</p>
            <p className="text-s text-primary-text">Коммерческий</p>
          </div>
        </div>
        <div className="flex s:gap-[78px] gap-2 s:flex-row flex-col">
          <div className="flex flex-col gap-2">
            <p className="text-s text-tertiary-text">Ответствеенный</p>
            <div className="flex items-center gap-2">
              <img src={user} />
              <p className="text-s text-primary-text">Анна Кузнецова</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-s text-tertiary-text">Команда</p>
            <div className=" flex gap-[-12px]">
              {mokTeam.map((e) => (
                <Team key={e.id} index={e.id} />
              ))}
              <button
                onClick={() => setIsOpenTeamModal(true)}
                className="text-primary-text text-xl">+3</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-primary-text">
          <p className="text-s text-tertiary-text">Сроки работы</p>
          <div className="flex gap-2 items-center">
            <p className="text-s ">03 марта 2023</p>
            <Arrow color={"#0047BB"} />
            <p className="text-s ">23 марта 2023</p>
          </div>

        </div>
        <Button>Посмотреть всю загрузку</Button>
      </div>
      {isOpenModal &&
        <ModalEdit isOpenModal={isOpenModal} closeModal={closeModal} />}
      {isOpenTeamModal &&
        <ModalTeam isOpenModal={isOpenTeamModal} closeModal={() => setIsOpenTeamModal(false)} />}

    </section>
  );
}

