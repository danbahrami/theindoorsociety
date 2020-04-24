<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import AddActivity from "./routes/AddActivity.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="activity/new"><AddActivity /></Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>
