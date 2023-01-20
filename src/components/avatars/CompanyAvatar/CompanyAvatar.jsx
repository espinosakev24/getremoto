import Image from "next/image";

const CompanyAvatar = () => {
  return (
    <Image
      alt="Company Avatar"
      width={50}
      height={50}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/UruIT_logo.png/480px-UruIT_logo.png"
      className="rounded"
    />
  );
};

export default CompanyAvatar;
