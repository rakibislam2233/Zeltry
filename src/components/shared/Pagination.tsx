import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
    return (
        <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#e7ecf1] bg-white px-3 py-2 shadow-sm">
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#e1e7ee] bg-[#f8fafc] text-[#728294] hover:bg-[#eef3f8] transition-colors disabled:opacity-50">
                <ChevronLeft className="w-5 h-5" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white font-bold shadow-sm shadow-primary/20">
                1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#e1e7ee] bg-white text-[#253d4e] hover:bg-[#f8fafc] transition-colors">
                2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#e1e7ee] bg-white text-[#253d4e] hover:bg-[#f8fafc] transition-colors">
                3
            </button>
            <span className="px-1 text-[#9aa7b7]">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#e1e7ee] bg-white text-[#253d4e] hover:bg-[#f8fafc] transition-colors">
                8
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-md border border-[#e1e7ee] bg-[#f8fafc] text-[#728294] hover:bg-[#eef3f8] transition-colors">
                <ChevronRight className="w-5 h-5" />
            </button>
            </div>
        </div>
    );
};

export default Pagination;
