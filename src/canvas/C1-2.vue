<template>
  <div>
      <canvas :id="canvasId" :class="{'fadeIn': laoded}"></canvas>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'1-2',
        current: 0,
        canvas: null,
        stage: null, 
        exportRoot: null, 
        fnStartAnimation: null,                  
        laoded: false
      }

    },
    updated() {
    },
    mounted() {
      this.$nextTick( ()=> {
        this.scriptTag = document.createElement("script");
        this.scriptTag.src = `/static/js/${this.name}.js`;
        this.scriptTag.id = `c${this.name}`;
        document.getElementsByTagName('head')[0].appendChild(this.scriptTag);

        const detectCreatJs = window.setInterval(()=>{
        if( typeof AdobeAn !== 'undefined' && thisPage === this.name) {
            this.init();
            window.clearInterval(detectCreatJs)
          }
        }, 50);
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
          var comp=AdobeAn.getComposition("29AA190B3A5A56428ADF0DB0F81BC2F1");
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
      resizeCanvas: function(lib,isResp,lastW, lastH, lastS, respDim, isScale, scaleType) {			
          var w = lib.properties.width, h = lib.properties.height;			
          var iw = window.innerWidth - 120, ih=window.innerHeight;			
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
          var $this = this;	
          var lastW, lastH, lastS=1;		
          window.onresize = ()=> { $this.resizeCanvas(lib,isResp,lastW, lastH, lastS, respDim, isScale, scaleType) };			
          this.resizeCanvas(lib,isResp,lastW, lastH, lastS, respDim, isScale, scaleType);	

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
          this.laoded = true;
          this.exportRoot = new lib._004();
          this.stage = new lib.Stage(this.canvas);
          this.stage.addChild(this.exportRoot);	
          //Registers the "tick" event listener.
          this.fnStartAnimation = function() {
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", this.stage);
          }	    
          //Code to support hidpi screens and responsive scaling.
          
          this.makeResponsive(true,'width',false,1, lib);	
          AdobeAn.compositionLoaded(lib.properties.id);
          this.fnStartAnimation();
      }

    }
  }
</script>
