<template>
  <div>
    <transition-group name="fade">
      <div class="wrap wrap-archi1" :key="'tab1'" v-if="$store.state.c3_tab === showItem(0)">
        <span class="page">about archi</span>
        <main>
          <div class="pic por"><img src="/static/img/3-1-1.png"/>
            <div class="pic-s abs"><img src="/static/img/3-1-2.png"/>
            </div>
          </div>
          <div class="txt por">
            <h2 class="tt-page">建築，就是不斷自我對話的過程</h2><span class="abs">about<br/>archi</span>
            <p class="main-p">在新與舊之間，簡與繁之間辯證。仁愛與杭州南路悠久歲月醞釀人文薈萃，兩廳院開展台北的國際新視野。城中建設擔任建築與文創的執行總監，邀約杜希聖、倪伯群、李文勝、王裕程四位建築師共同打造。閱狷聲的五線譜隱喻音樂性，在簡約的建築線條之中，從文化、地域、藝術之中衍生出形體語言。收斂卻不單一，極致卻不聲張。</p>
            <p class="main-p">無論是在哪個空間角落，都看見大自然以不同形式存在：開放的公共空間，機能完整的情感交流場所，任環境帶領愉悅心情。日日閒的空中露台，從無框框的天空，釋放出獨處放鬆時刻，與無邊風景對話。 </p>
          </div>
        </main>
        <div class="deco-bg abs"><img src="/static/img/bg-3-1-1.png"/>
        </div>
        <div class="deco-bg2 abs"><img src="/static/img/bg-3-1-2.png"/>
        </div>
      </div>
      <div class="wrap wrap-archi2" :key="'tab2'" v-if="$store.state.c3_tab === showItem(1)">
        <span class="page">about archi</span>
        <main class="mapBG mapBG-3-2"></main>
      </div>
      <div class="wrap wrap-archi3" :key="'tab3'" v-if="$store.state.c3_tab === showItem(2)">
        <span class="page">about archi</span>
        <main>
          <div class="top">
            <div class="floorplan"><img src="/static/img/3-3-main.jpg"/>
            </div>
            <div class="scroll abs"><span>scroll</span><span class="triangle"></span><span class="triangle"></span></div>
          </div>
          <div class="inner" ref="archi3Inner">
            <div v-for="(picBox, i, key) in picBoxs" class="picBox" :class="'pic'+(i+1)" v-show="currentData(2,i)">
              <div class="des">
                <div class="desBox" v-if="detectItem(i)">
                    <h2>{{ picBox.title }}</h2>
                    <p>{{ picBox.des}}</p>
                </div>
                <div class="desBox" v-if="i==5">
                    <h2>{{ picBox.title }}</h2>
                    <p>{{ picBox.des }}</p>
                    <h2>{{ picBox.title2 }}</h2>
                    <p>{{ picBox.des2 }}</p>
                </div>
                <div class="desBox" v-if="i==8">
                  <h2>{{ picBox.title }}</h2>
                  <p v-for="txt in picBox.des">{{ txt }}</p>
                  
                </div>
              </div>
            </div>
          
            <div class="arrowBox">
              <div class="arrow">
                <a href="javascript:;" @click="arrowHandler(2,-1)" :class="{'transparent': current2===0 }" ><span></span></a>
                <a href="javascript:;" @click="arrowHandler(2,1)" :class="{'transparent': current2===(picBoxs.length-1) }"><span></span></a>
              </div>
            </div>
            <div class="slider">
              <ul>
                <li v-for="(item,i,key) in picBoxs.length"><a href="javascript:;" @click="currentHandler(2, i)"></a></li>
                <div class="indicator" :style="{'left': indicateHandler+'px'}"/> 
              </ul>
            </div>
          </div>
        </main>
      </div>

    </transition-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current0: 0,
        current1: 0,
        current2: 0,
        indicateLeft: 0,
        blackThreshold: 0,
        slides: [{
            name: '建築設計理念',
            class: '',
            tabs: [],
            imgs:['115.png']
          },
          {
            name: '立面篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          },
          {
            name: '公設篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          }
        ],
        picBoxs:[
          {title:'雅敘序曲 Prelude', des:'社區入囗簡約舒泰的氣度，藉由木材樸實的個性，溫潤心情上的雜慮，閱狷聲的主人每日進出，朗闊的植栽景觀，一回家就開始儲備能量。'},
          {title:'朗朗門廳 Lobby', des:'空間的第一樂章，挑高的氣度、留白的含蓄。在雅緻色溫、錯落層次虛實交錯間，開展深邃與層次，表現生活優悅內涵。'},
          {title:'涵樂 SOFA', des:'恬靜安詳的接待區，溫暖木質風格，猶如安定人心的木管樂器，可以純候客，亦可休憩獨處。讓人放鬆心情，轉換步調。'},
          {title:'蒙田藝文 Salon', des:'大面落地玻璃，向自然界借景，交織出綠意通透的開闊感。結合休憩、社交、藝文、閱讀複合功能，無論朋友或家人小聚，展露全方位的會所功能。'},
          {title:'晴仰空中廚房 Gourmet', des:'讓聚餐不只是聚餐，閱狷聲規劃空中廚房與戶外宴會廳動線相連，中島吧台設計明亮的烹調空間。嘴中品味紅酒香氣，眼裡盡賞城市夜景。微風、音樂與歡聲笑語，交織出感官的華麗饗宴。'},
          {title:'韻動健身房 Rock & Roll', des:'健身除了身體健康，還有著讓人上癮的魅力。以專業健身器材保持輕盈體態的同時，增加血液的載氧量，越動越年輕，還能活化大腦細胞，享受一場又一場愉悅的腦內啡旋風。',title2:'青鳥瑜珈室 Body & Soul', des2:'瑜珈讓你傾聽身體的聲音，伸展緊繃的肌肉伸，意識與四肢同時放鬆，靈魂與身體有了彈性延展。調息冥想中，憂煩與僵硬都歸於寧靜，傾聽身體的聲音，找回人神合一的平衡。'},
          {title:'空中閣樓 Attic', des:'無論晴雨，閱狷聲的空中廚房都為歡聚敞開。在空中廚房與家人好友共同完成料理。舉辦多人饗宴時，上樓便是另一室延伸餐廳，與知己好友品茗美好的四季光景。'},
          {title:'花間空中宴會區 Banquet', des:'行雲流水的空間饗宴，彷彿接受大樹的邀約，與知己好友宴飲，席間共享天光雲影，花間品茗酒酣茶香皆宜人。'},
          {title:'停車場 Parking', des: ['精品規格打造閱狷聲的所有細節，選用安全堅實的捲門，從車道入口便感受快速與安靜，給予每位重視品質的住戶尊榮待遇。細節中醞釀藝術，動態警示燈採用水流線條，讓色彩斑斕的波光在牆上流動，停車也是件浪漫的事。','-ETC車輛管控系統','有車上ETC核對進出車輛，住戶無需再在拿遙控器控制','-大樓通訊','停車場、電梯均有行動電話收訊以確保住戶方便及安全','-德國EFAFLEX飛梭門','不只是追求快速，安全更是核心價值以安全、快速、耐用聞名全球，號稱全世界最快的電動捲門，一秒可達4.5公尺，也是全球第一間致力研發「安全快速門」的門業大廠，至今42年已締造無數專利與創新。']}
          
        ]
      }
  
    },
    computed: {
      indicateHandler() {
        // console.log(this.current2*60);
        return this.current2*60;
      }
    },
    updated() {
      if(this.$store.state.c3_tab==="3") this.blackHandler();
    },
    methods: {
      currentData: function(index,i){
        return this['current'+index]===i;
      },
      currentHandler: function(main, sub) {
        if ( this['current'+main] !== sub) {
          this['current'+main] = sub;
        }
      },
      arrowHandler: function(sub, add){
        var newVal = this['current'+sub]+add;
        if( newVal<0 ) newVal= this.picBoxs.length-1;
        if( newVal >= this.picBoxs.length ) newVal = 0;
        this['current'+sub] = newVal;
      },
      showItem(index) {
        return (index + 1).toString()
      },
      detectItem(i) {
        var show = true;
        if( i=== 5 || i=== 8 )  show = false;
        return show
      },
      blackHandler() {
        var val = $(this.$refs.archi3Inner).offset().top - 80;
        this.blackThreshold = val;
      }
    },
    mounted() {
      this.$nextTick( ()=> {
        this.styleTag=document.createElement("link")
        this.styleTag.setAttribute("rel", "stylesheet")
        this.styleTag.setAttribute("type", "text/css")
        this.styleTag.setAttribute("href", '/static/css/archi.css')
        document.getElementsByTagName("head")[0].appendChild(this.styleTag)

        var isScroll = false;
        var $this = this;
        $(window).on('scroll',function(e){
            // if(!isScroll) {
            //   isScroll = true;
              var scroll = Number($(window).scrollTop());
              console.log(scroll);
              if( scroll >= $this.blackThreshold ) {
                $this.$store.commit('themeHandler', true);
              } else {
                $this.$store.commit('themeHandler', false);

              }
            //     isScroll = false;
            // }
            
        });
        
        $(window).on('resize',()=>{
          if(this.$store.state.c3_tab==="3") this.blackHandler();
        })
      })
    },
    destroyed() {
        document.getElementsByTagName('head')[0].removeChild(this.styleTag);
        $(window).off('scroll');
    },
  }
</script>
<style>
  .wrap-archi2 {
    padding-right: 185px;
  }
</style>