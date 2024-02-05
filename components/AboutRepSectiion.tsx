import { headerStyle, section } from "@/constants/constants";

type propTypes = {
    title: string,
    para: string 
}
const AboutRepSectiion = ({title, para}: propTypes) => {
  return (
    <section className={section}>
      <h2 className={`${headerStyle}`}>{title}</h2>
      <p className="max-w-[500px] font-light text-base md:text-xl">
        {para}
      </p>
    </section>
  );
}

export default AboutRepSectiion