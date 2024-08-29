
export default function Button({ text,onClick, className }) {
  return (
    <>
      <button onClick={onClick}
        className={`w-max font-500 uppercase bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm ${className}`}
      >
        {text}
      </button>
    </>
  );
}
