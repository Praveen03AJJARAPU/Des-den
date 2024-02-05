import { headerStyle, sectionDime } from "@/constants/constants";
import ProjectGallery from "./ProjectGallery";

const Featured = () => {
  return (
    <section className={`${sectionDime}`}>
      <div>
        <h1 className={`text-3xl md:text-7xl pb-20 font-extralight`}>Featured work</h1>
        <p className="text-xl max-w-[900px] font-light">
          Everything we do stems from a brand's agenda. In our 14 year
          existence, we have worked with brands from over 15 sectors, crafting
          creative solutions that give your brand the drama it requires to
          engage, compete, and thrive.
        </p>
      </div>
      <ProjectGallery />
      
    </section>
  );
}

export default Featured