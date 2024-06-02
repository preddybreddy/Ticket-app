const ProgressBar = ({ progress }) => {
  return (
    <div className="rounded-full bg-red-500 h-2.5 w-1/2">
      <div
        className="rounded-full bg-green-500 h-2.5"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
