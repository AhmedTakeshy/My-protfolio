import Image from "next/image";
type Props= {
  src: string;
  alt: string;
  name: string;
}

export default function Skill ({src,alt,name}: Props) {
  return (
    <div className="flex flex-col items-center ">
      <Image 
      width={200}
      height={200}
      src={src} 
      alt={alt} 
      className="w-[45%] mb-6" />
      <h5 className="font-semibold tracking-widest pointer-events-none">
        {name}
      </h5>
    </div>
  );
};


