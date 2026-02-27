import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center group font-bold text-lg md:text-2xl text-blue-600">
      <span>Viktor</span>
      <Image
        src="/assets/common/man_avatar.png"
        alt="Man Avatar"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10 transition-all duration-200"
      />
      <span>Le</span>
    </div>
  );
};

export default Logo;
