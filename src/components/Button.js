export default function Button({ text, className }) {
  return (
    <>
      <button
        className={`w-40 font-semibold uppercase bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm ${className}`}
      >
        {text}
      </button>
    </>
  );
}
