import { useState } from "react";
import { About } from "../../pages/mainInfo/about";
import { Vacation } from "../../pages/vacationInfo/vacation";
import { Tabs } from "../tabs";
import { User } from "../user";


export const Main = () => {

  const [activeTab, setActiveTab] = useState(1);
  
  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col gap-4">
      <main className="rounded-xl bg-secondary-bg">
        <User />
        <Tabs changeTab={changeTab} activeTab={activeTab} />
      </main>
      {activeTab === 1 ? <About /> : <Vacation />}      
    </div>
  );
}

