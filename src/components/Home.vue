<template>
  <section class="home-page" id="home-page">
    <div class="home-content">
      <h3>CASA PERÚ IS WAITING FOR YOU TO EXPERIENCE THE BEST OF PERUVIAN CUISINE</h3>
      <p>Since 2016 Casa Perú Restaurant is one of the most popular peruvian cuisine restaurants in the Salt Lake City area, our goal is to make our customers feel at home and deliver the best experience possible.</p>
      <a href="https://www.clover.com/online-ordering/casa-peru-west-valley-city" target="_blank"><button class="order-btn">ORDER NOW</button></a>
      <a href="/menu"><button class="menu-btn">VIEW MENU</button></a>
    </div>

    <div class="hero-image">
      <img :src="mainImageSrc">
    </div>

  </section>
</template>

<script>
export default {
  name: 'Home',
  data (){
    return{
      images: [],
      mainImageSrc: null
    }
  },
  methods: {

  },
  created (){
    let self = this
    this.images = [
      
      {
        image: 'images/main-images/ceviche-de-pescado.png'
      },
      {
        image: 'images/main-images/lomo-saltado-mixto.png'
      },
      {
        image: 'images/main-images/parrillada-de-la-casa.png'
      }
    ],
    setInterval(function(){
      console.log("function called");
      self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  section{
    min-height: 100vh;
    padding: 16px 10%;
    padding-top: 136px;
    background: lightgray;
  }

  .home-page{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    overflow: hidden;
  }

  .home-page .hero-image{
    flex: 1 1 624px;
  }

  .home-page .hero-image img{
    width: 120%;
  }

  .home-page .home-content{
    flex: 1 1 624px;
  }

  .home-page .home-content h3{
    color: #333;
    font-size: 64px;
  }

  .home-page .home-content p{
    color: #666;
    font-size: 16px;
    padding: 16px 0;
  }

  .order-btn{
    font-size: 27.2px;
    padding: 11.2px 64px;
    border-radius: 80px;
    margin-top: 16px;
    background: red;
    cursor: pointer;
    border: 3.2px solid white;
    color: white;
  }

  .order-btn:hover{
    background: black;
    color: white;
  }

  .menu-btn{
    font-size: 27.2px;
    padding: 11.2px 64px;
    border-radius: 80px;
    margin-top: 16px;
    margin-left: 10px;
    background: red;
    cursor: pointer;
    border: 3.2px solid white;
    color: white;
  }

  .menu-btn:hover{
    background: black;
    color: white;
  }

  .home-page::before,
  .home-page::after{
    content: '';
    position: absolute;
    top: 80px;
    right: -96px;
    background: black;
    border-radius: 48px;
    transform: rotate(-45deg);
    height: 640px;
    width: 1120px;
    z-index: -2;
    animation: animate 1s linear 1;
  }

  @media (max-width: 1581px){
    section{
      background: red;
    }

    .home-page .home-content h3{
      margin-top: 5rem;
      color: white;
      font-size: 4rem;
    }

    .home-page .home-content p{
      color: #FFFFFF;
      font-size: 1rem;
      padding: 1rem 0;
    }

    .order-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 1rem;
      background: none;
      cursor: pointer;
      border: .2rem solid white;
      color: white;
    }

    .order-btn:hover{
      background: white;
      color: red;
    }

    .menu-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 1rem;
      background: none;
      cursor: pointer;
      border: .2rem solid white;
      color: white;
    }

    .menu-btn:hover{
      background: white;
      color: red;
    }

    .home-page .hero-image img{
      width: 100%;
    }
    
  }

  @media (max-width: 754px){
    .home-page::before,
    .home-page::after{
      content: '';
      position: absolute;
      top: 80px;
      right: -96px;
      background: black;
      border-radius: 48px;
      transform: rotate(-45deg);
      height: 640px;
      width: 1120px;
      z-index: -2;
      animation: animate 1s linear 1;
    }

    .home-page .home-content{
      text-align: center;
    }

    .home-page .home-content h3{
      margin-top: -4rem;
    }

    .home-page .home-content p{
      padding: 3rem 0;
    }

    .order-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 2rem;
      background: lightgray;
      cursor: pointer;
      border: .2rem solid white;
      color: black;
    }

    .order-btn:hover{
      background: white;
      color: red;
    }

    .menu-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 2rem;
      background: lightgray;
      cursor: pointer;
      border: .2rem solid white;
      color: black;
    }

    .menu-btn:hover{
      background: white;
      color: red;
    }
  }
  @media (max-width: 404px){
    .menu-btn{
      display: block;
      margin: auto;
      margin-top: 10px;
    }
  }

  @media (max-width: 375px){
    .home-page .home-content h3{
      font-size: 3.3rem;
      padding-top: 11px;
    }
  }

  @media (max-width: 360px){
    .home-page .home-content h3{
      font-size: 3.1rem;
    }
  }

  @media (max-width: 320px){
    .home-page .home-content h3{
      font-size: 2.9rem;
      padding-top: 9px;
    }
  }

</style>
