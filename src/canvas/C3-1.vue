<template>
  <div>
      <canvas :id="canvasId"></canvas>
      
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'3-1',
        canvas: null,
        stage: null, 
        exportRoot: null, 
        fnStartAnimation: null
      }

    },
    updated() {
      console.log('3','updated');
        
    },
    mounted() {
      // console.log('5');
      this.scriptTag = document.createElement("script");
      this.scriptTag.src = `/static/js/${this.name}.js`;
      this.scriptTag.id = `c${this.name}`;
      document.getElementsByTagName('head')[0].appendChild(this.scriptTag);

      var $this = this;
      this.$nextTick(function() {
          setTimeout(function(){
            $this.init();
          },200)
      })

    },
    destroyed() {
        document.getElementsByTagName('head')[0].removeChild(this.scriptTag);
    },
    computed: {
      canvasId: function(){
        return 'canvas'+ this.name
      }
    },
    methods: {
      init:function () {
          var $this = this;
          this.canvas = document.getElementById(`canvas${this.name}`);
          var comp=AdobeAn.getComposition("12DB2B133ED5D049B6F69B7FECC78062");
          var lib=comp.getLibrary();
          var loader = new createjs.LoadQueue(false);
          loader.addEventListener("fileload", function(evt){ $this.handleFileLoad(evt,comp)});
          loader.addEventListener("complete", function(evt){ $this.handleComplete(evt,comp)});
          var lib=comp.getLibrary();
          loader.loadManifest(lib.properties.manifest);
      },
      handleFileLoad: function(evt,comp){
          var images=comp.getImages();	
          if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
      },
      resizeCanvas: function(lib,isResp,lastW, lastH, lastS) {			
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
          this.canvas.style.width = w*sRatio+'px';				
          this.canvas.style.height = h*sRatio+'px';
          this.stage.scaleX = pRatio*sRatio;			
          this.stage.scaleY = pRatio*sRatio;			
          lastW = iw; lastH = ih; lastS = sRatio;		
      },
      makeResponsive: function (isResp, respDim, isScale, scaleType,lib) {		
          var lastW, lastH, lastS=1;		
          window.addEventListener('resize', this.resizeCanvas);		
          this.resizeCanvas(lib,isResp,lastW, lastH, lastS);		

      },
      handleComplete(evt,comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
          var lib=comp.getLibrary();
          var ss=comp.getSpriteSheet();
          var queue = evt.target;
          var ssMetadata = lib.ssMetadata;
          for(var i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
          }
          this.exportRoot = new lib._006();
          this.stage = new lib.Stage(this.canvas);
          this.stage.addChild(this.exportRoot);	
          //Registers the "tick" event listener.
          this.fnStartAnimation = function() {
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", this.stage);
          }	    
          //Code to support hidpi screens and responsive scaling.
          
          this.makeResponsive(false,'both',false,1,lib);	
          AdobeAn.compositionLoaded(lib.properties.id);
          this.fnStartAnimation();
      }

    }
  }
</script>
