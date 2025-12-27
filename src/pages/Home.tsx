import { useHelmet } from "@/utils/Helmet";



const Home = () => {
    useHelmet("Home - Portfolio");
    return (
        <> 
            <div>Hello from Home</div>
            <div>Hello from Home 02</div>
        </>
    )
}

export default Home;