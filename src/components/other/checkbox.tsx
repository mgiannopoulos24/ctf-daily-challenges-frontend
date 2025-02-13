import React from 'react';

interface CheckboxProps {
  onClick: () => void; 
}

const Checkbox: React.FC<CheckboxProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    onClick(); 
  };

  return (
    <label>
      <div
        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
        onClick={handleClick} 
      >
        <input className="hidden peer" type="checkbox" />
        <div className="w-[50%] h-[2px] bg-terminal-green rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" />
        <div className="w-[50%] h-[2px] bg-terminal-green rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
        <div className="w-[50%] h-[2px] bg-terminal-green rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" />
      </div>
    </label>
  );
};

export default Checkbox;