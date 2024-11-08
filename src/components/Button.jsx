/* eslint-disable react/prop-types */
const Button = ({ Class, name, onSend }) => {
  return (
    <button onClick={onSend} className={`${Class}`}>
      {name}
    </button>
  );
};

export default Button;
