import { NavLink, Outlet } from 'react-router-dom';

const Features = () => {
  return (
    <section className='features'>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favorite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </p>
      <div className='tabsControl'>
        <NavLink to='tab1' className={({ isActive }) => (isActive ? 'tabs active' : 'tabs')}>
          <p>Simple Bookmarking</p>
        </NavLink>
        <NavLink to='tab2' className={({ isActive }) => (isActive ? 'tabs active' : 'tabs')}>
          <p>Speedy Searching</p>
        </NavLink>
        <NavLink to='tab3' className={({ isActive }) => (isActive ? 'tabs active' : 'tabs')}>
          <p>Easy Sharing</p>
        </NavLink>
      </div>
      <Outlet />
      <div className='decoratorTwo'></div>
    </section>
  );
};

export default Features;
