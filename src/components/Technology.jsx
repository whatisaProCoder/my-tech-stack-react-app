import { useState } from "react";

function Technology(props) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        borderColor: selected ? "#e1e1e1" : "#aeaeae",
        fontWeight: selected ? "600" : "normal",
        backgroundColor: selected ? "#454545" : "#333333",
        borderLeftWidth: selected ? "6px" : "2px",
      }}
      className="border-2 text-[1rem] text-left px-4 py-2 rounded transition-all hover:translate-y-[-0.125rem] hover:drop-shadow-[2px_4px_8px_rgba(0,0,0,25%)] select-none"
    >
      {props.name}
    </div>
  );
}

export { Technology };
