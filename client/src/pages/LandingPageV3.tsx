import { motion } from "framer-motion";
import {
    Check,
    ArrowRight,
    ShieldCheck,
    BookOpen,
    Users,
    Play,
    Award,
    Star,
    Activity,
    Brain,
    Pill,
    Microscope,
    Flame,
    AlertTriangle,
    ArrowRightCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_scientific_background_with_blue_and_purple_gradients.png";
import mentorPhoto from "@assets/generated_images/dr_kleber_real.png";
import logoImage from "@assets/450x150_-_branco_1767465087558.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function LandingPageV3() {
    return (
        <div className="min-h-screen font-sans text-slate-100 overflow-x-hidden bg-[#030712]">

            {/* 1. HEADER/HERO SECTION */}
            <section className="relative pt-10 pb-12 lg:pt-20 lg:pb-32 overflow-hidden bg-[#030712]">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header Logo Area */}
                    <div className="flex justify-start mb-16 lg:mb-24">
                        <img 
                            src={logoImage} 
                            alt="Alumine Farmacologia" 
                            className="h-16 lg:h-24 w-auto object-contain"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Column (Text) */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="lg:col-span-7 space-y-8 text-left"
                        >
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
                                    <span className="text-cyan-400">Farmacologia</span> <br />
                                    da Obesidade Moderna
                                </h1>

                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                                    Uma aula para profissionais da saúde que já conhecem GLP-1 e tirzepatida, mas ainda não entenderam por que a resposta clínica falha em tantos casos.
                                </p>
                            </div>

                            <div className="space-y-3 text-left">
                                {[
                                    "Entenda a resistência leptínica",
                                    "Domine o manejo de efeitos adversos",
                                    "Evite o efeito platô e rebote",
                                    "Prescrição ética e baseada em fenótipo"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ArrowRightCircle className="w-5 h-5 text-cyan-400" />
                                        <span className="text-base text-slate-200 font-medium leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="space-y-1">
                                    <p className="text-2xl font-bold text-white line-through opacity-70">DE R$ 197,00</p>
                                    <p className="text-4xl font-black text-orange-400">POR R$ 67,00</p>
                                </div>

                                <div className="relative group w-fit">
                                    <div className="absolute -inset-1 bg-cyan-400/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                    <Button className="relative h-14 px-12 text-lg bg-cyan-400 hover:bg-cyan-300 text-[#030712] font-black rounded-full shadow-2xl transition-all">
                                        COMEÇAR AGORA
                                    </Button>
                                </div>

                                <p className="text-[10px] text-slate-500 max-w-[300px] leading-tight italic">
                                    Ao clicar no botão para se inscrever, você concorda com a nossa <a href="#" className="underline">Política de Privacidade</a>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column (Image) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative z-10 flex justify-center lg:justify-end">
                                <img
                                    src={mentorPhoto}
                                    alt="Dr. Kleber"
                                    className="w-full max-w-[450px] object-contain filter drop-shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
                                />
                            </div>
                            {/* Decorative glow behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-900/10 rounded-full blur-[120px] -z-10"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. SOCIAL PROOF / TARGET AUDIENCE */}
            <section className="py-10 border-y border-slate-800 bg-[#030712]">
                <div className="container mx-auto px-4">
                    <p className="text-center text-cyan-400 font-bold mb-8 uppercase tracking-widest text-sm">
                        Conteúdo essencial desenvolvido para
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {["Médicos", "Farmacêuticos", "Nutricionistas", "Biomédicos", "Estudantes"].map((role, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-cyan-400 cursor-default transition-colors">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PARADIGM SHIFT (ZIGZAG) */}
            <section className="py-24 bg-[#030712] overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative w-full"
                        >
                            <div className="absolute inset-0 bg-cyan-400/5 rounded-3xl transform rotate-3 scale-105" />
                            <div className="relative bg-[#0f172a] rounded-3xl p-8 border border-slate-800">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                                            <AlertTriangle className="w-5 h-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">O erro comum</h4>
                                            <p className="text-slate-400 text-sm">Achar que obesidade é apenas uma questão de dose e molécula.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">A frustração</h4>
                                            <p className="text-slate-400 text-sm">Pacientes que estacionam (platô) ou recuperam peso (rebote).</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-slate-800 my-4" />
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center shrink-0">
                                            <Brain className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">A solução real</h4>
                                            <p className="text-slate-400 text-sm">Entender a inflamação, o SNC e a adaptação metabólica.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">Quebra de Paradigma</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase">
                                O problema não é falta de fármaco. <br />
                                <span className="text-orange-400">É falta de entendimento biológico.</span>
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                As "canetas" são ferramentas poderosas, mas sem entender a <strong>farmacologia adaptativa</strong> e a imunometabolismo, você está lutando contra a fisiologia com uma mão amarrada.
                            </p>
                            <ul className="space-y-3 pt-4 inline-block text-left">
                                {[
                                    "Por que alguns pacientes respondem muito bem e outros não?",
                                    "Por que o reganho de peso é tão frequente?",
                                    "Por que aumentar a dose nem sempre resolve?"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 w-full flex justify-center lg:justify-start">
                                <Button className="h-12 px-8 text-lg bg-orange-400 hover:bg-orange-300 text-[#030712] font-black rounded-full shadow-lg transition-transform hover:scale-105">
                                    QUERO APRENDER A VERDADE
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. MODULES / CURRICULUM (GRID) */}
            <section className="py-24 bg-[#0f172a]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">Conteúdo Programático</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 uppercase">
                            Domine a farmacologia <br /> da obesidade em 10 Passos
                        </h2>
                        <p className="text-lg text-slate-400">
                            Um guia estruturado para entender desde a bioenergética celular até a prescrição de agonistas triplos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Obesidade Adaptativa", icon: Microscope, desc: "Inflamação crônica, Set point metabólico e resistência leptínica." },
                            { title: "Neurobiologia & SNC", icon: Brain, desc: "Hipotálamo, Food Noise, Dopamina e Recompensa Alimentar." },
                            { title: "Classes Farmacológicas", icon: Pill, desc: "GLP-1 vs Duais vs Combinações. Classe define mecanismo, não só potência." },
                            { title: "GLP-1 Profundo", icon: Activity, desc: "Ação periférica vs central, efeitos anti-inflamatórios e cardiovasculares." },
                            { title: "GIP & Tirzepatida", icon: Flame, desc: "Sinergia molecular, downregulation e limites adaptativos." },
                            { title: "Apneia & Imunometabolismo", icon: AlertTriangle, desc: "Relação bidirecional entre hipóxia e inflamação sistêmica." },
                            { title: "Massa Magra & Sarcopenia", icon: Users, desc: "Risco metabólico do emagrecimento rápido e resistência anabólica." },
                            { title: "Reganho de Peso", icon: Activity, desc: "Por que o corpo 'lembra' do peso? Defesa do set point." },
                            { title: "Futuro: Triplos Agonistas", icon: Star, desc: "O que esperar (e o que não esperar) das novas moléculas." },
                            { title: "Prescrição Fenotípica", icon: Check, desc: "Quem tratar, quando parar e como decidir clinicamente." }
                        ].map((mod, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="bg-[#1e293b] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-800 group text-center md:text-left"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-900/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-cyan-400 group-hover:text-[#030712] transition-colors mx-auto md:mx-0">
                                    <mod.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{i + 1}. {mod.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button className="h-14 px-10 text-xl bg-cyan-400 hover:bg-cyan-300 text-[#030712] font-black rounded-full shadow-xl transition-all hover:scale-105">
                            QUERO DOMINAR A FARMACOLOGIA
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. MENTOR SECTION */}
            <section className="py-24 bg-[#030712]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-2/5 order-1 lg:order-1 w-full max-w-sm lg:max-w-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-400 rounded-[2rem] transform translate-x-4 translate-y-4" />
                                <img
                                    src={mentorPhoto}
                                    alt="Dr. Kleber"
                                    className="relative rounded-[2rem] w-full shadow-2xl z-10"
                                />
                            </div>
                        </div>

                        <div className="lg:w-3/5 order-2 lg:order-2 space-y-8 text-center lg:text-left">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase leading-tight">
                                    Com quem você vai aprender <br /> a <span className="text-cyan-400">investir na sua carreira</span>.
                                </h2>
                                <p className="text-orange-400 font-black text-lg">Dr. Adilson Kleber Ferreira</p>
                                <p className="text-slate-400 text-sm">Farmacêutico-Bioquímico | Doutor em Fisiopatologia Experimental (FMUSP)</p>
                            </div>

                            <div className="space-y-4 text-base text-slate-300 leading-relaxed text-justify">
                                <p>
                                    <strong>Dr. Adilson Kleber Ferreira</strong> é farmacêutico-bioquímico, doutor em Fisiopatologia Experimental pela Faculdade de Medicina da Universidade de São Paulo (FMUSP), com trajetória científica consolidada em farmacologia experimental, biologia molecular, metabolismo celular e desenvolvimento racional de fármacos.
                                </p>
                                <p>
                                    Realizou formação científica no Brasil e no exterior, incluindo pesquisa de doutorado e pós-doutorado no <strong>University Medical Center Groningen (Holanda)</strong>, no Research Institute for Drug Exploration, com atuação em drug discovery, avaliação farmacológica de mecanismos de ação, design molecular e estudos pré-clínicos.
                                </p>
                                <p>
                                    Atuou como pesquisador no Instituto de Ciências Biomédicas da USP (ICB-USP), desenvolvendo pesquisas em fisiopatologia sistêmica, inflamação crônica, metabolismo energético e farmacologia molecular, bases fundamentais para a compreensão moderna da obesidade como doença complexa, adaptativa e multifatorial.
                                </p>
                                <p>
                                    É <strong>Acadêmico Titular da Academia Nacional de Farmácia</strong> (Cadeira nº 105) e Full Member da Sigma Xi – The Scientific Research Honor Society. Atua como revisor científico e membro de corpo editorial de periódicos internacionais nas áreas de farmacologia e drug discovery.
                                </p>

                                <div className="bg-[#1e293b] p-4 rounded-lg border-l-4 border-cyan-400 text-left">
                                    <p className="font-bold text-white mb-2">Foco Científico em publicações internacionais:</p>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                                        <li className="flex items-center gap-2 text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Mecanismos farmacológicos</li>
                                        <li className="flex items-center gap-2 text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Bioenergética celular</li>
                                        <li className="flex items-center gap-2 text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Desenvolvimento de novos fármacos</li>
                                        <li className="flex items-center gap-2 text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Farmacologia translacional</li>
                                    </ul>
                                </div>

                                <p>
                                    Sua atuação acadêmica é integrada à experiência prática em inovação e gestão em saúde, conferindo ao seu ensino uma abordagem crítica, técnica e orientada à decisão baseada em evidências, distante de simplificações, modismos ou discursos comerciais.
                                </p>
                                <p className="font-bold text-white italic">
                                    No curso Farmacologia da Obesidade Moderna, Dr. Adilson conduz o aluno à compreensão profunda dos mecanismos que sustentam — e limitam — a farmacoterapia da obesidade.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center">
                                <Button className="h-12 px-8 text-lg bg-orange-400 hover:bg-orange-300 text-[#030712] font-black rounded-full shadow-lg transition-transform hover:scale-105">
                                    GARANTIR MINHA VAGA AGORA
                                </Button>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-[#1e293b] rounded-lg border border-slate-800">
                                        <span className="block text-xl font-black text-white">ANF</span>
                                        <span className="text-xs text-slate-500">Cadeira 105</span>
                                    </div>
                                    <div className="px-4 py-2 bg-[#1e293b] rounded-lg border border-slate-800">
                                        <span className="block text-xl font-black text-white">Ph.D</span>
                                        <span className="text-xs text-slate-500">USP & NL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="py-24 bg-[#030712] text-white relative overflow-hidden border-t border-slate-800">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-[#030712] to-[#030712]" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
                        Pronto para transformar sua gestão clínica?
                    </h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Junte-se a centenas de profissionais que deixaram de apenas prescrever e passaram a entender a biologia da obesidade.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button className="h-16 px-10 text-xl bg-orange-400 hover:bg-orange-300 text-[#030712] font-black rounded-full shadow-lg hover:scale-105 transition-transform w-full md:w-auto">
                            QUERO ACESSO IMEDIATO
                        </Button>
                        <div className="flex items-center gap-2 text-slate-400">
                            <ShieldCheck className="w-5 h-5 text-cyan-400" />
                            <span>Garantia incondicional de 7 dias</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-4">Farmacologia da Obesidade</h3>
                            <p className="max-w-xs">
                                Educação científica de alto nível para profissionais de saúde que buscam a verdade biológica por trás dos tratamentos.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Links Úteis</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#FF6B35]">Sobre o Curso</a></li>
                                <li><a href="#" className="hover:text-[#FF6B35]">Módulos</a></li>
                                <li><a href="#" className="hover:text-[#FF6B35]">Mentor</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-[#FF6B35]">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-[#FF6B35]">Política de Privacidade</a></li>
                                <li><a href="#" className="hover:text-[#FF6B35]">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} Farmacologia da Obesidade Moderna. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
