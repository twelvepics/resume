<template>
  <div style="margin-bottom:80px;">
    <div class="pagetitle">TIMELINE</div>
    <div
      class="container work"
      @mouseover="doTransform('freelance_ref', 'freelance_date_ref')"
      @mouseout="resetElem('freelance_ref', 'freelance_date_ref')"
    >
      <!-- make a for loop here -->
      <div class="left">
        <h1>Freelance developer</h1>
        <p>Starting a career as a freelance engineer</p>
      </div>
      <div class="middle">
        <i ref="freelance_ref"></i>
      </div>
      <div class="right-date" ref="freelance_date_ref">
        <h4 ref="freelance_date_ref">January 2020</h4>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2019</p>
    </div>
    <!-- -->
    <div
      class="container work"
      @mouseover="doTransform('personal_ref', 'personal_date_ref')"
      @mouseout="resetElem('personal_ref', 'personal_date_ref')"
    >
      <div class="left-date" ref="personal_date_ref">
        <h4>October 2019</h4>
      </div>
      <div class="middle">
        <i ref="personal_ref"></i>
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
    <div
      class="container event"
      @mouseover="doTransform('perpignan_ref', 'perpignan_date_ref')"
      @mouseout="resetElem('perpignan_ref', 'perpignan_date_ref')"
    >
      <div class="left">
        <h1>Visa pour l'image Perpignan</h1>
        <p>Screening of my photos</p>
      </div>
      <div class="middle">
        <i ref="perpignan_ref"></i>
      </div>
      <div class="right-date" ref="perpignan_date_ref">
        <h4>September 2019</h4>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2018</p>
    </div>
    <!--  -->
    <div
      class="container work"
      @mouseover="doTransform('online_ref', 'online_date_ref')"
      @mouseout="resetElem('online_ref', 'online_date_ref')"
    >
      <div class="left-date" ref="online_date_ref">
        <h4>January 2018</h4>
      </div>
      <div class="middle pb100">
        <i ref="online_ref"></i>
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
    <div
      class="container other"
      @mouseover="doTransform('marriage_ref', 'marriage_date_ref')"
      @mouseout="resetElem('marriage_ref', 'marriage_date_ref')"
    >
      <div class="left">
        <h1>Marriage</h1>
        <p>:)</p>
      </div>
      <div class="middle">
        <i ref="marriage_ref"></i>
      </div>
      <div class="right-date" ref="marriage_date_ref">
        <h4>November 2017</h4>
      </div>
    </div>
    <!-- -->
    <div
      class="container other"
      @mouseover="doTransform('father_ref', 'father_date_ref')"
      @mouseout="resetElem('father_ref', 'father_date_ref')"
    >
      <div class="left-date" ref="father_date_ref">
        <h4>October 2017</h4>
      </div>
      <div class="middle">
        <i ref="father_ref"></i>
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
    <div
      class="container work"
      @mouseover="doTransform('nerim_ref', 'nerim_date_ref')"
      @mouseout="resetElem('nerim_ref', 'nerim_date_ref')"
    >
      <div class="left">
        <h1>Nerim.com</h1>
        <p>
          Frontend / Backend developer
          <br />Internal admin. Cloud service
        </p>
      </div>
      <div class="middle pb100">
        <i ref="nerim_ref"></i>
      </div>
      <div class="right-date" ref="nerim_date_ref">
        <h4>March 2016</h4>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2015</p>
    </div>
    <!--  -->
    <div
      class="container work"
      @mouseover="doTransform('cpm_ref', 'cpm_date_ref')"
      @mouseout="resetElem('cpm_ref', 'cpm_date_ref')"
    >
      <div class="left-date" ref="cpm_date_ref">
        <h4>January 2015</h4>
      </div>
      <div class="middle pb100">
        <i ref="cpm_ref"></i>
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
    <div
      class="container work"
      @mouseover="doTransform('ea_ref', 'ea_date_ref')"
      @mouseout="resetElem('ea_ref', 'ea_date_ref')"
    >
      <div class="left">
        <h1>European archive</h1>
        <p>
          Frontend / Backend developer
          <br />Crawling and archiving the web
        </p>
      </div>
      <div class="middle pb100">
        <i ref="ea_ref"></i>
      </div>
      <div class="right-date" ref="ea_date_ref">
        <h4>February 2013</h4>
      </div>
    </div>
    <!-- -->
    <div class="year">
      <p>2012</p>
    </div>
    <!-- -->
    <div
      class="container work"
      @mouseover="doTransform('gandi_ref', 'gandi_date_ref')"
      @mouseout="resetElem('gandi_ref', 'gandi_date_ref')"
    >
      <div class="left-date" ref="gandi_date_ref">
        <h4>September 2012</h4>
      </div>
      <div class="middle pb100">
        <i ref="gandi_ref"></i>
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
    <div
      class="container event"
      @mouseover="doTransform('autod_ref', 'autod_date_ref')"
      @mouseout="resetElem('autod_ref', 'autod_date_ref')"
    >
      <div class="left">
        <h1>Web design and programming self education</h1>
        <p>Yep, I'm self taught</p>
      </div>
      <div class="middle">
        <i ref="autod_ref"></i>
      </div>
      <div class="right-date" ref="autod_date_ref">
        <h4>April 2010</h4>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  methods: {
    doTransform(targetRef, dateRef) {
      console.log("#--- Should transform ---#");
      console.log(dateRef);
      console.log(this.$refs[dateRef]);
      const bubble = this.$refs[targetRef];
      bubble.style.transform = "scale(1.3)";
      const date = this.$refs[dateRef];
      date.style.opacity = 1;
    },
    resetElem(targetRef, dateRef) {
      console.log("#--- Should reset ---#");
      const bubble = this.$refs[targetRef];
      bubble.style.transform = "scale(1)";
      const date = this.$refs[dateRef];
      date.style.opacity = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.pagetitle {
  margin: 3rem 0 4rem 0;
  text-align: center;
  font-size: 1.6rem;
  padding: 0 0 1rem 0;
  background-image: url("/img/sep.png");
  background-repeat: no-repeat;
  background-position: bottom center;
}

.container {
  max-width: none;
  display: grid;
  grid-template-columns: 1fr 25px 1fr;
  align-items: start;
}
.container .middle {
  background-image: url("/img/timeline_v.png");
  background-repeat: repeat-y;
  background-position: center;
  position: relative;
  height: 100%;
  padding-bottom: 80px;
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
  opacity: 1;

  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-transform: scale(1);
  transform: scale(1);
}

// .container i:hover {
//   transform: scale(1.3);
// }

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
.left-date {
  text-align: right;
  padding-right: 20px;
  color: #aaa;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
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
.right-date {
  text-align: left;
  padding-left: 20px;
  color: #aaa;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.left,
.left-date,
.middle,
.right,
.right-date {
  pointer-events: none;
}
.right h4 {
  color: #aaa;
  display: none;
}
.year {
  width: 80px;
  text-align: center;
  background-image: url("/img/timeline_v.png");
  background-repeat: repeat-y;
  background-position: center;
  padding: 0 0 45px 0;
  margin: auto;
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