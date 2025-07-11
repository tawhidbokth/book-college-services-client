import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}

      <Navbar />

      {/* Content Area */}
      <main className="flex-grow">
        <div>
          <Outlet></Outlet>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
