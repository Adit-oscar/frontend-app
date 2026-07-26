export const Divider = ({ text }) => {
  return (
    <div className="relative flex py-4 items-center my-2">
      <div className="grow border-t border-white/10"></div>
      {text && (
        <span className="shrink mx-4 text-slate-500 text-xs font-medium uppercase tracking-wider">
          {text}
        </span>
      )}
      <div className="grow border-t border-white/10"></div>
    </div>
  );
};
