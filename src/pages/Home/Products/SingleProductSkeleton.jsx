const SingleProductSkeleton = () => {
    return (
        <div className="bg-[#F5F4F1] w-full p-7 flex gap-3 flex-col sm:flex-row items-center rounded-md animate-pulse">
            <div className="w-44 h-52 border bg-slate-300 rounded-xl" />

            <div className="flex-grow text-xl font-raleway text-[#5C5B5B] space-y-2">
                <div className="my-1 bg-slate-300 h-4 w-[45%] rounded-md"></div>
                <div className="my-1 bg-slate-300 h-4 w-[35%] rounded-md"></div>
                <div className="my-1 bg-slate-300 h-4 w-[40%] rounded-md"></div>
            </div>
            <div className="flex gap-4 sm:flex-col">
                <div className="bg-[#cebca4] w-10 h-10 flex justify-center items-center text-white rounded"></div>
                <div className="bg-[#726d70] w-10 h-10 flex justify-center items-center text-white rounded"></div>
                <button className="bg-[#e76d6b] w-10 h-10 flex justify-center items-center text-white rounded active:scale-95 transition-all"></button>
            </div>
        </div>
    );
};

export default SingleProductSkeleton;
