<template>
  <div class="featured-section">
    <b-container>
      <b-row>
        <b-col>
          <div class="featured-card">
            <div class="background-card"></div>
            <div class="text-card">
              <p class="headline">Hand-made Gifts for Loved Ones</p>
              <a href="#">View here</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FeaturedSection",
  mounted() {
    let featuredCard = this.$el.getElementsByClassName("background-card")[0];
    let textCard = this.$el.getElementsByClassName("text-card")[0];
    featuredCard.style.height = featuredCard.clientWidth + "px";
    textCard.style.height = (featuredCard.clientWidth * 3) / 4 + "px";
    textCard.style.top = (featuredCard.clientWidth / 100) * 15 + "px";
  }
};
</script>

<style scoped lang="less">
.featured-section {
  width: 100%;
  background-image: url("../../assets/img/featuredbackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5rem 0;
  .featured-card {
    display: flex;
    .background-card {
      height: 45vh;
      width: 45%;
      position: relative;
      background-image: url("../../assets/img/featuredcardbackground.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 9px;
      z-index: 6;
      box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.4);
      &::after {
        content: "";
        background-color: rgba(195, 54, 122, 0.6);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 9px;
      }
    }
    .text-card {
      background-color: white;
      flex-grow: 1;
      position: relative;
      left: -2rem;
      padding: 2rem;
      padding-left: calc(2rem + 30px);
      border-radius: 0 9px 9px 0;
      box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.4);
      p {
        font-family: "Tangerine", sans-serif;
        font-weight: bold;
        color: #311120;
        font-size: 4rem;
      }
      a {
        background: linear-gradient(
            0deg,
            rgba(69, 54, 54, 0.8),
            rgba(69, 54, 54, 0.8)
          ),
          url("../../assets/img/button-background.jpg");
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        color: white;
        font-family: "Muli", sans-serif;
        font-weight: bold;
        margin-top: 1rem;
        display: inline-block;
        padding: 0.9rem 2rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        text-decoration: none;
      }
    }
  }
}
</style>
