const { createApp } = Vue;

createApp({
  data() {
    return {
      mails: [],
      numberMail: 10,
    };
  },

  methods: {
    generateRandomMail() {
      for (let i = 0; i < this.numberMail; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            console.log(response.data.response);
            console.log(i);

            const randomMail = response.data.response;

            this.mails.push(randomMail);
          });
      }
    },
  },

  mounted() {
    this.generateRandomMail();
  },
}).mount("#app");
