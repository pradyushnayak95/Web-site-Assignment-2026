import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden" aria-label="Hero Banner">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-6">
                Premium IT Consulting & Sourcing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight mb-6 leading-none"
            >
              Empowering Businesses Through <span className="text-primary">Technology</span> & <span className="text-primary">Talent</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-light text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              LUCID delivers bespoke software engineering, strategic IT consulting, and matches you with vetted tech professionals to scale your engineering velocity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button href="/contact" variant="cta" size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Hero Illustration / Graphics Mock */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] flex items-center justify-center"
            >
              {/* Premium Dashboard Graphic Simulator */}
              <div className="w-full max-w-[420px] bg-secondary p-6 rounded-2xl shadow-lg relative border border-white/5 overflow-hidden">
                {/* Tech grid detail */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">lucid-system-v1.0.exe</span>
                </div>
                
                {/* Graph bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-semibold">
                      <span>Dev Velocity</span>
                      <span className="text-primary-light">94%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: '94%' }} 
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="bg-primary h-full rounded-full" 
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-semibold">
                      <span>Project Delivery</span>
                      <span className="text-accent-light">98.2%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: '98.2%' }} 
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="bg-accent h-full rounded-full" 
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-semibold">
                      <span>Resource Alignment</span>
                      <span className="text-emerald-400">92%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: '92%' }} 
                        transition={{ duration: 1.5, delay: 1.0 }}
                        className="bg-cta h-full rounded-full" 
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                  <span className="font-mono text-[10px]">UPTIME: 99.999%</span>
                  <span className="flex items-center gap-1 text-primary-light font-semibold">
                    System Secure
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
