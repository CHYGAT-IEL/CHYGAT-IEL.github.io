
import * as PetiteVue from 'https://unpkg.com/petite-vue?module';
import VueMiniPlayerCore from '../mini/mini-player.esm.js';

window.PetiteVue = PetiteVue;

const miniPlayerDiv = document.createElement('div');
miniPlayerDiv.id = 'mini-player-root';
miniPlayerDiv.style.position = 'fixed';
miniPlayerDiv.style.right = '24px';
miniPlayerDiv.style.bottom = '24px';
miniPlayerDiv.style.zIndex = '99999';
miniPlayerDiv.style.background = 'transparent';
miniPlayerDiv.style.pointerEvents = 'auto';
document.body.appendChild(miniPlayerDiv);

const player = new VueMiniPlayerCore({
  el: '#mini-player-root' 
});

// 添加歌单  以下歌曲均为互联网收集 歌曲在线浏览地址：https://www.fangpi.net
const { PlayerCore } = player;

PlayerCore.AppendSong({
  name: "結束バンド - 青い春と西の空",
  id: "1",
  src: "https://lv-sycdn.kuwo.cn/ca9b8f288f7df8f32ff2ab8289fe9d18/68445309/resource/30106/trackmedia/M500002Ia0NT0IMNG9.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20230508/20230508133101907879.jpg"
});

PlayerCore.AppendSong({
  name: "結束バンド - 月並みに輝け",
  id: "2",
  src: "https://er-sycdn.kuwo.cn/99322354f800a38e00bcca5cc1f2f8f5/68445332/resource/30106/trackmedia/M500001JHkF32dWceb.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20250101/20250101194617259694.jpg"
});

PlayerCore.AppendSong({
  name: "結束バンド - 忘れてやらない",
  id: "3",
  src: "https://er-sycdn.kuwo.cn/0343d98473bd402c6f967008251fc44a/684454b3/resource/30106/trackmedia/M5000040bnEs3QazNY.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20221202/20221202044841837903.jpg"
});

PlayerCore.AppendSong({
  name: "トゲナシトゲアリ - 空の箱",
  id: "4",
  src: "https://er-sycdn.kuwo.cn/c16d07b1407b37e1fc0c839822e3dab2/68443b07/resource/30106/trackmedia/M500004E9egv2ctHh1.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20250328/20250328182949724383.jpg"
});

PlayerCore.AppendSong({
  name: "MyGO!!!!! - 春日影(MyGO!!!!! ver.)",
  id: "5",
  src: "https://lv-sycdn.kuwo.cn/a13d2b375993c54c4c6248443f407291/68445703/resource/30106/trackmedia/M500003TjtsG4OrBFn.mp3",
  img: "https://imgessl.kugou.com/stdmusic/20231016/20231016182037706952.jpg"
});

PlayerCore.AppendSong({
  name: "EmoCosine - MAGENTA POTION (Extended Mix)",
  id: "6",
  src: "https://er-sycdn.kuwo.cn/c31ea13fa759dc5b6c04f412d8a2d58a/6844540d/resource/30106/trackmedia/M5000011nSQi0kWUNV.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20211106/20211106165900557772.jpg"
});

PlayerCore.AppendSong({
  name: "Cyberpunk-I Really Want to Stay at Your House",
  id: "7",
  src: "https://nf-sycdn.kuwo.cn/721075a52efd1b2cbd58c2e95943316c/68445a52/resource/n2/28/93/3346918315.mp3?bitrate$128&from=vip",
  img: "https://imgessl.kugou.com/stdmusic/20220919/20220919112741337872.jpg"
});
// 你可以继续添加更多歌曲
// PlayerCore.AppendSong({ ... });

