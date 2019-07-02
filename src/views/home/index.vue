<template>
  <div class="mz-home">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'

export default {
  name: 'home',
  components: {
    TabBar
  }
}
</script>
