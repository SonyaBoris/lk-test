import exit from "../../assets/img/exit.svg"
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { BaseInput } from "../../ui/input";
import { Modal } from "../../ui/modal";
import {user} from "../../data/user"

export const ModalEdit = ({ closeModal, isOpenModal }) => {

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: user.name,
      lastName: user.lastName,
      fatherName: user.fatherName,
      dateBorn:  user.dateBorn,
      dateWork:  user.dateWork,
      countries:  user.countries,
      town:  user.town,
      job:  user.job,
      mail:  user.mail
    },
    mode: "onChange",
  });

  const onSubmit = data => {
    console.log(data);
    closeModal(false)
  }

  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <div className=" bg-secondary-bg s:w-3/5 w-full s:h-auto h-full m-auto s:p-[30px] p-3 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl text-primary-text">Персональная информация</h3>
          <button onClick={closeModal}>
            <img src={exit} />
          </button>
        </div>
        <form onSubmit={
          handleSubmit(onSubmit)
        }
          className="flex flex-col gap-8 ">
          <div className="flex md:flex-row flex-col gap-6">
            <BaseInput
              label="Имя"
              type="text"
              name="name"
              placeholder="Ваше имя"
              size="s"
              formState={formState}
              register={register}
            />
            <BaseInput
              label="Фамилия"
              type="text"
              name="lastName"
              placeholder="Ваша фамилия"
              size="s"
              formState={formState}
              register={register}
            />
          </div>
          <BaseInput
            label="Отчество"
            type="text"
            name="fatherName"
            placeholder="Ваше отчество"
            size="m"
            formState={formState}
            register={register}
          />
          <div className="flex md:flex-row flex-col gap-6">
            <BaseInput
              label="Дата рождения"
              type="date"
              name="dateBorn"
              size="s"
              formState={formState}
              register={register}
            />
            <BaseInput
              label="Дата трудоустройства"
              type="date"
              name="dateWork"
              size="s"
              formState={formState}
              register={register}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-6">
            <BaseInput
              label="Страна"
              type="text"
              name="countries"
              size="s"
              formState={formState}
              register={register}
            />
            <BaseInput
              label="Город"
              type="text"
              name="town"
              size="s"
              formState={formState}
              register={register}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-6">
            <BaseInput
              label="Должность"
              type="text"
              name="job"
              size="s"
              formState={formState}
              register={register}
            />
            <BaseInput
              label="Элестронная почта"
              type="mail"
              name="mail"
              size="s"
              formState={formState}
              register={register}
            />
          </div>
          <Button type="submit">СОХРАНИТЬ</Button>
        </form>
      </div>
    </Modal>
  );
}

