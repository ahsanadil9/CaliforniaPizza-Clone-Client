export default function Search({ setSearchItem }) {
  return (
    <div className="px-6 md:px-8 pt-8 pb-5">
      {/* {" "} */}
      <div className="relative flex items-center border border-gray-300 rounded-full w-full max-w-full">
        <input
          type="search"
          onChange={(e) => setSearchItem(e.target.value)}
          className="relative pl-12 text-sm lg:text-lg border-none focus:ring-primary focus:ring-inset focus:outline-none bg-gray-200 px-2 py-2.5 rounded-full w-full"
          placeholder="Search Meaty Pizza"
        />
        <button
          type="submit"
          className="absolute md:right-auto left-0 md:left-auto flex items-center justify-center p-3 rounded-full hover:bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a.75.75 0 01-1.06 1.06l-4.817-4.817A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
