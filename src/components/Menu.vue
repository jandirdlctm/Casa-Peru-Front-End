<template lang="html">
  <section class="menu-page">
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
          image: require('../assets/images/chicken/arroz-con-pato.png'),
          title: 'Arroz Con Pato',
          price: '$19.99',
          description: 'Duck thighs or duck breast with green rice and huancaina sauce.'
        },
        {
          image: require('../assets/images/chicken/milanesa-de-pollo.png'),
          title: 'Milanesa De Pollo',
          price: '$19.00',
          description: 'Delicious breaded chicken served w/ salad, rice & french fries.'
        },
        {
          image: require('../assets/images/chicken/aeropuerto-especial.png'),
          title: 'Aeropuerto Especial',
          price: '$22.99',
          description: 'Sauteed chicken, beef and shrimp. w/ green onions, bean sprout, french fries w/ fried rice, noodles & egg.'
        },
        {
          image: require('../assets/images/chicken/escabeche-de-pollo.png'),
          title: 'Escabeche De Pollo',
          price: '$20.00',
          description: 'Marinated chicken in spices & vinegar. Cooked w/ classic salsa escabeche onions.'
        },
        {
          image: require('../assets/images/chicken/tallarin-a-la-huancaina.png'),
          title: 'Tallarin A La Huancaina',
          price: '$21.85',
          description: 'Grilled chicken breast, served on top of spaghetti w/ creamy huancaina sauce.'
        },
        {
          image: require('../assets/images/chicken/chaufaron.png'),
          title: 'Chaufaron',
          price: '$20.99',
          description: 'Fried rice with crispy Pork meat.'
        },
        {
          image: require('../assets/images/chicken/mostrito.png'),
          title: 'Monstrito',
          price: '$18.35',
          description: 'One 1/4 Rotisserie chicken, french fries, Salad and Fried rice.'
        },
        {
          image: require('../assets/images/chicken/escabeche-de-pollo.png'),
          title: 'Pollo A La Plancha',
          price: '$19.99',
          description: 'Grilled chicken breast served w/ rice, salad & french fries.'
        },
        {
          image: require('../assets/images/chicken/aeropuerto.png'),
          title: 'Aeropuerto',
          price: '$19.99',
          description: 'Sauteed chicken w/ green onions, french fries w/ fried rice, noodles & eggs.'
        },
        {
          image: require('../assets/images/chicken/pollo-a-la-brasa.png'),
          title: 'Pollo Entero',
          price: '$29.99',
          description: 'Whole rotisserie chicken served w/ fries & salad'
        },
        {
          image: require('../assets/images/chicken/pollo-a-la-brasa.png'),
          title: '1/2 Pollo',
          price: '$19.99',
          description: '1/2 rotisserie chicken served w/ fries & salad'
        },
        {
          image: require('../assets/images/chicken/pollo-a-la-brasa.png'),
          title: '1/4 Pollo',
          price: '$12.00',
          description: '1/4 rotisserie chicken served w/ fries & salad'
        }
    ],
    meats: [
      {
        image: require('../assets/images/meats/chaufa-mixto.png'),
        title: 'Chaufa Mixto',
        price: '$20.85',
        description: 'Fried Rice, beef & chicken bell peppers, eggs & green onions.'
      },
      {
        image: require('../assets/images/meats/seco-de-res.png'),
        title: 'Seco De Res',
        price: '$21.00',
        description: 'Beef stew cooked w/ cilantro based red sauce, served w/ Peruvian beans, potatoes & steamed rice.'
      },
      {
        image: require('../assets/images/meats/bistek-a-lo-pobre.png'),
        title: 'Bistek A Lo Pobre',
        price: '$20.99',
        description: 'Grilled steak serve'
      },
      {
        image: require('../assets/images/meats/tacutacu.png'),
        title: 'Tacutacu',
        price: '$23.00',
        description: 'Mixed beans and rice sauteed beef w/ tomatoes & onions over french fries.'
      },
      {
        image: require('../assets/images/meats/parrillada-de-la-casa.png'),
        title: 'Parrillada De La Casa',
        price: '$34.99',
        description: 'Grilled beef, beef heart, chicken, sausage, shrimps and a 1/4 chicken served w/ rice, salad, & french fries.'
      },
      {
        image: require('../assets/images/meats/churrasco.png'),
        title: 'Churrasco',
        price: '$22.99',
        description: 'Peruvian style steak served w/ french fries, one fried egg & fried plantain.'
      },
      {
        image: require('../assets/images/meats/tallarin-saltado.png'),
        title: 'Tallarin Saltado',
        price: '$20.99',
        description: 'Spaghetti w/ sauteed beef strips or chicken, scallons, tomato red onions & bell peppers.'
      },
      {
        image: require('../assets/images/meats/arroz-chaufa.png'),
        title: 'Arroz Chaufa',
        price: '$20.99',
        description: 'Fried rice w/ beef or chicken, bell peppers, green onions & eggs.'
      },
      {
        image: require('../assets/images/meats/tallarin-saltado-mixto.png'),
        title: 'Tallarin Saltado Mixto',
        price: '$21.80',
        description: 'Pasta sauteed w/ chicken strip, beef, onions, tomatoes & peppers.'
      },
      {
        image: require('../assets/images/meats/lomo-saltado-mixto.png'),
        title: 'Lomo Saltado Mixto',
        price: '$21.99',
        description: 'Stir fry beef & chicken w/ tomatoes, onions, over french fries w/ rice.'
      },
      {
        image: require('../assets/images/meats/chaufa-especial.png'),
        title: 'Chaufa Especial',
        price: '$22.99',
        description: 'Fried rice, chicken, beef, shrimp, eggs, bell peppers & green onions.'
      }
    ],
    seafoods: [
      {
        image: require('../assets/images/seafood/chicharron-de-pescado.png'),
        title: 'Chicharron De Pescado',
        price: '$19.99',
        description: 'Deep fried fish w/ rice, served with fried yucca, salsa and red onions.'
      },
      {
        image: require('../assets/images/seafood/pescado-frito.png'),
        title: 'Pescado Frito',
        price: '$19.99',
        description: 'Fried fish served w/ rice, yucca & salsa.'
      },
      {
        image: require('../assets/images/seafood/ceviche-con-calamares.png'),
        title: 'Ceviche con Calamares',
        price: '$23.00',
        description: 'Fish cooked in lime juice and fried calamari, w/ sweet potatoe, and Peruvian corn.'
      },
      {
        image: require('../assets/images/seafood/escabeche-de-pescado.png'),
        title: 'Escabeche De Pescado',
        price: '$18.99',
        description: 'Fish sauteed w/ Peruvian sauce, onions served with rice.'
      },
      {
        image: require('../assets/images/seafood/pescado-a-la-plancha.png'),
        title: 'Pescado A La Plancha',
        price: '$19.99',
        description: 'Grilled fish, served with rice, Fried yucca and onions.'
      },
      {
        image: require('../assets/images/seafood/chaufa-de-mariscos-con-ceviche.png'),
        title: 'Chaufa De Mariscos Con Ceviche',
        price: '$28.00',
        description: 'Fried rice seafood cooked with scallions and peppers w/ ceviceh.'
      },
      {
        image: require('../assets/images/seafood/leche-de-tigre-con-calamares.png'),
        title: 'Leche De Tigre Con Calamares',
        price: '$22.99',
        description: 'Leche de tigre and fried calamari.'
      },
      {
        image: require('../assets/images/seafood/ceviche.png'),
        title: 'Ceviche',
        price: '$20.00',
        description: 'Fish cooked in lime juice w/ onions, sweet potato and Peruvian corn.'
      },
      {
        image: require('../assets/images/seafood/ceviche-mixto.png'),
        title: 'Ceviche Mixto',
        price: '$22.00',
        description: 'Seafood in lime juice w/ onions, sweet potato and Peruvian corn.'
      },
      {
        image: require('../assets/images/seafood/leche-de-tigre.png'),
        title: 'Leche De Tigre',
        price: '$16.00',
        description: 'Fish cooked in lime juice, sweet potatoe, shrimp, onion, and Peruvian corn.'
      },
      {
        image: require('../assets/images/seafood/ceviche-de-camarones.png'),
        title: 'Ceviche De Camarones',
        price: '$22.99',
        description: 'Shrimp in lime juice w/ onions, sweet potatoes and Peruvian corn.'
      },
      {
        image: require('../assets/images/seafood/picante-de-mariscos.png'),
        title: 'Picante De Mariscos',
        price: '$20.80',
        description: 'Seafood served w/ potatoes, green beans, carots, steamed rice topped w/ seafood sauce.'
      },
      {
        image: require('../assets/images/seafood/pescado-a-la-chorrillana.png'),
        title: 'Pescado A La Chorrillana',
        price: '$19.85',
        description: 'Grilled fish w/ rice, served w/ steam sweet potatoe, and red onions tomatoes, yellow pepper.'
      },
      {
        image: require('../assets/images/seafood/pescado-a-lo-macho.png'),
        title: 'Pescado A Lo Macho',
        price: '$22.00',
        description: 'Fried fish topped w/ seafood sauce served w/ steamed rice.'
      },
      {
        image: require('../assets/images/seafood/chaufa-de-mariscos.png'),
        title: 'Chaufa De Mariscos',
        price: '$21.99',
        description: 'Seafood fried rice w/ bell pepper, green onions & eggs.'
      },
      {
        image: require('../assets/images/seafood/chaufa-de-pescado.png'),
        title: 'Chaufa De Pescado',
        price: '$18.99',
        description: 'Fried rice w/ fish, bell peppers, green onions & eggs.'
      },
      {
        image: require('../assets/images/seafood/chaufa-a-lo-macho.png'),
        title: 'Chaufa A Lo Macho',
        price: '$22.80',
        description: 'Fried rice w/ seafood and Seafood sauce.'
      },
      {
        image: require('../assets/images/seafood/tacutacu-de-mariscos.png'),
        title: 'Tacutacu De Mariscos',
        price: '$22.85',
        description: 'Mixed beans and rice w/ sauteed seafood.'
      },
      {
        image: require('../assets/images/seafood/tallarines-a-lo-macho.png'),
        title: 'Tallarines A Lo Macho',
        price: '$21.90',
        description: 'Spaghetti w/ seafood and seafood sauce.'
      },
      {
        image: require('../assets/images/seafood/jalea.png'),
        title: 'Jalea',
        price: '$23.80',
        description: 'Deep fried fish & seafood topped w/ red onions, salsa, peruvian corn & yucca.'
      }
    ],
    vegetarian: [
      {
        image: require('../assets/images/vegetarian/chaufa-con-verduras.png'),
        title: 'Chaufa Con Verduras',
        price: '$17.99',
        description: 'Fried rice w/ sauteed vegetables, scallions, tomato, red onions, bell peppers, green pea, bean sprout and carrots.'
      },
      {
        image: require('../assets/images/vegetarian/tallarines-con-verduras.png'),
        title: 'Tallarines Con Verduras',
        price: '$17.99',
        description: 'Spaguetti w/ sauteed vegetables, scallions, tomato, red onions, bell peppers, green pea, bean sprout and carrots.'
      }
    ],
    appetizers: [
      {
        image: require('../assets/images/appetizers/papa-a-la-huancaina.png'),
        title: 'Papa La Huancaina',
        price: '$13.00',
        description: 'Sliced potatoes with traditional Peruvian sauce made w/ yellow chillis.'
      },
      {
        image: require('../assets/images/appetizers/anticuchos.png'),
        title: 'Anticuchos',
        price: '$15.00',
        description: 'Peruvian style kabobs beef heart, served w/ deep fried potatoes, corn & huancaina sauce.'
      },
      {
        image: require('../assets/images/appetizers/causa-rellena.png'),
        title: 'Causa Rellena',
        price: '$9.85',
        description: 'Peruvian dish, made of creamy mashed potatoes w/ chicken, tuna or shrimp.'
      },
      {
        image: require('../assets/images/appetizers/papa-rellena.png'),
        title: 'Papa Rellena',
        price: '$9.85',
        description: 'Fried mashed potato stuffed w/ mixture of seasoned steak, eggs, raisins & olives.'
      },
      {
        image: require('../assets/images/appetizers/chicken-nuggets.png'),
        title: 'Chicken Nuggets',
        price: '$10.80',
        description: ''
      },
      {
        image: require('../assets/images/appetizers/choros-a-la-chalaca.png'),
        title: 'Choros A La Chalaca',
        price: '$18.00',
        description: 'Fresh mussels served in the shell w/ sweet onions, tomato & lime.'
      },      
      {
        image: require('../assets/images/appetizers/salchipapa-con-huevo-y-ensalada.png'),
        title: 'Salchipapa Con Huevo Y Ensalada',
        price: '$13.85',
        description: 'Deep fried sliced hot dogs over french fries. Fried egg and salad.'
      },
      {
        image: require('../assets/images/appetizers/yucca-frita.png'),
        title: 'Yucca Frita',
        price: '$12.00',
        description: 'Deep fried yuca served w/ traditional huancaina sauce.'
      }
    ],
    soups: [
      {
        image: require('../assets/images/soups/chupe-de-camarones.png'),
        title: 'Chupe De Camarones',
        price: '$20.50',
        description: 'Creamy shrimp soup mixed w/ rice & potatoes.'
      },
      {
        image: require('../assets/images/soups/sopa-a-la-minuta.png'),
        title: 'Sopa A La Minuta',
        price: '$19.85',
        description: 'Creamy soup with meat, milk, angel hair noodles & potatoes.'
      },
      {
        image: require('../assets/images/soups/parihuela-de-mariscos.png'),
        title: 'Parihuela De Mariscos',
        price: '$20.80',
        description: 'Peruvian seafood soup.'
      },
      {
        image: require('../assets/images/soups/sopa-de-choros.png'),
        title: 'Sopa De Choros',
        price: '$19.00',
        description: 'Peruvian mussels soup w/ noodles.'
      },
      {
        image: require('../assets/images/soups/aguadito-de-mariscos-o-pezcado.png'),
        title: 'Aguadito De Mariscos O Pescado',
        price: '$20.90',
        description: 'Seafood, rice, bell pepper, green pee and cilantro.'
      },
      {
        image: require('../assets/images/soups/caldo-de-gallina.png'),
        title: 'Caldo De Gallina',
        price: '$22.99',
        description: 'Chicken soup w/ spaghetti noodles, one egg & potatoes.'
      },
      {
        image: require('../assets/images/soups/aguadito-de-pollo.png'),
        title: 'Aguadito De Pollo',
        price: '$19.99',
        description: 'Chicken, rice, bell pepper, green pee and cilantro.'
      },
      {
        image: require('../assets/images/soups/chupe-de-pescado.png'),
        title: 'Chupe De Pescado',
        price: '$19.00',
        description: 'Creamy fish soup mixed w/ rice.'
      }
    ],
    house_specialties: [
      {
        image: require('../assets/images/house-specialties/seco-a-la-nortena.png'),
        title: 'Seco A La Norteña',
        price: '$20.50',
        description: 'Beef stew cooked w/ cilantro based, red sauce, served w/ beans, yucca & steam rice.'
      },
      {
        image: require('../assets/images/house-specialties/lomo-saltado.png'),
        title: 'Lomo Saltado',
        price: '$21.99',
        description: 'Sauteed beef or chicken w/ tomato & onions over french fries w/ rice.'
      },
      {
        image: require('../assets/images/house-specialties/ceviche-de-la-casa.png'),
        title: 'Ceviche De La Casa',
        price: '$21.80',
        description: 'Fish cooked w/ lime juice, sliced fish, yellow chili sauce, fried fish & seafood mix with peruvian style rice.'
      },
      {
        image: require('../assets/images/house-specialties/arroz-con-mariscos.png'),
        title: 'Arroz Con Mariscos',
        price: '$21.80',
        description: 'Seafood mixed w/ Peruvian rice style.'
      },
      {
        image: require('../assets/images/house-specialties/arroz-con-pollo.png'),
        title: 'Arroz Con Pollo',
        price: '$19.99',
        description: 'Chicken thighs or chicken breast with green rice and huancaina sauce.'
      },
      {
        image: require('../assets/images/house-specialties/tallarin-saltado-de-mariscos.png'),
        title: 'Tallarin Saltado De Mariscos',
        price: '$19.80',
        description: 'Spaghetti w/ sauteed seafood mix, onions, tomato & shell peppers.'
      },
      {
        image: require('../assets/images/house-specialties/tallarines-verdes.png'),
        title: 'Tallarines Verdes',
        price: '$22.00',
        description: 'Green spaguetti sauteed in spinach, basil sauce, topped w/ grilled steak & deep fried potatoes.'
      }
    ],
    desserts: [
      {
        image: require('../assets/images/desserts/rice-pudding.png'),
        title: 'Arroz Con Leche',
        price: '$10.99',
        description: ''
      },
      {
        image: "",
        title: 'Mazamorra Morada',
        price: '$9.00',
        description: ''
      },
      {
        image: "",
        title: 'Fried Plantains',
        price: '$3.50',
        description: ''
      },
      {
        image: "",
        title: 'Helado De Lucuma',
        price: '$8.00',
        description: 'Peruvian Ice Cream'
      },
      {
        image: require('../assets/images/desserts/rice-pudding.png'),
        title: 'Leche Asada',
        price: '$8.00',
        description: ''
      },
      {
        image: "",
        title: 'Alfajor',
        price: '$10.00',
        description: ''
      }
    ],
    side_orders: [
      {
        image: "",
        title: 'Salsa Huancaina',
        price: '$4.50',
        description: ''
      },
      {
        image: "",
        title: 'Rice, Beans, Salad, French Fries',
        price: '$8.00',
        description: ''
      },
      {
        image: "",
        title: 'Bisteck Extra, Loma Extra',
        price: '$10.00',
        description: ''
      },
      {
        image: "",
        title: 'Extra Chaufa',
        price: '$9.00',
        description: ''
      },
      {
        image: "",
        title: 'Toasted Peruvian Corn',
        price: '$9.00',
        description: ''
      },
      {
        image: "",
        title: 'Salsa Tartara',
        price: '$4.50',
        description: ''
      },
      {
        image: "",
        title: 'Ensalada Criolla',
        price: '$6.00',
        description: ''
      },
      {
        image: "",
        title: 'Salsa Verde',
        price: '$2.00',
        description: ''
      },
      {
        image: "",
        title: 'Dressing',
        price: '$2.00',
        description: ''
      }
    ],
    drinks: [
      {
        image: require('../assets/images/drinks/chicha-morada.png'),
        title: 'Chicha Morada Jarra',
        price: '$10.00',
        description: ''
      },
      {
        image: require('../assets/images/drinks/maracuya.png'),
        title: 'Maracuya Jarra',
        price: '$10.00',
        description: ''
      },
      {
        image: "",
        title: 'Chicha Morada Vaso',
        price: '$4.00',
        description: ''
      },
      {
        image: "",
        title: 'Maracuya Vaso',
        price: '$4.00',
        description: ''
      },
      {
        image: "",
        title: 'Inka Kola Grande',
        price: '$8.00',
        description: ''
      },
      {
        image: "",
        title: 'Inka Kola Chica',
        price: '$3.50',
        description: ''
      },
      {
        image: "",
        title: 'Cafe/Tea',
        price: '$2.50',
        description: ''
      },
      {
        image: "",
        title: 'Soft Drink',
        price: '$3.00',
        description: 'Sprite, Coke, Diet Coke, Dr. Pepper, Raspberry Iced tea, Fanta, Lemonade'
      },
      {
        image: "",
        title: 'Coca De Botella',
        price: '$4.00',
        description: ''
      },
      {
        image: "",
        title: 'Inka Kola 20 OZ.',
        price: '$4.00',
        description: ''
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
      console.log("meats clicked");
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
    min-height: 100vh;
    padding: 16px 10%;
    padding-top: 136px;
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
    /* border: 1px solid #ddd; */
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
      font-size: 17px;
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

  @media (max-width: 360px){
    .menu-item{
      display: block;
      margin: -11px;
      margin-bottom: 18px;
    }

  }

</style>
