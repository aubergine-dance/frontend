import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="top-0 z-10 w-full h-20 bg-slate-700 p-4">
      <div className="flex">
        <Link to={'/'}>
          <span className="text-5xl font-extrabold text-white">AD</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
