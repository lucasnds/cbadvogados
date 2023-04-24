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
                  }]
              
            }
          }
}
</script>

<style lang="scss" scoped>
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
  align-items: center;
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

   &__title{
    font-size: 1.1rem;
    margin-left: 20px;
    margin-top: 20px;
    font-weight: 500;
    text-align: left;
   }
   &__description{
    font-weight: 400 !important;
    padding: 15px 15px 30px 15px;
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

 .total{
  padding: 15px 25px;
 }
 @media (max-width: 860px) {
  .foto-banner-areadeatuacao{
    height:400px !important;
     }
 }
</style>