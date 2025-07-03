import OrbitingCircles from "./OrbitingCircles";

export default function Frameworks() {
  const skills = [
    "auth0",
    "css3",
    "git",
    "html5",
    "javascript",
    "react",
    "tailwindcss",
    "vitejs",
    "cplusplus",
    "microsoft",
  ];
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="rounded-sm hover:scale-110 duration-200" />
);
