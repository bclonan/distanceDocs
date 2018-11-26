<template>
  <section>
    <div class="container">
      <div class="reqData">
        <p>Hub Endpoint</p>
        <br/>
        <input type="text" name="gopoint" value="Mickey">
        <form>
          First name:<br>
          <input type="text" name="firstname" value="Mickey">
          <br> Last name:<br>
          <input type="text" name="lastname" value="Mouse">
          <br><br>
          <input type="submit" value="Submit">
        </form>

      </div>

    </div>

  </section>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        postBody: "",
        resp: null,
        errors: [],
        goEndpoint: null
      };
    },
    methods: {
      // Pushes posts to the server when called.
      sendPost() {
        axios
          .post(`http://jsonplaceholder.typicode.com/posts`, {
            body: this.postBody
          })
          .then(response => {
            this.resp = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });

        // async / await version (postPost() becomes async postPost())
        //
        // try {
        //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
        //     body: this.postBody
        //   })
        // } catch (e) {
        //   this.errors.push(e)
        // }
      }
    }
  };
</script>