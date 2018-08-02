(function (cjs, an) {
	
	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"005_atlas_", frames: [[0,0,669,416],[0,418,400,185]]}
	];
	
	
	// symbols:
	
	
	
	(lib.image21 = function() {
		this.spriteSheet = ss["005_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.image23 = function() {
		this.spriteSheet = ss["005_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
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
	
	
	(lib.shape27 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("ANcBQIBvhQIhvhQIAAA4I8pAAIAAAxIcpAAg");
		this.shape.setTransform(476.3,104.4);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FF0000").s().p("ANeAZI8pAAIAAgxIcpAAIAAg3IBuBPIhuBQg");
		this.shape_1.setTransform(476.2,104.4);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(378,95.4,196.5,18.1);
	
	
	(lib.shape24 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.image23();
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,400,185);
	
	
	(lib.shape22 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.image21();
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,669,416);
	
	
	(lib.sprite25 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.shape24("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.sprite25, new cjs.Rectangle(0,0,400,185), null);
	
	
	(lib.sprite30 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 7
		this.instance = new lib.sprite25();
		this.instance.parent = this;
		this.instance.setTransform(558.3,93.9,0.25,0.25);
		this.instance.alpha = 0;
		this.instance._off = true;
		this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
		this.instance.cache(-2,-2,404,189);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({scaleX:0.25,scaleY:0.25,x:559.5,y:92.9,alpha:0.02},2).to({scaleX:0.25,scaleY:0.25,x:560.1,y:92.5},1).to({scaleX:0.25,scaleY:0.25,x:561.3,y:91.4,alpha:0.039},2).to({scaleX:0.26,scaleY:0.26,x:568.7,y:85.5,alpha:0.141},12).to({scaleX:0.29,scaleY:0.29,x:588.5,y:69.8,alpha:0.41},32).to({scaleX:0.3,scaleY:0.3,x:595.3,y:64.3,alpha:0.5},11).to({scaleX:0.5,scaleY:0.5,x:621.8,y:5.9,alpha:0.012},59).wait(1).to({scaleX:0.5,scaleY:0.5,x:622.3,y:5,alpha:0},0).wait(31));
	
		// Mask Layer 4 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_139 = new cjs.Graphics().p("AhZEYIAAovICzAAIAAIvg");
		var mask_graphics_140 = new cjs.Graphics().p("AiFEYIAAovIELAAIAAIvg");
		var mask_graphics_141 = new cjs.Graphics().p("AixEYIAAovIFjAAIAAIvg");
		var mask_graphics_142 = new cjs.Graphics().p("AjdEYIAAovIG7AAIAAIvg");
		var mask_graphics_143 = new cjs.Graphics().p("AkJEYIAAovIITAAIAAIvg");
		var mask_graphics_144 = new cjs.Graphics().p("Ak1EYIAAovIJrAAIAAIvg");
		var mask_graphics_145 = new cjs.Graphics().p("AlhEYIAAovILDAAIAAIvg");
		var mask_graphics_146 = new cjs.Graphics().p("AmNEYIAAovIMbAAIAAIvg");
		var mask_graphics_147 = new cjs.Graphics().p("Am4EYIAAovINyAAIAAIvg");
		var mask_graphics_148 = new cjs.Graphics().p("AnkEYIAAovIPKAAIAAIvg");
		var mask_graphics_149 = new cjs.Graphics().p("AoQEYIAAovIQhAAIAAIvg");
		var mask_graphics_150 = new cjs.Graphics().p("Ao8EYIAAovIR5AAIAAIvg");
		var mask_graphics_151 = new cjs.Graphics().p("ApoEYIAAovITSAAIAAIvg");
		var mask_graphics_152 = new cjs.Graphics().p("AqUEYIAAovIUpAAIAAIvg");
		var mask_graphics_153 = new cjs.Graphics().p("ArAEYIAAovIWBAAIAAIvg");
		var mask_graphics_154 = new cjs.Graphics().p("ArsEYIAAovIXZAAIAAIvg");
		var mask_graphics_155 = new cjs.Graphics().p("AsYEYIAAovIYxAAIAAIvg");
		var mask_graphics_156 = new cjs.Graphics().p("AtEEYIAAovIaJAAIAAIvg");
		var mask_graphics_157 = new cjs.Graphics().p("AtwEYIAAovIbhAAIAAIvg");
		var mask_graphics_158 = new cjs.Graphics().p("AucEYIAAovIc5AAIAAIvg");
		var mask_graphics_159 = new cjs.Graphics().p("AvIEYIAAovIeRAAIAAIvg");
		var mask_graphics_160 = new cjs.Graphics().p("Av0EYIAAovIfpAAIAAIvg");
		var mask_graphics_161 = new cjs.Graphics().p("AwgEYIAAovMAhBAAAIAAIvg");
		var mask_graphics_162 = new cjs.Graphics().p("AxMEYIAAovMAiZAAAIAAIvg");
		var mask_graphics_163 = new cjs.Graphics().p("Ax4EYIAAovMAjxAAAIAAIvg");
		var mask_graphics_164 = new cjs.Graphics().p("Ax4EYIAAovMAjxAAAIAAIvg");
		var mask_graphics_165 = new cjs.Graphics().p("AxMEYIAAovMAiZAAAIAAIvg");
		var mask_graphics_166 = new cjs.Graphics().p("AwgEYIAAovMAhBAAAIAAIvg");
		var mask_graphics_167 = new cjs.Graphics().p("Av0EYIAAovIfpAAIAAIvg");
		var mask_graphics_168 = new cjs.Graphics().p("AvIEYIAAovIeRAAIAAIvg");
		var mask_graphics_169 = new cjs.Graphics().p("AucEYIAAovIc5AAIAAIvg");
		var mask_graphics_170 = new cjs.Graphics().p("AtwEYIAAovIbhAAIAAIvg");
		var mask_graphics_171 = new cjs.Graphics().p("AtEEYIAAovIaJAAIAAIvg");
		var mask_graphics_172 = new cjs.Graphics().p("AsYEYIAAovIYxAAIAAIvg");
		var mask_graphics_173 = new cjs.Graphics().p("ArsEYIAAovIXZAAIAAIvg");
		var mask_graphics_174 = new cjs.Graphics().p("ArAEYIAAovIWBAAIAAIvg");
		var mask_graphics_175 = new cjs.Graphics().p("AqUEYIAAovIUpAAIAAIvg");
		var mask_graphics_176 = new cjs.Graphics().p("ApoEYIAAovITRAAIAAIvg");
		var mask_graphics_177 = new cjs.Graphics().p("Ao8EYIAAovIR5AAIAAIvg");
		var mask_graphics_178 = new cjs.Graphics().p("AoREYIAAovIQjAAIAAIvg");
		var mask_graphics_179 = new cjs.Graphics().p("AnlEYIAAovIPLAAIAAIvg");
		var mask_graphics_180 = new cjs.Graphics().p("Am5EYIAAovINyAAIAAIvg");
		var mask_graphics_181 = new cjs.Graphics().p("AmNEYIAAovIMbAAIAAIvg");
		var mask_graphics_182 = new cjs.Graphics().p("AlhEYIAAovILDAAIAAIvg");
		var mask_graphics_183 = new cjs.Graphics().p("Ak1EYIAAovIJrAAIAAIvg");
		var mask_graphics_184 = new cjs.Graphics().p("AkJEYIAAovIITAAIAAIvg");
		var mask_graphics_185 = new cjs.Graphics().p("AjdEYIAAovIG7AAIAAIvg");
		var mask_graphics_186 = new cjs.Graphics().p("AixEYIAAovIFjAAIAAIvg");
		var mask_graphics_187 = new cjs.Graphics().p("AiFEYIAAovIELAAIAAIvg");
		var mask_graphics_188 = new cjs.Graphics().p("AhZEYIAAovICzAAIAAIvg");
		var mask_graphics_189 = new cjs.Graphics().p("AhZEYIAAovICzAAIAAIvg");
	
		this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_graphics_139,x:359.4,y:106.5}).wait(1).to({graphics:mask_graphics_140,x:363.8,y:106.5}).wait(1).to({graphics:mask_graphics_141,x:368.2,y:106.5}).wait(1).to({graphics:mask_graphics_142,x:372.5,y:106.5}).wait(1).to({graphics:mask_graphics_143,x:376.9,y:106.5}).wait(1).to({graphics:mask_graphics_144,x:381.3,y:106.5}).wait(1).to({graphics:mask_graphics_145,x:385.7,y:106.5}).wait(1).to({graphics:mask_graphics_146,x:390.1,y:106.5}).wait(1).to({graphics:mask_graphics_147,x:394.5,y:106.5}).wait(1).to({graphics:mask_graphics_148,x:398.9,y:106.5}).wait(1).to({graphics:mask_graphics_149,x:403.3,y:106.5}).wait(1).to({graphics:mask_graphics_150,x:407.7,y:106.5}).wait(1).to({graphics:mask_graphics_151,x:412.1,y:106.5}).wait(1).to({graphics:mask_graphics_152,x:416.5,y:106.5}).wait(1).to({graphics:mask_graphics_153,x:420.9,y:106.5}).wait(1).to({graphics:mask_graphics_154,x:425.3,y:106.5}).wait(1).to({graphics:mask_graphics_155,x:429.7,y:106.5}).wait(1).to({graphics:mask_graphics_156,x:434.1,y:106.5}).wait(1).to({graphics:mask_graphics_157,x:438.5,y:106.5}).wait(1).to({graphics:mask_graphics_158,x:442.9,y:106.5}).wait(1).to({graphics:mask_graphics_159,x:447.3,y:106.5}).wait(1).to({graphics:mask_graphics_160,x:451.7,y:106.5}).wait(1).to({graphics:mask_graphics_161,x:456,y:106.5}).wait(1).to({graphics:mask_graphics_162,x:460.4,y:106.5}).wait(1).to({graphics:mask_graphics_163,x:464.8,y:106.5}).wait(1).to({graphics:mask_graphics_164,x:464.8,y:106.5}).wait(1).to({graphics:mask_graphics_165,x:470.1,y:106.5}).wait(1).to({graphics:mask_graphics_166,x:475.4,y:106.5}).wait(1).to({graphics:mask_graphics_167,x:480.7,y:106.5}).wait(1).to({graphics:mask_graphics_168,x:485.9,y:106.5}).wait(1).to({graphics:mask_graphics_169,x:491.2,y:106.5}).wait(1).to({graphics:mask_graphics_170,x:496.5,y:106.5}).wait(1).to({graphics:mask_graphics_171,x:501.7,y:106.5}).wait(1).to({graphics:mask_graphics_172,x:507,y:106.5}).wait(1).to({graphics:mask_graphics_173,x:512.3,y:106.5}).wait(1).to({graphics:mask_graphics_174,x:517.5,y:106.5}).wait(1).to({graphics:mask_graphics_175,x:522.8,y:106.5}).wait(1).to({graphics:mask_graphics_176,x:528.1,y:106.5}).wait(1).to({graphics:mask_graphics_177,x:533.4,y:106.5}).wait(1).to({graphics:mask_graphics_178,x:538.6,y:106.5}).wait(1).to({graphics:mask_graphics_179,x:543.9,y:106.5}).wait(1).to({graphics:mask_graphics_180,x:549.2,y:106.5}).wait(1).to({graphics:mask_graphics_181,x:554.4,y:106.5}).wait(1).to({graphics:mask_graphics_182,x:559.7,y:106.5}).wait(1).to({graphics:mask_graphics_183,x:565,y:106.5}).wait(1).to({graphics:mask_graphics_184,x:570.2,y:106.5}).wait(1).to({graphics:mask_graphics_185,x:575.5,y:106.5}).wait(1).to({graphics:mask_graphics_186,x:580.8,y:106.5}).wait(1).to({graphics:mask_graphics_187,x:586,y:106.5}).wait(1).to({graphics:mask_graphics_188,x:591.3,y:106.5}).wait(1).to({graphics:mask_graphics_189,x:591.3,y:106.5}).wait(156));
	
		// Masked Layer 5 - 4
		this.instance_1 = new lib.shape27("synched",0);
		this.instance_1.parent = this;
		this.instance_1._off = true;
	
		var maskedShapeInstanceList = [this.instance_1];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(206));
	
		// Layer 2
		this.instance_2 = new lib.sprite25();
		this.instance_2.parent = this;
		this.instance_2.setTransform(194.3,166.6,0.74,0.74);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
		this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
		this.instance_2.cache(-2,-2,404,189);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({scaleX:0.82,scaleY:0.82,x:177.9,y:159,alpha:0.32},5).to({scaleX:0.94,scaleY:0.94,x:154.9,y:148.4,alpha:0.762},11).to({scaleX:0.99,scaleY:0.99,x:144.4,y:143.5,alpha:0.961},8).to({scaleX:1,scaleY:1,x:143.3,y:143,alpha:0.98},1).wait(1).to({scaleX:1,scaleY:1,x:142.3,y:142.5,alpha:1},0).wait(24).to({scaleX:0.7,scaleY:0.7,x:212,y:124.7,alpha:0.441},17).to({scaleX:0.69,scaleY:0.69,x:214.8,y:123.9,alpha:0.422},1).to({scaleX:0.68,scaleY:0.68,x:217.6,y:123.2,alpha:0.398},1).to({scaleX:0.65,scaleY:0.65,x:222.7,y:121.9,alpha:0.359},2).to({scaleX:0.64,scaleY:0.64,x:225,y:121.3,alpha:0.34},1).to({scaleX:0.62,scaleY:0.62,x:229.5,y:120.1,alpha:0.301},2).to({scaleX:0.61,scaleY:0.61,x:233.6,y:119.1,alpha:0.27},2).to({scaleX:0.59,scaleY:0.59,x:237.3,y:118.2,alpha:0.238},2).to({scaleX:0.57,scaleY:0.57,x:240.6,y:117.3,alpha:0.211},2).to({scaleX:0.57,scaleY:0.57,x:242.2,y:116.9,alpha:0.199},1).to({scaleX:0.56,scaleY:0.56,x:245.2,y:116.1,alpha:0.18},2).to({scaleX:0.55,scaleY:0.55,x:246.6,y:115.8,alpha:0.16},1).to({scaleX:0.53,scaleY:0.53,x:250.4,y:114.8,alpha:0.141},3).to({scaleX:0.53,scaleY:0.53,x:251.6,y:114.5,alpha:0.129},1).to({scaleX:0.47,scaleY:0.47,x:266.1,y:110.8,alpha:0.012},13).wait(1).to({scaleX:0.46,scaleY:0.46,x:267.3,y:110.5,alpha:0},0).wait(214));
	
		// Layer 1
		this.instance_3 = new lib.shape22("synched",0);
		this.instance_3.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(345));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,669,416);
	
	
	(lib.sprite31 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_19 = function() {
			/* stop ();
			*/
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1026));
	
		// Layer 1
		this.instance = new lib.sprite30("synched",0);
		this.instance.parent = this;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:19},19).wait(1026));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,669,416);
	
	
	// stage content:
	(lib._005 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// 圖層 2
		this.instance = new lib.sprite31("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(2.6,158.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1045));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(402.6,542.6,669,416);
	// library properties:
	lib.properties = {
		id: '0C5B678E7B09774BB36CFD30BBDF5F52',
		width: 800,
		height: 768,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"/static/images/005_atlas_.png?1532929266125", id:"005_atlas_"}
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
	an.compositions['0C5B678E7B09774BB36CFD30BBDF5F52'] = {
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
	
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{}, thisPage = '5-1');
	var createjs, AdobeAn, thisPage;