import { Film } from "lucide-react"

function Footer() {
  return (
    <>
      <footer className="mt-16 sm:mt-20 py-10 sm:py-15 px-6 sm:px-12 border-t border-white/5 bg-zinc-950/50 backdrop-blur-md">
         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-12 text-zinc-600">
           <div className="space-y-4 text-center sm:text-left">
             <div className="flex items-center justify-center sm:justify-start gap-2">
               <Film size={20} className="text-rose-600 sm:w-6 sm:h-6" />
               <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase italic text-white">CineStream</span>
             </div>
             <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase max-w-xs leading-loose">The world's most advanced cinematic discovery engine.</p>
           </div>
           
           <div className="flex flex-row justify-center sm:justify-start gap-8 sm:gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-zinc-400">Content</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Movies</li>
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Series</li>
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Kids</li>
                </ul>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-zinc-400">Legal</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Privacy</li>
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Terms</li>
                  <li className="hover:text-rose-500 cursor-pointer transition-colors">Cookies</li>
                </ul>
              </div>
           </div>
         </div>
         <div className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5 text-center text-[8px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-zinc-500">
           © 2026 CineStream Digital Entertainment • All Rights Reserved
         </div>
       </footer> 
    </>
  )
}

export default Footer