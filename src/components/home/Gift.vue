<template>
  <div class="gift">
    <b-container>
      <p class="title">Gifts for her</p>
      <b-row>
        <GiftItem v-for="gift in gifts" v-bind:key="gift.index" v-bind:gift="gift" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GiftItem from "@/components/home/GiftItem";
export default {
  name: "Gift",
  components: {
    GiftItem
  },
  props: {
    gifts: Array
  }
};
</script>

<style scoped lang="less">
.gift {
  background-color: #fff6f9;
  background-image: url("../../assets/img/herbackground.png");
  padding-bottom: 7rem;
  padding-top: 7rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-image: url("../../assets/img/lefther.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 18vw;
    height: 18vw;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    background-image: url("../../assets/img/righther.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 18vw;
    height: 18vw;
  }
}
.title {
  font-family: "Muli", sans-serif;
  color: #333;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
}
</style>
