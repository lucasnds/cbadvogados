<template>
 <main>
  <section class="politica">
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">POLÍTICA DE PRIVACIDADE</h5>
    <p class="tituloTexto__texto">Esta política de privacidade descreve como este site coleta, usa e protege as informações dos usuários. </p>
   </div>
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">INFORMAÇÕES COLETADAS</h5>
    <p class="tituloTexto__texto">Este site pode coletar informações não pessoais, como informações sobre o seu dispositivo, endereço IP, tipo de navegador e sistema operacional. Essas informações são coletadas automaticamente pelo servidor do site.</p>
   </div>
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">USO DAS INFORMAÇÕES</h5>
    <p class="tituloTexto__texto">As informações coletadas são utilizadas para melhorar a experiência do usuário no site, bem como para entender como os usuários estão interagindo com o conteúdo do site. Essas informações não serão vendidas, compartilhadas ou divulgadas para terceiros sem o seu consentimento explícito.</p>
   </div>
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">COOKIES</h5>
    <p class="tituloTexto__texto">Este site pode utilizar cookies para armazenar informações sobre as preferências dos usuários e melhorar a experiência do usuário no site. Esses cookies não contêm informações pessoais identificáveis e podem ser desativados a qualquer momento nas configurações do seu navegador.</p>
   </div>
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</h5>
    <p class="tituloTexto__texto">Podemos alterar esta política de privacidade de tempos em tempos. Se fizermos alterações significativas, notificaremos os usuários por meio de um aviso em destaque no site.</p>
   </div>
   <div class="tituloTexto">
    <h5 class="tituloTexto__titulo">CONTATO</h5>
    <p class="tituloTexto__texto">Se você tiver dúvidas ou preocupações sobre esta política de privacidade ou o tratamento de suas informações, entre em contato conosco pelo e-mail [endereço de e-mail] ou pelo whatsapp [número do whatsapp].</p>
   </div>
  </section>
 </main>
</template>

<style lang="scss">
main{
 width: 100%;
}
.politica{
 max-width: 1024px;
 margin: 120px auto 15px auto;
 color: #fff;

 .tituloTexto{
  width:90%;
  margin: 0 auto;
  
  .tituloTexto__titulo{
   font-size: 1rem;
   font-weight: 500;
   //margin-right: auto;
  }
  .tituloTexto__texto{
   font-size: 0.75rem;
   font-weight: 400;
   padding: 15px 0px 50px 0px;
  }
 }
}
</style>