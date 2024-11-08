import { useState } from 'react';
import Button from './Button';
const accordionData = [
  {
    accord: 'What is Bookmark?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    id: 1,
  },
  {
    accord: 'How can I request a new browser?',
    content:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    id: 2,
  },
  {
    accord: 'Is there a mobile app?',
    content:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    id: 3,
  },
  {
    accord: 'What about other Chromium browsers?',
    content:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    id: 4,
  },
];

const FAQ = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  function handleClick(id) {
    // Toggle accordion item: close if open, open if closed
    setOpenAccordionId(prevId => (prevId === id ? null : id));
  }

  return (
    <section className='FAQ'>
      <h1>Frequently Asked Questions</h1>
      <p>
        Here are some of our FAQs. If you have any other questions you&apos;d like answered, please
        feel free to email us.
      </p>
      <div className='accordian'>
        {accordionData.map(item => (
          <div className='accordion' key={item.id}>
            <div className='contain' onClick={() => handleClick(item.id)}>
              <h1>{item.accord}</h1>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='12'
                  className={openAccordionId === item.id ? 'rotate' : ''}
                >
                  <path
                    fill='none'
                    stroke={openAccordionId === item.id ? '#FA5757' : '#5267DF'}
                    strokeWidth='3'
                    d='M1 1l8 8 8-8'
                  />
                </svg>
              </span>
            </div>
            {openAccordionId === item.id && (
              <p className={`accordion-content ${openAccordionId === item.id ? 'open' : ''}`}>
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
      <Button Class='more__info' name='More Info' />
    </section>
  );
};

export default FAQ;
