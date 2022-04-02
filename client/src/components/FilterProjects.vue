<template>
<div>
    <h3>Filter Projects</h3>  
<div class="select-container">
    <select name="limit" id="limit" @change="filteredByLimit($event)" >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="70">70</option>
            <option value="100">100</option>
    </select>
 
    <select name="auther" id="auther" @change="filteredByAuther($event)">

            <option value="Benoit">Benoit</option>
            <option value="Gereet">Geert</option>
            <option value="Marco">Marco</option>
            <option value="Michael">Michael</option>
            <option value="Sebastien">Sebastien</option>
            <option value="Valentin">Valentin</option>
    </select>

  
    <select name="released" id="released" @change="filteredByRelease($event)">
            <option value=true>Released</option>
            <option value=false>On-Development</option>
    </select>
    </div>
</div>
</template>

<script>

import { mapActions } from "vuex";

export default {
    name:'FilterProjects',


/**
         * http://localhost:5000/projects?released=false
         * http://localhost:5000/projects?released=true
         * http://localhost:5000/projects?auther=valentin
         * http://localhost:5000/projects?_limit=5
*/


            
methods:{


...mapActions(['filteredByAuther','filteredByLimit','filteredByRelease'])
          
         
      
}
}
</script>

<style scoped>
select{
 margin-right:10px;
}

</style>
