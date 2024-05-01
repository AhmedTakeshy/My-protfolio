
import Image from "next/image";
type SkillProps = {
  src: string;
  alt: string;
  name: string;
  title: string;
}

export default function Skill({ src, title, alt, name }: SkillProps) {

  return (
    <div className="flex flex-col items-center ">
      <Image
        width={200}
        height={200}
        src={src}
        alt={alt}
        title={title}
        className="w-[45%] mb-6"
      />
      <span className="font-semibold tracking-widest">
        {name}
      </span>
    </div>
  );
};


