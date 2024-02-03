
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  name: string;
  title: string;
}

export default async function Skill({ src, title, alt, name }: Props) {

  return (
    <div className="flex flex-col items-center ">
      <Image
        width={200}
        height={200}
        src={src}
        alt={alt}
        title={title}
        placeholder="blur"
        className="w-[45%] mb-6"
      />
      <span className="font-semibold tracking-widest">
        {name}
      </span>
    </div>
  );
};


