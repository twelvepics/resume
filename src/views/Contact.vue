<template>
  <div class="main">
    <div class="section">
      <div class="pagetitle">CONTACT ME</div>

      <div class="mailme">
        <p>
          <a href="mailto:masiero.alain@gmail.com?subject=Hi Alain">
            <font-awesome-icon :icon="['far', 'envelope']" size="3x" :style="{ color: '#eff0eb' }"></font-awesome-icon>
          </a>
        </p>
        <p class="mtxt">
          <a href="mailto:masiero.alain@gmail.com?subject=Hi Alain">masiero.alain@gmail.com</a>
        </p>
      </div>
    </div>
    <div class="footer">ⒸAlain Masiero - Built with Vue.js</div>
  </div>
</template>

<style scoped lang="scss">
.pagetitle {
  margin: 3rem 0 6rem 0;
  text-align: center;
  font-size: 1.6rem;
  padding: 0 0 1rem 0;
  background-image: url("/img/sep.png");
  background-repeat: no-repeat;
  background-position: bottom center;
}
.mailme {
  text-align: center;
  padding-top: 0.9rem;
  margin-top: 10rem;
  position: relative;
  background: url(/img/email_bg.png) no-repeat center 0;
  background-size: 80px 80px;
}
.mtxt {
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: #216db3;
}

/************** layout ***********/
.main {
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
}

.section {
  flex: 1;
  padding: 0;
}
.footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #216db3;
  margin: 0 25px 0 25px;
  color: #999;
}

@media only screen and (max-width: 768px) {
  .mtxt {
    margin-top: 2.5rem;
    font-size: 1.3rem;
    color: #216db3;
  }

  .mailme {
    text-align: center;
    padding-top: 0.9rem;
    margin-top: 6rem;
    position: relative;
    background: url(/img/email_bg.png) no-repeat center 0;
    background-size: 80px 80px;
  }
}
</style>