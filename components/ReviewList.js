app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: /*html*/ `
    <div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars and {{ review.recommend ? "does recommend it" : "doesn't recommend it" }}
          <br/>
          "{{ review.review }}"
        </li>
      </ul>
    </div>
  `
});