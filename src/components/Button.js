export default function Button({ text, className }) {
  return (
    <>
      <button
        className={`w-max font-500 uppercase bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm ${className}`}
      >
        {text}
      </button>
    </>
  );
}
