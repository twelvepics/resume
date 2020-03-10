<template>
  <div style="margin-bottom:50px;">
    <div class="about_title">
      <div>
        <img src="/img/me.jpg" alt="me" />
      </div>
      <div class="column">I am an experienced web frontend/backend developer from France</div>
    </div>
    <div class="columns about_3 is-variable is-6">
      <div class="column">
        <h1 class="title yolo">&#128100;</h1>
        <p
          class="text"
        >I work as a freelance developer. My skills: designing great web user interfaces, front end and back end programming. Currently getting into mobile apps development too.</p>
      </div>
      <div class="column">
        <h1 class="title yolo">&#127853;</h1>
        <p
          class="text"
        >My goal is to contribute to products that solve real-world problems, improve people's life and make the world a better place. I am passionate about innovative and useful projects.</p>
      </div>
      <div class="column">
        <h1 class="title yolo">&#10084;&#65039;</h1>
        <p
          class="text"
        >I love travelling, meeting new people, discovering new places. I am a photographer too, having different points of interest and seeing new things is a source of inspiration.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about_title {
  text-align: center;
  color: #216db3;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
}

.about_title img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 40px 0 40px 0;
}
.columns.about_3 {
  margin: 3rem 3rem 0 4rem;
  text-align: center;
}
.about_3 h1 {
  font-size: 2.8rem;
  margin: 0rem 0 2rem 0;
}

.about_3 .text {
  font-size: 1.1rem;
  line-height: 2rem;
}
.yolo {
  background-image: url("/img/sep.png");
  background-repeat: no-repeat;
  background-position: bottom center;
  padding-bottom: 1.8rem;
}

@media only screen and (max-width: 768px) {
  .about_title {
    text-align: center;
    color: #216db3;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }

  .about_title img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin: 40px 0 25px 0;
  }
  .columns.about_3 {
    margin: 1.5rem 0 0 0;
    text-align: center;
  }
  .about_3 h1 {
    font-size: 2.8rem;
    margin: 0rem 0 1.5rem 0;
  }

  .about_3 .text {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  .yolo {
    background-image: url("/img/sep.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    padding-bottom: 1.8rem;
  }
}
</style>