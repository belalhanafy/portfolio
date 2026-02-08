import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const PaginationPro = ({
    currentPage,
    totalPages,
    onClickPrev,
    onClickNext,
}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-4 space-x-4 space-y-6 sm:mt-0 sm:flex-row sm:space-x-6 sm:space-y-0 ">
            <p className="text-sm text-gray-800 dark:text-gray-500">
                Page
                <span className="font-bold bg-[#A374FF] text-white px-[5px] py-[1px] mx-1 rounded">
                    {currentPage}
                </span>{" "}
                of
                <span className="font-bold bg-[#A374FF] text-white px-[5px] py-[1px] mx-1 rounded">
                    {totalPages}
                </span>{" "}
                pages
            </p>


            <div className="flex items-center space-x-4">
                <button
                    className={`flex items-center bg-gray-800 text-white px-4 py-2 rounded-md transition ${currentPage <= 1
                        ? "!bg-gray-400 cursor-not-allowed"
                        : "hover:bg-blue-400"
                        }`}
                    disabled={currentPage <= 1}
                    onClick={onClickPrev}
                >
                    <IoIosArrowBack className="w-4 h-4 mr-2" />
                    Previous
                </button>

                <button
                    className={`flex items-center bg-gray-800 text-white px-4 py-2 rounded-md transition ${currentPage === totalPages || totalPages === 0
                        ? "!bg-gray-400 cursor-not-allowed"
                        : "hover:bg-blue-400"
                        }`}
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={onClickNext}
                >
                    Next
                    <IoIosArrowForward className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default PaginationPro;
