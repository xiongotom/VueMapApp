<template>
  <div>
    <span>hello piazza</span>
    <piazza :widgets="widgets"></piazza>
  </div>
</template>
<script>
import Piazza from '../piazza/Piazza'
export default {
  name: 'test-piazza',
  components: {
    'piazza': Piazza
  },
  data() {
    return  {
      widgets: [
        {
          name: 'tinput',
          label: 'input test',
          url: '../testComp/TestInput.vue'
        },
        {
          name: 'tbutton',
          label: 'input button',
          url: '/components/testComp/TestButton'
        }
      ]
    }
  }
}
</script>
