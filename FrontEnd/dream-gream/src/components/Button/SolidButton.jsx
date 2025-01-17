import React from 'react';
import PropTypes from 'prop-types';

function SolidButton({ name, onClick }) {
  const handleButtonClick = () => {
    onClick(); // sendPostInfo 함수 호출
  };

  return (
    <button
      onClick={handleButtonClick}
      type="submit"
      className="w-80 h-[55px] bg-indigo-400 rounded-lg justify-center items-center inline-flex"
    >
      <div className="text-center text-white text-base font-medium">{name}</div>
    </button>
  );
}

SolidButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SolidButton;