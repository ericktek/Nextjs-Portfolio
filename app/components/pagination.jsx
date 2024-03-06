const Pagination = () => {
  return (
    <div className="mx-auto max-w-5xl flex items-center justify-between border-t border-white/10  py-3 pt-8 mb-20 sm:px-6">
      <div className="flex flex-1 px-2 sm:px-4 justify-between">
        <button className="relative inline-flex items-center rounded-sm bg-orange-400 px-4 py-2 text-sm font-light text-gray-200 hover:bg-orange-300 hover:text-gray-600">
          Previous
        </button>
        <button className="relative ml-3 inline-flex items-center rounded-sm bg-orange-400 px-4 py-2 text-sm font-light text-gray-200 hover:bg-orange-300 hover:text-gray-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
