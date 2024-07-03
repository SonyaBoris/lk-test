import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avatar.png';
import chevron from '../../assets/img/chevron-down.svg';
import burger from '../../assets/img/burger.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <img src={logo} alt="logo" />
      <div className="flex items-center gap-2">
        <button className="flex items-center py-1.5 px-4  border border-primary-border rounded-[18px]">
          <img src={avatar} alt="avatar" />
          <img src={chevron} alt="select" />
        </button>
        <img src={burger} alt="open menu" />
      </div>
    </header>
  );
}

