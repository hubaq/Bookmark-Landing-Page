import Button from './Button';

const Tab_1 = () => {
  return (
    <div className='tab__1'>
      <div className='wrapper'>
        <img src='illustration-features-tab-1.svg' alt='' />
        <div className='right'>
          <h1>Bookmark in one click</h1>
          <p>
            Organize your bookmarks however ou like. Our simple drag-and-drop interface gives you
            complete control over how you manage your favorite sites.
          </p>
          <Button Class='more__info' name='More Info' />
        </div>
      </div>
    </div>
  );
};

export default Tab_1;
