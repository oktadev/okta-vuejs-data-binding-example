<template>
  <div>
    <h1>Data Binding with Vue.js</h1>
    <div>
      <b-card no-body>
        <table border="1">
          <tr>
            <td align="right">ary:</td>
            <td align="left">{{ary}}</td>
          </tr>
          <tr>
            <td align="right">obj:</td>
            <td align="left">{{obj}}</td>
          </tr>
          <tr>
            <td align="right">Add to Ary:</td>
            <td align="left">
              <b-button @click="addAry" variant="success" class="m-1">add</b-button>
              <input type="text" v-model="addAryValue" placeholder="elem to add">
            </td>
          </tr>
          <tr>
            <td align="right">Del from Ary:</td>
            <td align="left"><b-button @click="delAry" variant="danger" class="m-1">del</b-button></td>
          </tr>
          <tr>
            <td align="right">Add to Obj:</td>
            <td align="left">
              <b-button @click="addObj" variant="success" class="m-1">add</b-button>
              <input type="text" v-model="addObjKey" placeholder="key"><input type="text" v-model="addObjValue" placeholder="value">
            </td>
          </tr>
          <tr>
            <td align="right">Del from Obj:</td>
            <td align="left">
              <b-button @click="delObj" variant="danger" class="m-1">del</b-button>
              <input type="text" v-model="delObjKey" placeholder="name">
            </td>
          </tr>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Home',
    data() {
      return {
        addAryValue: '',
        addObjKey: '',
        addObjValue: '',
        delObjKey: ''
      }
    },
    methods: {
      addAry: function () {
        this.$store.commit('addAry', this.addAryValue)
      },
      delAry: function () {
        this.$store.commit('delAry')
      },
      addObj: function () {
        this.$store.commit('addObj', {key: this.addObjKey, value: this.addObjValue})
      },
      delObj: function () {
        this.$store.commit('delObj', this.delObjKey)
      }
    },
    computed: mapState([
      'ary', 'obj'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    padding: 5px;
  }
</style>
