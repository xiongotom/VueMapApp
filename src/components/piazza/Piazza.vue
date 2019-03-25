<template>
  <div class="piazza-container">
    <ul>
      <li v-for="widget in widgetList" :key="widget.id">
        <div class="piazza-widget">
          <slot name="widget" :widget="widget">
            <p-box :widget="widget"></p-box>
          </slot>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import PiazzaBox from './PiazzaBox'

export default {
  name: 'piazza',
  components: {
    'p-box': PiazzaBox
  },
  props: {
    /**
     * widget array
     */
    widgets: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    widgetList() {
      let wList = (this.widgets || [])
      // 生成一个唯一id：如果没有制定id的话
      wList.forEach(item => item.id == null && (item.id = Math.random().toString(32).substr(2)))
      return wList
    }
  }
}
</script>
<style scoped>

</style>
