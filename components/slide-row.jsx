//import Image from "next/image";

export default function SlideRow({ slide, children }) {
  if (!slide || !children) return;
  return (
    <div class="grid md:grid-cols-5 md:gap-8">
      <div class="col-span-3">{children}</div>
      <div class="col-span-2 pt-3">
        <img
          src={slide}
          className="border-4 border-white"
          //width={400}
          //height={400}
        />
      </div>
    </div>
  );
}
