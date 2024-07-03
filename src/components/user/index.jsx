import avatar from "../../assets/img/avatar-main.png"

export const User = () => {
  return (
    <section className="text-primary-text s:p-10 p-6 text-center s:text-start">
      <div className="flex s:flex-row flex-col items-center gap-12">
        <img src={avatar} alt="user photo" />
        <h3 className="s:text-5xl font-bold text-2xl  md:w-[398px]">Иванов Иван Иванович</h3>
      </div>
      <div className="s:pl-[208px] p-0">
        <p className="mb-4">UI/UX designer</p>
        <p>Россия, Красноярск</p>
      </div>
    </section>
  );
}

