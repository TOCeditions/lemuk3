<template>
  <Layout>
    <div class="uk-section">
      <h1 class="uk-text-xlarge">
        <strong>CUS</strong>
      </h1>

      <p
        class="text-lg"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
    </div>
    <ul class="home-links flex mt-10 text-blue-900 text-lg">
      <li class="btn btn-blue">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      </li>
      <li class="btn btn-blue">
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Strona główna",
    htmlAttrs: {
      lang: "pl",
    },
    bodyAttrs: {
      class: "uk-page-black",
    },
  },
  metaInfo() {
    return this.$seo({
      title: "Strona główna", // Uses the titleTemplate in Gridsome config
      description: "Bibliografia Stanisława Lema",
      keywords: "Lem,bibliografia",
      openGraph: {
        title: "Lem Bibliografia",
        type: "website",
      },
      twitter: {
        title: "Lem Bibliografia",
        type: "summary",
      },
      link: [], // any links
      script: [], // any scripts
    });
  },
};
</script>

<style>
.uk-page-black > * {
  @apply uk-light;
}
</style>
