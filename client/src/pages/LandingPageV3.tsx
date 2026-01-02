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
    AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_scientific_background_with_blue_and_purple_gradients.png";
import mentorPhoto from "@assets/generated_images/dr_kleber_real.png";

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
        <div className="min-h-screen font-sans text-slate-900 overflow-x-hidden">

            {/* 1. HEADER/HERO SECTION */}
            <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column (50%) */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0066FF] px-4 py-1.5 rounded-full font-semibold text-sm tracking-wide uppercase">
                                <Star className="w-4 h-4 fill-current" />
                                Curso Online Exclusivo
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a3e] leading-[1.1]">
                                Farmacologia da <br />
                                <span className="text-[#0066FF]">Obesidade Moderna</span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                Uma aula para profissionais da saúde que já conhecem GLP-1 e tirzepatida, mas ainda não entenderam por que a resposta clínica falha em tantos casos.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    "Entenda a resistência leptínica",
                                    "Domine o manejo de efeitos adversos",
                                    "Evite o efeito platô e rebote",
                                    "Prescrição ética e baseada em fenótipo"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </div>
                                        <span className="text-lg text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="h-14 px-8 text-lg bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1">
                                    COMEÇAR AGORA
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
                                    <ShieldCheck className="w-5 h-5 text-slate-400" />
                                    <span className="text-sm font-medium text-slate-600">Garantia de 7 dias</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column (Sales Card/Summary) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100 relative">
                                {/* Badge */}
                                <div className="absolute -top-4 right-8 bg-[#1a1a3e] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                    Oferta Especial
                                </div>

                                <div className="space-y-6">
                                    <div className="text-center pb-6 border-b border-slate-100">
                                        <p className="text-slate-500 font-medium mb-1">Acesso imediato ao curso</p>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-xl text-slate-400 font-medium line-through">R$ 197</span>
                                            <span className="text-5xl font-extrabold text-[#0066FF]">R$ 67</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-xl flex gap-4 items-start">
                                            <Play className="w-6 h-6 text-[#0066FF] mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-[#1a1a3e] text-sm md:text-base">Conteúdo 100% Online</h4>
                                                <p className="text-xs md:text-sm text-slate-600">Assista quando e onde quiser, no seu próprio ritmo.</p>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-xl flex gap-4 items-start">
                                            <Award className="w-6 h-6 text-[#FF6B35] mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-[#1a1a3e] text-sm md:text-base">Certificado e Material</h4>
                                                <p className="text-xs md:text-sm text-slate-600">Acesso vitalício ao material de apoio e atualizações.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full h-14 text-lg bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold rounded-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02]">
                                        QUERO TRANSFORMAR MINHA PRÁTICA
                                    </Button>

                                    <p className="text-center text-xs text-slate-400">
                                        Pagamento seguro via Cartão ou PIX
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 2. SOCIAL PROOF / TARGET AUDIENCE */}
            <section className="py-10 border-y border-slate-100 bg-white">
                <div className="container px-4">
                    <p className="text-center text-slate-500 font-medium mb-8 uppercase tracking-widest text-sm">
                        Conteúdo essencial desenvolvido para
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
                        {["Médicos", "Farmacêuticos", "Nutricionistas", "Biomédicos", "Estudantes"].map((role, i) => (
                            <span key={i} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-[#0066FF] cursor-default transition-colors">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PARADIGM SHIFT (ZIGZAG) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-[#0066FF]/10 rounded-3xl transform rotate-3 scale-105" />
                            <div className="relative bg-slate-100 rounded-3xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <AlertTriangle className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">O erro comum</h4>
                                            <p className="text-slate-600 text-sm">Achar que obesidade é apenas uma questão de dose e molécula.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">A frustração</h4>
                                            <p className="text-slate-600 text-sm">Pacientes que estacionam (platô) ou recuperam peso (rebote).</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-slate-200 my-4" />
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <Brain className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">A solução real</h4>
                                            <p className="text-slate-600 text-sm">Entender a inflamação, o SNC e a adaptação metabólica.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <div className="lg:w-1/2 space-y-6">
                            <span className="text-[#0066FF] font-bold tracking-wider uppercase text-sm">Quebra de Paradigma</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a3e] leading-tight">
                                O problema não é falta de fármaco. <br />
                                <span className="text-[#FF6B35]">É falta de entendimento biológico.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                As "canetas" são ferramentas poderosas, mas sem entender a <strong>farmacologia adaptativa</strong> e a imunometabolismo, você está lutando contra a fisiologia com uma mão amarrada.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {[
                                    "Por que alguns pacientes respondem muito bem e outros não?",
                                    "Por que o reganho de peso é tão frequente?",
                                    "Por que aumentar a dose nem sempre resolve?"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. MODULES / CURRICULUM (GRID) */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#FF6B35] font-bold tracking-wider uppercase text-sm">Conteúdo Programático</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a3e] mt-3 mb-6">
                            Domine a farmacologia <br /> da obesidade em 10 Passos
                        </h2>
                        <p className="text-lg text-slate-600">
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
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-6 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                                    <mod.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1a1a3e] mb-3">{i + 1}. {mod.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{mod.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. MENTOR SECTION */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-2/5 md:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FF6B35] rounded-[2rem] transform translate-x-4 translate-y-4" />
                                <img
                                    src={mentorPhoto}
                                    alt="Dr. Kleber"
                                    className="relative rounded-[2rem] w-full shadow-2xl z-10"
                                />
                            </div>
                        </div>

                        <div className="lg:w-3/5 md:order-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a3e]">
                                Com quem você vai aprender <br /> a <span className="text-[#0066FF]">investir na sua carreira</span>.
                            </h2>
                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    <strong>Dr. Adilson Kleber Ferreira</strong> é farmacêutico-bioquímico, Doutor pela FMUSP e Acadêmico Titular da Academia Nacional de Farmácia.
                                </p>
                                <p>
                                    Com pós-doutorado na Holanda (Groningen) e vasta experiência no ICB-USP, sua carreira combina <strong>pesquisa de ponta</strong> em drug discovery com uma visão prática e aplicável.
                                </p>
                                <p>
                                    Diferente de cursos que apenas repetem bulas, aqui você terá acesso ao raciocínio de quem entende a molécula desde o design até a resposta clínica.
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <div className="px-6 py-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <span className="block text-2xl font-bold text-[#1a1a3e]">15+</span>
                                    <span className="text-sm text-slate-500">Anos de Pesquisa</span>
                                </div>
                                <div className="px-6 py-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <span className="block text-2xl font-bold text-[#1a1a3e]">Ph.D</span>
                                    <span className="text-sm text-slate-500">USP & Holanda</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="py-24 bg-[#1a1a3e] text-white relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-[#1a1a3e] to-[#1a1a3e]" />

                <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Pronto para transformar sua gestão clínica?
                    </h2>
                    <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                        Junte-se a centenas de profissionais que deixaram de apenas prescrever e passaram a entender a biologia da obesidade.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button className="h-16 px-10 text-xl bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform w-full md:w-auto">
                            QUERO ACESSO IMEDIATO
                        </Button>
                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="w-5 h-5" />
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
