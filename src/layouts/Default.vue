<template>
  <div id="tm-page">
    <div>
      <Navbar />
    </div>

    <slot />

    <Footer />
    <Offcanvas />
  </div>
</template>




<static-query>
  query {
  metadata {
  siteName
  siteDescription
},
  navs: allLemColls(
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        id
        link
        title
        note
      }
    }
  }
}
</static-query>

<script>
import Navbar from "~/layouts/partials/Navbar.vue";
import Kolekcje from "~/layouts/partials/Kolekcje.vue";
import Offcanvas from "~/layouts/partials/Offcanvas.vue";
import Footer from "~/layouts/partials/Footer.vue";

export default {
  components: {
    Navbar,
    Kolekcje,
    Footer,
    Offcanvas,
  },
};
</script>


<style>
.logo-svg {
  width: 60px;
  height: 60px;
}
</style>
