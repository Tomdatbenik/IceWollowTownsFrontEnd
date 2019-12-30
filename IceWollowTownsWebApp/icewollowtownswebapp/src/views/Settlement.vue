<template>
  <div class="row">
    <div class="col-12">
      <div class="card rounded">
        <div class="card-header">
          <div class="card-title">
            <h4 class="display-4">Settlement</h4>
          </div>
        </div>
        <div class="card-body">
           <div v-for="(goldmine,index) in $store.getters.getSettlement.goldmines" :key="index">
                <p>Gold income: {{index + 1}}: {{goldmine.name}} lv.{{goldmine.level}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      token: null
    };
  },
  name: "Settlement",
  components: {},
  mounted: function() {},
  methods: {}
};
</script>
