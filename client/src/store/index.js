import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
  },
  getters: {
    allProjects: (state) => state.projects,
  },
  //ACTIONS AFFECT DATA INS THE SERVER
  actions: {
    async getAllProjects({commit}) {
      const res = await axios.get("api/projects");
      if (res.status !== 200) {
        alert(
          "Something wrong!\nMake sure your server is running and you are connected to the internet"
        );
      }
      const fetchedData = await res.data;
      commit("setProjects", fetchedData);
      // console.log(fetchedData);
    },

    async deleteById({commit}, projectId) {
      if (confirm("Are you sure\nyou want to delete this Project?")) {
        const res = await axios.delete(`api/projects/${projectId}`);
        res.status === 200
          ? commit("filterDeleted", projectId)
          : alert(`Error while deleteing project with Id No: ${projectId}`);
      }
    },

    async handleRelease({commit}, projectId) {
      try {
        const res = await axios.get(`api/projects/${projectId}`);
        if (res.status !== 200) {
          alert(
            "Something wrong!\nMake sure your server is running and you are connected to the internet"
          );
        }

        const pro2BUpdated = await res.data;
        const updatedProject = {
          ...pro2BUpdated,
          released: !pro2BUpdated.released,
        };
        // console.log(updatedProject)
        const putRes = await axios.put(
          `api/projects/${projectId}`,
          updatedProject
        );

        const finalProject = await putRes.data;
        commit("setReleased", finalProject);
      } catch (err) {
        console.log(err);
      }
    },

    async addProject({commit}, draftProject) {
      const res = await axios.post("api/projects", draftProject);
      const newProject = await res.data;
      commit("postProject", newProject);
      // console.log( newProject);
    },

    async filteredByAuther({commit}, e) {
      const currentAuther =
        e.target.options[e.target.options.selectedIndex].innerText;

      const response = await axios.get(`api/projects?auther=${currentAuther}`);
      const autherRes = await response.data;
      commit("setProjects", autherRes);
    },

    async filteredByLimit({commit}, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );

      const response = await axios.get(`api/projects?_limit=${limit}`);

      const limitedRes = await response.data;
      commit("setProjects", limitedRes);
    },

    async filteredByRelease({commit}, e) {
      const valueConverter = (a) => {
        if (a == "Released") {
          a = true;
        } else {
          a = false;
        }
        return a;
      };
      const releaseStatus = await valueConverter(
        e.target.options[e.target.options.selectedIndex].innerText
      );

      const response = await axios.get(
        `api/projects?released=${releaseStatus}`
      );

      const releaseRes = await response.data;
      commit("setProjects", releaseRes);
    },
  },

  //MUTATION DETERMINES WHAT SHOULD BE RENDERED TO THE CLIENT
  mutations: {
    setProjects: (state, fetchedData) => (state.projects = fetchedData),
    postProject: (state, newProject) => state.projects.push(newProject),
    filterDeleted: (state, projectId) =>
      (state.projects = state.projects.filter(
        (project) => project.id !== projectId
      )),
    setReleased: (state, finalProject) =>
      (state.projects = state.projects.map((project) =>
        project.id === finalProject.id
          ? {...project, released: finalProject.released}
          : project
      )),
  },

  modules: {
    name: "projects",
  },
});
