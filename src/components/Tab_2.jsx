import Button from './Button';

const Tab_2 = () => {
  return (
    <div className='tab__2'>
      <div className='wrapper'>
        <img src='illustration-features-tab-2.svg' alt='' />
        <div className='right'>
          <h1> Intelligent search</h1>
          <p>
            Our powerful search feature will help you find saved sites in no time at all. No need to
            trawl through all of your bookmarks.
          </p>
          <Button Class='more__info' name='More Info' />
        </div>
      </div>
    </div>
  );
};

export default Tab_2;
