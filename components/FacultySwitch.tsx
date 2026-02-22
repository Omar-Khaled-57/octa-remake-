import Image from "next/image";

type Props = {
  faculty: "industry" | "medical";
  onToggle: () => void;
  heading: string;
  label: string;
  industryLabel: string;
  medicalLabel: string;
  className?: string;
  switchColor?: string;
  switchHoverColor?: string;
};

export default function FacultySwitch({
  faculty,
  onToggle,
  heading,
  label,
  industryLabel,
  medicalLabel,
  className = "",
  switchColor,
  switchHoverColor,
}: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`card-wrapper mt-16 bg-transparent border-none p-0 ${className}`}
    >
      <div className="relative mt-12">
        <div 
          className="face face1 bg-cardBg rounded-t-xl flex items-center justify-center"
          style={switchColor ? { backgroundColor: switchColor } : undefined}
        >
          <div className="flex gap-s justify-between w-[80%] opacity-50 transition">
            <Image
              src={
                faculty === "industry"
                  ? "/images/majors/fac1.png"
                  : "/images/majors/fac2.png"
              }
              alt=""
              width={100}
              height={100}
              className="card-img aspect-square"
            />
            <h3 className="text-black text-center my-auto">
              {heading}
            </h3>
          </div>
        </div>

        <div 
          className="face face2 flex items-center justify-center flex-col bg-[var(--f-green-0)] rounded-b-xl overflow-y-hidden"
          style={switchHoverColor ? { backgroundColor: switchHoverColor } : undefined}
        >
          <p className="text-center">{label}</p>
          <h3 className="text-center mt-2">
            {faculty === "industry" ? industryLabel : medicalLabel}
          </h3>
        </div>
      </div>
    </button>
  );
}
