export const createPopupCommentsTemplate = (film) => {
  const {comments} = film;

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${comments[0].emoji}.png" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${comments[0].text}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comments[0].author}</span>
      <span class="film-details__comment-day">${comments[0].text}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`;
};