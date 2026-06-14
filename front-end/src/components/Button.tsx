type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  // const default = "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] px-2 py-2 text-sm font-bold text-white";
  //   const outline = "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white px-2 py-2 text-sm font-bold text-[#C92A0E]";

  const buttonVariants = {
    default:
      "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] px-2 py-2 text-sm font-bold text-white",
    outline:
      "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white px-2 py-2 text-sm font-bold text-[#C92A0E]",
  };

  return (
    <button className={buttonVariants[variant]} {...props}>
      {title}
    </button>
  );
};

export default Button;
