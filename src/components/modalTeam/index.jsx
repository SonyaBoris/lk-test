import exit from "../../assets/img/exit.svg"
import { Modal } from "../../ui/modal";
import avatar from "../../assets/img/moc-user-1.png"
import {user} from "../../data/user"


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
          {user.project.team.map((e) =>
            <div className="flex gap-2 text-primary-text">
              <img src={avatar} />
              <div>
                <p>{e.name}</p>
                <p className="text-sm text-secondary-text">{e.job}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

