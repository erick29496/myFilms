import MenuAppBar from '../app.bar/app-bar.component';

const Layout = ({ children }) => {
  return (
    <>
      <MenuAppBar/>
      { children }
    </>
  );
}

export default Layout;