import { Film } from "lucide-react"

function Footer() {
  return (
    <>
     <footer className="mt-20 py-15 px-12 border-t border-white/5 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-zinc-600">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Film size={24} className="text-rose-600" />
              <span className="text-2xl font-black tracking-tighter uppercase italic text-white">CineStream</span>
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase max-w-xs leading-loose">The world's most advanced cinematic discovery engine.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
             <div className="space-y-4">
               <p className="text-zinc-400">Content</p>
               <ul className="space-y-2">
                 <li className="hover:text-rose-500 cursor-pointer">Movies</li>
                 <li className="hover:text-rose-500 cursor-pointer">Series</li>
                 <li className="hover:text-rose-500 cursor-pointer">Kids</li>
               </ul>
             </div>
             <div className="space-y-4">
               <p className="text-zinc-400">Legal</p>
               <ul className="space-y-2">
                 <li className="hover:text-rose-500 cursor-pointer">Privacy</li>
                 <li className="hover:text-rose-500 cursor-pointer">Terms</li>
                 <li className="hover:text-rose-500 cursor-pointer">Cookies</li>
               </ul>
             </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[8px] font-black uppercase tracking-[0.5em] text-zinc-500">
          © 2026 CineStream Digital Entertainment • All Rights Reserved
        </div>
      </footer> 
    </>
  )
}

export default Footer