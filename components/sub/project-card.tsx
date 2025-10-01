import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
};

export const ProjectCard = ({ src, title }: ProjectCardProps) => {
  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow-lg hover:scale-[1.06] transition ring-blue-500 border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover rounded-lg object-left-top"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};
        
