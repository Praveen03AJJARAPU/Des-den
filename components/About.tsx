import { about, headerStyle,sectionDime, services } from "@/constants/constants";
import AboutRepSectiion from "./AboutRepSectiion";


const About = () => {
  return (
    <section className={`${sectionDime}`}>
      <h1 className={`border-b-2 border-black ${headerStyle}`}>
        All work, all play, everyday. <br className="lg:block hidden" />
        We strategize, design and deliver
      </h1>
      <div className="flex flex-col">
        <AboutRepSectiion title={about.title} para={about.para} />
        <div
          className={`flex mb-5 lg:mb-0  flex-col lg:flex-row font-extralight border-b-[1px] border-black justify-between py-20`}
        >
          <h2 className={`${headerStyle} smHead`}>Services</h2>
          <ul className="flex flex-col  lg:w-[500px] text-xl">
            {services.map((ser) => (
              <li>{ser}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About