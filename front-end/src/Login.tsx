import Input from "./components/Input.tsx";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col items-center justify-center bg-black">
        <img src="./logo.png" alt="" />
        <Input placeholder="E-mail" type="text" />
        <Input placeholder="Senha" type="password" />
        <button className="w-full rounded-md bg-[#E50914] px-2 py-2 text-sm text-white">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
