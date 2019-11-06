<template>
  <div class="friend">
    <h1>{{ friend }}</h1>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'FriendList',
  props: {
    friend: null
  },
    mounted () {
    axios
      .get('http://localhost:8080/friend',{ params:{
          id: '0'
      }})
      .then(response => {
        this.friend = response.data.username
      })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
