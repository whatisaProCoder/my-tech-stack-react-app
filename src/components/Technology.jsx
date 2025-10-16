function Technology(props) {
  return (
    <div className="border-1 border-[#4e57ca] text-[1rem] text-left px-4 py-2 rounded bg-[#333333] border-l-6 transition-all hover:translate-y-[-0.125rem] hover:drop-shadow-[2px_4px_8px_rgba(0,0,0,25%)]">
      {props.name}
    </div>
  );
}

export { Technology };
