<template>
  <div>
      <canvas :id="canvasId" :class="{'fadeIn': laoded}"></canvas>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'2-1',
        current: 0,
        canvas: null,
        stage: null, 
        exportRoot: null, 
        fnStartAnimation: null,
        loader: null,                   
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
    beforeDestroy() {
        document.getElementsByTagName('head')[0].removeChild(this.scriptTag);
        AdobeAn = undefined; 
        window.onresize = null;       
        this.stage.removeAllChildren();       
        this.stage.removeAllEventListeners();       
        this.stage.enableDOMEvents(false);       
        this.stage.canvas = null;       
        this.stage._eventListeners = null;       
        this.loader = null;
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
          var comp=AdobeAn.getComposition("8CCE5495B54D2E42A1C573624A16D5C1");
          var lib=comp.getLibrary();
          this.loader = new createjs.LoadQueue(false);
          this.loader.addEventListener("fileload", function(evt){ $this.handleFileLoad(evt,comp)});
          this.loader.addEventListener("complete", function(evt){ $this.handleComplete(evt,comp)});
          var lib=comp.getLibrary();
          this.loader.loadManifest(lib.properties.manifest);
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
          this.exportRoot = new lib._003();
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
