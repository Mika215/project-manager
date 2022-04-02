<template>
  <div>
    <div class="add-project">
      <form @submit="handleSubmit">
        <input type="text" v-model="title" placeholder="Add Project Title...">
          <input type="text" v-model="description" placeholder="Add Project Description...">
        <input type="text" v-model="auther" placeholder="Add Project Auther...">
  
        <button class="btn">Submit</button>
     
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions } from 'vuex';
export default {
    name:'AddProject',
    data(){
      return{
       
          id:'',
          title:'',
          description:'',
          auther:'',
          released:false
     
      }
    },
        methods:{
        ...mapActions(['addProject']),
        handleSubmit(e){
          e.preventDefault();
          const draftProject={
          id:Date.now(),
          title:this.title,
         description:this.description,
          auther:this.auther,
          released:this.released
           } 
       
          this.addProject(draftProject)
          this.id='',
           this.title='',
         this.description='',
          this.auther='',
          this.released=false
        }
    },


}
// ! id:Date.now(),

</script>

<style>

form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #4a5a53;;
  outline: 0;
  margin-right: 10px;
}
/* input[type="submit"] */

.btn{
  flex: 2;
  background:rgb(14, 24, 44);
  color: #fff;
  border: 1px rgb(14, 24, 44) solid;
  cursor: pointer;
  font-weight: 700;
  width:100%;
}

</style>