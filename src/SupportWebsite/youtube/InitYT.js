import { InitApp } from '../../app/appindex.js';
import { BootStrap } from '../../BootStrap.js';
import { GenerateCryptKey, paddingLeft, paddingRight, dateReviver, clone, ThemeCheck } from '../../library.js';

export function InitYT(messageposter) {
  const msg = messageposter;
  //Check Theme
  let WhiteTheme = ThemeCheck('html', 'rgb(249, 249, 249)');

  (function CheckChatInstanced() {
    if (/www\.youtube\.com\/watch\?v=/.exec(window.location.href) === null) {
      if (showalllog) console.log("not watch video.");
      setTimeout(CheckChatInstanced, 2000);
      return;
    }
    const ChatContainer = $(`ytd-live-chat-frame`);
    const defaultChat = $(`iframe`, ChatContainer);
    const PTTApp = $(`#PTTChat`, ChatContainer);
    if (PTTApp.length > 0) {
      if (showalllog) console.log("PTTApp already instanced.");
      setTimeout(CheckChatInstanced, 5000);
      return;
    }
    else if (defaultChat.length > 0) {
      if (showalllog) console.log("PTTApp frame instance!");
      ChatContainer.css({ "position": "relative" });

      //生出套件
      let isstream = checkvideotype();
      InitApp(ChatContainer, WhiteTheme, isstream, msg);
      setTimeout(CheckChatInstanced, 5000);
    }
    else {
      if (showalllog) console.log("watching video without chatroom.");
      setTimeout(CheckChatInstanced, 5000);
    }
  })();
  function checkvideotype() {
    const streambtncss = $('.ytp-live-badge').css("display");
    const logstr = [`$('.ytp-live-badge').css("display")`, streambtncss];
    if (simulateisstreaming) {
    } else if (streambtncss === "inline-block") {
      console.log("This video is streaming.", logstr);
      return true;
      //$(`#PTTConnect-Time-Setting`).addClass('d-none');
    }
    else if (streambtncss === "none") {
      console.log("This video is not streaming.", logstr);
      return false;
    }
  }
}