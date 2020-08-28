<template>
  <div id="offcanvas" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <ul class="uk-nav uk-nav-default">
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
            <span class="uk-margin-small-right" uk-icon="icon: table"></span> Item
          </a>
        </li>
        <li>
          <a href="#">
            <span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item
          </a>
        </li>
        <li class="uk-nav-divider"></li>
        <li>
          <a href="#">
            <span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item
          </a>
        </li>
      </ul>
      <Kolekcje />
    </div>
  </div>
</template>

<script>
import Kolekcje from "~/layouts/partials/Kolekcje-nav.vue";

export default {
  components: {
    Kolekcje,
  },
};
</script>

<style>
</style>