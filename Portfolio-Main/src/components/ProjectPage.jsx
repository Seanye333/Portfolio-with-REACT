import React from "react";
import '../components/work.css';
import animefusion from '/src/assets/Images/animefusion.jpg';
import tastefultwosome from '/src/assets/Images/tastfultwosomes.jpeg';
import weatherdash from '/src/assets/Images/weatherdash.jpg';
import socialnetwork from '/src/assets/Images/socialnetworkapi.jpg';
import ecommerce from '/src/assets/Images/ecommerce.jpg';
import employeetracker from '/src/assets/Images/employeetracking.jpg';

export default function ProjectPage() {
return (
<section id="Work_Section">
<article className="Work_Images">
  <a href="https://github.com/Seanye333/Anime-Fusion" target="_blank">
    <h1 className="images_title2"> Anime Fusion </h1>
    <img className="Mid" src={animefusion} alt="an overview of bowtie cat webpage with 4 boxes including two sentences of description for HTML, CSS, Git, and JavaScript" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/Tasteful-Twosomes" target="_blank">
    <h1 className="images_title2">Tasteful-Twosomes</h1>
    <img className="Mid" src={tastefultwosome} alt="An overview of snippet cheatsheet with purple boxes and description on each box" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/Challenge-6-Weather-Dashboard" target="_blank">
    <h1 className="images_title2">Weather-Dashboard</h1>
    <img className="Mid" src= {weatherdash} alt="An overview of CSS blog webpage talking about building responsive layout" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/Social-Network-API" target="_blank">
    <h1 className="images_title2">Social-Network-API</h1>
    <img className="Mid" src= {socialnetwork} alt="A camera page with camera product in the middle and description of product and price to its left" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/E-Commerce-Back-End" target="_blank">
    <h1 className="images_title2">E-Commerce</h1>
    <img className="Mid" src= {ecommerce} alt="A camera page with camera product in the middle and description of product and price to its left" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/C12-Employee-Tracker" target="_blank">
    <h1 className="images_title2">Employee-Tracker</h1>
    <img className="Mid" src= {employeetracker} alt="A camera page with camera product in the middle and description of product and price to its left" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>

</section>
)
}

// export default ProjectPage;

