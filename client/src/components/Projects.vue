<template>
 <div>
    <h3>List of Projects</h3>
    <div class="projects">
        <div  @dblclick="toggleRelease(project.id)" :class="!project.released? 'released':'project'" v-for="project in allProjects" :key="project.id">

                <h4>{{project.title}}</h4>
                <li>{{project.description}}</li>
                <p style="fontStyle:italic">{{project.auther}}</p>
                <button class="btn"  @click="handleDelete(project.id)">Delete</button>
        </div>

    </div>
</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    name:'Projects',
    methods:{
        ...mapActions(['getAllProjects','handleRelease','deleteById']),

        toggleRelease(projectId){
            this.handleRelease(projectId)

        },
        handleDelete(projectId){
            this.deleteById(projectId)

        }

    },
    computed:{
        ...mapGetters([
            'allProjects'
        ])
    },
    created(){
        this.getAllProjects()

    }
}
</script>

<style scoped>

.projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.project {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
.released{
    border: 1px solid #ccc;
    background: #4a5a53;
    color:white;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}

.btn{
  flex: 2;
  background:rgb(35, 54, 42);
  
  /* border: 1px rgb(14, 24, 44) solid; */
  border: none;
  cursor: pointer;
  font-weight: 700;
  width:40%;
  padding: 3.8px 8px;
  color:rgb(157, 161, 161);
  
}
.btn:hover{
    background:rgb(126, 27, 2);
    color: #fff;
}

li{
    list-style-type: none;
    align-items: center;
    align-content: center;
}

</style>