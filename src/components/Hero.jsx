import Button from './Button';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='left'>
        <div className='word__wrapper'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favorite websites. Open a new browser tab
            and see your sites load instantly. Try it for free.
          </p>
          <div className='call'>
            <Button Class='chrome__get-it' name='Get it on Chrome' />
            <Button Class='firefox__get-it' name='Get it on Firefox' />
          </div>
        </div>
        <img src='illustration-hero.svg' alt='illustration-hero' />
      </div>
      <div className='decoratorOne'></div>
    </section>
  );
};

export default Hero;
