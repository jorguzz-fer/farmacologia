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
    ArrowRightCircle,
    XCircle,
    CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_scientific_background_with_blue_and_purple_gradients.png";
import mentorPhoto from "@assets/generated_images/dr_kleber_real.png";
import logoImage from "@assets/450x150_-_branco_1767465087558.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingPageV5() {
    return (
        <div className="min-h-screen font-sans text-slate-100 overflow-x-hidden bg-[#030712]">

            {/* 1. HEADER/HERO SECTION */}
            <section className="relative pt-6 pb-12 lg:pt-20 lg:pb-32 overflow-hidden bg-[#030712]">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex justify-center lg:justify-start mb-10 lg:mb-24">
                        <img
                            src={logoImage}
                            alt="Alumine Farmacologia"
                            className="h-12 sm:h-16 lg:h-24 w-auto object-contain"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
                        >
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
                                    <span className="text-cyan-400">Farmacologia</span> <br className="hidden sm:block" />
                                    da Obesidade Moderna
                                </h1>
                                <p className="text-lg md:text-2xl text-slate-200 font-bold leading-tight">
                                    GLP-1, GIP, apneia e a nova fronteira do tratamento metabólico
                                </p>
                                <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Uma aula para profissionais da saúde que já conhecem GLP-1 e tirzepatida,
                                    mas ainda não entenderam por que a resposta clínica falha em tantos casos.
                                </p>
                            </div>

                            <div className="space-y-6 pt-2 md:pt-4">
                                <div className="space-y-1">
                                    <p className="text-xl sm:text-2xl font-bold text-white line-through opacity-70">DE R$ 197,00</p>
                                    <p className="text-3xl sm:text-4xl font-black text-orange-400">POR R$ 67,00</p>
                                </div>

                                <div className="relative group w-full sm:w-fit flex justify-center lg:justify-start">
                                    <div className="absolute -inset-1 bg-cyan-400/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                    <Button className="relative h-14 px-12 text-lg bg-cyan-400 hover:bg-cyan-300 text-[#030712] font-black rounded-full shadow-2xl transition-all w-full sm:w-auto">
                                        COMEÇAR AGORA
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative z-10 flex justify-center lg:justify-end">
                                <img
                                    src={mentorPhoto}
                                    alt="Dr. Adilson Kleber Ferreira"
                                    className="w-full max-w-[450px] object-contain filter drop-shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-900/10 rounded-full blur-[120px] -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PARADIGM SHIFT (BLOCK 1) */}
            <section className="py-16 md:py-24 bg-[#0f172a] border-y border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <div className="space-y-4">
                            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">Quebra de Paradigma</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">
                                O problema não é falta de fármaco. <br />
                                <span className="text-orange-400">O problema é falta de entendimento.</span>
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                                A maioria das discussões sobre obesidade ainda gira em torno de dose, molécula e dispositivo.
                                Mas, na prática clínica, isso não explica:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            {[
                                "Por que alguns pacientes respondem muito bem e outros não",
                                "Por que o reganho de peso é tão frequente",
                                "Por que aumentar a dose nem sempre resolve",
                                "Por que novas moléculas potentes ainda encontram limites"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-[#1e293b] rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-cyan-900/40 text-cyan-400 flex items-center justify-center shrink-0">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <p className="text-slate-200 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            Este conteúdo foi criado para corrigir esse raciocínio.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. WHAT IT IS VS WHAT IT IS NOT (BLOCK 2) */}
            <section className="py-20 bg-[#030712]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        <div className="space-y-6">
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-red-400 uppercase">
                                <XCircle className="w-8 h-8" />
                                O que este produto NÃO É
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Um curso operacional sobre canetas",
                                    "Um treinamento de prescrição passo a passo",
                                    "Um compilado de bulas comentadas",
                                    "Um produto focado em estética rápida"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 group-hover:scale-150 transition-transform" />
                                        <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-green-400 uppercase">
                                <CheckCircle className="w-8 h-8" />
                                O que este produto É
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Uma base conceitual sólida sobre obesidade como doença metabólica",
                                    "Uma leitura farmacológica integrada (SNC, inflamação, metabolismo)",
                                    "Um guia para entender por que a farmacologia funciona — e falha",
                                    "Um ponto de partida obrigatório antes da aplicação prática"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 group-hover:scale-150 transition-transform" />
                                        <span className="font-medium group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. TARGET AUDIENCE (BLOCK 3) */}
            <section className="py-16 bg-[#0f172a] border-y border-slate-800 text-center">
                <div className="container mx-auto px-4">
                    <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm block mb-8">Para quem é este conteúdo?</span>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        {[
                            "Médicos", "Farmacêuticos", "Nutricionistas", "Biomédicos",
                            "Odontologistas", "Estudantes de Graduação", "Profissionais da saúde"
                        ].map((role, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">
                                {role}
                            </span>
                        ))}
                    </div>
                    <p className="mt-8 text-slate-400 italic">"Pessoas que buscam entendimento, não atalhos"</p>
                </div>
            </section>

            {/* 5. LEARNING OUTCOMES (BLOCK 4 - Text items moved to modules section context or kept simple) */}

            {/* 6. MODULES / CURRICULUM (BLOCK 5) */}
            <section className="py-24 bg-[#030712]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">Estrutura do Conteúdo</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6 uppercase">
                            10 Módulos de Puro Conhecimento
                        </h2>
                        <p className="text-lg text-slate-400">
                            Um raciocínio progressivo que vai da biologia básica à fronteira dos triplos agonistas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                title: "1. Obesidade: Doença Adaptativa, Inflamatória e Neuroendócrina",
                                desc: "Set point metabólico, inflamação crônica de baixo grau, adipócito como célula imunometabólica e resistência leptínica. A base conceitual de tudo."
                            },
                            {
                                title: "2. SNC, Comportamento e Imunoneuromodulação",
                                desc: "Hipotálamo, tronco encefálico, nervo vago, dopamina e recompensa alimentar. Food noise como fenômeno neurobiológico."
                            },
                            {
                                title: "3. Classes Farmacológicas no Tratamento",
                                desc: "Agonistas GLP-1, duais GLP-1/GIP e combinações. Por que classe define mecanismo, não só potência? O que muda na troca de moléculas."
                            },
                            {
                                title: "4. GLP-1 em Profundidade",
                                desc: "Ação periférica e central, efeitos anti-inflamatórios, impacto cardiovascular, renal e metabólico. GLP-1 como modulador sistêmico."
                            },
                            {
                                title: "5. GIP, Tirzepatida e Limites Moleculares",
                                desc: "Sinergia GLP-1/GIP, limites adaptativos, downregulation e tolerância funcional. Por que a tirzepatida funciona mais, mas não é mágica."
                            },
                            {
                                title: "6. Apneia do Sono: Fenótipo Imunometabólico",
                                desc: "Relação bidirecional: apneia ↔ inflamação ↔ resistência insulínica. Limites do tratamento farmacológico isolado."
                            },
                            {
                                title: "7. Massa Magra, Imunometabolismo e Adaptação",
                                desc: "Perda de massa magra, inflamação e resistência anabólica. O risco da sarcopenia metabólica e do emagrecimento rápido."
                            },
                            {
                                title: "8. Reganho de Peso: Resposta Biológica",
                                desc: "Defesa do set point, reversão de marcadores. Por que o corpo 'lembra' do peso e por que não é apenas 'efeito rebote'."
                            },
                            {
                                title: "9. O Futuro: Triplos Agonistas",
                                desc: "GLP-1/GIP/Glucagon. O que prometem resolver e o que provavelmente NÃO resolverão. Os limites biológicos da próxima fronteira."
                            },
                            {
                                title: "10. Prescrição Ética e Baseada em Fenótipo",
                                desc: "Para quem prescrever, para quem NÃO prescrever, quando manter e quando interromper. Prescrição como decisão clínica, não ato técnico."
                            }
                        ].map((mod, i) => (
                            <div key={i} className="bg-[#1e293b] p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all group">
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase">
                                    {mod.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {mod.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. INSTRUCTOR BIO (BLOCK 6) */}
            <section className="py-24 bg-[#0f172a] border-y border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">

                        <div className="w-full lg:w-1/3">
                            <img
                                src={mentorPhoto}
                                alt="Dr. Adilson Kleber Ferreira"
                                className="w-full rounded-2xl shadow-xl shadow-cyan-900/20"
                            />
                            <div className="mt-6 space-y-3">
                                <div className="p-4 bg-[#030712] rounded-xl border border-slate-800 text-center">
                                    <span className="block text-xl font-black text-white">ANF</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Acadêmico Titular - Cadeira 105</span>
                                </div>
                                <div className="p-4 bg-[#030712] rounded-xl border border-slate-800 text-center">
                                    <span className="block text-xl font-black text-white">Sigma Xi</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Full Member</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/3 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-1">Dr. Adilson Kleber Ferreira</h2>
                                <p className="text-orange-400 font-semibold text-lg">
                                    Farmacêutico-Bioquímico | Doutor em Fisiopatologia Experimental (FMUSP)
                                </p>
                            </div>

                            <div className="space-y-4 text-slate-300 leading-relaxed text-justify">
                                <p>
                                    Pesquisador em Farmacologia Translacional, Metabolismo e Desenvolvimento Racional de Fármacos, com trajetória científica consolidada no Brasil e no exterior (University Medical Center Groningen - Holanda).
                                </p>
                                <p>
                                    Atuou como pesquisador no Instituto de Ciências Biomédicas da USP (ICB-USP), focando em fisiopatologia sistêmica, inflamação crônica e metabolismo energético — as bases para a compreensão moderna da obesidade.
                                </p>
                                <p>
                                    Autor de artigos em periódicos de alto impacto (British Journal of Cancer, Oncotarget, etc) e revisor científico internacional. Sua atuação integra rigor acadêmico com experiência prática em inovação, oferecendo um ensino crítico, técnico e orientado a evidências.
                                </p>
                                <p>
                                    <em>"Aqui, o foco não é repetir estudos — é interpretá-los corretamente."</em>
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button className="h-12 px-8 text-lg bg-cyan-400 hover:bg-cyan-300 text-[#030712] font-black rounded-full shadow-lg transition-transform hover:scale-105">
                                    APRENDER COM QUEM É REFERÊNCIA
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PRICE & GUARANTEE (BLOCK 7 & 8) */}
            <section className="py-24 bg-[#030712] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#030712] to-[#030712]" />
                <div className="container mx-auto px-4 text-center relative z-10">

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
                        Acesso Imediato e Contínuo
                    </h2>

                    <div className="max-w-md mx-auto bg-[#1e293b] rounded-3xl p-8 border border-slate-700 shadow-2xl mb-12">
                        <div className="text-slate-400 text-lg line-through mb-2">De R$ 197,00</div>
                        <div className="text-6xl font-black text-white mb-2">R$ 67<span className="text-2xl align-top text-orange-400">,00</span></div>
                        <div className="text-slate-400 text-sm mb-8">Pagmento único • Acesso vitalício ao conteúdo gravado</div>

                        <Button className="w-full h-16 text-xl bg-orange-400 hover:bg-orange-300 text-[#030712] font-black rounded-xl shadow-lg hover:scale-105 transition-transform mb-4">
                            ACESSAR AGORA
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                            <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                        </div>
                    </div>

                    <p className="text-slate-500 max-w-2xl mx-auto italic">
                        Se este conteúdo não elevar seu entendimento sobre a farmacologia da obesidade, o valor é devolvido integralmente.
                    </p>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-2xl font-bold text-white mb-4">Farmacologia da Obesidade</h3>
                            <p className="max-w-xs">
                                Educação científica de alto nível por Dr. Adilson Kleber Ferreira.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-cyan-400">Início</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Conteúdo</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Dr. Adilson</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-cyan-400">Política de Privacidade</a></li>
                                <li><a href="#" className="hover:text-cyan-400">Termos de Uso</a></li>
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
