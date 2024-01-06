import { CountUp } from './countUp.js';

window.addEventListener('load', () => {
  const countUp1 = new CountUp('counter-item-1', 800)
  countUp1.start()
})