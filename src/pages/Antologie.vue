<template>
  <Layout>
    <div class="uk-section uk-section-primary uk-section-large">
      <div class="uk-container">
        <h1 class="uk-title uk-margin-large">Tytuł: {{ name }}</h1>
      </div>
    </div>
    <div class="uk-section uk-section-muted">
      <div class="uk-container">
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
        <p v-else>No content in DB</p>
        <div>
          <Pager
            :info="$page.ants.pageInfo"
            :range="$page.ants.pageInfo.perPage"
            activeLinkClass="uk-active uk-button-primary"
            linkClass="uk-button uk-button-default"
            class="uk-width-auto@m uk-border-rounded uk-pagination uk-navbar-nav uk-padding-small uk-text-large"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>



<script>
import axios from "axios";
import { Pager } from "gridsome";
export default {
  data() {
    return {
      name: "Antologie Lemowskie",
      showid: false,
      antologie: null,
      pagerIle: 6,
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
  components: {
    Pager,
  },
};
</script>

<style>
</style>


<page-query>
  query($page: Int) {
    ants: allAntologie (
    sortBy: "ROK",
    order: ASC,
    perPage: 5,
    page: $page,
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    
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