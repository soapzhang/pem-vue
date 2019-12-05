<template>
  <div>
    <h2>{{msg1}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
      data (){
          return {
            msg:'hello Vuex',
        }
      },
      computed:{
        msg1(){
          return this.msg+" tototot"
        },
        // ...mapState(['count']),
        count(){
          return this.$store.state.a.count;
        },
        ...mapGetters(['count'])
      },

      methods:{
        ...mapMutations(["add","reduce"]),
        ...mapActions(['addAction','reduceAction'])
      }
    }
</script>

<style scoped>

</style>
