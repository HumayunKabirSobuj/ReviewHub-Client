




interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap lg:justify-end justify-center gap-2 mt-8">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`min-w-[40px] px-2 py-1 rounded-lg border transition-all duration-300
            ${page === currentPage
              ? "bg-primary text-white shadow-lg border-primary"
              : "bg-white text-purple-700 hover:bg-purple-50 border-gray-300"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
