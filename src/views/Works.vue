<template>
  <div style="margin: 0 25px 100px 25px;">
    <div class="pagetitle">WORKS</div>
    <div class="container">
      <!-- make a for loop here -->
      <a href="https://www.scaleway.com/en/dedibox/" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/scaleway.png"
            style="display:block;"
            @mouseover="doTransform($event, 'scaleway')"
            @mouseout="resetElem($event, 'scaleway')"
          />
          <div class="gallery-overlay" ref="scaleway">
            <div class="gallery-text">
              <h3>Scaleway Cloud</h3>
              <p>
                Cloud Hosting. Development
                <br />Frontend and backend
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.scaleway.com/en/c14-cold-storage/" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/scaleway_storage.png"
            style="display:block;"
            @mouseover="doTransform($event, 'scaleway_storage')"
            @mouseout="resetElem($event, 'scaleway_storage')"
          />
          <div class="gallery-overlay" ref="scaleway_storage">
            <div class="gallery-text">
              <h3>Online.net</h3>
              <p>
                Cold Storage archiving
                <br />Development backend
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://www.nerim.com/heberger/cloud-public" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/nerim.png"
            style="display:block;"
            @mouseover="doTransform($event, 'nerim')"
            @mouseout="resetElem($event, 'nerim')"
          />
          <div class="gallery-overlay" ref="nerim">
            <div class="gallery-text">
              <h3>Nerim.com</h3>
              <p>
                Development
                <br />frontend backend
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://www.gandi.net/en" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/gandi.png"
            style="display:block;"
            @mouseover="doTransform($event, 'gandi')"
            @mouseout="resetElem($event, 'gandi')"
          />
          <div class="gallery-overlay" ref="gandi">
            <div class="gallery-text">
              <h3>Gandi.net</h3>
              <p>
                Domains registrar
                <br />Development backend
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://status.gandi.net/" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/gandi_status.png"
            style="display:block;"
            @mouseover="doTransform($event, 'gandi_status')"
            @mouseout="resetElem($event, 'gandi_status')"
          />
          <div class="gallery-overlay" ref="gandi_status">
            <div class="gallery-text">
              <h3>Gandi Network Status</h3>
              <p>
                Development
                <br />frontend backend
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://www.fr.cpm-int.com/" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/cpm.png"
            style="display:block;"
            @mouseover="doTransform($event, 'cpm')"
            @mouseout="resetElem($event, 'cpm')"
          />
          <div class="gallery-overlay" ref="cpm">
            <div class="gallery-text">
              <h3>CPM France</h3>
              <p>
                Merchandising
                <br />Users management backend
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.bata.com/" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/bata.png"
            style="display:block;"
            @mouseover="doTransform($event, 'bata')"
            @mouseout="resetElem($event, 'bata')"
          />
          <div class="gallery-overlay" ref="bata">
            <div class="gallery-text">
              <h3>Bata Switzerland</h3>
              <p>
                R&D for a customers
                <br />management backend
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.visapourlimage.com/festival/projections" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/visa.png"
            style="display:block;"
            @mouseover="doTransform($event, 'visa')"
            @mouseout="resetElem($event, 'visa')"
          />
          <div class="gallery-overlay" ref="visa">
            <div class="gallery-text">
              <h3>Photography</h3>
              <p>
                Visa pour l'image 2019
                <br />Photo screening
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://op.europa.eu/en/home" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/pub_europa.png"
            style="display:block;"
            @mouseover="doTransform($event, 'pub_europa')"
            @mouseout="resetElem($event, 'pub_europa')"
          />
          <div class="gallery-overlay" ref="pub_europa">
            <div class="gallery-text">
              <h3>EUROPA Publications Office of the EU</h3>
              <p>
                R&D Backend
                <br />Software testing
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://en.wikipedia.org/wiki/Internet_Memory_Foundation" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/eaf.png"
            style="display:block;"
            @mouseover="doTransform($event, 'eaf')"
            @mouseout="resetElem($event, 'eaf')"
          />
          <div class="gallery-overlay" ref="eaf">
            <div class="gallery-text">
              <h3>European Archive Foundation</h3>
              <p>Development of web crawlers - Archiving</p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://twelvepics.com" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/twelvepics.png"
            style="display:block;"
            @mouseover="doTransform($event, 'twelvepics')"
            @mouseout="resetElem($event, 'twelvepics')"
          />
          <div class="gallery-overlay" ref="twelvepics">
            <div class="gallery-text">
              <h3>Twelvepics.com</h3>
              <p>WIP - Design and development</p>
            </div>
          </div>
        </div>
      </a>

      <a href="https://github.com/twelvepics" target="_blank">
        <div style="position:relative;">
          <img
            src="/img/github.png"
            style="display:block;"
            @mouseover="doTransform($event, 'github')"
            @mouseout="resetElem($event, 'github')"
          />
          <div class="gallery-overlay" ref="github">
            <div class="gallery-text">
              <h3>My Github</h3>
              <p>
                Current projects
                <br />Experiments
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    doTransform(event, elemRef) {
      console.log("#--- Should transform ---#");
      console.log(event.target);
      const elem = this.$refs[elemRef];
      elem.style.transform = "scale(1)";
      elem.style.opacity = 1;
    },
    resetElem(event, elemRef) {
      console.log("#--- Should reset ---#");
      console.log(event.target);
      const elem = this.$refs[elemRef];
      elem.style.transform = "scale(0.7)";
      elem.style.opacity = 0;
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

////////////////////////////////////
// griding
////////////////////////////////////
.container {
  max-width: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

////////////////////////////////////
// bubbling
////////////////////////////////////
.gallery-overlay {
  text-align: center;
  pointer-events: none;
}
.gallery-overlay {
  position: absolute;
  left: 20%;
  top: 12px;
  right: 20%;
  bottom: 12px;
  background: rgba(16, 70, 140, 0.8);
  vertical-align: center;
  -webkit-align-items: center;
  align-items: center;
  text-align: center;
  border-radius: 400px;
  opacity: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: scale(0.8);
  transform: scale(0.7);
}
// .gallery-overlay:hover {
//   opacity: 1;
//   transform: scale(1);
// }

.gallery-overlay h3 {
  width: 100%;
  font: 18px "HelveticaNeue_Medium", Arial;
  color: #fff;
  margin: 0 0 5px 0;
  font-weight: bold;
}
.gallery-text {
  padding: 20px;
  margin-top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.gallery-text p {
  font: 14px "HelveticaNeue_Thin", Arial;
  color: #fff;
  margin: 0px;
  padding: 0px;
  text-align: center;
  display: block;
  width: 100%;
  position: relative;
}

img {
  border: 1px solid #bbb;
}
</style>