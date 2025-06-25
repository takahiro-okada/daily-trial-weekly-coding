import Image from "next/image";

export function DotFilter() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        width={1920}
        height={1080}
        alt="Background Image"
        src="/images/week1.jpeg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-[radial-gradient(black_20%,transparent_20%),radial-gradient(black_20%,transparent_20%)] bg-[length:6px_6px] bg-[position:0_0,3px_3px]" />
    </div>
  );
}
