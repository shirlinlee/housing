<template>
    <transition name="fade">
        <div class="popup">
            <a class="close abs" href="javascript:;" @click="$emit('openLb','', false)"><img src="/static/asset/svg/close.svg"/></a>
            <div class="picBox" :class="'pic'+el">
                <div class="des">
                <div class="desBox">
                    <h2>{{ txt.title }}</h2>
                    <span v-html="txt.des" />
                </div>
                </div>
            </div>
                
        </div>
        
    </transition>
    
</template>

<!--  <div><img :src="'/static/img/'+picName"/></div> <viewer class="content" :options="options" v-else>
                <img :src="'/static/img/'+picName">
            </viewer>  -->
<script>
  export default {
    data() {
      return {
          data: [
            { name:'雅敘序曲',title:'雅敘序曲 Prelude', des:'<p>社區入囗簡約舒泰的氣度，藉由木材樸實的個性，溫潤心情上的雜慮，閱狷聲的主人每日進出，朗闊的植栽景觀，一回家就開始儲備能量。</p>'},
            { name:'朗朗門廳',title:'朗朗門廳 Lobby', des:'<p>空間的第一樂章，挑高的氣度、留白的含蓄。在雅緻色溫、錯落層次虛實交錯間，開展深邃與層次，表現生活優悅內涵。</p>'},
            { name:'涵樂',title:'涵樂 SOFA', des:'<p>恬靜安詳的接待區，溫暖木質風格，猶如安定人心的木管樂器，可以純候客，亦可休憩獨處。讓人放鬆心情，轉換步調。</p>'},
            { name:'蒙田藝文',title:'蒙田藝文 Salon', des:'<p>大面落地玻璃，向自然界借景，交織出綠意通透的開闊感。結合休憩、社交、藝文、閱讀複合功能，無論朋友或家人小聚，展露全方位的會所功能。</p>'},
            { name:'空中廚房',title:'晴仰空中廚房 Gourmet', des:'<p>讓聚餐不只是聚餐，閱狷聲規劃空中廚房與戶外宴會廳動線相連，中島吧台設計明亮的烹調空間。嘴中品味紅酒香氣，眼裡盡賞城市夜景。微風、音樂與歡聲笑語，交織出感官的華麗饗宴。</p>'},
            { name:'韻動健身房',title:'韻動健身房 Rock & Roll', des:'<p>健身除了身體健康，還有著讓人上癮的魅力。以專業健身器材保持輕盈體態的同時，增加血液的載氧量，越動越年輕，還能活化大腦細胞，享受一場又一場愉悅的腦內啡旋風。</p><h2>青鳥瑜珈室 Body & Soul </h2><p>瑜珈讓你傾聽身體的聲音，伸展緊繃的肌肉伸，意識與四肢同時放鬆，靈魂與身體有了彈性延展。調息冥想中，憂煩與僵硬都歸於寧靜，傾聽身體的聲音，找回人神合一的平衡。</p>'},
            { name:'空中閣樓',title:'空中閣樓 Attic', des:'<p>無論晴雨，閱狷聲的空中廚房都為歡聚敞開。在空中廚房與家人好友共同完成料理。舉辦多人饗宴時，上樓便是另一室延伸餐廳，與知己好友品茗美好的四季光景。</p>'},
            { name:'空中宴會',title:'花間空中宴會區 Banquet', des:'<p>行雲流水的空間饗宴，彷彿接受大樹的邀約，與知己好友宴飲，席間共享天光雲影，花間品茗酒酣茶香皆宜人。</p>'},
            { name:'停車場',title:'停車場 Parking', des: '<p>精品規格打造閱狷聲的所有細節，選用安全堅實的捲門，從車道入口便感受快速與安靜，給予每位重視品質的住戶尊榮待遇。細節中醞釀藝術，動態警示燈採用水流線條，讓色彩斑斕的波光在牆上流動，停車也是件浪漫的事。</p><p> <strong>-ETC 車輛管控系統	</strong></p><p>有車上 ETC 核對進出車輛，住戶無需再在拿遙控器控制</p><p> <strong>-大樓通訊	</strong></p><p>停車場、電梯均有行動電話收訊以確保住戶方便及安全</p><div class="parking-logo"><img src="img/parking-logo.png"/></div><p> <strong>-德國 EFAFLEX 飛梭門</strong></p><p>不只是追求快速，安全更是核心價值以安全、快速、耐用聞名全球，號稱全世界最快的電動捲門，一秒可達 4.5 公尺，也是全球第一間致力研發「安全快速門」的門業大廠，至今 42 年已締造無數專利與創新。</p>'}
        ]
      }
    },
    props:['picName','isTeam','el'],
    //actions 响应在view上的用户输入导致的状态变化
    mounted() {
        this.$nextTick( ()=> { 
        })
    },
    computed: {
      txt() {
        var index = this.el - 1;
        return this.data[index];
      },
      
    },
    updated() {
        
    }
  }
</script>
<style lang="scss">
    .popup {
        top: 0;
        &.rotate img{
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        .content img{
            background:#fff;
        }
        
        &.verticel {
            .content{
               width: initial;
               height: 95vh;
               img{
                    height:100%;
                    width: auto;
                }
            }
            
        }
    }
  
    
</style>
