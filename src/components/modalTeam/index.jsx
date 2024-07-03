import exit from "../../assets/img/exit.svg"
import { Modal } from "../../ui/modal";
import user from "../../assets/img/moc-user-1.png"

const mokTeam = [
  { id: 1, name: "John Smith", job: "Junior UI/UX designer" },
  { id: 2, name: "John Smith", job: "Junior UI/UX designer" },
  { id: 3, name: "John Smith", job: "Junior UI/UX designer" },
  { id: 4, name: "John Smith", job: "Junior UI/UX designer" }
]

export const ModalTeam = ({ closeModal, isOpenModal }) => {

  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <div className=" bg-secondary-bg s:w-3/5 w-full s:h-auto h-full m-auto s:p-[30px] p-3 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl text-primary-text">Команда</h3>
          <button onClick={closeModal}>
            <img src={exit} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {mokTeam.map((e) =>
            <div className="flex gap-2 text-primary-text">
              <img src={user} />
              <div>
                <p>{e.name}</p>
                <p className="text-sm">{e.job}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

