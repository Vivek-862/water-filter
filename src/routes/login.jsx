import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6">
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 px-4">
  <div className="text-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-16 max-w-4xl mx-auto border border-white/30">
    {/* Animated water drops */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      <span className="absolute top-10 left-20 text-6xl animate-bounce opacity-60">💧</span>
      <span className="absolute top-20 right-32 text-5xl animate-bounce delay-200 opacity-50">💧</span>
      <span className="absolute bottom-20 left-1/3 text-7xl animate-bounce delay-500 opacity-70">💧</span>
      <span className="absolute bottom-10 right-1/4 text-5xl animate-bounce delay-700 opacity-60">💧</span>
    </div>

    <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse mb-8">
      Coming Soon...
    </h1>
    
    <p className="text-2xl md:text-4xl text-white font-medium mb-12 drop-shadow-lg">
      Exciting new features & premium water purifiers launching soon!
    </p>
    
    <div className="flex justify-center gap-8 text-white text-xl">
      <span className="animate-pulse">Stay tuned</span>
      <span className="text-5xl animate-bounce">💧</span>
      <span className="animate-pulse">Pure water awaits</span>
    </div>
  </div>
</div>
      <button
        onClick={() => {
          login();
          navigate({ to: "/" });
        }}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:scale-105 transition"
      >
        Login
      </button>
    </div>
  );
}
