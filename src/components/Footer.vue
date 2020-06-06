<template>
  <footer>
    <div class="first">
      <b-container>
        <b-row>
          <b-col>
            <div class="footer-links">
              <router-link to="#">Gifts</router-link>
              <router-link to="#">Gallery</router-link>
              <router-link to="#">Contact us</router-link>
              <router-link to="#">About us</router-link>
            </div>
          </b-col>
          <b-col>
            <div class="footer-links">
              <router-link to="#">Privacy Policy</router-link>
              <router-link to="#">Terms &#38; Conditions</router-link>
              <router-link to="#">Contact</router-link>
              <router-link to="#">About us</router-link>
            </div>
          </b-col>
          <b-col>
            <div class="text">
              <div class="logo">
                <img src="../assets/img/logo.png" />
                <p>Lovely Gifts</p>
              </div>
              <div class="body">
                <p>Your ultimate source of amazing gifts for the people that really matter...</p>
              </div>
              <div class="socials">
                <a href="https://linkedin.com/in/ericmcwinner">
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
                <a href="https://instagram.com/ericmcwinner">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="https://twitter.com/ericmcwinner">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="second">
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="content">
              <p class="copyright">&copy; Copyright {{currentYear}} Eric McWinNEr</p>
              <p class="tools">
                Built with
                <img src="../assets/img/logo.png" /> +
                <img src="../assets/logo.png" />
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear: () => new Date().getFullYear()
  }
};
</script>

<style scoped lang="less">
footer {
  .first {
    width: 100%;
    background-color: #fcfcfc;
    padding-top: 6rem;
    padding-bottom: 4rem;
    * {
      font-family: "Muli", sans-serif;
      font-weight: 500;
      color: #333;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 15px;
        color: #444;
      }
    }

    .text {
      .logo {
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
        p {
          margin: 0;
          margin-bottom: 3px;
          font-size: 1.35rem;
          font-weight: 800;
        }
        img {
          margin-right: 15px;
          height: 1.9rem;
          width: auto;
        }
      }
      .body {
        p {
          color: #666;
          line-height: 180%;
        }
      }
      .socials {
        display: flex;
        a {
          font-size: 1.3rem;
          margin-right: 20px;
          * {
            color: #666;
          }
        }
      }
    }
  }
  .second {
    border-top: 3px solid #efefef;
    background-color: white;
    padding: 1.4rem 2.2rem;
    align-content: center;
    p {
        margin: 0;
    }
    .content {
      display: flex;
      justify-content: space-between;
      font-family: "Muli", sans-serif;
      font-weight: bold;
      color: #444;
      img {
        height: 1.4rem;
        width: auto;
      }
    }
  }
}
</style>
