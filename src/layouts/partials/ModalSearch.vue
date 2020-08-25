<template>
  <div id="modal-search" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-height-viewport>
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>

      <div>
        <ul class="uk-nav-primary uk-nav-center" uk-nav>
          <li class="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>

        <div class="uk-margin">
          <form class="uk-search uk-search-large">
            <input class="uk-search-input uk-text-center" type="search" placeholder="Search..." />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>