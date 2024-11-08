import Button from './Button';

const Tab_3 = () => {
  return (
    <div className='tab__3'>
      <div className='wrapper'>
        <img src='illustration-features-tab-3.svg' alt='' />
        <div className='right'>
          <h1>Share your bookmarks</h1>
          <p>
            Easily share your bookmarks and collections with others. Create a shareable link that
            you can send at the click of a button.
          </p>
          <Button Class='more__info' name='More Info' />
        </div>
      </div>
    </div>
  );
};

export default Tab_3;

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
