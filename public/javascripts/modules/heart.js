import axios from 'axios';
import { $ } from './bling';

async function ajaxHeart(e) {
  e.preventDefault();

  try {
    const { data } = await axios.post(this.action);
    const isHearted = this.heart.classList.toggle('heart__button--hearted')
    $('.heart-count').textContent = data.hearts.length;
    if (isHearted) {
      this.heart.classList.add('heart__button--float');
      setTimeout(() => this.heart.classList.remove('heart__button--float'), 2500);
    }
  } catch (error) {
    console.error(error);
  }
}

export default ajaxHeart;
