<template>
  <div>
    <Hero />
    <Gift :gifts="gifts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
import Gift from "@/components/home/Gift.vue";
import { herGifts } from "@/data/gifts";

export default {
  name: "Home",
  components: {
    Hero,
    Gift
  },
  data: () => ({
    gifts: herGifts
  })
};
</script>

<style scoped lang="less">
</style>
