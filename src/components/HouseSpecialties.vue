<template>
  <!-- <div class="house-container"> -->
    <section class="house-specialties" id="house-specialties">
      <h1 class="title">House <span>Specialties</span></h1>
      <div class="wrapper-box">
        <div v-for="food in houseSpecials" v-bind:key="food" class="food-box">
            <img :src="food.image">
            <!-- <div class="r1"></div> -->
          <h3>{{food.title}}</h3>
        </div>
      </div>
    </section>
  <!-- </div> -->

</template>

<script>
export default {
    name: "HouseSpecialties",
    data (){
      return{
        houseSpecials: [
          {
            image: 'images/house-images/ceviche-de-la-casa.png',
            title: 'Ceviche De La Casa',
            price: '$15.25',
            description: 'Fish cooked with lime juice, & sliced fish, yellow chili sauce fried sea food, seafopod mix with peruvian style rice.'
          },
          {
            image: 'images/house-images/tallarin-verde.png',
            title: 'Tallarin Verde',
            price: '$13.25',
            description: 'Green spaghetti sauted in spinach basil sauce topped w/ grilled steak or chicken & deep fried potatoes'
          },
          {
            image: 'images/house-images/arroz-con-pollo-transparent.png',
            title: 'Arroz Con Pollo',
            price: '$10.55',
            description: 'Chicken thighs with green rice and Peruvian sauce'
          },
          {
            image: 'images/house-images/lomo-saltado.png',
            title: 'Lomo Saltado',
            price: '$11.85',
            description: 'Sauteed beef w/ tomato & onions over french fries w/ rice'
          },
          {
            image: 'images/house-images/arroz-con-mariscos.png',
            title: 'Arroz Con Mariscos',
            price: '$13.95',
            description: 'Seafood mixed w/ Peruvian style rice'
          },
          {
            image: 'images/house-images/tallarin-saltado-de-mariscos.png',
            title: 'Tallarin Saltado De Mariscos',
            price: '$13.95',
            description: 'Spaghetti w/ sauteed seafood mix, onions tomato & bell peppers'
          }
        ]
      }
    },
    methods: {

    },
}
</script>

<style scoped>
  .house-container{
    margin-top: 0px;
  }

  .house-specialties{
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    overflow: hidden;
  }

  .title{
    margin-top: 5rem;
    color: white;
    font-size: 4rem;
    text-align: center;
  }

  .wrapper-box{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .food-box{
    height: 20rem;
    width: 30rem;
    margin: 2rem;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
  .house-specialties::before,
  .house-specialties::after{
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
  
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;

  }
  .food-box h3{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    text-align: center;
    font-size: 3rem;
    opacity: 0;
  }

   .food-box:hover h3{
    top: 50%;
    opacity: 1;
    transition-delay: .2s;
  }

   .food-box::before{
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.7);
    transition: 2s linear;
  }
   .food-box:hover::before{
    top: 0;
  }

  @media (max-width: 768px){
    .title{
      margin-top: 1rem;
    }
  }

</style>
