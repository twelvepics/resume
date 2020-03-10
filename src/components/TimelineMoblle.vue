<template>
  <div style="margin: 0 0 0 50px;">
    <div class="pagetitle">TIMELINE</div>
    <div class="container work">
      <!-- make a for loop here -->
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Freelance developer</h1>
        <p>Starting a career as a freelance engineer</p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2019</p>
    </div>
    <!-- -->
    <div class="container work">
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Personal project</h1>
        <p>
          Twelvepics.com
          <br />A photos stories telling website
        </p>
      </div>
    </div>
    <!-- -->
    <div class="container event">
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Visa pour l'image Perpignan</h1>
        <p>Screening of my photos</p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2018</p>
    </div>
    <!--  -->
    <div class="container work">
      <div class="middle pb100">
        <i></i>
      </div>
      <div class="right">
        <h1>Online.net / Scaleway</h1>
        <p>
          Frontend / Backend developer
          <br />Bare metal cloud and cold storage services
        </p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2017</p>
    </div>
    <!-- -->
    <div class="container other">
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Marriage</h1>
        <p>:)</p>
      </div>
    </div>
    <!-- -->
    <div class="container other">
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Fatherhood</h1>
        <p>:) :) :)</p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2016</p>
    </div>
    <!-- -->
    <div class="container work">
      <div class="middle pb100">
        <i></i>
      </div>
      <div class="right">
        <h1>Nerim.com</h1>
        <p>
          Frontend / Backend developer
          <br />Internal admin. Cloud service
        </p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2015</p>
    </div>
    <!--  -->
    <div class="container work">
      <div class="middle pb100">
        <i></i>
      </div>
      <div class="right">
        <h1>CPM omniservices</h1>
        <p>
          Backend developer
          <br />Application to manage CPM employees schedule and payroll
        </p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2013</p>
    </div>
    <!-- -->
    <div class="container work">
      <div class="middle pb100">
        <i></i>
      </div>
      <div class="right">
        <h1>European archive</h1>
        <p>
          Frontend / Backend developer
          <br />Crawling and archiving the web
        </p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2012</p>
    </div>
    <!-- -->
    <div class="container work">
      <div class="middle pb100">
        <i></i>
      </div>
      <div class="right">
        <h1>Gandi.net</h1>
        <p>
          Backend developer
          <br />Network status interface, Gandi domain names backend
        </p>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2010</p>
    </div>
    <!-- -->
    <div class="container event">
      <div class="middle">
        <i></i>
      </div>
      <div class="right">
        <h1>Web design and programming self education</h1>
        <p>Yep, I'm self taught</p>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<style scoped lang="scss">
.pagetitle {
  margin: 3rem 0 4rem 0;
  text-align: left;
  font-size: 1.6rem;
  padding: 0 0 1rem 1rem;
  background-image: url("/img/sep.png");
  background-repeat: no-repeat;
  background-position: bottom left;
}
.container {
  max-width: none;
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: start;
}
.container .middle {
  background-image: url("/img/timeline_v.png");
  background-repeat: repeat-y;
  background-position: center;
  position: relative;
  height: 100%;
  padding-bottom: 100px;
}
.container i {
  position: absolute;
  display: block;
  margin: auto;
  top: 0;
  left: 0;

  right: 0;
  width: 25px;
  height: 25px;
  border-radius: 100px;
  opacity: 0.8;
}

.container.work i {
  background: #5f6cd9;
}

.container.event i {
  background: orange;
}

.container.other i {
  background: green;
}

h1 {
  font-weight: bold;
}
.left {
  text-align: right;
  padding-right: 50px;
  background-image: url("/img/timeline_h.png");
  background-repeat: no-repeat;
  background-position: 100% 13px;
}
.left h1,
.right h1 {
  font-weight: bold;
}
.right {
  text-align: left;
  padding-left: 50px;
  background-image: url("/img/timeline_h.png");
  background-repeat: no-repeat;
  background-position: 0% 13px;
}
.year {
  width: 80px;
  text-align: center;
  background-image: url("/img/timeline_v.png");
  background-repeat: repeat-y;
  background-position: center;
  padding: 0 0 45px 0;
  margin: 0 0 0 -27px;
}
.year p {
  background-color: #eff0eb;
  color: #aaa;
  border: 1px solid #aaa;
}

.container .middle.pb100 {
  padding-bottom: 100px !important;
}
</style>