'use client'
import { gallery } from "@/constants/constants"
import Image from "next/image"
import {motion} from "framer-motion"
import { galleryItems } from "@/constants/animations";
import { once } from "events";

const ProjectGallery = () => {
  return (
    <section
      className="flex gap-10 z-10 justify-center my-20 flex-wrap"
    >
      {gallery.map((item, id) => (
        <motion.div
          variants={galleryItems(id/10)}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          whileHover={{scale: 0.95}}
        >
          <div className="w-[200px] md:w-[450px] h-[200px] md:h-[350px]">
            <Image
              src={item.image}
              alt={`com_img_${id}`}
              width={250}
              height={250}
              className="h-full overflow-hidden w-full object-cover"
            />
          </div>
          <h3 className="mt-1">{item.title}</h3>
        </motion.div>
      ))}
    </section>
  );
}

export default ProjectGallery