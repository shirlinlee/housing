<template>
    <transition name="fade">
        <div class="popup" :class="classObject">
            <a class="close abs" href="javascript:;" @click="$emit('openLb','', false)"><img src="/static/asset/svg/close.svg"/></a>
            <div class="content"><img :src="'/static/img/'+picName"/></div>
            
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
        // options: { "inline": false,  "navbar": false, "title": false, "toolbar": false, "tooltip": false, "movable": true, "zoomable": true, "rotatable": false, "scalable": true, "transition": false, "fullscreen": false, "keyboard": false, "url": "data-source" },
        classObject: {
            'rotate': this.el === 'floor_rotate' || this.el === 'inner',
            'team': this.isTeam,
            'verticel': this.el === 'inner',
            
        }
      }
    },
    props:['picName','isTeam','el'],
    //actions 响应在view上的用户输入导致的状态变化
    mounted() {
        console.log(this.el);
        var $this = this;
        this.$nextTick( ()=> { 
            $(document).ready(()=>{
                if( this.el === "map") {
                    // $('.content').zoom({url: '/static/img/map.png', magnify:.8, onZoomIn:true});
                } else if(this.el === "inner") {
                    console.log(this.picName);
                    var name = "5-1-2-l.png";
                    if(this.picName === "5-1-1.png") name = "5-1-1-l.png"
                    $('.content').zoom({url: '/static/img/'+name, magnify:1.2});
                }

             })
          
           
        })
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
