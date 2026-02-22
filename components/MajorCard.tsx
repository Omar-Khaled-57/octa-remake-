import Image from "next/image";
import Link from "next/link";

type MajorCardProps = {
  href?: string;
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  disabled?: boolean;
};

export default function MajorCard({

  href = "#",
  image,
  title,
  description,
  disabled = false,
}: MajorCardProps) {
  const Wrapper: any = disabled ? "div" : Link;

  return (
    // <Wrapper
    //   {...(!disabled && { href })}
    //   className={`card-wrapper relative block ${
    //     disabled ? "pointer-events-none opacity-70" : "cursor-pointer"
    //   }`}
    // >
    <Wrapper
      {...(!disabled && { href })}
      className={`card-wrapper relative block ${
        disabled ? "pointer-events-none opacity-70" : "cursor-pointer"
      }`}
      onClick={(e: React.MouseEvent) => {
        if (href === "#") {
          e.preventDefault();
        }
      }}
    >
      <div className="relative mt-12">
        {/* FACE 1 */}
        <div
          className=" flex face face1 items-center justify-center bg-cardBg rounded-t-xl"
        >
          <div className="flex gap-s justify-between w-[80%] opacity-50 transition">
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              className="card-img my-auto aspect-square"
            />
            <h3 className="text-center text-black my-auto">
              {title}
            </h3>
          </div>
        </div>

        {/* FACE 2 */}
        <div
          className="
            flex face face2 px-4
            items-center justify-center
            rounded-b-xl
            overflow-y-hidden"
        >
          <p className="text-center">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}
