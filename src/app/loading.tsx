import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Loader className="w-8 f-8 animate-spin" />
      <span>Aguarde enquanto carregamos as informações.</span>
    </div>
  );
}
