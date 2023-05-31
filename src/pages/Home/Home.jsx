import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ChefsCard from "../ChefsCard/ChefsCard";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Speciality from "../Speciality/Speciality";
import MainFood from "../MainFood/MainFood";

const Home = () => {
    const [chefs,setChefs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allData")
        .then(res => res.json())
        .then(data =>setChefs(data))
        .catch(err => console.error(err))
    },[])
  return (
    <div className="text-center">
      <NavBar />
      <Banner />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto text-cente">
        {
            chefs.map(chef =><ChefsCard className='mx-auto ' chef={chef} key={chef.id} ></ChefsCard>)
        }
      </div>
      <Speciality />
      <MainFood />
      <Footer />
    </div>
  );
};

export default Home;
