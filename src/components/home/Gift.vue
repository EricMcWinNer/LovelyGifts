<template>
  <div :style="cssVars" class="gift">
    <b-container>
      <p class="title">{{ gifts.title }}</p>
      <b-row>
        <slider ref="slider" :style="slideStyle" :options="options">
          <slideritem
            :style="sliderStyle"
            v-for="(gift, index) in gifts.gifts"
            :key="index"
          >
            <GiftItem v-bind:gift="gift" />
          </slideritem>
        </slider>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GiftItem from "@/components/home/GiftItem";
import { slider, slideritem } from "vue-concise-slider";
export default {
  name: "Gift",
  components: {
    GiftItem,
    slider,
    slideritem
  },
  data() {
    return {
      options: {
        currentPage: 0,
        infinite: 4,
        slidesToScroll: 1,
        loop: false,
        pagination: false
      },
      sliderStyle: {
        width: "calc(23.5%)",
        "margin-right": "1%",
        "text-align": "left",
        "margin-top": "30px",
        "margin-bottom": "30px"
      }
    };
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
  .gift-item:first-child {
    margin-left: 30px;
  }
  .gif-item:last-child {
    margin-right: 30px;
  }
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
  margin-bottom: 0.5rem;
}
</style>
