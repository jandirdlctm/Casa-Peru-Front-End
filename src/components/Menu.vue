<template lang="html">
  <section>
    <div class="container-menu">
      <div class="menu-heading">
        <h4><span></span> our menu</h4>
      </div>
      <div class="buttons-wrapper">
        <button @click="chickenClicked" class="menu-btn" type="button" name="button">CHICKEN</button>
        <button @click="meatsClicked" class="menu-btn" type="button" name="button">MEATS</button>
        <button @click="seafoodsClicked" class="menu-btn" type="button" name="button">SEAFOOD</button>
        <button @click="appetizersClicked" class="menu-btn" type="button" name="button">APPETIZERS</button>
        <button @click="soupsClicked" class="menu-btn" type="button" name="button">SOUPS</button>
      </div>
        <div v-if="showChicken" class="wrapper-menu">
          <div  v-for="food in chicken" v-bind:key="food"  class="menu-item">
            <img :src="food.image">
            <div class="body-menu">
              <h4>{{food.title}} <span> {{food.price}}</span></h4>
              <p>{{food.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="showMeats" class="wrapper-menu">
          <div  v-for="food in meats" v-bind:key="food"  class="menu-item">
            <img :src="food.image">
            <div class="body-menu">
              <h4>{{food.title}} <span> {{food.price}}</span></h4>
              <p>{{food.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="showSeafoods" class="wrapper-menu">
          <div  v-for="food in seafoods" v-bind:key="food"  class="menu-item">
            <img :src="food.image">
            <div class="body-menu">
              <h4>{{food.title}} <span> {{food.price}}</span></h4>
              <p>{{food.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="showAppetizers" class="wrapper-menu">
          <div  v-for="food in appetizers" v-bind:key="food"  class="menu-item">
            <img :src="food.image">
            <div class="body-menu">
              <h4>{{food.title}} <span> {{food.price}}</span></h4>
              <p>{{food.description}}</p>
            </div>
          </div>
        </div>
        <div v-if="showSoups" class="wrapper-menu">
          <div  v-for="food in soups" v-bind:key="food"  class="menu-item">
            <img :src="food.image">
            <div class="body-menu">
              <h4>{{food.title}} <span> {{food.price}}</span></h4>
              <p>{{food.description}}</p>
            </div>
          </div>
        </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
      showChicken: true,
      showMeats: false,
      showSeafoods : false,
      showAppetizers : false,
      showSoups : false,
      chicken: [
        {
          image: 'images/menu/chicken/chaufa-de-pollo/IMG_6404.JPG',
          title: 'Chaufa De Pollo',
          price: '$10.85',
          description: 'Fried rice with chicken, bell peppers & eggs'
        },
        {
          image: 'images/menu/chicken/chaufa-mixto/IMG_6450.JPG',
          title: 'Chaufa Mixto',
          price: '$11.99',
          description: 'Fried rice, beef & chicken bell pepper, eggs & green onions'
        },
        {
          image: 'images/menu/chicken/escabeche-de-pollo/IMG_6563.JPG',
          title: 'Escabeche De Pollo',
          price: '$10.25',
          description: 'Marinated chicken in spice & vinegarcooked with classic salsa escabeche onions and red peppers'
        },
        {
          image: 'images/menu/chicken/lomo-saltado-de-pollo/IMG_6585.JPG',
          title: 'Lomo Saltado De Pollo',
          price: '$10.25',
          description: 'Stir fried lean chicken with tomatoes onions & french fries served with rice'
        },
        {
          image: 'images/menu/chicken/milanesa-de-pollo/IMG_6647.JPG',
          title: 'Milanesa De Pollo',
          price: '$9.99',
          description: 'Delicious breaded chicken served with salad, rice & french fries.'
        },
        {
          image: 'images/menu/chicken/mostrito/IMG_6642.JPG',
          title: 'Mostrito',
          price: '$11.85',
          description: 'One 1/4 Rotisserie chicken with french fries, Salad and Fried rice'
        },
        {
          image: 'images/menu/chicken/pollo-a-la-plancha/IMG_6514.JPG',
          title: 'Pollo A La Plancha',
          price: '$9.85',
          description: 'Grilled chicken breast served with rice, salad & french fries.'
        },
        {
          image: 'images/menu/chicken/tallarin-a-la-huancaina/IMG_6525.JPG',
          title: 'Tallarin A La Huancaina',
          price: '$12.85',
          description: 'Grilled steak or chicken on top of spaghetti with creamy huancaina sauce'
        },
        {
          image: 'images/menu/chicken/tallarin-saltado-de-pollo/IMG_6471.JPG',
          title: 'Tallarin Saltado De Pollo',
          price: '$10.05',
          description: 'Pasta sauteed with chicken strip, garlic ginger, onions, tomatoes & peppers'
        },
        {
          image: 'images/menu/chicken/pollo-a-la-brasa/IMG_6460.JPG',
          title: 'Pollo Entero',
          price: '$20.99',
          description: 'Whole rotisserie chicken served with fries & salad'
        },
        {
          image: 'images/menu/chicken/pollo-a-la-brasa/IMG_6460.JPG',
          title: '1/2 Pollo',
          price: '$12.49',
          description: '1/2 rotisserie chicken served with fries & salad'
        },
        {
          image: 'images/menu/chicken/one-fourth-pollo-a-la-brasa/IMG_6623.JPG',
          title: '1/4 Pollo',
          price: '$6.99',
          description: '1/4 rotisserie chicken served with fries & salad'
        }
    ],
    meats: [
      {
        image: 'images/menu/meats/aereopuerto/IMG_6481.JPG',
        title: 'Aereopuerto',
        price: '$11.85',
        description: 'Sauteed chicken with green onions, french fries with fried rice, noodles & eggs.'
      },
      {
        image: 'images/menu/meats/arroz-chaufa/IMG_6426.JPG',
        title: 'Arroz Chaufa',
        price: '$10.85',
        description: 'Fried rice with beef, bell pepper green onions & eggs.'
      },
      {
        image: 'images/menu/meats/bistek-a-lo-pobre/IMG_6494.JPG',
        title: 'Bistek A Lo Pobre',
        price: '$12.99',
        description: 'Grilled steak served with rice, french fries, fried egg & fried plantains.'
      },
      {
        image: 'images/menu/meats/chaufa-especial/IMG_6445.JPG',
        title: 'Chaufa Especial',
        price: '$13.85',
        description: 'Fried rice, chicken, beef, shrimp, bell pepper & green onions.'
      },
      {
        image: 'images/menu/meats/churrasco/IMG_6498.JPG',
        title: 'Churrasco',
        price: '$13.99',
        description: 'Peruvian style steak served with french fries, steamed rice.'
      },
      {
        image: 'images/menu/meats/lomo-saltado-mixto/IMG_6691.JPG',
        title: 'Lomo Saltado Mixto',
        price: '$11.99',
        description: 'Sauteed beef & chicken with tomatoe & onions over french fries with rice.'
      },
      {
        // image: 'images/menu/meats/parrillada-de-la-casa/IMG_6611.JPG',
        image: 'images/main-images/parrillada-de-la-casa.png',
        title: 'Parrillada De La Casa',
        price: '$25.85',
        description: 'Grilled beef, beef heart, chicken, sausage, shrimps and a 1/4 chicken served with rice, salad, & french fries.'
      },
      {
        image: 'images/menu/meats/seco-a-la-nortena/IMG_6673.JPG',
        title: 'Seco A La Norteña',
        price: '$11.85',
        description: 'Beef stew cooked with cilantro based red sauce, served with beans potato & steamed rice.'
      },
      {
        image: 'images/menu/meats/seco-de-res/IMG_6553.JPG',
        title: 'Seco De Res',
        price: '$10.85',
        description: 'Beef stew cooked with cilantro based red sauce, served with Peruvian beans potatoes & steamed rice.'
      },
      {
        image: 'images/menu/meats/tacutacu/IMG_6604.JPG',
        title: 'Tacutacu',
        price: '$13.95',
        description: 'Mixed beans and rice, sauteed beef with tomato & onions over french fries.'
      },
      {
        image: 'images/menu/meats/tallarin-saltado/IMG_6455.JPG',
        title: 'Tallarin Saltado',
        price: '$10.85',
        description: 'Spaghetti with sauteed beef strips, onions, tomato & bell peppers.'
      },
      {
        image: 'images/menu/meats/tallarin-saltado-mixto/IMG_6489.JPG',
        title: 'Tallarin Saltado Mixto',
        price: '$11.85',
        description: 'Pasta sauteed with chicken strip, and beef onions tomatoes & peppers.'
      }
    ],
    seafoods: [
      {
        image: 'images/menu/seafood/ceviche-mixto/IMG_6394.JPG',
        title: 'Ceviche Mixto',
        price: '$14.25',
        description: 'Fish & seafood in lime juice with onions, sweet potato and Peruvian corn.'
      },
      {
        image: 'images/menu/seafood/ceviche-pescado/IMG_6384.JPG',
        title: 'Ceviche',
        price: '$12.25',
        description: 'Fish cooked in lime juice, with onions, and sweet potato and Peruvian corn.'
      },
      {
        image: 'images/menu/seafood/chaufa-a-lo-macho/IMG_6685.JPG',
        title: 'Chaufa A Lo Macho',
        price: '$14.85',
        description: 'Fried rice with seafood and Seafood sauce.'
      },
      {
        image: 'images/menu/seafood/chaufa-de-mariscos/IMG_6414.JPG',
        title: 'Chaufa De Mariscos',
        price: '$13.85',
        description: 'Seafood fried rice with bell pepper green onions & eggs.'
      },
      {
        image: 'images/menu/seafood/chaufa-de-pescado/IMG_6638.JPG',
        title: 'Chaufa De Pescado',
        price: '$11.85',
        description: 'Fried rice with fish, bell pepper, green onions & eggs.'
      },
      {
        image: 'images/menu/seafood/chicharron-de-pescado/IMG_6409.JPG',
        title: 'Chicharron De Pescado',
        price: '$10.85',
        description: 'Deep fried fish with rice, served with fried yucca and red onions.'
      },
      {
        image: 'images/menu/seafood/escabeche-de-pescado/IMG_6592.JPG',
        title: 'Escabeche De Pescado',
        price: '$11.99',
        description: 'Fish sauteed with Peruvian sauce onions served with rice.'
      },
      {
        image: 'images/menu/seafood/jalea/IMG_6374.JPG',
        title: 'Jalea',
        price: '$13.99',
        description: 'Deep fried fish & seafood topped with sweet onions, salsa & yucca.'
      },
      {
        image: 'images/menu/seafood/leche-de-tigre/IMG_6518.JPG',
        title: 'Leche De Tigre',
        price: '$10.25',
        description: 'Fish cooked in lime juice, sweet potatoe, shrimp, onion, and Peruvian corn.'
      },
      {
        image: 'images/menu/seafood/pescado-a-lo-macho/IMG_6667.JPG',
        title: 'Pescado A Lo Macho',
        price: '$14.85',
        description: 'Fried fish topped with seafood sauce served with steamed rice.'
      },
      {
        image: 'images/menu/seafood/pescado-frito/IMG_6369.JPG',
        title: 'Pescado Frito',
        price: '$11.99',
        description: 'Fried fish served with rice, yucca & salsa.'
      },
      {
        image: 'images/menu/seafood/picante-de-mariscos/IMG_6661.JPG',
        title: 'Picante De Mariscos',
        price: '$14.25',
        description: 'Seafood with spicy sauce served with potatoes & steamed rice.'
      },
      {
        image: 'images/menu/seafood/sudado-de-pescado/IMG_6577.JPG',
        title: 'Sudado De Pescado',
        price: '$11.99',
        description: 'Steamed fish fillet with red onion, tomato peruvian sauce & rice.'
      }
    ],
    appetizers: [
      {
        image: 'images/menu/appetizers/anticuchos/IMG_6558.JPG',
        title: 'Anticuchos',
        price: '$8.99',
        description: 'Peruvian style kabobs beef heart served with deep fried potatoes & corn.'
      },
      {
        image: 'images/menu/appetizers/causa-rellena/IMG_6511.JPG',
        title: 'Causa Rellena',
        price: '$7.85',
        description: 'Peruvian dish, made of creamy mashed potatoes with chicken, tuna or shrimp.'
      },
      {
        image: 'images/menu/appetizers/choclo-con-queso/IMG_6477.JPG',
        title: 'Choclo Con Queso',
        price: '$4.99',
        description: 'Peruvian corn, served with slices of fresh cheese.'
      },
      {
        image: 'images/menu/appetizers/choros-a-la-chalaca/IMG_6399.JPG',
        title: 'Choros A La Chalaca',
        price: '$9.85',
        description: 'Fresh mussels served in the shell with sweet onions, tomato & lime.'
      },
      {
        image: 'images/menu/appetizers/papa-la-huancaina/IMG_6389.JPG',
        title: 'Papa A La Huancaina',
        price: '$6.55',
        description: 'Sliced potatoes with traditional Peruvian sauce made with yellow chillis.'
      },
      {
        image: 'images/menu/appetizers/papa-rellena/IMG_6530.JPG',
        title: 'Papa Rellena',
        price: '$5.99',
        description: 'Fried mashed potato stuffed with mixture of seasoned steak, eggs, raisins & olives.'
      },
      {
        image: 'images/menu/appetizers/salchipapas/IMG_6544.JPG',
        title: 'Salchipapas',
        price: '$4.99',
        description: 'Deep fried hot dogs sliced over fries.'
      },
      {
        image: 'images/menu/appetizers/yuca-frita/IMG_6484.JPG',
        title: 'Yuca Frita',
        price: '$6.85',
        description: 'Deep fried yuca served with traditional Peruvian sauce.'
      }
    ],
    soups: [
      {
        image: 'images/menu/soups/caldo-de-gallina/IMG_6597.JPG',
        title: 'Caldo De Gallina',
        price: '$10.99',
        description: 'Chicken soup with spaguetti noodles, vegetables & potatoes.'
      },
      {
        image: 'images/menu/soups/chupe-de-mariscos/IMG_6633.JPG',
        title: 'Chupe De Mariscos',
        price: '$13.55',
        description: 'Creamy shrimp soup mixed with rice Potatoes & vegetables.'
      },
      {
        image: 'images/menu/soups/chupe-de-pescado/IMG_6627.JPG',
        title: 'Chupe De Pescado',
        price: '$12.25',
        description: 'Creamy fish soup mixed with rice & vegetables.'
      },
      {
        image: 'images/menu/soups/parihuela-de-mariscos/IMG_6570.JPG',
        title: 'Parihuela De Mariscos',
        price: '$13.55',
        description: 'Peruvian seafood soup.'
      },
      {
        image: 'images/menu/soups/sopa-a-la-criolla/IMG_6535.JPG',
        title: 'Sopa A La Criolla',
        price: '$9.99',
        description: 'Creamy soup with meat, vegetables, noodles, eggs and potatoes.'
      },
      {
        image: 'images/menu/soups/sopa-a-la-minuta/IMG_6549.JPG',
        title: 'Sopa A La Minuta',
        price: '$9.85',
        description: 'Creamy soup with meat, milk, angel hair noodles and potatoes.'
      },
      {
        image: 'images/menu/soups/sopa-de-choros/IMG_6619.JPG',
        title: 'Sopa De Choros',
        price: '$11.85',
        description: 'Peruvian mixed soup with noodles.'
      }
    ]
    }
  },
  methods:{
    chickenClicked: function(){
      this.showChicken = true;
      this.showMeats = false;
      this.showSeafoods = false;
      this.showAppetizers = false;
      this.showSoups = false;
    },
    meatsClicked: function(){
      this.showChicken = false;
      this.showMeats = true;
      this.showSeafoods = false;
      this.showAppetizers = false;
      this.showSoups = false;
    },
    seafoodsClicked: function(){
      this.showChicken = false;
      this.showMeats = false;
      this.showSeafoods = true;
      this.showAppetizers = false;
      this.showSoups = false;
    },
    appetizersClicked: function(){
      this.showChicken = false;
      this.showMeats = false;
      this.showSeafoods = false;
      this.showAppetizers = true;
      this.showSoups = false;
    },
    soupsClicked: function(){
      console.log("meatas clicked");
      this.showChicken = false;
      this.showMeats = false;
      this.showSeafoods = false;
      this.showAppetizers = false;
      this.showSoups = true;
    }
  },
}
</script>

<style lang="css" scoped>

  section{
    background-color: red;
    margin-top: -109px;
  }

  .container-menu{
    width: 1200px;
    margin: 200px auto;
  }
  .menu-heading{
    text-align: center;
    margin-bottom: 60px;
  }
  .menu-heading h4{
    text-transform: capitalize;
    font-size: 36px;
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
    color: white;
  }

  .menu-heading h4 span{
    display: block;
    font-size: 18px;
    font-style: italic;
    margin-bottom: -10px;
  }

  .menu-heading h4:before{
    position: absolute;
    content: "";
    width: 100px;
    height: 2px;
    background-color: white;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper-menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .menu-item{
    flex-basis: 580px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }

  .menu-item{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu-item img{
    max-width: 180px;
    margin-right: 30px;
    border-radius: 50px;
    border: 1px solid #ddd;
    padding: 3px;
  }

  .menu-item h4{
    text-transform: capitalize;
    font-size: 22px;
    border-bottom: 1px dashed white;
    margin-bottom: 5px;
    padding-bottom: 5px;
    color: white;
  }

  .menu-item p{
    color: white;
  }

  .menu-item h4 span{
    float: right;
    color: white;
    font-style: italic;
  }

  .buttons-wrapper{
    text-align: center;
    margin-top: -1rem;
  }

  .menu-btn{
    font-size: 1.4rem;
    padding: .7rem 1.5rem;
    border-radius: 5rem;
    margin-top: 1rem;
    background: black;
    cursor: pointer;
    border: .2rem solid white;
    margin-right: 3rem;
    margin-bottom: 4rem;
    color: white;
  }
  .menu-btn:hover{
    background: red;
    color: white;
  }

  @media (max-width: 1199px){
    .container-menu{
      width: 100%;
    }

    .menu-item{
      margin: auto;
      margin-bottom: 30px;
    }

    .buttons-wrapper{
      margin-bottom: 3rem;
    }

    .menu-btn{
      margin-right: 1rem;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 769px){
    .container-menu{
      margin: 150px auto;
    }
  }

  @media (max-width: 610px){
    .container-menu{
      width: 100%;
    }

    .menu-item{
      margin: 20px;
      display: block;
    }
    .menu-item img{
      max-width: 325px;
    }

    .buttons-wrapper{
      margin-bottom: 2rem;
    }

    .menu-btn{
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 457px){
    .container-menu{
      width: 100%;
      margin-top: 127px;
    }

    .menu-item{
      margin: 20px;
      display: block;
      margin: 0;
      margin-bottom: 18px;
    }

    .menu-item h4{
      font-size: 19px;
    }

    .menu-item img{
      max-width: 290px;

    }

    .buttons-wrapper{
      margin-top: -4rem;
      margin-bottom: 4rem;
    }

    .menu-btn{
      margin-bottom: 0.5rem;
      margin-right: 2rem;
    }
  }



</style>
