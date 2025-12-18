import { Droplet } from 'lucide-react';

export default function PaaniLogo() {
  return (
    <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-400/20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-300/40 to-transparent animate-wave"></div>
      </div>
      <div className="flex items-center gap-3 font-bold text-4xl text-blue-600">
        {/* Animated water drop */}
        <span className="text-5xl animate-bounce-pulse">💧<Droplet /></span>

        {/* PAANI with wave and glow */}
        <span className="relative animate-wave-text font-italian">
          PAANI
          <span>
            {" "}
            <p className="text-sm text-blue-700 font-medium tracking-wider animate-fade-in">
              {/* Pure. Fresh. Life. */}
              Water Filter Machines Sales & Service
            </p>
          </span>
          {/* <span className="absolute inset-0 text-blue-400 blur-md animate-glow opacity-70">PAANI</span> */}
        </span>
      </div>
    </div>

    //     <div className="relative flex flex-col items-center gap-3 py-8 overflow-hidden">
    //   {/* Subtle flowing ripple background */}
    //   <div className="absolute inset-0 -z-10">
    //     <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-500/30 to-blue-400/20 animate-pulse"></div>
    //     <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-300/40 to-transparent animate-wave"></div>
    //   </div>

    //   <div className="flex items-center gap-3 font-bold text-4xl text-blue-600">
    //     {/* Animated water drop */}
    //     <span className="text-5xl animate-bounce-pulse">💧</span>

    //     {/* PAANI with wave and glow */}
    //     <span className="relative animate-wave-text font-italian">
    //       PAANI
    //       {/* <span className="absolute inset-0 text-blue-400 blur-md animate-glow opacity-70">PAANI</span> */}
    //     </span>
    //   </div>

    //   {/* Short message below */}
    //   <p className="text-sm text-blue-700 font-medium tracking-wider animate-fade-in">
    //     Pure. Fresh. Life.
    //   </p>
    // </div>
  );
}
