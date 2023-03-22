<template>
  <nav class="nav-mobile" v-if="this.isClosed">
    <font-awesome-icon class="close" @click="Closed()" icon="fa-solid fa-xmark" />
    <ul>
      <li>
        <router-link class="router-link" to="/">HOME</router-link>
      </li>
      <li>
        <router-link class="router-link" to="/sobrenos">SOBRE NÓS</router-link>
      </li>
      <li>
        <router-link class="router-link" to="/areadeatuacao">ÁREAS DE ATUAÇÃO</router-link>
      </li>
      <li>
        <router-link class="router-link" to="/politicadeprivacidade">POLÍTICA DE PRIVACIDADE</router-link>
      </li>
      <hr width="95%" size="1px" align="center">
      <li id="contato">
        <router-link class="router-link" id="contato__link" to="/contato">CONTATO</router-link>
      </li>
    </ul>
  </nav>
</template>
<!--  -->
<script>
export default {
  data(){
    return{
      isClosed:true
    }
  },
  methods:{
    Closed(){
      this.isClosed = !this.isClosed
      console.log(`${this.isClosed} x`)
    }
  }
}
</script>

<style lang="scss">
.close{
  font-size:2.5rem;
  color:#fff;
  position: absolute;
  right: 15px;
  top:15px;
}
//.none{
  //display:none;
//}
.nav-mobile{
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  width:95%;
  border-radius: 10px;
  background-color: #1C1C1C;
  padding-bottom: 20px;
  max-width: 500px;
 
  @media(min-width:515px) and (max-width:839px){
    right: 10px;
    transform:unset;
    left:unset;
  }
  @media(min-width:840px){
    display:none;
  }
ul{ 
  text-align:left;
  justify-content: center;
}
li{
  list-style: none;
  padding: 30px;
  letter-spacing: 0.02em;
  font: {
    size:1rem;
    weight: 400;
    
  }
  .router-link{
    text-decoration:none;
    color:#fff;
    transition: .5s;
      &:hover,&:focus{
        border-bottom: 1.8px #fff solid;
      }
    }
    
  }
  hr{
    border: 1px #fff solid;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

#contato{
  background-color:#fff!important;
  border-radius: 100px!important;
  margin: 0 auto!important;
  padding: 15px !important;
  width: 35%;

  #contato__link{
    display:flex;
    justify-content: center;
    color: #1C1C1C!important;
  }
}

</style>