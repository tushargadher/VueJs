import { createWebHistory, createRouter } from "vue-router";

//@ is alias to /src
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Job from "@/components/Jobs/Job.vue";
import jobDetails from "@/components/Jobs/JobDetails.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/job",
    name: "Job",
    component: Job,
  },
  //dyanmic routes
  {
    path: "/job/:id",
    name: "jobDetails",
    component: jobDetails,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/job",
  },
  //if user enter any other route display 404
  {
    // path: "*", Catch all routes ("*") must now be defined using a param with a custom regexp.
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// step to create routing
// 1.install package
// 2.crarte routes file
// 3. use router in using app.use(router)
// 4. add router-view in app.vue