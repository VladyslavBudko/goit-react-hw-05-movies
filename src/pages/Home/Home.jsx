import { useState, useEffect } from 'react';


const Home = () => {
    const [home, setHome] = useState([]);

    useEffect(() => {
      // axios.get(setHome)
    }, [])
    

    return <h1>Home</h1>
};

export default Home;
