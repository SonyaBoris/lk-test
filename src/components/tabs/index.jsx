export const Tabs = ({ changeTab, activeTab }) => {

  return (
    <div className="flex s:m-10 mx-2 mb-6 s:justify-normal justify-center ">
      <button
        className={`py-2 px-4 text-sm font-semibold uppercase border-b-2 ${activeTab === 1 ? "border-accent text-primary-text" : "text-tertiary-text border-primary-border"}`}
        onClick={() => changeTab(1)}>основная информация</button>
      <button
        className={`py-2 px-4 text-sm font-semibold uppercase border-b-2 ${activeTab === 2 ? "border-accent text-primary-text" : "text-tertiary-text border-primary-border"}`}
        onClick={() => changeTab(2)}>отпуск</button>
    </div>
  );
}

