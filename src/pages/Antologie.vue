<template>
  <Layout>
    <div class="uk-section uk-section-large">
      <h1 class="uk-title uk-margin-large">Tytuł: {{ name }}</h1>
      <ul v-if="$page.ants.edges.length" class="uk-list uk-list-divider uk-list-large">
        <li v-for="book in $page.ants.edges" :key="book.node.ROK" class="uk-hover">
          <div class="uk-grid">
            <div v-if="showid" class="uk-width-small">
              <h5 class="uk-h2 uk-text-muted">{{book.node.id}}</h5>
            </div>
            <div class="uk-width-3-5@m uk-margin-bottom">
              <p>
                <span class="uk-h4">
                  {{book.node.AUTOR }}:
                  <br />
                  <i>{{book.node.TYTUL}}</i>
                </span>
                <br />
                {{book.node.WYDAWN}}, {{book.node.MIEJWYD}} {{book.node.ROK}}
              </p>
            </div>
            <div class="uk-text-meta uk-width-expand">
              <p class="uk-margin-small uk-text-secondary">
                <strong>Dodatkowe informacje</strong>
              </p>
              <p class="uk-margin-remove">
                {{book.node.UWAGI}}
                <br />
                {{book.node.OPIS}}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <!-- <p v-else>No todos left!</p> -->
    </div>
  </Layout>
</template>

<page-query>
  query {
    ants: allAntologie (
    sortBy: "ROK"
    order: ASC
  ) {
    edges {
      node {
        id
        AUTOR
        TYTUL
        WYDAWN
        MIEJWYD
        ROK
        UWAGI
        OPIS
      }
    }
  }
}
</page-query>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "Antologie Lemowskie",
      showid: false,
      antologie: null,
    };
  },
  metaInfo: {
    title: "Antologie Lemowskie",
  },
  async mounted() {
    // try {
    const results = await axios.get(
      "https://lem.toc-editions.com/lem-biblio/items/Antologie"
    );

    this.antologie = results.data.data;
    // } catch (error) {
    //   console.log(error);
    // }
  },
};
</script>

<style>
</style>