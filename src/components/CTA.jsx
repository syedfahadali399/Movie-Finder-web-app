import { Mail } from "lucide-react"

function CTA() {
  return (
    <div className="flex flex-row items-center w-full justify-center mt-10 sm:mt-14 px-4 sm:px-6 md:px-8">
      <section className="relative overflow-hidden rounded-4xl sm:rounded-[3rem] py-12 px-6 sm:py-16 sm:px-16 md:px-24 lg:px-36 text-center bg-linear-to-br from-rose-900/20 to-zinc-900 border border-rose-500/20 w-full max-w-5xl">
               <div className="relative z-10 max-w-xl mx-auto space-y-4 sm:space-y-6">
                 <div className="inline-flex p-3 sm:p-4 bg-rose-600 rounded-3xl shadow-2xl mb-2 sm:mb-4">
                    <Mail size={24} className="text-white sm:w-8 sm:h-8" />
                 </div>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white">Never Miss a Premiere</h2>
                 <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-medium leading-relaxed">Join 50,000+ CineStreamers. Get curated movie lists and upcoming trailers directly in your inbox.</p>
                 
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 sm:pt-4 w-full">
                    <input 
                      type="email" 
                      placeholder="Your Email Address"
                      className="w-full sm:w-72 md:w-80 bg-black/40 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all text-sm font-bold"
                    />
                    <button className="w-full sm:w-auto bg-white cursor-pointer text-black px-8 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all active:scale-95 shrink-0">
                      Subscribe
                    </button>
                 </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-rose-600/10 blur-[80px] sm:blur-[120px] z-0" />
            </section>
    </div>
  )
}

export default CTA
