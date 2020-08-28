<template slot="Navbar">
  <nav class="uk-navbar-container" uk-sticky="sel-target: .sticky; cls-active: uk-navbar-sticky">
    <div class="uk-container sticky">
      <div uk-navbar>
        <div class="uk-navbar-left">
          <g-link class="uk-navbar-item uk-logo" alt="Strona glówna" to="/">
            <g-image
              class="uk-margin-small-right"
              alt="Bibliografia Stanisława Lema"
              src="~/img/logo/lem-icon.svg"
              width="60"
            />
            <span class="uk-visible@m">{{ $static.metadata.siteName }}</span>
          </g-link>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Parent</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active">
                    <a href="#">Active</a>
                  </li>
                  <li class="uk-parent">
                    <a href="#">Parent</a>
                    <ul class="uk-nav-sub">
                      <li>
                        <a href="#">Sub item</a>
                      </li>
                      <li>
                        <a href="#">Sub item</a>
                      </li>
                    </ul>
                  </li>
                  <li class="uk-nav-header">Header</li>
                  <li>
                    <a href="#">
                      <span class="uk-margin-small-right" uk-icon="icon: table"></span>
                      Item
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span>
                      Item
                    </a>
                  </li>
                  <li class="uk-nav-divider"></li>
                  <li>
                    <a href="#">
                      <span class="uk-margin-small-right" uk-icon="icon: trash"></span>
                      Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>

          <a
            class="uk-navbar-toggle"
            aria-label="search"
            href="#modal"
            uk-icon="icon: question"
            uk-toggle
          ></a>
          <a
            class="uk-navbar-toggle"
            aria-label="pomoc"
            href="#modal-search"
            uk-search-icon
            uk-toggle
          ></a>
          <a
            class="uk-navbar-toggle"
            aria-label="baza"
            href="#offcanvas"
            uk-navbar-toggle-icon
            uk-toggle
          ></a>
        </div>
      </div>
    </div>
  </nav>
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
        title
        note
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style>
</style>