import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_scientific_background_with_blue_and_purple_gradients.png";
import mentorPhoto from "@assets/generated_images/dr_kleber_real.png";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingPageV2() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">

            {/* 1. HERO SECTION */}
            <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Farmacologia da <br className="hidden md:block" />
                            <span className="text-blue-400">Obesidade Moderna</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
                            GLP-1, GIP, apneia e a nova fronteira do tratamento metabólico.
                        </p>
                        <p className="text-base md:text-lg text-slate-400 italic mb-10 max-w-2xl mx-auto border-l-2 border-blue-500 pl-4 text-left md:text-center md:border-none md:pl-0">
                            "Uma aula para profissionais da saúde que já conhecem GLP-1 e tirzepatida, mas ainda não entenderam por que a resposta clínica falha em tantos casos."
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
                            Quero me inscrever agora
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. ENCONTRO PARA PROFISSIONAIS (GRID) */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Encontro para profissionais e empreendedores que:
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Enfrentam o Efeito Platô",
                                desc: "O paciente perde 10kg com Ozempic/Mounjaro, mas estaciona e você não sabe qual o próximo passo farmacológico."
                            },
                            {
                                title: "Lidam com Efeitos Adversos",
                                desc: "Você prescreve a caneta, mas o paciente volta reclamando de náusea incontrolável ou perda de massa magra excessiva."
                            },
                            {
                                title: "Frustração com o Rebote",
                                desc: "O paciente recupera todo o peso (efeito rebote) assim que tenta desmamar a medicação, gerando frustração."
                            },
                            {
                                title: "Buscam Profundidade",
                                desc: "Você sente que está apenas 'repassando receitas' de canetas sem entender a bioenergética profunda por trás delas."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-3"
                            >
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-2 h-8 bg-blue-600 rounded-full block" />
                                    {item.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed pl-4 border-l border-slate-200">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-slate-700 font-medium mb-8">
                            Se você se identifica com pelo menos uma dessas situações, este encontro é essencial para mudar sua realidade.
                        </p>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full">
                            Quero me inscrever agora
                        </Button>
                    </div>
                </div>
            </section>

            {/* 3. O QUE VOCÊ VAI DOMINAR (LISTA) */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        O que você vai dominar:
                    </h2>

                    <div className="space-y-6">
                        {[
                            "Mecanismos farmacológicos avançados e bioenergética celular.",
                            "Estratégias para contornar o efeito platô e otimizar resultados.",
                            "Manejo de efeitos adversos e preservação de massa magra.",
                            "Desenvolvimento de protocolos de desmame para evitar o efeito rebote.",
                            "Diferenciação profissional através do conhecimento científico profundo."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <p className="text-lg text-slate-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full w-full md:w-auto">
                            Quero me inscrever agora
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. MENTOR SECTION */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4" />
                            <img
                                src={mentorPhoto}
                                alt="Dr. Adilson Kleber Ferreira"
                                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto z-10"
                            />
                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Com quem você vai aprender a <br /> Farmacologia de verdade.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                <strong>Dr. Adilson Kleber Ferreira</strong> é farmacêutico-bioquímico, Doutor pela FMUSP e Acadêmico Titular da Academia Nacional de Farmácia (Cadeira nº 105).
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Com pós-doutorado na Holanda e vasta experiência em pesquisa de drug discovery e metabolismo celular no ICB-USP, ele traduz a ciência complexa em prática clínica racional.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Seu método foge de modismos e simplificações, entregando a base fisiopatológica necessária para decisões terapêuticas de elite.
                            </p>

                            <div className="pt-6">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full">
                                    Quero me inscrever agora
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Farmacologia da Obesidade Moderna. Todos os direitos reservados.
                </p>
            </footer>
        </div>
    );
}
