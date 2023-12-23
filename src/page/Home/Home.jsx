import { useEffect } from "react";
import Banner from "../../components/Banner";


const Home = () => {
    // const [data, setData] = useState()
    useEffect( () =>{
        fetch('/public/procuct.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
        })
    },[])
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;