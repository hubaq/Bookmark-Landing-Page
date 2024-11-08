import Button from './Button';

const Download = () => {
  return (
    <section className='download'>
      <h1>Download extension</h1>
      <p>
        We&apos;ve got more browsers in the pipeline. Please do let us know if you&apos;ve got a
        favourite you&apos;d like us to prioritize.
      </p>
      <div className='flex'>
        <div className='flex_item'>
          <img src='logo-chrome.svg' alt='' />
          <h1>Add to Chrome</h1>
          <p>Minimum version 62 </p>
          <Button Class='download__btn' name='Add & Install Extension' />
        </div>
        <div className='flex_item'>
          <img src='logo-firefox.svg' alt='' />
          <h1>Add to Firefox</h1>
          <p>Minimum version 55</p>
          <Button Class='download__btn' name='Add & Install Extension' />
        </div>
        <div className='flex_item'>
          <img src='logo-opera.svg' alt='' />
          <h1>Add to Opera</h1>
          <p>Minimum version 46</p>
          <Button Class='download__btn' name='Add & Install Extension' />
        </div>
      </div>
    </section>
  );
};

export default Download;
