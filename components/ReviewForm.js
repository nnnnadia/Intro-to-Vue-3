app.component('review-form', {
  template: /*html*/ `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <p>Would you recommend this product?</p>
      <label for="recommend-yes">
        <input id="recommend-yes" v-model="recommend" type="radio" name="recommend" value="yes" />Yes
      </label>
      <label for="recommend-no">
        <input id="recommend-no" v-model="recommend" type="radio" name="recommend" value="no" />No
      </label>
  
      <input class="button" type="submit" value="Submit">
    </form>
  `,
  data() {
    return ({
      name: '',
      review: '',
      rating: null,
      recommend: null,
    });
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.review || !this.rating || !this.recommend) {
        alert('Review is incomplete. Please fill out every field.');
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend === "yes" ? true : false,
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = null;
    },
  },
});
