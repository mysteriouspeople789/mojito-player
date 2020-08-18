// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '540px',
    width: '960px',
    videoId: '-biOGdYiF-I',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      //'onPause': playVid
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  player.pauseVideo()
}

/*function playVid(event) {
  event.target.playVideo();
}*/

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
      player.seekTo(0);
      player.playVideo();
    }
}

let subtitles = {
  17: "",
  18: "ma fan gei wo de ai ren lai yi bei Mojito",
  23: "wo xi huan yue du ta wei xun shi de yan mou",
  27: "er wo de ka fei",
  29: "tang bu yong tai duo",
  31: "zhe shi jie yi jing yin wei ta tian de guo tou",
  35: "mei you gen ta xiao rong yi yang nong yu de xue qie",
  39: "jiu bie lang fei shi jian jie shao shou qi lai ba",
  43: "gong lang de bi hua",
  45: "jiu cheng de tu ya",
  47: "suo you se cai dou yin wei ta shuo bu chu hua",
  52: "zhe ai bu luo mu, wang le xin shi de guo du",
  56: "ni suo zai zhi chu, gu dan dou bei zheng fu",
  60: "tie zhu de zhao pai",
  62: "cuo luo zhe jiu xiang",
  64: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  68: "dang jie deng liang qi, Havana man bu",
  72: "zhe shi shi shang zui mei li de na shuang ren wu",
  76: "",
  94: "bin fen de lao ye che gen zhe zong lu yao yi",
  97: "zai zhe hai feng si ben man wu mu di",
  99: "gu dong shu tan man zhe shi guang xiang qi",
  100: "wo xiang shang bei zi shi bu shi jiu yu guo ni",
  103: "xuan xiao de hai bao tang zai, yong lan de ge lou yang tai",
  107: "er ni shi wen xue jia bi xia de na yi pian hai",
  110: "ma fan gei wo de ai ren lai yi bei Mojito",
  114: "wo xi huan yue du ta wei xun shi de yan mou",
  119: "er wo de ka fei",
  121: "tang bu yong tai duo",
  123: "zhe shi jie yi jing yin wei ta tian de guo tou",
  127: "zhe ai bu luo mu, wang le xin shi de guo du",
  131: "ni suo zai zhi chu, gu dan dou bei zheng fu",
  135: "tie zhu de zhao pai",
  138: "cuo luo zhe jiu xiang",
  139: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  143: "dang jie deng liang qi, Havana man bu",
  148: "zhe shi shi shang zui mei li de na shuang ren wu",
  152: "",
  160: "tie zhu de zhao pai",
  163: "cuo luo zhe jiu xiang",
  164: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  169: "dang jie deng liang qi, Havana man bu",
  173: "zhe shi shi shang zui mei li de na shuang ren wu"
}

let subtitles1 = {
  23: "ma fan gei wo de ai ren lai yi bei Mojito",
  27: "wo xi huan yue du ta wei xun shi de yan mou",
  29: "er wo de ka fei",
  31: "tang bu yong tai duo",
  35: "zhe shi jie yi jing yin wei ta tian de guo tou",
  39: "mei you gen ta xiao rong yi yang nong yu de xue qie",
  43: "jiu bie lang fei shi jian jie shao shou qi lai ba",
  45: "gong lang de bi hua",
  47: "jiu cheng de tu ya",
  52: "suo you se cai dou yin wei ta shuo bu chu hua",
  56: "zhe ai bu luo mu, wang le xin shi de guo du",
  60: "ni suo zai zhi chu, gu dan dou bei zheng fu",
  62: "tie zhu de zhao pai",
  64: "cuo luo zhe jiu xiang",
  68: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  72: "dang jie deng liang qi, Havana man bu",
  76: "",
  97: "bin fen de lao ye che gen zhe zong lu yao yi",
  99: "zai zhe hai feng si ben man wu mu di",
  100: "gu dong shu tan man zhe shi guang xiang qi",
  103: "wo xiang shang bei zi shi bu shi jiu yu guo ni",
  107: "xuan xiao de hai bao tang zai, yong lan de ge lou yang tai",
  110: "",
  114: "wo xi huan yue du ta wei xun shi de yan mou",
  119: "er wo de ka fei",
  121: "tang bu yong tai duo",
  123: "zhe shi jie yi jing yin wei ta tian de guo tou",
  127: "zhe ai bu luo mu, wang le xin shi de guo du",
  131: "ni suo zai zhi chu, gu dan dou bei zheng fu",
  135: "tie zhu de zhao pai",
  138: "cuo luo zhe jiu xiang",
  139: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  143: "dang jie deng liang qi, Havana man bu",
  148: "zhe shi shi shang zui mei li de na shuang ren wu",
  152: "",
  160: "tie zhu de zhao pai",
  163: "cuo luo zhe jiu xiang",
  164: "yi feng feng cheng shi, xian gei tian kong de qing shu",
  169: "dang jie deng liang qi, Havana man bu",
  173: "zhe shi shi shang zui mei li de na shuang ren wu",
  176: ""
}

function setSubtitles() {
  Object.keys(subtitles).forEach(key => {
    Object.keys(subtitles1).forEach(key1 => {
      if(player.getCurrentTime() > key && player.getCurrentTime() < key1) {
        document.getElementById("subtitles").innerHTML = subtitles[key];
        document.getElementById("alt-subtitles").innerHTML = subtitles1[key1];
      }
    })
    
  })
}

function setSeekBar() {
  document.getElementById("vol").value = player.getCurrentTime();
}

setInterval(setSeekBar, 1000);
setInterval(setSubtitles, 100);

function playVid() {
  player.playVideo()
  player.seekTo(document.getElementById("vol").value)
}

function pauseVid() {
  player.pauseVideo()
}


/*
function submitForm() {
  document.getElementById("rickrollForm").submit();
  let subtitle = document.getElementById("subtitleForm");
  //let repeat = document.getElementById("repeatForm");
  if(subtitle.checked === true) {
    document.getElementById("subtitles").innerHTML = "never gonna give you up"
  }
  /*if(repeat.checked === true) {
    function onStateChange(event) {
      if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); 
      }
    }
  }
}*/


