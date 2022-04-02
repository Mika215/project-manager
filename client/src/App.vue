<template>
  <div id="app">
    <div class="container">
      <h1>Sayl Project Manager</h1>
      <add-project></add-project>
      <filter-projects></filter-projects>
      <projects></projects>
    </div>
</div>
</template>

<script>

import AddProject from './components/AddProject.vue'
import FilterProjects from './components/FilterProjects.vue'
import Projects from './components/Projects.vue'

export default{
  name:'App',
  components:{
    AddProject,
    FilterProjects,
    Projects,
  }
}
</script>

<style lang="scss">

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
  
}
</style>
