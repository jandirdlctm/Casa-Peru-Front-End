<template>
<div class="review-page">
  <div class="review-wrapper">
    <div class="review-section">
      <h2 class="review-title">Our Customers Love Casa Perú</h2>
      <p class="review-note">At Casa Perú our #1 priority is the for our customers to have the best experience possible.</p>

      <div class="image">
        <img :src="mainImageSrc">
        <img :src="secondImageSrc">
        <img :src="thirdImageSrc" >
        <img :src="fourthImageSrc">
      </div>

      <button v-if="addReviewButtonShow" v-on:click="addReviewClicked" type="button" name="button" class="add-review-btn">Add Review</button>
      <!-- ADD REV SECTION -->
      <div v-if="addReviewMode" class="add-review-wrapper">
        <div class="add-review-content">
          <h1>REVIEW</h1>
          <p>Please let us know your experience at Casa Perú</p>
          <ul v-if="addReviewInputErrosMode">
            <li v-for="error in addReviewInputErrors" v-bind:key="error" >{{error}}</li>
          </ul>
        </div>

        <div class="form">
          <div class="form-top">
            <div class="inner-form">
              <div class="label">
                First Name*
              </div>
              <input v-model="firstName" type="text" :placeholder="firstNamePlaceholderValue">
            </div>
            <div class="inner-form">
              <div class="label">
                Last Name*
              </div>
              <input v-model="lastName" type="text" :placeholder="lastNamePlaceholderValue">
            </div>
            <div class="inner-form">
              <div class="label">
                Experience*
              </div>
              <select class="select-input" v-model="experienceSelected">
                <option disabled value="">Please Select One</option>
                <option>bad</option>
                <option>good</option>
                <option>very good</option>
              </select>
            </div>
          </div>

          <div class="form-bottom">
            <div class="inner-form">
              <div class="label">
                Review*
              </div>
              <textarea v-model="reviewDetails" :placeholder="reviewDetaisPlaceholderValue"></textarea>
            </div>
          </div>

          <button v-on:click="submitReviewClicked" type="button" name="button" class="submit-btn">Submit</button>
          <button v-on:click="closeReviewClicked" type="button" name="button" class="close-btn">Close</button>

        </div>
      </div>

      <h2 class="review-title">TESTIMONIALS</h2>
      <div class="reviews">
        <div v-for="review in reviews" v-bind:key="review" class="review">
          <!-- <div class="review-head">
            <img :src="review.image" class="review-img" alt="" width="250px">
          </div> -->
          <div class="review-body">
            <div class="review-name">
              {{review.firstName}} {{review.lastName}}
            </div>
            <div class="review-date">
              {{review.date}}
            </div>
            <div class="review-experience">
              {{review.experience}}
            </div>
            <div class="review-details">
              {{review.details}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  function getReviewsListFromServer(){
    return fetch("https://sleepy-brushlands-16093.herokuapp.com/reviews")
  }

  function createReviewOnServer(review){
    var reviewData = "firstName=" + encodeURIComponent(review.firstName);
    reviewData += "&lastName=" + encodeURIComponent(review.lastName);
    reviewData += "&experience=" + encodeURIComponent(review.experience);
    reviewData += "&details=" + encodeURIComponent(review.details);

    return fetch("https://sleepy-brushlands-16093.herokuapp.com/reviews",{
      method: "POST",
      body: reviewData,
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  export default {
    name: 'Reviews',
    data (){
      return{
        reviews : [],
        // add review
        firstName: "",
        lastName: "",
        experienceSelected: "",
        reviewDetails: "",
        firstNamePlaceholderValue: "Carlos",
        lastNamePlaceholderValue: "Rodriguez",
        reviewDetaisPlaceholderValue: "Your Review",

        // add review state
        addReviewMode: false,
        addReviewButtonShow: true,

        // main image
        mainImageSrc: "images/main-images/parrillada-de-la-casa.png",
        secondImageSrc: "images/main-images/arroz-con-pollo-transparent.png",
        thirdImageSrc: 'images/main-images/pollo-a-la-brasa-tranparent.png',
        fourthImageSrc: 'images/main-images/tallarin-a-la-huancaina-transparent.png',

        //erors
        addReviewInputErrors: [],
        addReviewInputErrosMode: false
      }
    },
    methods: {
      loadReviews: function(){
        getReviewsListFromServer().then((response)=>{
          response.json().then((data)=>{
            console.log("this is the data: ",data);
            for (var i = 0; i < data.length; i++){
              console.log("This is the image url: ", data[i].image);
              if (data[i].image == "bad"){
                data[i].image = "images/reviews/sad-face.png"
              }
              else if (data[i].image == "good"){
                data[i].image = "images/reviews/good.png"
              }
              else if (data[i].image == "very good"){
                data[i].image = "images/reviews/super-good.png"
              }
            }
            this.reviews = data;
            console.log(this.reviews);
          })
        })
      },
      addReviewClicked: function(){
        this.addReviewMode = true;
        this.addReviewButtonShow = false;
      },
      validateReviewUserInput: function(){
        this.addReviewInputErrors = [];
        if (this.firstName.length == 0){
          this.addReviewInputErrors.push("Please Enter First Name");
        }
        if (this.lastName.length == 0){
          this.addReviewInputErrors.push("Please Enter Last Name");
        }
        if (this.experienceSelected.length == 0){
          this.addReviewInputErrors.push("Please Choose Your Experience At Casa Perú")
        }
        if (this.reviewDetails.length == 0){
          this.addReviewInputErrors.push("Please enter Review.")
        }
        return this.addReviewInputErrors == 0;
      },
      submitReviewClicked: function(){
        console.log("submit button clicked");

        var valid = this.validateReviewUserInput();
        if (!valid){
          this.addReviewInputErrosMode = true;
          return;
        }

        var newReview = {
          firstName: this.firstName,
          lastName: this.lastName,
          experience: this.experienceSelected,
          details: this.reviewDetails
        }
        createReviewOnServer(newReview).then((response)=>{
          console.log(response);
          this.loadReviews();
          this.addReviewMode = false;
          this.addReviewButtonShow = true;
          this.clearInputs();
          this.addReviewInputErrosMode = false;
        })

      },
      closeReviewClicked: function(){
        console.log("close button clicked")
        this.addReviewMode = false;
        this.addReviewButtonShow = true;
        // clearing the inputs
        this.clearInputs();
        this.addReviewInputErrosMode = false;
        this.addReviewInputErrors = [];
      },
      clearInputs: function(){
        this.firstName = "";
        this.lastName = "";
        this.experienceSelected = "";
        this.reviewDetails = "";
      }
    },
    created (){
      this.loadReviews();
    }
  }

</script>


<style scoped>

  .review-page{
    background-color: red;
  }

  .review-wrapper{
    display: flex;
    padding-top: 210px;
  }

  .review-section{
    margin: auto;
    padding: 0 1rem;
    max-width: 1100px;
    text-align: center;
  }

  .review-title{
    font-size: 4rem;
    text-transform: uppercase;
    color: white;
    margin-bottom: .5rem;

  }

  .review-note{
    font-size: 1.1rem;
    color: #E8E8E8;
    font-style: italic;
    margin: 1.3rem 0;
  }

  .reviews{
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .review{
    margin: 1.5rem 1rem;
    min-width: 300px;
    flex: 1;
    background-color: antiquewhite;
    border-radius: 6%;
    background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  }

  .review-head{
    margin: 1.75rem auto;
    width: 150px;
    height: 150px;
  }

  .review-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
    background-color: gold;
  }

  .review-body{

    padding: 2.5rem;

    border-radius: 8%;
  }

  .review-name{
    font-style: 1.5rem;
    color: black;
    margin-bottom: .25rem;
    font-weight: bolder;
  }

  .review-date{
    color: darkgray;
    font-style: italic;
  }



  .review-experience{
    color: goldenrod;
    margin: 1rem 0;
  }

  .review-details{
    line-height: 1.5rem;
    letter-spacing: 1px;
    color: black;
  }

  .image{
    flex: 1 1 39rem;
  }
  .image img{
    width: 34%;
  }

  .add-review-btn{
    font-size: 1.7rem;
    padding: .7rem 4rem;
    border-radius: 5rem;
    margin-top: 2rem;
    background: black;
    cursor: pointer;
    border: .2rem solid white;
    color: white;
    margin-bottom: 3rem;
  }

  .add-review-btn:hover{
    background: white;
    color: black;
    border: .2rem solid black;
  }

  @media (max-width: 678px) {
    .review-wrapper{
      padding-top: 130px;
    }
    .review{
      margin-top: 1.5rem;
    }
  }

  /* ADD REV */
  .add-review-wrapper{
    width: 100%;
    max-width: 680px;
    margin: 0px auto 0;
    padding: 20px;
    box-sizing: border-box;
  }
  .add-review-content{
    text-align: center;
    color: white;
  }
  .form{
    width: 100%;
    margin: 25px 0;
  }
  .form-top,

  .form-bottom{
    width: 100%;
    min-height: 65px;
    margin: 10px 0;
  }

  .form input[type="text"],
  .form textarea{
    padding: 15px 5px;
    box-sizing: border-box;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 2px;
    outline: none;
    transition: all 0.2s ease;
  }

  .form input:focus,
  .form textarea:focus{
    border-color: #4ca1af;
    box-shadow: inset 0 1px 1px rgba(0,0,0, 0.0125), 0 0 8px rgba(76,161,175,0.5);
  }

  .form .label{
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  .label{
    color: white;
  }

  .form-top .inner-form{
    width: 27.9%;
    float: left;
    margin-right: 5%;

  }



  .form-middle{
    clear: both;
  }

  .form-bottom textarea{
    height: 120px;
  }

  .submit-btn, .close-btn{
    font-size: 1.7rem;
    padding: .7rem 4rem;
    border-radius: 5rem;
    margin-top: 2rem;
    background: black;
    cursor: pointer;
    border: .2rem solid white;
    color: white;
  }

  .submit-btn:hover, .close-btn:hover{
    background: white;
    color: black;
    border: .2rem solid black;
  }

  ul{
    list-style: none;
    border-style: dashed;
    padding: 10px;
    margin: 16px;
  }

  li{
    /* padding: 10px; */
    color: black;
  }


  @media screen and (max-width: 460px){
    .add-review-wrapper{
      margin: 25px auto 0;
    }
    .form-top .inner-form{
      width: 100%;
      margin: 5px 0;
    }


  }



</style>
