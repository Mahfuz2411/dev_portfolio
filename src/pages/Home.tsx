import { useHelmet } from "@/utils/Helmet";



const Home = () => {
    useHelmet("Home - Portfolio");
    return (
        <> 
            <div>Hello from Home</div>
        </>
    )
}

export default Home;