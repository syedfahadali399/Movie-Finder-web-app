import { Mail } from "lucide-react"

function CTA() {
  return (
    <div className="flex flex-row items-center w-full justify-center mt-14">
      <section className="relative overflow-hidden rounded-[3rem] py-20 px-36 text-center bg-linear-to-br from-rose-900/20 to-zinc-900 border border-rose-500/20">
               <div className="relative z-10 max-w-xl mx-auto space-y-6">
                 <div className="inline-flex p-4 bg-rose-600 rounded-3xl shadow-2xl mb-4">
                    <Mail size={32} className="text-white" />
                 </div>
                 <h2 className="text-4xl font-black tracking-tighter uppercase italic">Never Miss a Premiere</h2>
                 <p className="text-zinc-400 font-medium leading-relaxed">Join 50,000+ CineStreamers. Get curated movie lists and upcoming trailers directly in your inbox.</p>
                 
                 <div className="flex flex-col items-center justify-center sm:flex-row gap-3 pt-4">
                    <input 
                      type="email" 
                      placeholder="Your Email Address"
                      className=" bg-black/40 border border-white/10 text-white rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all text-sm font-bold"
                    />
                    <button className="bg-white cursor-pointer text-black px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all active:scale-95">
                      Subscribe
                    </button>
                 </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 blur-[120px] z-0" />
            </section>
    </div>
  )
}

export default CTA
