import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  Stethoscope, 
  Pill, 
  Utensils, 
  Microscope, 
  Brain, 
  GraduationCap, 
  Activity, 
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  PlayCircle,
  Clock,
  Infinity
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@assets/generated_images/abstract_scientific_background_with_blue_and_purple_gradients.png";
import mentorPhoto from "@assets/generated_images/professional_headshot_of_a_male_doctor.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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

export default function LandingPage() {
  const scrollToCheckout = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Fundo científico abstrato" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-purple-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold tracking-wide backdrop-blur-sm">
              CURSO ONLINE EXCLUSIVO
            </motion.span>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
              Farmacologia da <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Obesidade Moderna
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
              GLP-1, GIP, apneia e a nova fronteira do tratamento metabólico
            </motion.p>

            <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-2xl mx-auto shadow-xl">
              <p className="text-lg md:text-xl font-medium text-white/90">
                "Uma aula para profissionais da saúde que já conhecem GLP-1 e tirzepatida, mas ainda não entenderam por que a resposta clínica falha em tantos casos."
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-4">
              <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-8 rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all hover:scale-105"
              >
                Acessar o Curso por R$ 67
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
        >
          <ArrowRight className="h-6 w-6 rotate-90" />
        </motion.div>
      </section>

      {/* 2. QUEBRA DE PARADIGMA */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-heading">
              Por que a farmacologia sozinha <br />
              <span className="text-blue-600">não explica tudo?</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Por que alguns pacientes respondem muito bem e outros não?",
              "Por que o reganho de peso é tão frequente?",
              "Por que aumentar a dose nem sempre resolve?",
              "Por que novas moléculas mais potentes ainda encontram limites?"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-xl">?</div>
                <p className="text-lg font-medium text-slate-800 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-6">
              <p className="text-2xl md:text-3xl font-semibold">
                <span className="text-blue-400 mr-2">👉</span> O problema não é falta de fármaco.
              </p>
              <p className="text-2xl md:text-3xl font-semibold">
                <span className="text-blue-400 mr-2">👉</span> O problema não é falta de entendimento do fenômeno biológico.
              </p>
              <p className="text-lg text-slate-300 mt-8 font-light">
                Este conteúdo foi criado para corrigir esse raciocínio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. O QUE ESTE PRODUTO É (E NÃO É) */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* NÃO É */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-red-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <X className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Não é:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Um curso operacional sobre canetas",
                  "Um treinamento de prescrição passo a passo",
                  "Um compilado de bulas comentadas",
                  "Um produto focado em estética ou emagrecimento rápido"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* É */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-emerald-100 shadow-lg ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">É:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Uma base conceitual sólida sobre obesidade como doença metabólica moderna",
                  "Uma leitura farmacológica integrada (SNC, inflamação, metabolismo)",
                  "Um guia para entender por que a farmacologia funciona — e por que falha",
                  "Um ponto de partida obrigatório antes de qualquer aplicação prática avançada"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Este conteúdo foi desenvolvido para:
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, label: "Médicos" },
              { icon: Pill, label: "Farmacêuticos" },
              { icon: Utensils, label: "Nutricionistas" },
              { icon: Microscope, label: "Biomédicos" },
              { icon: ShieldCheck, label: "Odontologistas" },
              { icon: GraduationCap, label: "Estudantes de Graduação" },
              { icon: Activity, label: "Profissionais da Saúde" },
              { icon: Brain, label: "Quem busca Entendimento" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-slate-400 group-hover:text-blue-600 mb-4 transition-colors" />
                <span className="font-semibold text-slate-700 group-hover:text-blue-900 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI APRENDER */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
              Ao acessar este conteúdo, <br />
              <span className="text-blue-400">você vai compreender:</span>
            </h2>

            <div className="space-y-6">
              {[
                "Obesidade como doença adaptativa, inflamatória e neuroendócrina",
                "O papel real do SNC, da recompensa alimentar e do food noise",
                "Como GLP-1 atua além do estômago",
                "Por que o GIP foi subestimado — e quais são seus limites",
                "Por que a tirzepatida é mais potente, mas não infalível",
                "A relação entre obesidade, inflamação e apneia do sono",
                "O que explica biologicamente o reganho de peso",
                "O impacto da perda de massa magra no fracasso terapêutico",
                "Para onde caminha a farmacologia com os agonistas triplos"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="bg-blue-500/20 p-2 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-lg text-slate-100 font-light">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center text-slate-400 italic border-t border-white/10 pt-8">
              "Tudo isso sem transformar o conteúdo em bula ou aula técnica fragmentada."
            </div>
          </div>
        </div>
      </section>

      {/* 6. MÓDULOS DO CURSO */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">Estrutura do Conteúdo</h2>
            <p className="text-xl text-slate-500">Módulos organizados com raciocínio progressivo</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                title: "Obesidade como doença adaptativa, inflamatória e neuroendócrina",
                content: ["Set point metabólico", "Inflamação crônica de baixo grau", "Adipócito como célula imunometabólica", "Relação obesidade ↔ resistência leptínica"]
              },
              {
                title: "SNC, comportamento alimentar e imunoneuromodulação",
                content: ["Hipotálamo, tronco encefálico, nervo vago", "Dopamina, recompensa alimentar", "Neuroinflamação hipotalâmica", "Food noise como fenômeno neurobiológico"]
              },
              {
                title: "Classes farmacológicas no tratamento da obesidade",
                content: ["Agonistas de GLP-1", "Agonistas duais GLP-1/GIP", "Combinações farmacológicas", "O que muda entre classe ≠ molécula"]
              },
              {
                title: "GLP-1 em profundidade: metabolismo, SNC e inflamação",
                content: ["Ação periférica e central", "Efeitos anti-inflamatórios", "Impacto cardiovascular, renal e metabólico", "GLP-1 como modulador sistêmico"]
              },
              {
                title: "GIP, tirzepatida e os limites moleculares da terapia",
                content: ["Sinergia GLP-1/GIP", "Por que a tirzepatida funciona mais", "Limites adaptativos", "Downregulation e tolerância funcional"]
              },
              {
                title: "Apneia do sono como fenótipo imunometabólico",
                content: ["Relação bidirecional: Apneia ↔ inflamação", "Apneia ↔ resistência insulínica", "Por que GLP-1/GIP melhoram apneia indiretamente"]
              },
              {
                title: "Massa magra, metabolismo e adaptação",
                content: ["Perda de massa magra", "Inflamação e resistência anabólica", "Sarcopenia metabólica", "Risco do emagrecimento rápido"]
              },
              {
                title: "Reganho de peso como resposta biológica previsível",
                content: ["Defesa do set point", "Reversão de marcadores metabólicos e inflamatórios", "Por que o corpo 'lembra' do peso"]
              },
              {
                title: "A nova fronteira: agonistas triplos e o futuro do tratamento",
                content: ["Agonistas GLP-1/GIP/Glucagon", "O que eles prometem resolver", "Limites biológicos mesmo com triplos agonistas"]
              },
              {
                title: "Prescrição ética e estratégica baseada em fenótipo",
                content: ["Para quem prescrever", "Para quem NÃO prescrever", "Quando manter", "Quando interromper"]
              }
            ].map((module, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 border-slate-200 bg-slate-50/50 data-[state=open]:bg-blue-50/30 data-[state=open]:border-blue-200 transition-colors">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-start text-left gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold text-sm mt-0.5 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-lg font-semibold text-slate-800 group-data-[state=open]:text-blue-900">
                      {module.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-16">
                  <ul className="grid md:grid-cols-2 gap-2">
                    {module.content.map((c, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
             <Button 
                onClick={scrollToCheckout}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                Quero acessar o conteúdo completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
          </div>
        </div>
      </section>

      {/* 7. MENTOR SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              
              {/* Image Column */}
              <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
                <div className="relative w-full max-w-[300px] aspect-square rounded-2xl overflow-hidden mb-6 shadow-2xl">
                  <img 
                    src={mentorPhoto} 
                    alt="Dr. Kleber Ferreira" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-60" />
                </div>
                
                <div className="space-y-2 w-full">
                   <div className="bg-slate-100 rounded-lg p-3 text-center">
                      <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Empresário</span>
                      <span className="font-bold text-slate-800">Alchemypet & BioMedDNA</span>
                   </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-8 lg:col-span-9 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Conheça seu mentor</h3>
                  <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6">Dr. Kleber Ferreira</h2>
                  <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <div className="prose prose-lg text-slate-600 space-y-6">
                  <p>
                    <span className="font-semibold text-slate-900">Comecei do zero.</span> Depois de quase 18 anos construindo negócios, minhas empresas faturam mais de <span className="text-blue-700 font-bold bg-blue-50 px-1 rounded">R$ 200 milhões</span> em valor gerado para clientes e para mim. Não foi por sorte. Foi por método. Implementação. E ciência aplicada de verdade.
                  </p>
                  
                  <p>
                    Não sou apenas um "professor de internet". Sou um profissional de campo, de laboratório e de mesa de reunião.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-8">
                    {[
                      "Farmacêutico-Bioquímico (USP)",
                      "Mestre em Fármacos e Medicamentos (USP)",
                      "Reconhecido pelo DNA USP",
                      "Acadêmico titular da Academia Nacional de Farmácia"
                    ].map((cred, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
                        <span className="text-sm font-medium text-slate-800">{cred}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg transform md:-ml-4 border-l-4 border-purple-400">
                    <p className="font-medium text-lg mb-4 opacity-90">Mas aqui está o que importa:</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <span className="block text-3xl font-bold text-blue-200">R$ 200 Mi+</span>
                        <span className="text-sm text-blue-100">Valor estruturado para clientes</span>
                      </div>
                      <div>
                        <span className="block text-3xl font-bold text-purple-300">R$ 80 Mi+</span>
                        <span className="text-sm text-blue-100">Faturamento acumulado das empresas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. PREÇO / INVESTIMENTO */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />

         <div className="container px-4 md:px-6 relative z-10 text-center">
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-100">
               <div className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Conteúdo gravado</span>
               </div>
               <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Acesso imediato</span>
               </div>
               <div className="flex items-center gap-2">
                  <Infinity className="w-5 h-5" />
                  <span>Acesso contínuo</span>
               </div>
            </div>

            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white text-slate-900 max-w-lg mx-auto rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  OFERTA ESPECIAL
               </div>

               <h3 className="text-lg text-slate-500 font-medium mb-2 uppercase tracking-wide">Investimento Único</h3>
               <div className="flex items-center justify-center gap-2 mb-2">
                 <span className="text-slate-400 text-xl line-through">R$ 297</span>
               </div>
               <div className="flex items-center justify-center text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter mb-8 font-heading">
                  <span className="text-2xl md:text-4xl align-top mt-4 mr-1">R$</span>
                  67
               </div>

               <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl h-16 rounded-xl shadow-xl transition-all hover:scale-[1.02]">
                  Acessar Agora
                  <ArrowRight className="ml-2 w-6 h-6" />
               </Button>
               
               <p className="mt-4 text-slate-400 text-sm flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
               </p>
            </motion.div>
         </div>
      </section>

      {/* 9. GARANTIA */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 border-dashed">
               <div className="shrink-0">
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
                     <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
               </div>
               <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">7 Dias de Garantia Incondicional</h3>
                  <p className="text-slate-600">
                     Se este conteúdo não elevar seu entendimento sobre a farmacologia da obesidade, o valor é devolvido integralmente. Sem perguntas.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 10. CTA FINAL & FOOTER */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">Pronto para dominar a nova fronteira?</h2>
            
            <Button size="lg" onClick={scrollToCheckout} className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-10 py-8 rounded-full shadow-lg transition-transform hover:scale-105 mb-4">
               Acessar Farmacologia da Obesidade Moderna
               <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="text-slate-400 text-sm">
               Dr. Kleber Ferreira © {new Date().getFullYear()} • Todos os direitos reservados.
            </p>
         </div>
      </section>

    </div>
  );
}
