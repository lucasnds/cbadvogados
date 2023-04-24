<template>
 <main>
  <div class="foto-banner-areadeatuacao">
   <h1>ÁREAS DE ATUAÇÃO</h1>
 </div>

 <section class="areas">
  <div class="total" v-for="(item, index) in direitos" :key="index">
   <div class="areas__image" :id="item.photo"></div>
   <div class="areas__text" >
    <p class="areas__text__title">{{item.name}}</p>
    <span @click="item.state = !item.state" v-if="!item.state">Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
    <span @click="item.state = !item.state" v-else>Mostrar Menos <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
    <p class="areas__text__description" v-if="item.state" v-html="item.description"></p>
   </div>
  </div>
 </section>
 </main>
</template>

<script>
export default {
  data(){
            return{
            direitos: [{
                      photo: "consumidor",
                      name: "Consumidor",
                      state: false,
                      description: "Assessoria na elaboração de manuais operacionais e redação de contratos, bem como na preparação de material de divulgação em campanhas publicitárias de bens e serviços destinados ao consumo. Consultoria em questões específicas levadas ao conhecimento dos órgãos encarregados da proteção ao consumidor (PROCON), representação e acompanhamento de processos administrativos e judiciais que envolvam reclamação e pedido de indenização de consumidores etc."
                  },
                  {
                      photo: "trabalho",
                      name: "Trabalho e Proviência Social",
                      state: false,
                      description: "Assessoria jurídica na área de recursos humanos, elaboração e análise de regulamentos internos de empresas, contratos de trabalho, prestação de serviços, planos de participação nos lucros/resultados, Programas de Prevenção de Riscos Ambientais-PPRA e de Controle Médico e Saúde Ocupacional-PCMSO, Comissão Interna de Prevenção de Acidentes-CIPA, planos de demissão voluntária e de compensação etc.;<br><br> representação em processos judiciais e administrativos; representação de sociedades e entidades sindicais em convenções, acordos e dissídios coletivos e na negociação de contratos coletivos de trabalho, consultoria e auditorias (due diligence), dentre outros."
                  },
                  {
                      photo: "imobiliario",
                      name: "Imobiliário",
                      state: false,
                      description: "Assessoria na realização dos mais variados negócios imobiliários, a exemplo de permutas, dação em pagamento, constituição de hipotecas, locações e formação de joint ventures para atuar no segmento imobiliário etc.<br><br>; estruturação de operações de securitização de recebíveis imobiliários, debêntures imobiliárias efundos de investimento imobiliário; assistência na constituição de shopping centers, hotéis, hospitais, parques temáticos, condomínios, loteamentos, cooperativas habitacionais etc."
                  },
                  {
                      photo: "ambiental",
                      name: "Ambiental",
                      state: false,
                      description: "Assessoria em assuntos jurídicos de natureza ambiental, consultoria legal as partes no que tange a aspectos ambientais de aquisições ou fusões, projetos de financiamento, privatizações, financiamentos; verificação da conformidade ambiental de empresas nos processos de auditoria jurídica (due diligence) e interface com as autoridades reguladoras competentes; negociação para celebração de Termo de Ajustamento de Conduta (TAC) e outras soluções alternativas de conflitos com o Ministério Público Federal e/ou Estadual e Agências Ambientais; assistência jurídica em estudos de impacto ambiental, planos de remediação e de relatórios ambientais. Defesa administrativa e judicial em matérias e questões ambientais; elaboração de estudos e pareceres sobre Direito Ambiental etc."
                  },
                  {
                      photo: "administrativo",
                      name: "Administrativo",
                      state: false,
                      description: "Assessoria jurídica e legislativa permanente e contínua a órgãos e entidades públicos, tais como prefeituras, câmaras de vereadores e autarquias municipais, assessoria e consultoria pessoal a agentes públicos, políticos e administrativos (prefeitos, secretários municipais, vereadores e servidores públicos), assessoria e consultoria jurídica a empresas ou entidades privadas licitantes, contratantes ou conveniadas com a Administração Pública; organização de documentos para habilitação em licitações; Impugnação administrativa a editais de licitação e formalização de recursos administrativos; proposição de processos judiciais (mandados de segurança, cautelares e ações ordinárias); qualificação de entidade como de interesse público (Obtenção de certificado de OSCIP); defesa em ações de improbidade administrativa."
                  },
                  {
                      photo: "notorial",
                      name: "Notorial e Registral",
                      state: false,
                      description: "Assistência em escrituras públicas de venda, compra, compromissos, cessões, doações, dação em pagamento, constituição de ônus e gravames; assessoria em alienação fiduciária de imóveis, retificações de registros e de áreas. Orientação a respeito de cancelamentos de registros públicos imobiliários, divisões amigáveis e judiciais; consultoria em leilões, incorporações, fusões, desmembramentos e loteamentos de imóveis; atuação judicial e administrativa em questões relativas à Lei de Registros Públicos bem como a serviços notariais e registrais etc."
                  },
                  {
                      photo: "tecnologia",
                      name: "Internet, Comércio Eletrônico e Tecnologia",
                      state: false,
                      description: "Estruturação jurídica de sociedades destinadas a operar na Internet, acordos de acionistas e assistência em todas as suas questões legais e operacionais em geral, assessoria na constituição e transformação de sociedades (Start-ups), bem como em aquisições e fusões, dentre outros, e assuntos ligados às suas operações; orientação e assistência na estruturação de serviços e elaboração de seus respectivos termos e condições de uso; elaboração, análise e negociação de contratos relativos à aquisição/cessão, licença e/ou exploração de direitos autorais, software, know-how, marcas, patentes e demais direitos de propriedade intelectual, bem como registro de tais instrumentos junto ao Instituto Nacional da Propriedade Industrial – INPI, dentre outros."
                  }]
              
            }
          }
}
</script>

<style lang="scss" >
main {
 max-width:1024px;
 margin:0 auto;
 

 .foto-banner-areadeatuacao{
  background-image: url(@/assets/areadeatuacao.svg);
  background-size:cover;
  height:600px;
  
   }
 h1{
  color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:42px;
  width:100%;
  height:100%;
 }
 }
 .areas{
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__image{
   width: 282px;
   height: 176.25px;
   background-size: cover;
   border-radius: 10px 10px 0px 0px;
  }
  &__text{
   min-height: 80px;
   border-radius: 0px 0px 10px 10px;
   background-color: #fff;
   width: 282px;
   display: flex;
   position: relative;
   flex-direction: column;
   padding: 20px;

   &__title{
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
   }
   &__description{
    font-weight: 400 !important;
    padding:  30px 0px;
    font-size: 1rem;
   }
  }
  & span{
   position: absolute;
   bottom: 5px;
   right:10px;
   font-size: 12px;
   cursor: pointer;
  }
 }

 #consumidor{
  background-image: url(@/assets/consumidor.svg);
 }
 #trabalho{
  background-image: url(@/assets/trabalho.svg);
 }
 #imobiliario{
  background-image: url(@/assets/imobiliario.svg);
 }
 #ambiental{
  background-image: url(@/assets/ambiental.svg);
 }
 #administrativo{
  background-image: url(@/assets/administrativo.svg);
 }
 #notorial{
  background-image: url(@/assets/notorial.svg);
 }
 #tecnologia{
  background-image: url(@/assets/tecnologia.svg);
 }
 .total{
  padding: 15px 25px;
 }
 @media (max-width: 860px) {
  .foto-banner-areadeatuacao{
    height:400px !important;
     }
 }
 @media (max-width: 430px) {
  main h1{
    font-size: 32px !important;
     }
 }
</style>