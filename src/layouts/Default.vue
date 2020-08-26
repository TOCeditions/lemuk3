<template>
  <div id="tm-page">
    <div>
      <Navbar />
    </div>

    <div class="uk-container uk-margin">
      <ul class="uk-subnav uk-subnav-pill">
        <li v-for="edge in $static.navs.edges" :key="edge.node.id">
          <a :id="edge.node.title" :href="edge.node.link">#{{ edge.node.title}}</a>
        </li>
      </ul>
      <slot />
    </div>

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
import Offcanvas from "~/layouts/partials/Offcanvas.vue";
import Footer from "~/layouts/partials/Footer.vue";

export default {
  components: {
    Navbar,
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
