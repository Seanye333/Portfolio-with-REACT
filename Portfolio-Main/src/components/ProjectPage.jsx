import React from "react";
import '../components/work.css';
import animefusion from '/src/assets/Images/animefusion.jpg';
import tastefultwosome from '/src/assets/Images/tastfultwosomes.png';

function ProjectList() {
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
{/* <article className="Work_Images">
  <a href="https://github.com/Seanye333/Simple_Camera_Product_Page.git" target="_blank">
    <h1 className="images_title2">Camera Product</h1>
    <img className="Mid" src='' alt="A camera page with camera product in the middle and description of product and price to its left" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article>
<article className="Work_Images">
  <a href="https://github.com/Seanye333/CSS_Blog_Web.git" target="_blank">
    <h1 className="images_title2">CSS Blog Web</h1>
    <img className="Mid" src="./assets/Images/CSS_Blog_Web.JPG" alt="An overview of CSS blog webpage talking about building responsive layout" />
    <h2 className="code_types2">CSS/HTML</h2>
  </a>
</article> */}
</section>
)
}

export default ProjectList;

