import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Section from "./components/Section";
import Footer from "./components/Footer";

const SectionData=[
    {
        title:"Skills",
         desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab rem enim asperiores harum aut magnam consequatur perferendis quisquam? Commodi, possimus sunt nesciunt laborum, rem aperiam cupiditate deserunt dolores nihil quos itaque vero. Soluta incidunt unde deleniti quidem, debitis, officiis sed quisquam ipsa alias, modi obcaecati ab culpa nam reprehenderit veritatis. Doloribus, obcaecati! Nulla fugit veniam recusandae sunt distinctio commodi velit sequi consequuntur molestias cumque tempora molestiae, ipsa qui. Sit vero magni fugiat natus ipsa soluta aperiam, minima possimus placeat ullam dolor et voluptas maiores optio, aspernatur nemo quis, blanditiis rem nobis. Aliquam repudiandae hic, doloribus molestias maxime quae nesciunt odio!"

    }
,
{
    title:"Qualifications",
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab rem enim asperiores harum aut magnam consequatur perferendis quisquam? Commodi, possimus sunt nesciunt laborum, rem aperiam cupiditate deserunt dolores nihil quos itaque vero. Soluta incidunt unde deleniti quidem, debitis, officiis sed quisquam ipsa alias, modi obcaecati ab culpa nam reprehenderit veritatis. Doloribus, obcaecati! Nulla fugit veniam recusandae sunt distinctio commodi velit sequi consequuntur molestias cumque tempora molestiae, ipsa qui. Sit vero magni fugiat natus ipsa soluta aperiam, minima possimus placeat ullam dolor et voluptas maiores optio, aspernatur nemo quis, blanditiis rem nobis. Aliquam repudiandae hic, doloribus molestias maxime quae nesciunt odio!"}
,
{
    title:"Projects",
   desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab rem enim asperiores harum aut magnam consequatur perferendis quisquam? Commodi, possimus sunt nesciunt laborum, rem aperiam cupiditate deserunt dolores nihil quos itaque vero. Soluta incidunt unde deleniti quidem, debitis, officiis sed quisquam ipsa alias, modi obcaecati ab culpa nam reprehenderit veritatis. Doloribus, obcaecati! Nulla fugit veniam recusandae sunt distinctio commodi velit sequi consequuntur molestias cumque tempora molestiae, ipsa qui. Sit vero magni fugiat natus ipsa soluta aperiam, minima possimus placeat ullam dolor et voluptas maiores optio, aspernatur nemo quis, blanditiis rem nobis. Aliquam repudiandae hic, doloribus molestias maxime quae nesciunt odio!"}


]
// import "./style.css";
 const App=()=>{
    return (
        <div>
            <Navbar/>
            <About/>
         {
            SectionData.map((item)=>(

                   <Section 
                   title={item.title}
                   desc={item.desc}
                   />
            )) 
         }
         <Footer/>
            
        </div>
    );
 }

 export default App;