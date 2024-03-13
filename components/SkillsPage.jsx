'use client'
import SkillsImages from "./SkillsImages"
import Image from "next/image"
const SkillsPage = () => {
  return (
    
      <section className="py-32 flex flex-col items-center xl:h-screen xl:justify-evenly">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="pt-12 pb-20 text-lg lg:text-2xl font-medium">I work in such programs as</p>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-20">
          <SkillsImages src='/photoshop.jpeg' width='90' height='89' alt='Photoshop' description='Adobe Photoshop' priority={true}/>
          <SkillsImages src='/illustrator.jpeg' width='90' height='89' alt='Illustrator' description='Adobe Illustrator' />
          {/* <SkillsImages src='/after_effect.jpeg' width='90' height='89' alt='After Effects' description={`Adobe After Effects`} /> */}
          <div className="grid grid-rows-[90px_1fr_auto] justify-items-center gap-y-6">
            <Image className="" src='/after_effect.jpeg' width={90} height={89} alt='After Effects' />
            <p className="text-[#828282] text-center font-semibold max-w-[100px]">Adobe <br/>After Effects</p>
            <img src="/stars.png" alt="" />
          </div>  
          <SkillsImages src='/figma.png' fill width='59' height='89' alt='Figma' description='Figma' />
        </div>

      </section>
      
    
    
  )
}

export default SkillsPage