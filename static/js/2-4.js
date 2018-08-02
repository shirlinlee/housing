(function (cjs, an) {
	
	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	// symbols:
	
	
	
	(lib.image102 = function() {
		this.initialize(img.image102);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,276,335);// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.sprite104 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.image102();
		this.instance.parent = this;
		this.instance.setTransform(276,0,1,1,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.sprite104, new cjs.Rectangle(0,0,276,335), null);
	
	
	(lib.sprite105 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_14 = function() {
			/* stop ();
			*/
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));
	
		// Layer 1
		this.instance = new lib.sprite104();
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,276,335);
	
	
	// stage content:
	(lib._001 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// 圖層 2
		this.instance = new lib.sprite105("synched",0,false);
		this.instance.parent = this;
		this.instance.setTransform(251,170.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(651,554.5,276,335);
	// library properties:
	lib.properties = {
		id: '8CCE5495B54D2E42A1C573624A16D5C1',
		width: 800,
		height: 768,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"/static/images/image102.png?1532929318007", id:"image102"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['8CCE5495B54D2E42A1C573624A16D5C1'] = {
		getStage: function() { return exportRoot.getStage(); },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{}, thisPage = '2-4');
	var createjs, AdobeAn, thisPage;