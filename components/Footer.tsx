import { headerStyle, navItems, sectionDime, socialMed } from "@/constants/constants"
import '../app/globals.css'
const Footer = () => {
  return (
    <section className={`${sectionDime}  mb-0 mt-64`}>
      <h1 className={`${headerStyle} max-w-[700px] mx-auto text-center`}>
        Take a peek into the Design Studio and learn about DD restless culture.
      </h1>
      <div className={`${headerStyle} bg-black text-white text-center py-20`}>
        <p className="mb-10">Interested in working together?</p>
        <a href="#" className="underline hover:no-underline">
          Talk to us
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-16 gap-10 border-b-[1px] border-black pb-20">
        <div className="max-w-[300px]">
          <p className="text-xl mb-5">
            View our open positions or fill out a general application.
          </p>
          <a href="#" className="text-lg underline hover:no-underline">
            Recruitments
          </a>
        </div>
        <div className="max-w-[300px]">
          <p className="text-xl mb-5">Art and stories of a restless culture</p>
          <a href="#" className="text-lg underline hover:no-underline">
            Coming soon
          </a>
        </div>
      </div>

      <div className="flex text-2xl justify-between py-24 mx-0">
        <div className="flex flex-col md:flex-row gap-10">
          {socialMed.map((item, id) => (
            <div className="relative cursor-pointer">
              <p key={id} className="underLiq">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div>
          {navItems.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer