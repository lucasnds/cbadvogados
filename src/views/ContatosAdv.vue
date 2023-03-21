<template>
 <section class="section-banner-contato">
  <h2>CONTATO</h2>
 </section>
 <div class="fundo-section-contato"></div>
 <section class="form-contato">
  <div class="div-form">
   <h3>Dúvidas? Fale com nossa equipe:</h3>
   <form action="">
   <label for="">Nome:</label>
   <input type="text" placeholder="Digite seu nome">
   <br>
   <label for="">E-mail:</label>
   <input type="email"
   name="email"
   validation="email" 
   placeholder="Digite seu e-mail"
   required
   >
   <br>
   <label for="">Mensagem</label>
   <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
   <button type="submit">Enviar</button>
  </form>
  </div>
 </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section-banner-contato{
 width:100%;
 height:210px;
 //background-image: linear-gradient(130deg,#161616 25%,#4f4f4f 100%)!important;
 
 h2{
  display:flex;
  align-items: center;
  height: 100%;
  color:#fff;
  max-width: 1024px;
  margin:0 auto;
  padding-left:15px;
   font: {
   size:40px;
  }

 }
}
.fundo-section-contato{
 background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzdnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjYTVhNWE1Ij48cGF0aCBkPSJNMTI4MCAwbC0yNjYgOTEuNTJhNzIuNTkgNzIuNTkgMCAwIDEtMzAuNzYgMy43MUwwIDB2MTQwaDEyODB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTEyODAgMGwtMjYyLjEgMTE2LjI2YTczLjI5IDczLjI5IDAgMCAxLTM5LjA5IDZMMCAwdjE0MGgxMjgweiIvPjwvZz48L3N2Zz4=);
    background-size: 100% 3vw;
    height: 3vw;
    transform: scale(-1,1);
}
.div-form{
 max-width:1024px;
 margin: 0 auto;
}
.form-contato{
 background: #a5a5a5;
 padding-bottom:50px;
 h3{
  text-align: center;
  color: #333;
  padding:50px 0px 20px 0px;
  font: {
   size:26px;
   weight:700;
  }
 }
}


label{
 color: #333;
}
input{
 margin-bottom:3%;

}
input,textarea{
 background-color: #eee;
    width: 100%;
    border-width: 0;
    border-radius: 0;
    color: #000;
    font-size: 14px;
    padding: 16px;
    outline:0;
    &:focus{
        outline:2px rgb(34, 34, 167) solid; 
        border-radius:5px;
    }
}

button {
 color: #ffffff!important;
 letter-spacing: 4px;
 font-weight: 700!important;
 text-transform: uppercase!important;
 background-color: #0C0E29!important;
 font-size:20px;
 border:0;
 padding:10px;
 cursor:pointer;
 display:flex;
 margin-left: auto; 
}
 button:hover {
  background-color: #ffffff;
  color: #0C0E29;
 }
 @media (max-width: 1024px) {
  form{
   width:95%;
   margin:3% auto;
  }
 }
</style>