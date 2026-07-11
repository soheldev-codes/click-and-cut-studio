import { HiOutlineCamera, HiOutlineHeart } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

export default function HeroStats() {
  const stats = [
    {
      icon: <FaStar className="text-yellow-400" />,
      value: "4.9",
      label: "Client Rating",
    },
    {
      icon: <HiOutlineCamera />,
      value: "500+",
      label: "Projects",
    },
    {
      icon: <HiOutlineHeart />,
      value: "300+",
      label: "Happy Clients",
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {stats.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 text-white"
        >
          <div className="text-2xl text-violet-400">
            {item.icon}
          </div>

          <div>
            <h4 className="font-semibold">{item.value}</h4>
            <p className="text-sm text-zinc-300">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}