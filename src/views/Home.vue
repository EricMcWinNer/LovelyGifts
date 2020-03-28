<template>
  <div>
    <Hero />
    <Gift :gifts="gifts" />
    <FeaturedSection />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
import Gift from "@/components/home/Gift.vue";
import FeaturedSection from "@/components/home/FeaturedSection.vue";
import Footer from "@/components/Footer.vue"
import { herGifts } from "@/data/gifts";

export default {
  name: "Home",
  components: {
    Hero,
    Gift,
    FeaturedSection,
    Footer
  },
  data: () => ({
    gifts: herGifts
  })
};
</script>

<style scoped lang="less">
</style>
