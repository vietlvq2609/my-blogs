import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center group font-bold text-2xl text-blue-600">
      <span>Viktor</span>
      <Image
        src="/assets/common/man_avatar.png"
        alt="Man Avatar"
        width={40}
        height={40}
      />
      <span>Le</span>
    </div>
  );
};

export default Logo;
