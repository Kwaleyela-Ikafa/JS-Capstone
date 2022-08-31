import _ from 'lodash';
import './style.css';
import { getApi } from './assets/modules/quotesApi';



window.addEventListener('load', () => {
    getApi()
  })
 