<template>
  <div id="loading">
    <div class="loader">
      <div class="loading-1"></div>
      <div class="loading-2">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Loading',
  components: {
  },
  data () {
    return {}
  },
  props: {
    text: { type: String, default: '加载中' },
    size: { type: Number, default: 140 }
  }
}
</script>
<style lang="scss" scoped>
#loading {
  background-color: white;
  // background: rgba(75, 75, 76, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    width: 100px;
    margin: 50px auto 70px;
    position: relative;
  }

  .loader .loading-1 {
    position: relative;
    width: 100%;
    height: 8px;
    border: 1px solid #40ba84;
    border-radius: 10px;
    animation: turn 4s linear 1.75s infinite;
  }

  .loader .loading-1:before {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 100%;
    background: #40ba84;
    box-shadow: 5px 0px 15px 0px #40ba84;
    animation: load 2s linear infinite;
    box-sizing: border-box;
  }

  .loader .loading-2 {
    width: 100%;
    position: absolute;
    top: 10px;
    color: #40ba84;
    font-size: 16px;
    text-align: center;
    animation: bounce 2s linear infinite;
  }

  @keyframes load {
    0% {
      width: 0%;
    }

    87.5%,
    100% {
      width: 100%;
    }
  }

  @keyframes turn {
    0% {
      transform: rotateY(0deg);
    }

    6.25%,
    50% {
      transform: rotateY(180deg);
    }

    56.25%,
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      top: 15px;
    }

    12.5% {
      top: 35px;
    }
  }
}
</style>
