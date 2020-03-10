<template>
  <div>
    <div class="pagetitle">SKILLS</div>
    <div class="container">
      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>UX/UI Design</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >A well designed interface is a joy to your users or employees. I like creating pleasant and easy to use websites and administration interfaces.</span>
            <br />
            <span>#Sketch #Photoshop #Illustrator</span>
          </p>
        </div>
      </article>
      <!-- -->

      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>Frontend development</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >I am very experienced in frontend programming. From basic landing page to complex large-scale business applications.</span>
            <br />
            <span>#HTML5 #CSS3 #Javascript #Vuejs #SPAs #Responsive</span>
          </p>
        </div>
      </article>
      <!-- -->

      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>Backend Development</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >Nowadays backend programming is architecturing, building and deploying APIs responding to different front clients WEB, mobile, IOT... I do that.</span>
            <br />
            <span>#Python #Nodejs #Django #Expressjs</span>
          </p>
        </div>
      </article>
      <!-- -->

      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>Databases</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >Modeling datas, databases layer, administration, SQL as well as NoSQL.</span>
            <br />
            <span>#Postgres #ArangoDB #CouchDB #Redis</span>
          </p>
        </div>
      </article>
      <!-- -->

      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>Linux server administration</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >Linux servers installation, administration, security, backup. Software installation. Websites deployment.</span>
            <br />
            <br />
            <span>#Ubuntu #Debian #Nginx</span>
          </p>
        </div>
      </article>
      <!-- -->
      <!-- -->
      <article class="message is-info">
        <div class="message-header">
          <p>Mobile apps</p>
        </div>
        <div class="message-body">
          <p>
            <span
              class="body"
            >Currently experimenting with mobile apps development with Flutter. Work in progress :)</span>
            <br />
            <span>#Flutter #Android #IOS</span>
          </p>
        </div>
      </article>
      <!-- -->

      <div></div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped lang="scss">
.pagetitle {
  // margin: 3rem 0 4rem 0;
  text-align: center;
  font-size: 1.6rem;
  padding: 3rem 0 1rem 0;
  background-image: url("/img/sep.png");
  background-repeat: no-repeat;
  background-position: bottom center;
}
.message.is-info {
  box-shadow: 5px 5px 8px #ccc;
  background-color: #ddd;
}
.body {
  color: #333;
}
.container {
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.5rem;
  // margin: 0 1rem 0 1rem;
}
@media only screen and (max-width: 768px) {
  .container {
    margin: 0 1rem 0 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>