<template>
  <b-col md="3">
    <div class="gift-item">
      <div class="image" :style="{ 'background-image': 'url(' + gift.picture + ')' }"></div>
      <div class="card">
        <p class="title">{{gift.name}}</p>
        <p class="price">₦{{gift.price}}</p>
        <p class="cancelled price">₦{{gift.cancelledPrice}}</p>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "GiftItem",
  props: {
    gift: Object
  }
};
</script>

<style scoped lang="less">
.gift-item {
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  cursor: pointer;
  transition-property: box-shadow;
  transition-duration: 0.8s;
  &:hover {
    box-shadow: 0px 8px 60px rgba(0, 0, 0, 0.4);
  }
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 160px;
  border-radius: 9px 9px 0 0;
}
.price {
  font-family: "Karla", sans-serif;
  color: #604a3f;
  font-weight: bold;
  font-size: 1.6rem;
  &:not(.cancelled) {
    margin-bottom: 5px;
  }
  &.cancelled {
    text-decoration: line-through;
    font-size: 1.2rem;
    font-weight: 400;
  }
}
.card {
  padding: 20px 15px;
  .title {
    font-family: "Muli", sans-serif;
    color: #444;
    font-size: 1.23rem;
  }
  border-radius: 0 0 9px 9px;
  background-color: white;
}
</style>
