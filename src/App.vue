<template>
  <div id="app">
    <!-- keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，
    从而节省性能，由于是一个抽象组件，所以在v页面渲染完毕后不会被渲染成一个DOM元素 -->
    <!-- exclude="Detail"的意思是,除了Detail以外,其他都会被缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
