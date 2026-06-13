const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] rounded-md bg-white px-2 py-2 text-sm text-[#32343E] outline-none placeholder:text-[#32343E]"
    />
  );
};

export default Input;
