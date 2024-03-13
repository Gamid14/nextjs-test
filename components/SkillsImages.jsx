import Image from "next/image"
import starsImage from '../public/stars.png'
const SkillsImages = ({src, width, height, alt, description, priority}) => {
  return (
    <div className="grid grid-rows-[90px_1fr_auto] justify-items-center gap-y-6">
      <Image className="" src={src} width={width} height={height} alt={alt} priority={priority}/>
      <p className="text-[#828282] text-center font-semibold max-w-24">{description}</p>
      <Image src={starsImage} alt="Rating stars" />
    </div>
  )
}

export default SkillsImages