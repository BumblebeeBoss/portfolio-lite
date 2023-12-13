import React from "react";
import photographerimage from "../img/photographer.jpg";
 const About=()=>{
    return (
        <div className="about">
            <h1>About</h1>
             {/* <img src ="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="phtographer"/>  */}
           <img src={photographerimage} alt="phtographer"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab rem enim asperiores harum aut magnam consequatur perferendis quisquam? Commodi, possimus sunt nesciunt laborum, rem aperiam cupiditate deserunt dolores nihil quos itaque vero. Soluta incidunt unde deleniti quidem, debitis, officiis sed quisquam ipsa alias, modi obcaecati ab culpa nam reprehenderit veritatis. Doloribus, obcaecati! Nulla fugit veniam recusandae sunt distinctio commodi velit sequi consequuntur molestias cumque tempora molestiae, ipsa qui. Sit vero magni fugiat natus ipsa soluta aperiam, minima possimus placeat ullam dolor et voluptas maiores optio, aspernatur nemo quis, blanditiis rem nobis. Aliquam repudiandae hic, doloribus molestias maxime quae nesciunt odio!</p> 
             <hr/>
        </div>
    );
 }
 export default About;