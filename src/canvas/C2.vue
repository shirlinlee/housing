<template>
  <div>

      <canvas id="canvas6"></canvas>
      
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tab:0,
        slides:{
          s1:['牆開囗角隅補強 002','雙層配筋004'],
          s2:['窗框防水 003','浴室防水 007','浴廁防水 008','外牆接縫企口 001','屋頂防水 010','露台防水 010'],
          s3:['排水分管 006','給水吊管 011','排水配管 009','防疫系統 streamvideo 179、182'],
          s4:['Low-E玻璃','YKK隔音氣密窗'],
          s5:['當層排氣 005'],
          
        },
        canvas: null,
        stage: null, 
        exportRoot: null, 
        anim_container: null, 
        fnStartAnimation: null
      }

    },
    updated() {
    },
    mounted() {
      // if (document.getElementById('canvas')) return; // was already loaded
      var scriptTag = document.createElement("script");
      scriptTag.src = "/static/js/010.js";
      scriptTag.id = "my-datatable";
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
      this.$nextTick(function() {
         this.init();
      })
    },
    destroyed() {
    },
    methods: {
      init:function () {
          this.canvas = document.getElementById("canvas6");
          var comp=AdobeAn.getComposition("8CCE5495B54D2E42A1C573624A16D5C1");
          var lib=comp.getLibrary();
          var loader = new createjs.LoadQueue(false);
          loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
          loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
          var lib=comp.getLibrary();
          loader.loadManifest(lib.properties.manifest);
      },
      handleFileLoad: function(){
          var images=comp.getImages();	
          if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
      },
      resizeCanvas: function() {			
          var w = lib.properties.width, h = lib.properties.height;			
          var iw = window.innerWidth, ih=window.innerHeight;			
          var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
          if(isResp) {                
            if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
              sRatio = lastS;                
            }				
            else if(!isScale) {					
              if(iw<w || ih<h)						
              sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==1) {					
              sRatio = Math.min(xRatio, yRatio);				
            }				
            else if(scaleType==2) {					
              sRatio = Math.max(xRatio, yRatio);				
            }			
          }			
          this.canvas.width = w*pRatio*sRatio;			
          this.canvas.height = h*pRatio*sRatio;
          this.canvas.style.width = this.anim_container.style.width =  w*sRatio+'px';				
          this.canvas.style.height = this.anim_container.style.height = h*sRatio+'px';
          stage.scaleX = pRatio*sRatio;			
          stage.scaleY = pRatio*sRatio;			
          lastW = iw; lastH = ih; lastS = sRatio;		
      },
      makeResponsive: function (isResp, respDim, isScale, scaleType) {		
          var lastW, lastH, lastS=1;		
          window.addEventListener('resize', resizeCanvas);		
          this.resizeCanvas();		

      },
      handleComplete(evt,comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
          var lib=comp.getLibrary();
          var ss=comp.getSpriteSheet();
          var queue = evt.target;
          var ssMetadata = lib.ssMetadata;
          for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
          }
          exportRoot = new lib._010();
          stage = new lib.Stage(canvas);
          stage.addChild(exportRoot);	
          //Registers the "tick" event listener.
          this.fnStartAnimation = function() {
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
          }	    
          //Code to support hidpi screens and responsive scaling.
          
          this.makeResponsive(false,'both',false,1);	
          AdobeAn.compositionLoaded(lib.properties.id);
          this.fnStartAnimation();
      }

    }
  }
</script>
