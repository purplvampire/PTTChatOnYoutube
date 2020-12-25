import { logsetting } from './logsetting.js';
import { MessagePoster } from './MessagePoster.js';
import { HerfFilter } from './filter/HerfFilter.js';
import { ytfilter } from './youtube/ytfilter.js';
import { htfilter } from './holotools/htfilter.js';
import { blankfilter } from './blank/blankfilter.js';
//import { custom } from '../css/custom.css';
//dev use 

let devmode = true;
const defaultopen = false;
const disablepttframe = false;
const simulateisstreaming = false;
// add listener to get msg
let cryptkey;

(function () {
  let msg = new MessagePoster;
  let filters = [];
  filters.push(ytfilter);
  filters.push(htfilter);
  filters.push(blankfilter);
  HerfFilter(msg, filters);
})()