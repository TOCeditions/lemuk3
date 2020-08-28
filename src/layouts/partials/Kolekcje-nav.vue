<template>
  <ul class="uk-nav">
    <li v-for="edge in $static.navs.edges" :key="edge.node.id">
      <g-link :to="{path: '/'+edge.node.link} ">{{ edge.node.title }}</g-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>

<static-query>
  query {
  
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