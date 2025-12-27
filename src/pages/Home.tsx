import { useHelmet } from "@/utils/Helmet";
import { FileUser } from "lucide-react";



const Home = () => {
    useHelmet("Home - Portfolio");
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center gap-6 mt-20">
                <h1 className="font-extrabold text-6xl text-[#1f2937] mb-4">Welcome to My <span className="bg-[linear-gradient(135deg,#fbbf24,#f59e0b,#ea580c)] bg-clip-text text-transparent">Digital Garden</span></h1>
                <p className="text-2xl text-[#6b7280]">Where creativity blooms and projects grow into beautiful experiences</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <FileUser size={20} /> Dowload Resume
                </button>
            </div>
        </>
    )
}

export default Home;