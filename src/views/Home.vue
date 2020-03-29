<template>
  <div>
    <Hero />
    <Gift :gifts="herGifts" />
    <Gift :gifts="hisGifts" />
    <FeaturedSection />
    <Gift :gifts="theirGifts" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
import Gift from "@/components/home/Gift.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import Footer from "@/components/Footer.vue";
import { herGifts, hisGifts, theirGifts } from "@/data/gifts";

export default {
  name: "Home",
  components: {
    Hero,
    Gift,
    FeaturedSection,
    Footer
  },
  data: () => ({
    herGifts: herGifts,
    hisGifts: hisGifts,
    theirGifts: theirGifts
  })
};
</script>

<style scoped lang="less">
</style>
