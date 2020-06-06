<template>
  <div class="hero">
    <div class="banner">
      <div class="rectangle">
        <div class="banner-text">
          <p class="header">Gifts for loved ones</p>
          <p class="flag">up to 50% off</p>
          <p class="subtext">Don't just say you love them, show it...</p>
        </div>
        <div id="actual-rectangle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  mounted() {
    const hoverEffect = () => {
      alert("I got hovered");
    };
    document
      .getElementById("actual-rectangle")
      .addEventListener("mouseenter", hoverEffect);
  }
};
</script>

<style scoped lang="less">
@keyframes hero-debut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.hero {
  background: url("../../assets/img/hero.png"), rgba(255, 159, 190, 0.7);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  .banner-text {
    position: relative;
    z-index: 22;
    text-align: center;
  }
  .banner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header {
    color: #a1313c;
    font-family: "Muli", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .flag {
    font-family: "Tangerine", sans-serif;
    font-weight: bold;
    font-size: 10.3rem;
    line-height: 1%;
    margin-bottom: 7.5rem;
    margin-top: 3rem;
    padding: 0;
    transform: rotate(-2.34deg);
    color: #e14541;
  }
  .subtext {
    font-family: "Muli", sans-serif;
    font-style: italic;
    font-size: 1.5rem;
    color: #a1313c;
  }
  .rectangle {
    position: relative;
    padding: 5rem 4rem;
    min-height: 50vh;
    min-width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    #actual-rectangle {
      content: "";
      border: 10px solid #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      transform: rotate(1.62deg);
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 255, 255, 0.4) 60.35%,
        rgba(255, 255, 255, 0) 100%
      );
      top: 0;
      left: 0;
    }
  }
}
</style>
