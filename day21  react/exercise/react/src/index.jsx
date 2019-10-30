import React from 'react';
import ReactDOM from 'react-dom';

import Background from './background/contact.jsx';
import './index.scss';
import './index.html';

class Back extends React.Component {
  render() {
    return (
      <>
      <Background/>
      </>
     
    );
  }
}

ReactDOM.render(<Back />, document.getElementById('app'));


/*         class App extends React.Component {
  render() {
    return (
      <>
      <Questions 
        question="Why are some people always single?" 
        answer="However she is dedicating her life to her academic studies and her dream to become a great heart-surgeon just like my dad. Alyhought she is very easy-going, a party person whenever she needs a break and also a cheerleader she never met someone at her level. I am genuinely happy she didn't waste her time on wrong people and I am pretty sure she’ll find her true soulmate one day."
      />
      <Questions 
        question="What is the biggest lie you ever told your significant other?" 
        answer="She found a condom in my bed.

        We’d only been dating a few weeks. So I had to think fast.
        
        And I did the only thing I 
        I lied."
      />
      </>
     
    );
  }
}
 */
/* ReactDOM.render(<App />, document.getElementById('app')); */
