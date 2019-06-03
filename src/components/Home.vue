<template>
  <div>
    <h1>Data Binding with Vue.js</h1>
    <div>
      <b-card no-body>
          <b-tabs pills card v-model="tabIndex">
              <b-tab title="Global" active :title-link-class="linkClass(0)">
                  <DataBindingGlobal/>
              </b-tab>
              <b-tab title="Storage Pattern" :title-link-class="linkClass(1)">
                  <DataBindingStorage/>
              </b-tab>
              <b-tab title="Vuex" :title-link-class="linkClass(2)">
                  
              </b-tab>
          </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
  import DataBindingGlobal from '@/components/data-binding-global/DataBindingGlobal'
  import DataBindingStorage from '@/components/data-binding-storage/DataBindingStorage'

  export default {
    name: 'Home',
    components: {
        DataBindingGlobal, DataBindingStorage
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass: function (idx) {
          if (this.tabIndex === idx) {
              return ['bg-primary', 'text-light']
          } else {
              return ['bg-light', 'text-primary']
          }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
