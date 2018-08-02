(function (cjs, an) {
	
	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"007_atlas_", frames: [[0,0,557,392],[0,394,584,291]]}
	];
	
	
	// symbols:
	
	
	
	(lib.image244 = function() {
		this.spriteSheet = ss["007_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.image245 = function() {
		this.spriteSheet = ss["007_atlas_"];
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
	
	
	(lib.sprite247 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// 圖層 2
		this.instance = new lib.image244();
		this.instance.parent = this;
		this.instance.setTransform(584.6,-32,0.852,0.852,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 圖層 3
		this.instance_1 = new lib.image245();
		this.instance_1.parent = this;
		this.instance_1.setTransform(0,6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.sprite247, new cjs.Rectangle(0,-32,584.6,334), null);
	
	
	(lib.text257 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AAKA+IAAhfIgNAAQgGAQgOAQIgFgGQASgVAKghIAFADIgFASIA9AAIAAAHIgsAAIAAAYIAmAAIAAAIIgmAAIAAAZIApAAIAAAHIgpAAIAAAfgAgpA+IAAhRIgQAVIgDgGQATgXANgiIAHADIgIASIgEAIIAABeg");
		this.shape.setTransform(227.8,6.5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgnA9IgDgHIAMABQAAAAABgBQABAAAAAAQABAAAAgBQAAAAABAAQABgDACgSQACgSAAgTIgTAAQgBAqgNAZIgGgFQAFgKAEgPQADgNABgSIAAgjIgNAAIAAgHIAXAAQgBgHgEgLIAHgBQAEAKACAJIASAAIAAAHIgcAAIgBAWIAaAAQAAAUgCAUIgCAZQgCAEgDACQgDACgFABIgIgBgAAKA7QgKAAAAgKIAAguIgJACIAAgGIAJgDIAAgQIAGAAIAAAOIASgDIAAgVIAHAAIAAASIAagFQgCAZgGAVIgHgCQAFgPACgUIgSAEIAAArIgHAAIAAgpIgSADIAAAvIACADIADACIAkAAQADgBACgEIACgMIAHACQgBAKgCAEQgCAEgDACQgCABgHAAgAgNgRQAOgRANgaIAGACIgHAPIAwAAIAAAHIg0AAQgJAPgIAHg");
		this.shape_1.setTransform(213.9,6.5);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("AAsA8IAAgHIg+AAIAAAHIgHAAIAAgqIBNAAIAAAqgAgSAuIA+AAIAAgIIg+AAgAgSAfIA+AAIAAgHIg+AAgAg4A2QAEgJADgSQADgQAAgjIAAgjIBoAAIAAAaIhgAAQgBAqgDATQgDAUgGALgAgmgnIBYAAIAAgNIhYAAgAgeALIAAgcIBVAAIAAAcgAAQAEIAhAAIAAgPIghAAgAgWAEIAeAAIAAgPIgeAAgAgPgGIAGgDIAJAJIgGADIgJgJgAAZAAIAKgJIAGADQgEAEgGAFgAAXgXQAFgDAGgFIAGAFQgDADgJAEgAgPgbIAHgEIAIAIIgFAEIgKgIg");
		this.shape_2.setTransform(199.5,6.7);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AgWA+IgCgIIAUAAQAAAAABAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAhuIAGAAIAAAeQAAAKAIAMQAXgSANgRIAGAFQgPATgYARQANAYAgAUIgEAHQgjgWgRghIAAA5QAAAFgBACQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgLABIgLAAgAg8AsQAggaAIgnIgjAAIAAgIIAsAAQgHAygmAdg");
		this.shape_3.setTransform(185.9,6.5);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AgaA5QAPgLAIgPQAHgOABgRIABghIgUAAIAAgHIAhAAQgDgIgHgLIAHgCQAHALAEAKIAgAAIAAAHIguAAIAAAWIAnAAIgCAqQgBASgCAEQgCADgEADQgEACgJAAIgJAAIgDgHIAJAAQAJAAADgCQADgBABgDIACgUIACggIghAAQAAARgHAQQgGAQgSARgAg6A9IAAh2IApAAIAAAIQgIAUgGAMQAQAPAAAPQAAAGgDAFQgEAFgLAAIgHAAIgDgIIAJABQAIAAACgCQACgCAAgFQAAgOgRgOQAKgWAEgNIgZAAIAABvg");
		this.shape_4.setTransform(172,6.5);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("AAsA7IAAgIIhXAAIAAAIIgHAAIAAhcIAoAAQAGgKADgIIg7AAIAAgHIB5AAIAAAHIg3AAIgIASIA1AAIAABcgAAYAsIAUAAIAAhGIgUAAgAgPAsIAgAAIAAgVIggAAgAgrAsIAUAAIAAhGIgUAAgAgPARIAgAAIAAgSIggAAgAgPgIIAgAAIAAgSIggAAg");
		this.shape_5.setTransform(157.8,6.7);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#666666").s().p("Ag5A6IAAgHIA2AAIAAgbIgmAAIAAgHIAmAAIAAgZIgmAAIAAgGIBTAAIAAAGIgmAAIAAAZIAmAAIAAAHIgmAAIAAAbIA2AAIAAAHgAAAgyQgPAXgqAQIgDgHQAkgNAQgTIgOAAIAAgHIAaAAQAPAWAqARIgEAHQgogSgRgVg");
		this.shape_6.setTransform(143.8,6.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(134.8,-5.1,113.5,41.2);
	
	
	(lib.text256 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AgZA6QAVgXAEgYIgPAAIAAgHQAIgOAFgOIgQAAIAAgHIAWAAIAAAHIgMAcIAPAAQgBASgJATQADAFALADQAKAEAUAAIAVgBIgBAHQgeABgOgCQgNgCgLgJIgMAPgAg9A8QAGgOACgTIAGACQgCASgFAOgAgpAcIAGgBQAEAQABAMIgGABQgBgOgEgOgAAeAtIAAgOIgWAAIAAgGIAWAAIAAgMIgQAAIAAgGIAQAAIAAgJIgTAAIAAgHIATAAIAAgJIAHAAIAAAJIATAAIAAAHIgTAAIAAAJIASAAIAAAGIgSAAIAAAMIAWAAIAAAGIgWAAIAAAOgAgbAaIAGgBIAFARIgHACQgBgLgDgHgAg+ASQAPgSAKgQIgUAEIgDgGQAOgXAFgTIAHACQgFARgNAWIASgEQAFgHAEgMIAHACQgKAagYAdQAMgDANgFIgDgIIAFgCQAGAKADAMIgGACIgDgIQgVAIgNACgAAjgaQgLAHgOAGIgEgGQAMgFAKgFIgNgIIgGAFIgEgEQAKgKALgPIAGADIgGAIIAdAAIAAAGQgGAIgIAGIAUALIgEAGgAATgpIAQAHIALgKIgZAAIgCADgAgVg3IAFgFQAKAJAGAKIgFAEQgHgLgJgHg");
		this.shape.setTransform(73.9,6.8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgaA3QATgGAMgKIAEAGQgMAKgTAHgAAaAtIAEgGQASAIANAIIgEAGQgNgJgSgHgAg8AjIARgIIAAgrIgPAAIAAgHIAPAAIAAggIAHAAIAAAgIAPAAIAAAHIgPAAIAAAoIAPgIIAAAIQgNAHgZALgAgVAkIAAgHIAKAAIAAg+IAXAAIADgJIgiAAIAAgHIAjAAIACgMIAHABIgCALIAjAAIAAAHIgkAAIgCAJIAeAAIAAA+IALAAIAAAHgAgDAdIAtAAIAAgKIgtAAgAgDANIAtAAIAAgKIgtAAgAgDgDIAtAAIAAgJIgtAAgAgDgSIAtAAIAAgJIgtAAg");
		this.shape_1.setTransform(59.8,6.9);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("AgVA9IgDgHIAUAAQAAAAABAAQABAAAAgBQABAAAAgBQAAgBAAgBIAAhuIAGAAIAAAeQAAAKAIAMQAXgTANgQIAFAFQgOASgYASQANAYAgAUIgEAHQgjgVgRgiIAAA5QAAAFgBACQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgLAAIgKAAgAg8AsQAggaAIgnIgjAAIAAgIIAsAAQgHAygmAdg");
		this.shape_2.setTransform(45.8,6.9);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AgaA5QAPgLAIgPQAHgOABgRIABghIgUAAIAAgHIAhAAQgDgIgHgLIAHgCQAHALAEAKIAgAAIAAAHIguAAIAAAWIAnAAIgCAqQgBASgCAEQgCADgEADQgEACgJAAIgJAAIgDgHIAJAAQAJAAADgCQADgBABgDIACgUIACggIghAAQAAARgHAQQgGAQgSARgAg6A9IAAh2IApAAIAAAIIgOAgQAQAPAAAPQAAAGgDAFQgEAFgLAAIgHAAIgDgIIAJABQAIAAACgCQACgCAAgFQAAgOgRgOQAKgWAEgNIgZAAIAABvg");
		this.shape_3.setTransform(32,6.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AAhA7IgDgHIAQAAQADAAAAgEIAAglIgYAAIAAATIAJgBQAAgDgDgFIAGgCQAGAKADALIgGADIgDgIIglAGIgCgGIAUgEIAAgUIgXAAIAAAwIgHAAIAAgwIgFAAIAAgHIAFAAIAAgDIAHAAIAAADIAXAAIAAgLIgcAAIAAg0IBAAAIAAA0IgdAAIAAALIAgAAIAAAtQAAAGgEACQgDACgKAAIgHAAgAAZgOIAVAAIAAgQIgVAAgAgCgOIAUAAIAAgQIgUAAgAAZgkIAVAAIAAgQIgVAAgAgCgkIAUAAIAAgQIgUAAgAg4A7IAAh2IAjAAIAAAHQgGAUgGANQAMARAAANQAAAHgCADQgDAFgEABIgNABIgDgIIAKAAQAIAAAAgIQAAgPgMgOIALgjIgUAAIAABvg");
		this.shape_4.setTransform(17.9,7.1);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("Ag2A6QAHgIAEgLQAFgLgBgVIAAggIgMAJIgGgGQAhgTAOgUIAHACIgGAJIAvAAIAAAGQgFAJgJAJIAhAAIAABNQAAAEgCADQgDADgEAAIgUAAIgDgIIALABQALAAABgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgTIhTAAQgEASgLANgAAMAYIAmAAIAAgTIgmAAgAggAYIAlAAIAAgTIgkAAIgBATgAAMgBIAmAAIAAgSIgmAAgAgfgBIAkAAIAAgSIgkAAgAgkgaIAyAAQAKgKAEgHIgsAAQgJAJgLAIg");
		this.shape_5.setTransform(3.5,6.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-5.2,-4.7,98.3,41.2);
	
	
	(lib.shape251 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C41719").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape.setTransform(0.7,41.8);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#C41719").s().p("AguAvQgUgUABgbQgBgaAUgUQAUgTAagBQAcABATATQATAUABAaQgBAbgTAUQgTATgcAAQgaAAgUgTg");
		this.shape_1.setTransform(-5.1,212.7);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11.8,35.1,19.2,184.3);
	
	
	(lib.sprite258 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_61 = function() {
			/* stop ();
			*/
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));
	
		// Layer 18
		this.instance = new lib.text257("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(-237.5,-76);
		this.instance.alpha = 0;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:-235.3,alpha:0.18},1).to({x:-233.5,alpha:0.32},1).to({x:-230.8,alpha:0.539},2).to({x:-229,alpha:0.68},2).to({x:-227.5,alpha:0.801},3).to({x:-225.9,alpha:0.93},6).wait(1));
	
		// Layer 17
		this.instance_1 = new lib.text256("synched",0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(-126.2,297.6);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({x:-123.7,alpha:0.191},1).to({x:-121.7,alpha:0.34},1).to({x:-120,alpha:0.469},1).to({x:-117.6,alpha:0.66},2).to({x:-116,alpha:0.789},2).to({x:-114.3,alpha:0.91},4).to({x:-113.8,alpha:0.949},2).to({x:-113.2,alpha:1},2).wait(1));
	
		// Mask Layer 14 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_31 = new cjs.Graphics().p("AhAAZIAAgxICBAAIAAAxg");
		var mask_graphics_32 = new cjs.Graphics().p("AhABFIAAiJICBAAIAACJg");
		var mask_graphics_33 = new cjs.Graphics().p("AhABxIAAjhICBAAIAADhg");
		var mask_graphics_34 = new cjs.Graphics().p("AhACdIAAk6ICBAAIAAE6g");
		var mask_graphics_35 = new cjs.Graphics().p("AhADKIAAmTICBAAIAAGTg");
		var mask_graphics_36 = new cjs.Graphics().p("AhAD2IAAnrICBAAIAAHrg");
		var mask_graphics_37 = new cjs.Graphics().p("AhAEiIAApDICBAAIAAJDg");
		var mask_graphics_38 = new cjs.Graphics().p("AhAFOIAAqbICBAAIAAKbg");
		var mask_graphics_39 = new cjs.Graphics().p("AhAF6IAArzICBAAIAALzg");
		var mask_graphics_40 = new cjs.Graphics().p("AhAGmIAAtLICBAAIAANLg");
		var mask_graphics_41 = new cjs.Graphics().p("AhAHTIAAulICBAAIAAOlg");
		var mask_graphics_42 = new cjs.Graphics().p("AhAH/IAAv9ICBAAIAAP9g");
		var mask_graphics_43 = new cjs.Graphics().p("AhAIrIAAxVICBAAIAARVg");
	
		this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_graphics_31,x:1.5,y:41.6}).wait(1).to({graphics:mask_graphics_32,x:1.5,y:37.1}).wait(1).to({graphics:mask_graphics_33,x:1.5,y:32.7}).wait(1).to({graphics:mask_graphics_34,x:1.5,y:28.3}).wait(1).to({graphics:mask_graphics_35,x:1.5,y:23.9}).wait(1).to({graphics:mask_graphics_36,x:1.5,y:19.5}).wait(1).to({graphics:mask_graphics_37,x:1.5,y:15.1}).wait(1).to({graphics:mask_graphics_38,x:1.5,y:10.6}).wait(1).to({graphics:mask_graphics_39,x:1.5,y:6.2}).wait(1).to({graphics:mask_graphics_40,x:1.5,y:1.8}).wait(1).to({graphics:mask_graphics_41,x:1.5,y:-2.6}).wait(1).to({graphics:mask_graphics_42,x:1.5,y:-7}).wait(1).to({graphics:mask_graphics_43,x:1.5,y:-11.4}).wait(19));
	
		// Masked Layer 15 - 14
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#999999").s().p("AgEHhIAAvBIAKAAIAAPBg");
		this.shape.setTransform(0.7,-7.8);
		this.shape._off = true;
	
		var maskedShapeInstanceList = [this.shape];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(31).to({_off:false},0).wait(31));
	
		// Mask Layer 10 (mask)
		var mask_1 = new cjs.Shape();
		mask_1._off = true;
		var mask_1_graphics_31 = new cjs.Graphics().p("AgeALIAAgVIA9AAIAAAVg");
		var mask_1_graphics_32 = new cjs.Graphics().p("AgeA6IAAhzIA9AAIAABzg");
		var mask_1_graphics_33 = new cjs.Graphics().p("AgeBoIAAjPIA9AAIAADPg");
		var mask_1_graphics_34 = new cjs.Graphics().p("AgeCXIAAktIA9AAIAAEtg");
		var mask_1_graphics_35 = new cjs.Graphics().p("AgeDGIAAmLIA9AAIAAGLg");
		var mask_1_graphics_36 = new cjs.Graphics().p("AgeD0IAAnnIA9AAIAAHng");
		var mask_1_graphics_37 = new cjs.Graphics().p("AgeEjIAApFIA9AAIAAJFg");
		var mask_1_graphics_38 = new cjs.Graphics().p("AgeFRIAAqhIA9AAIAAKhg");
		var mask_1_graphics_39 = new cjs.Graphics().p("AgeGAIAAr/IA9AAIAAL/g");
		var mask_1_graphics_40 = new cjs.Graphics().p("AgeGvIAAtcIA9AAIAANcg");
		var mask_1_graphics_41 = new cjs.Graphics().p("AgeHdIAAu5IA9AAIAAO5g");
		var mask_1_graphics_42 = new cjs.Graphics().p("AgeILIAAwVIA9AAIAAQVg");
		var mask_1_graphics_43 = new cjs.Graphics().p("AgeI6IAAxzIA9AAIAARzg");
	
		this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_1_graphics_31,x:-37,y:189.6}).wait(1).to({graphics:mask_1_graphics_32,x:-37,y:194.3}).wait(1).to({graphics:mask_1_graphics_33,x:-37,y:198.9}).wait(1).to({graphics:mask_1_graphics_34,x:-37,y:203.6}).wait(1).to({graphics:mask_1_graphics_35,x:-37,y:208.2}).wait(1).to({graphics:mask_1_graphics_36,x:-37,y:212.9}).wait(1).to({graphics:mask_1_graphics_37,x:-37,y:217.5}).wait(1).to({graphics:mask_1_graphics_38,x:-37,y:222.2}).wait(1).to({graphics:mask_1_graphics_39,x:-37,y:226.8}).wait(1).to({graphics:mask_1_graphics_40,x:-37,y:231.5}).wait(1).to({graphics:mask_1_graphics_41,x:-37,y:236.2}).wait(1).to({graphics:mask_1_graphics_42,x:-37,y:240.8}).wait(1).to({graphics:mask_1_graphics_43,x:-37,y:245.5}).wait(19));
	
		// Masked Layer 11 - 10
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#999999").s().p("AgEGLIAAsVIAKAAIAAMVg");
		this.shape_1.setTransform(-37.6,252.6);
		this.shape_1._off = true;
	
		var maskedShapeInstanceList = [this.shape_1];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(31).to({_off:false},0).wait(31));
	
		// Mask Layer 7 (mask)
		var mask_2 = new cjs.Shape();
		mask_2._off = true;
		var mask_2_graphics_26 = new cjs.Graphics().p("AgOAvIAAhdIAdAAIAABdg");
		var mask_2_graphics_27 = new cjs.Graphics().p("Ag8AvIAAhdIB6AAIAABdg");
		var mask_2_graphics_28 = new cjs.Graphics().p("AhrAvIAAhdIDXAAIAABdg");
		var mask_2_graphics_29 = new cjs.Graphics().p("AiaAvIAAhdIE1AAIAABdg");
	
		this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_2_graphics_26,x:-43.5,y:212.7}).wait(1).to({graphics:mask_2_graphics_27,x:-38.5,y:212.7}).wait(1).to({graphics:mask_2_graphics_28,x:-33.5,y:212.7}).wait(1).to({graphics:mask_2_graphics_29,x:-28.5,y:212.7}).wait(33));
	
		// Masked Layer 8 - 7
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#999999").s().p("Ah7AFIAAgKID3AAIAAAKg");
		this.shape_2.setTransform(-25.5,212.7);
		this.shape_2._off = true;
	
		var maskedShapeInstanceList = [this.shape_2];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(26).to({_off:false},0).wait(36));
	
		// Layer 6
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCAAQAAgbAUgTQAUgTAaAAQAcAAATATQAUATAAAbQAAAcgUATQgTATgcAAQgaAAgUgTQgUgTAAgcg");
		this.shape_3.setTransform(0.7,41.8);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_4.setTransform(0.7,41.8);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_5.setTransform(0.7,41.8);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_6.setTransform(0.7,41.8);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_7.setTransform(0.7,41.8);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_8.setTransform(0.7,41.8);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_9.setTransform(0.7,41.8);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_10.setTransform(0.7,41.8);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_11.setTransform(0.7,41.8);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#C41719").s().p("AguAvQgUgTABgcQgBgbAUgTQAUgUAaAAQAcAAATAUQATATABAbQgBAcgTATQgTAUgcAAQgaAAgUgUg");
		this.shape_12.setTransform(0.7,41.8);
	
		this.instance_2 = new lib.shape251("synched",0);
		this.instance_2.parent = this;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},19).to({state:[{t:this.shape_5},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_3}]},1).to({state:[{t:this.shape_11},{t:this.shape_3}]},1).to({state:[{t:this.shape_12},{t:this.shape_3}]},1).to({state:[{t:this.instance_2}]},1).wait(34));
	
		// Layer 5
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCAAQAAgbAUgTQATgTAbAAQAcAAATATQAUATAAAbQAAAcgUATQgTAUgcAAQgbAAgTgUQgUgTAAgcg");
		this.shape_13.setTransform(-6.1,212.7);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAagBQAbABAUATQATAUABAaQgBAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_14.setTransform(-6.1,212.7);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgTgUgBgbQABgaATgUQAUgTAagBQAbABAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_15.setTransform(-6,212.7);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAagBQAbABAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_16.setTransform(-5.9,212.7);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgUgUAAgbQAAgaAUgUQATgTAbgBQAcABATATQAUAUgBAaQABAbgUAUQgTATgcAAQgbAAgTgTg");
		this.shape_17.setTransform(-5.7,212.7);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgTgUgBgbQABgaATgUQATgTAbgBQAbABAUATQAUAUgBAaQABAbgUAUQgUATgbAAQgbAAgTgTg");
		this.shape_18.setTransform(-5.6,212.7);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgUgUAAgbQAAgaAUgUQATgTAbgBQAcABATATQAUAUAAAaQAAAbgUAUQgTATgcAAQgbAAgTgTg");
		this.shape_19.setTransform(-5.5,212.7);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgUgUAAgbQAAgaAUgUQATgTAbgBQAcABATATQAUAUAAAaQAAAbgUAUQgTATgcAAQgbAAgTgTg");
		this.shape_20.setTransform(-5.4,212.7);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAagBQAbABAUATQATAUABAaQgBAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_21.setTransform(-5.2,212.7);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#C41719").s().p("AguAvQgUgUABgbQgBgaAUgUQAUgTAagBQAcABATATQATAUABAaQgBAbgTAUQgTATgcAAQgaAAgUgTg");
		this.shape_22.setTransform(-5.1,212.7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:-6.1}}]},19).to({state:[{t:this.shape_15},{t:this.shape_13,p:{x:-6}}]},1).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:-5.9}}]},1).to({state:[{t:this.shape_17},{t:this.shape_13,p:{x:-5.7}}]},1).to({state:[{t:this.shape_18},{t:this.shape_13,p:{x:-5.6}}]},1).to({state:[{t:this.shape_19},{t:this.shape_13,p:{x:-5.5}}]},1).to({state:[{t:this.shape_20},{t:this.shape_13,p:{x:-5.4}}]},1).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:-5.2}}]},1).to({state:[{t:this.shape_22},{t:this.shape_13,p:{x:-5.1}}]},1).to({state:[]},1).wait(34));
	
		// Layer 1
		this.instance_3 = new lib.sprite247();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-559.9,-22.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.949},18).wait(1).to({alpha:1},0).wait(43));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-559.9,-54.9,584.6,334);
	
	
	// stage content:
	(lib._007 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// 圖層 2
		this.instance = new lib.sprite258("synched",0,false);
		this.instance.parent = this;
		this.instance.setTransform(670.2,258);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(510.2,587.1,584.6,334);
	// library properties:
	lib.properties = {
		id: '8CCE5495B54D2E42A1C573624A16D5C1',
		width: 800,
		height: 768,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"/static/images/007_atlas_.png?1532929237029", id:"007_atlas_"}
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
	
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{}, thisPage = '2-2');
	var createjs, AdobeAn, thisPage;