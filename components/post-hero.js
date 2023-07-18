import Image from "next/image";

export default function PostHero({ title, image }) {
  return (
    <div className="max-w-lg mt-4 md:mt-8 mx-auto post-hero">
      <Image
        src={image.url}
        alt={title}
        layout="responsive"
        width={16}
        height={9}
      />
    </div>
  );
}
