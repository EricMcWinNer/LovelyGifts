<template>
  <div :style="cssVars" class="gift">
    <b-container>
      <p class="title">{{gifts.title}}</p>
      <b-row>
        <GiftItem v-for="gift in gifts.gifts" v-bind:key="gift.index" v-bind:gift="gift" />
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
    gifts: Object
  },
  computed: {
    cssVars() {
      return {
        "--background-color": this.gifts.backgroundColor,
        "--background-image": `url('${this.gifts.backgroundImage}')`,
        "--left-sector": `url('${this.gifts.leftSector}')`,
        "--right-sector": `url('${this.gifts.rightSector}')`
      };
    }
  }
};
</script>

<style scoped lang="less">
.gift {
  padding-bottom: 7rem;
  padding-top: 7rem;
  position: relative;
  background-image: var(--background-image);
  background-color: var(--background-color);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-image: var(--left-sector);
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
    background-image: var(--right-sector);
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
