(function (cjs, an) {
	
	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"004_atlas_", frames: [[475,0,473,367],[0,369,510,287],[0,0,473,367]]}
	];
	
	
	// symbols:
	
	
	
	(lib.image18 = function() {
		this.spriteSheet = ss["004_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.image19 = function() {
		this.spriteSheet = ss["004_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.image22 = function() {
		this.spriteSheet = ss["004_atlas_"];
		this.gotoAndStop(2);
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
	
	
	(lib.sprite21 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.instance = new lib.image18();
		this.instance.parent = this;
	
		this.instance_1 = new lib.image19();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-67,114);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.sprite21, new cjs.Rectangle(-67,0,540,401), null);
	
	
	(lib.text38 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AgDA5QAXgUAAgkIgTAAIAAgHIATAAIAAgPIAHAAIAAAPIAeAAIgBAiIgCAUQgBAEgDADQgCADgEABQgEACgHABIgGgBIgDgHIAIAAQAHAAADgBQADgDABgCIACgTIACgcIgXAAQgBARgEAPQgFAPgPAOgAg8A5QAIgNADgMQADgNAAgTIAAgSIAnAAIAABDQAAAIgEACQgFACgOAAIgDgHIAPAAQAEAAAAgFIAAgWQgMAHgMAEIgEgFQgDARgJAMgAgpAfQALgDAQgJIAAgIIgDAEQgJgHgNgGQAAAQgCANgAgOAJIAAgVIgZAAIAAAMIADgEQAMAFAKAIgAAdghIAGgDQAEAEAFAIIgHADQgDgGgFgGgAg7gaQATgSAIgRIAGADIgFAKIAgAAIAAAHIglAAQgIALgKAJgAgcghIAHgDIAHAMIgGACQgDgFgFgGgAgCgcQAQgSAEgPIAHACIgFALIApAAIAAAHIgsAAIgOARg");
		this.shape.setTransform(74.3,6.5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgHA7IAAgIIgpAAIAAAIIgIAAIAAhcIASAAIAAgSIgWAAIAAgHIA/AAIAAAHIgUAAIAAASIARAAIAABcgAgwAsIApAAIAAgkIgGAAQgLAAAAgIIAAgaIgIAAQAAAfgNAMIgDgCgAgwAKQAJgKAAgaIgJAAgAgRgBQAAACAEAAIAGAAIAAgbIgKAAgAggghIAIAAIAAgSIgIAAgAARA4IgFgCQgCgDAAgFIAAg9IAmAAIAAgkIgoAAIAAgHIAvAAIAAAyIgmAAIAAA2IABACQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAXAAQAGAAABgHQACgIAAgKIAHACQgBATgCAEQgCAEgEACQgEABgNAAIgSgBgAgrAcIAAgGIAeAAIAAAGg");
		this.shape_1.setTransform(60.3,6.7);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("Ag2A+IAAhnIAcAAQAHgKAFgKIAHACQgEAJgHAJIBJAAIAABbQAAALgMAAIgUAAIgCgHIAXAAIACgBIABgCIAAhVIhdAAIAABggAgZAjIAAgxIAzAAIAAAxgAgSAcIAlAAIAAgjIglAAg");
		this.shape_2.setTransform(46.4,6.5);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AABAyQgeAJgcACIgDgGQAdgCAXgHQgRgJgNgLIgJAAIAAgHIBeAAIAAAHQgPALgWAJQAWAHAdACIgDAHQglgEgUgIgAAAArQATgHAQgKIg+AAQAKAIARAJgAAIAJIAAglIgFAHIgDgFQAIgNAGgVIAHABIgEAMIARAAIgFgLIAFgCQAFAHACAGIASAAIAAAGIgTAAIAAAKIARAAIAAAHIgRAAIAAAKIARAAIAAAGIgRAAIAAAKIATAAIAAAHgAAPACIASAAIAAgKIgSAAgAAPgOIASAAIAAgKIgSAAgAAPgfIASAAIAAgKIgSAAgAgwAJIAAgoIgIAJIgEgFQAKgNAIgVIAHACIgFAMIARAAIgFgLIAGgCQAEAGACAHIAQAAIAAAGIgSAAIAAAKIAQAAIAAAHIgQAAIAAAKIAQAAIAAAGIgQAAIAAAKIASAAIAAAHgAgqACIARAAIAAgKIgRAAgAgqgOIARAAIAAgKIgRAAgAgqgfIARAAIAAgKIgRAAg");
		this.shape_3.setTransform(32.3,6.5);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AAbA9IAAh6IAIAAIAAAWIAYAAIAAAHIgYAAIAAAVIAWAAIAAAHIgWAAIAAAaIAaAAIAAAGIgaAAIAAAhgAg2A9IgDgHIAMAAIACgBIAAgCIAAgpIgPAFIgCgGIARgGIAAggIgRAAIAAgGIARAAIAAgaIAIAAIAAAaIALAAIAAAGIgLAAIAAAdIALgFIACAFIgNAHIAAAqQgBANgKgBIgIAAgAgRA4QARgPADgUQgMAGgPAEIgCgGIAegMIABgRIgZAAIAAgHIAZAAIAAgVIgZAAIAAgHIAZAAIAAgWIAHAAIAAA9QAAAYgHANQgFANgMALg");
		this.shape_4.setTransform(18.3,6.6);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("AABAyQgeAJgcACIgDgGQAdgCAXgHQgRgJgNgLIgJAAIAAgHIBeAAIAAAHQgPALgWAJQAWAHAdACIgDAHQglgEgUgIgAAAArQATgHAQgKIg+AAQAKAIARAJgAAIAJIAAglIgFAHIgDgFQAIgNAGgVIAHABIgEAMIARAAIgFgLIAFgCQAFAHACAGIASAAIAAAGIgTAAIAAAKIARAAIAAAHIgRAAIAAAKIARAAIAAAGIgRAAIAAAKIATAAIAAAHgAAPACIASAAIAAgKIgSAAgAAPgOIASAAIAAgKIgSAAgAAPgfIASAAIAAgKIgSAAgAgwAJIAAgoIgIAJIgEgFQAKgNAIgVIAHACIgFAMIARAAIgFgLIAGgCQAEAGACAHIAQAAIAAAGIgSAAIAAAKIAQAAIAAAHIgQAAIAAAKIAQAAIAAAGIgQAAIAAAKIASAAIAAAHgAgqACIARAAIAAgKIgRAAgAgqgOIARAAIAAgKIgRAAgAgqgfIARAAIAAgKIgRAAg");
		this.shape_5.setTransform(4.3,6.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.7,-5.1,97.9,41.2);
	
	
	(lib.text32 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AAqA1IAAhHIABgUIgEAKIgkBRIgFAAIglhRIgCgKIgBAAIABAUIAABHIgLAAIAAhpIAOAAIAiBKIAEAMIAFgMIAihKIAPAAIAABpg");
		this.shape.setTransform(119.4,8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgZAoQgNgPgBgXQABgYAPgQQAOgQAXAAQAPAAALAEIAAANQgMgGgOAAQgRAAgMAMQgLANAAATQAAATALAMQAKAMARAAQAQAAAMgHIAAALQgNAHgRAAQgVAAgOgPg");
		this.shape_1.setTransform(107.9,8);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("AgXAvQgJgIAAgMQAAgUAXgJIAAAAQgTgJAAgRQAAgLAIgIQAJgHAMAAQAMAAAIAHQAJAHAAAKQAAASgUAKIAAAAQAXAIAAAUQAAANgKAIQgJAIgPAAQgOAAgIgIgAgVAaQAAAJAHAFQAGAFAIAAQAJAAAGgFQAGgFAAgIQAAgQgVgIQgVAIAAAPgAgLgoQgGAFAAAHQAAAOARAHQASgIAAgNQAAgIgFgEQgFgEgIAAQgGAAgFAEg");
		this.shape_2.setTransform(99.2,8);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AgcA2IAAgKIAXAAIAAhSIgYAHIAAgLIAjgLIAABhIAYAAIAAAKg");
		this.shape_3.setTransform(91.3,7.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AALAxQgTAJggADIgDgHQAegCAQgIQgPgKgJgPIgFAAIAAgIIBGAAIAAAIQgJAQgQAJQAQAHAcAEIgFAHQgcgFgTgIgAALApQAQgJAIgNIgwAAQAKAOAOAIgAg+A3QAPgXAAgqIAAgnIAyAAIgFgKIAHgCIAHAMIAwAAIAAAIIhkAAIAAAnQAAAlgPAYgAgOADIAAgWIgUAAIAAgHIAUAAIAAgLIAIAAIAAALIAiAAIAAgLIAIAAIAAALIAYAAIAAAHIgYAAIAAAWgAgGgDIAiAAIAAgQIgiAAg");
		this.shape_4.setTransform(80.1,7.9);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("AgHA7IgEgHIARAAIADgCIABgDIAAgKIguAAIAAgHIAuAAIAAgIIAWgJIhAAAIAAgHIBSAAIAAAGIghAPIAAADIAsAAIAAAHIgsAAIAAANQAAADgCADIgEADIgKAAIgIAAgAg8A1QAMgWAAgfIAAg6IBsAAIAAAHIhlAAIAAAzQAAAlgNAVgAgbgBIAAgoIBMAAIAAAogAgUgIIA9AAIAAgKIg9AAgAgUgYIA9AAIAAgKIg9AAg");
		this.shape_5.setTransform(66.1,8.1);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#666666").s().p("AgGA4QATgKALgLQgPgUgEgeIgFAAQAAAegDAQQgFASgKAMIgGgFQAIgIAEgRQAGgQAAgeIAAgqIBBAAIAAAHIg7AAIAAAcIA0AAQgEAlgPAUQALAKARAKIgEAGQgSgJgKgMQgNANgRAJgAAdAdQALgQAEgcIgfAAQAEAbAMARgAgmA9IAAhHQgHAWgLANIgEgGQANgTAHgZIgTAAIAAgIIAVAAIAAgcIAHAAIAAAcIATAAIAAAIIgTAAIAAAHQAMALAHAKIgFAHQgHgLgHgIIAABGg");
		this.shape_6.setTransform(52.1,8);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#666666").s().p("AgBA8QgFgBgCgDQgCgDAAgEIAAg4IgNAEIgBgHIAOgFIAAgdIAGAAIAAAbIAWgHIAAgjIAHAAIAAAgIAegKQAAAbgIAfIgHgCQAHgZAAgVIgWAHIAAA2IgHAAIAAgzIgWAIIAAA6IABACIACABIAHABIAPAAQAZAAADgBQAEgBACgSIAGACQgBAOgDAFQgEAFgDABIgWAAIgdAAgAg8AsQAIgDAJgEIAAg2IgQAAIAAgIIAQAAIAAghIAIAAIAAAhIAPAAIAAAIIgPAAIAAAzIAQgIIABAHQgVAMgTAGg");
		this.shape_7.setTransform(38.1,7.8);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#666666").s().p("AAWAxQgSALgZABIgEgHQAYABAPgKIgagHIAKgJIgUAAIAAgGIAZAAIAIgKIgYAAIAAgWIAdAAIAAgHIgbAAIAAgQIgKAAIAAgGIAKAAIAAgQIAbAAIAAgHIAHAAIAAAHIAdAAIAAAQIAJAAIAAAGIgJAAIAAAQIgdAAIAAAHIAeAAIAAAWIghAAIgJAKIAXAAIADgGIAHABIgCAFIATAAIAAAGIgWAAQgEAIgHAGQAVAJAIAEIgFAFQgSgJgMgDgAAAAjIAVAGQAGgGAEgGIgZAAIgGAGgAAXAHIAXAAIAAgJIgXAAgAgGAHIAWAAIAAgJIgWAAgAAXgWIAVAAIAAgKIgVAAgAgEgWIAUAAIAAgKIgUAAgAAXgmIAVAAIAAgJIgVAAgAgEgmIAUAAIAAgJIgUAAgAgrA8IAAhBQgHAUgGAIIgEgHQAMgSAFgXIgPAAIAAgHIAPAAIAAgdIAIAAIAAAdIAKAAIAAAHIgKAAIAAADQAJAKAGAMIgFAEQgFgIgFgIIAABIg");
		this.shape_8.setTransform(24.1,7.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(15.1,-3.7,120.7,41.2);
	
	
	(lib.text31 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AAqA1IAAhHIABgUIgDAKIglBRIgFAAIglhRIgCgKIgBAAIABAUIAABHIgLAAIAAhpIAOAAIAiBKIAEAMIAFgMIAjhKIANAAIAABpg");
		this.shape.setTransform(91.4,8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgZAoQgNgPAAgXQgBgYAQgQQAPgQAXAAQAOAAALAEIAAANQgMgGgOAAQgRAAgMAMQgLANAAATQAAATAKAMQALAMARAAQAQAAAMgHIAAALQgNAHgRAAQgVAAgOgPg");
		this.shape_1.setTransform(79.9,8);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("AgdAyIAAgNQALAHAMAAQAKAAAHgGQAHgHAAgKQAAgLgHgGQgHgFgMAAIgRABIAAg1IAxAAIAAALIgmAAIAAAfIAJAAQAQAAAJAIQAJAIABAPQgBAQgKAIQgKAKgPAAQgPAAgIgEg");
		this.shape_2.setTransform(71.3,8.1);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AgcA2IAAgKIAXAAIAAhSIgYAHIAAgLIAjgLIAABhIAYAAIAAAKg");
		this.shape_3.setTransform(63.3,7.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AALAxQgTAJggADIgDgHQAegCAQgIQgQgKgIgPIgFAAIAAgIIBGAAIAAAIQgJAQgPAJQAPAHAcAEIgFAHQgcgFgTgIgAALApQAQgJAIgNIgwAAQAJAOAPAIgAg+A3QAPgXAAgqIAAgnIAyAAIgGgKIAIgCIAHAMIAwAAIAAAIIhkAAIAAAnQAAAlgPAYgAgOADIAAgWIgUAAIAAgHIAUAAIAAgLIAIAAIAAALIAiAAIAAgLIAIAAIAAALIAYAAIAAAHIgYAAIAAAWgAgGgDIAiAAIAAgQIgiAAg");
		this.shape_4.setTransform(52.1,7.9);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("AgHA7IgEgHIASAAIACgCIABgDIAAgKIguAAIAAgHIAuAAIAAgIIAWgJIhAAAIAAgHIBSAAIAAAGIghAPIAAADIAsAAIAAAHIgsAAIAAANQAAADgCADIgEADIgKAAIgIAAgAg8A1QAMgWAAgfIAAg6IBsAAIAAAHIhlAAIAAAzQAAAlgNAVgAgbgBIAAgoIBMAAIAAAogAgTgIIA9AAIAAgKIg9AAgAgTgYIA9AAIAAgKIg9AAg");
		this.shape_5.setTransform(38.1,8.1);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#666666").s().p("AAwA9IAAgGIg1AAIAAAGIgHAAIAAg3IBDAAIAAA3gAgFAwIA1AAIAAgjIg1AAgAgfA9IAAg2IgNAAQgBAmgJAPIgGgEQAJgPAAgiIgJAAIAAgHIAdAAIAAgSIgXAAIAAgkIAIAAIAAAdIAPAAIAAgjIAHAAIAAB5gAAEApIAAgVIAiAAIAAAVgAAKAjIAWAAIAAgJIgWAAgAgSgCIAAgHIAjAAIAAgjIggAAIAAgGIAgAAIAAgKIAIAAIAAAKIAhAAIAAAGIghAAIAAAjIAkAAIAAAHgAArgZQgFAIgEAEIgGgEQALgJADgPIAHACIgDAIQAJAHAFAHIgFAFQgHgJgFgEgAgBgZQgFAIgFAEIgGgDQAKgKAGgPIAFACIgEAIQAHAGAGAIIgFAFIgJgNg");
		this.shape_6.setTransform(24,7.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(15.1,-3.7,89.9,41.2);
	
	
	(lib.shape35 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C41719").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape.setTransform(-88.2,169.3);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		// Layer 1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#C41719").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_1.setTransform(-205.2,-43.7);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-211.9,-50.3,130.3,226.3);
	
	
	(lib.shape28 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#999999").s().p("A2eAGIAAgLMAs9AAAIAAALg");
		this.shape.setTransform(-63,-43.7);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-206.9,-44.2,287.9,1.1);
	
	
	(lib.shape26 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C41719").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape.setTransform(-81.3,68.3);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-87.9,61.7,13.3,13.3);
	
	
	(lib.shape23 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.image22();
		this.instance.parent = this;
		this.instance.setTransform(207,174);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(207,174,473,367);
	
	
	(lib.sprite39 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_144 = function() {
			/* stop ();
			*/
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));
	
		// Layer 24
		this.instance = new lib.shape35("synched",0);
		this.instance.parent = this;
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).wait(47));
	
		// Mask Layer 20 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		var mask_graphics_126 = new cjs.Graphics().p("A3vBfIAAi9MAvfAAAIAAC9g");
	
		this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_graphics_126,x:-59,y:-45.5}).wait(19));
	
		// Masked Layer 21 - 20
		this.instance_1 = new lib.shape28("synched",0);
		this.instance_1.parent = this;
		this.instance_1._off = true;
	
		var maskedShapeInstanceList = [this.instance_1];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).wait(19));
	
		// Layer 19
		this.instance_2 = new lib.text38("synched",0);
		this.instance_2.parent = this;
		this.instance_2.setTransform(-13.8,-62.2);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({x:-10.8,alpha:0.309},2).to({x:-8.5,alpha:0.539},2).to({x:-6.9,alpha:0.699},2).to({x:-5.4,alpha:0.852},3).to({x:-3.8,alpha:1},6).wait(1));
	
		// Mask Layer 18 (mask)
		var mask_1 = new cjs.Shape();
		mask_1._off = true;
		var mask_1_graphics_99 = new cjs.Graphics().p("AgdBfIAAi9IA7AAIAAC9g");
		var mask_1_graphics_100 = new cjs.Graphics().p("AhWBfIAAi9ICtAAIAAC9g");
		var mask_1_graphics_101 = new cjs.Graphics().p("AiPBfIAAi9IEgAAIAAC9g");
		var mask_1_graphics_102 = new cjs.Graphics().p("AjJBfIAAi9IGTAAIAAC9g");
		var mask_1_graphics_103 = new cjs.Graphics().p("AkCBfIAAi9IIFAAIAAC9g");
		var mask_1_graphics_104 = new cjs.Graphics().p("Ak7BfIAAi9IJ4AAIAAC9g");
		var mask_1_graphics_105 = new cjs.Graphics().p("Al1BfIAAi9ILrAAIAAC9g");
		var mask_1_graphics_106 = new cjs.Graphics().p("AmuBfIAAi9INdAAIAAC9g");
		var mask_1_graphics_107 = new cjs.Graphics().p("AnnBfIAAi9IPPAAIAAC9g");
		var mask_1_graphics_108 = new cjs.Graphics().p("AohBfIAAi9IRDAAIAAC9g");
		var mask_1_graphics_109 = new cjs.Graphics().p("ApaBfIAAi9IS1AAIAAC9g");
		var mask_1_graphics_110 = new cjs.Graphics().p("AqTBfIAAi9IUnAAIAAC9g");
		var mask_1_graphics_111 = new cjs.Graphics().p("ArMBfIAAi9IWZAAIAAC9g");
		var mask_1_graphics_112 = new cjs.Graphics().p("AsGBfIAAi9IYNAAIAAC9g");
		var mask_1_graphics_113 = new cjs.Graphics().p("As/BfIAAi9IZ/AAIAAC9g");
		var mask_1_graphics_114 = new cjs.Graphics().p("At4BfIAAi9IbxAAIAAC9g");
		var mask_1_graphics_115 = new cjs.Graphics().p("AuyBfIAAi9IdlAAIAAC9g");
		var mask_1_graphics_116 = new cjs.Graphics().p("AvrBfIAAi9IfXAAIAAC9g");
		var mask_1_graphics_117 = new cjs.Graphics().p("AwkBfIAAi9MAhJAAAIAAC9g");
		var mask_1_graphics_118 = new cjs.Graphics().p("AxeBfIAAi9MAi9AAAIAAC9g");
		var mask_1_graphics_119 = new cjs.Graphics().p("AyXBfIAAi9MAkvAAAIAAC9g");
		var mask_1_graphics_120 = new cjs.Graphics().p("AzQBfIAAi9MAmhAAAIAAC9g");
		var mask_1_graphics_121 = new cjs.Graphics().p("A0JBfIAAi9MAoTAAAIAAC9g");
		var mask_1_graphics_122 = new cjs.Graphics().p("A1DBfIAAi9MAqHAAAIAAC9g");
		var mask_1_graphics_123 = new cjs.Graphics().p("A18BfIAAi9MAr5AAAIAAC9g");
		var mask_1_graphics_124 = new cjs.Graphics().p("A21BfIAAi9MAtsAAAIAAC9g");
		var mask_1_graphics_125 = new cjs.Graphics().p("A3vBfIAAi9MAvfAAAIAAC9g");
	
		this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_1_graphics_99,x:-208,y:-45.5}).wait(1).to({graphics:mask_1_graphics_100,x:-202.3,y:-45.5}).wait(1).to({graphics:mask_1_graphics_101,x:-196.5,y:-45.5}).wait(1).to({graphics:mask_1_graphics_102,x:-190.8,y:-45.5}).wait(1).to({graphics:mask_1_graphics_103,x:-185.1,y:-45.5}).wait(1).to({graphics:mask_1_graphics_104,x:-179.3,y:-45.5}).wait(1).to({graphics:mask_1_graphics_105,x:-173.6,y:-45.5}).wait(1).to({graphics:mask_1_graphics_106,x:-167.9,y:-45.5}).wait(1).to({graphics:mask_1_graphics_107,x:-162.1,y:-45.5}).wait(1).to({graphics:mask_1_graphics_108,x:-156.4,y:-45.5}).wait(1).to({graphics:mask_1_graphics_109,x:-150.7,y:-45.5}).wait(1).to({graphics:mask_1_graphics_110,x:-145,y:-45.5}).wait(1).to({graphics:mask_1_graphics_111,x:-139.2,y:-45.5}).wait(1).to({graphics:mask_1_graphics_112,x:-133.5,y:-45.5}).wait(1).to({graphics:mask_1_graphics_113,x:-127.8,y:-45.5}).wait(1).to({graphics:mask_1_graphics_114,x:-122,y:-45.5}).wait(1).to({graphics:mask_1_graphics_115,x:-116.3,y:-45.5}).wait(1).to({graphics:mask_1_graphics_116,x:-110.6,y:-45.5}).wait(1).to({graphics:mask_1_graphics_117,x:-104.9,y:-45.5}).wait(1).to({graphics:mask_1_graphics_118,x:-99.1,y:-45.5}).wait(1).to({graphics:mask_1_graphics_119,x:-93.4,y:-45.5}).wait(1).to({graphics:mask_1_graphics_120,x:-87.7,y:-45.5}).wait(1).to({graphics:mask_1_graphics_121,x:-81.9,y:-45.5}).wait(1).to({graphics:mask_1_graphics_122,x:-76.2,y:-45.5}).wait(1).to({graphics:mask_1_graphics_123,x:-70.5,y:-45.5}).wait(1).to({graphics:mask_1_graphics_124,x:-64.7,y:-45.5}).wait(1).to({graphics:mask_1_graphics_125,x:-59,y:-45.5}).wait(20));
	
		// Masked Layer 19 - 18
		this.instance_3 = new lib.shape28("synched",0);
		this.instance_3.parent = this;
		this.instance_3._off = true;
	
		var maskedShapeInstanceList = [this.instance_3];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({_off:true},27).wait(19));
	
		// Mask Layer 16 (mask)
		var mask_2 = new cjs.Shape();
		mask_2._off = true;
		var mask_2_graphics_126 = new cjs.Graphics().p("A9hNrIAAi0MAtwAAAIAAC0g");
	
		this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_2_graphics_126,x:-189,y:87.5}).wait(19));
	
		// Masked Layer 17 - 16
		this.instance_4 = new lib.shape28("synched",0);
		this.instance_4.parent = this;
		this.instance_4.setTransform(-170.1,213,1.005,1);
		this.instance_4._off = true;
	
		var maskedShapeInstanceList = [this.instance_4];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(19));
	
		// Layer 16
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCAAQAAgbAUgTQATgUAbAAQAcAAATAUQAUATAAAbQAAAcgUATQgTATgcAAQgbAAgTgTQgUgTAAgcg");
		this.shape.setTransform(-88.2,169.3);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_1.setTransform(-88.2,169.3);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_2.setTransform(-88.2,169.3);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_3.setTransform(-88.2,169.3);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_4.setTransform(-88.2,169.3);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_5.setTransform(-88.2,169.3);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_6.setTransform(-88.2,169.3);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_7.setTransform(-88.2,169.3);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_8.setTransform(-88.2,169.3);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#C41719").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATAAAbQAAAcgTATQgUAUgbgBQgaABgUgUg");
		this.shape_9.setTransform(-88.2,169.3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},89).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape}]},1).to({state:[]},1).wait(47));
	
		// Mask Layer 15 (mask)
		var mask_3 = new cjs.Shape();
		mask_3._off = true;
		var mask_3_graphics_99 = new cjs.Graphics().p("AgYBaIAAizIAxAAIAACzg");
		var mask_3_graphics_100 = new cjs.Graphics().p("AhQBaIAAizICgAAIAACzg");
		var mask_3_graphics_101 = new cjs.Graphics().p("AiHBaIAAizIEPAAIAACzg");
		var mask_3_graphics_102 = new cjs.Graphics().p("Ai+BaIAAizIF9AAIAACzg");
		var mask_3_graphics_103 = new cjs.Graphics().p("Aj2BaIAAizIHsAAIAACzg");
		var mask_3_graphics_104 = new cjs.Graphics().p("AktBaIAAizIJbAAIAACzg");
		var mask_3_graphics_105 = new cjs.Graphics().p("AlkBaIAAizILJAAIAACzg");
		var mask_3_graphics_106 = new cjs.Graphics().p("AmcBaIAAizIM4AAIAACzg");
		var mask_3_graphics_107 = new cjs.Graphics().p("AnTBaIAAizIOnAAIAACzg");
		var mask_3_graphics_108 = new cjs.Graphics().p("AoKBaIAAizIQVAAIAACzg");
		var mask_3_graphics_109 = new cjs.Graphics().p("ApCBaIAAizISFAAIAACzg");
		var mask_3_graphics_110 = new cjs.Graphics().p("Ap5BaIAAizITzAAIAACzg");
		var mask_3_graphics_111 = new cjs.Graphics().p("AqwBaIAAizIVhAAIAACzg");
		var mask_3_graphics_112 = new cjs.Graphics().p("AroBaIAAizIXRAAIAACzg");
		var mask_3_graphics_113 = new cjs.Graphics().p("AsfBaIAAizIY/AAIAACzg");
		var mask_3_graphics_114 = new cjs.Graphics().p("AtWBaIAAizIatAAIAACzg");
		var mask_3_graphics_115 = new cjs.Graphics().p("AuOBaIAAizIcdAAIAACzg");
		var mask_3_graphics_116 = new cjs.Graphics().p("AvFBaIAAizIeLAAIAACzg");
		var mask_3_graphics_117 = new cjs.Graphics().p("Av9BaIAAizIf7AAIAACzg");
		var mask_3_graphics_118 = new cjs.Graphics().p("Aw0BaIAAizMAhpAAAIAACzg");
		var mask_3_graphics_119 = new cjs.Graphics().p("AxsBaIAAizMAjYAAAIAACzg");
		var mask_3_graphics_120 = new cjs.Graphics().p("AyjBaIAAizMAlHAAAIAACzg");
		var mask_3_graphics_121 = new cjs.Graphics().p("AzaBaIAAizMAm1AAAIAACzg");
		var mask_3_graphics_122 = new cjs.Graphics().p("A0SBaIAAizMAokAAAIAACzg");
		var mask_3_graphics_123 = new cjs.Graphics().p("A1JBaIAAizMAqTAAAIAACzg");
		var mask_3_graphics_124 = new cjs.Graphics().p("A2ABaIAAizMAsBAAAIAACzg");
		var mask_3_graphics_125 = new cjs.Graphics().p("A24BaIAAizMAtxAAAIAACzg");
	
		this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_3_graphics_99,x:-87.5,y:166}).wait(1).to({graphics:mask_3_graphics_100,x:-93.1,y:166}).wait(1).to({graphics:mask_3_graphics_101,x:-98.6,y:166}).wait(1).to({graphics:mask_3_graphics_102,x:-104.2,y:166}).wait(1).to({graphics:mask_3_graphics_103,x:-109.7,y:166}).wait(1).to({graphics:mask_3_graphics_104,x:-115.2,y:166}).wait(1).to({graphics:mask_3_graphics_105,x:-120.8,y:166}).wait(1).to({graphics:mask_3_graphics_106,x:-126.3,y:166}).wait(1).to({graphics:mask_3_graphics_107,x:-131.8,y:166}).wait(1).to({graphics:mask_3_graphics_108,x:-137.4,y:166}).wait(1).to({graphics:mask_3_graphics_109,x:-142.9,y:166}).wait(1).to({graphics:mask_3_graphics_110,x:-148.5,y:166}).wait(1).to({graphics:mask_3_graphics_111,x:-154,y:166}).wait(1).to({graphics:mask_3_graphics_112,x:-159.5,y:166}).wait(1).to({graphics:mask_3_graphics_113,x:-165.1,y:166}).wait(1).to({graphics:mask_3_graphics_114,x:-170.6,y:166}).wait(1).to({graphics:mask_3_graphics_115,x:-176.1,y:166}).wait(1).to({graphics:mask_3_graphics_116,x:-181.7,y:166}).wait(1).to({graphics:mask_3_graphics_117,x:-187.2,y:166}).wait(1).to({graphics:mask_3_graphics_118,x:-192.8,y:166}).wait(1).to({graphics:mask_3_graphics_119,x:-198.3,y:166}).wait(1).to({graphics:mask_3_graphics_120,x:-203.8,y:166}).wait(1).to({graphics:mask_3_graphics_121,x:-209.4,y:166}).wait(1).to({graphics:mask_3_graphics_122,x:-214.9,y:166}).wait(1).to({graphics:mask_3_graphics_123,x:-220.4,y:166}).wait(1).to({graphics:mask_3_graphics_124,x:-226,y:166}).wait(1).to({graphics:mask_3_graphics_125,x:-231.5,y:166}).wait(20));
	
		// Masked Layer 16 - 15
		this.instance_5 = new lib.shape28("synched",0);
		this.instance_5.parent = this;
		this.instance_5.setTransform(-170.1,213,1.005,1);
		this.instance_5._off = true;
	
		var maskedShapeInstanceList = [this.instance_5];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({_off:true},27).wait(19));
	
		// Layer 15
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCAAQAAgbAUgTQATgTAbAAQAcAAATATQAUATAAAbQAAAcgUATQgTAUgcAAQgbAAgTgUQgUgTAAgcg");
		this.shape_10.setTransform(-205.2,-43.7);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_11.setTransform(-205.2,-43.7);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_12.setTransform(-205.2,-43.7);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_13.setTransform(-205.2,-43.7);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_14.setTransform(-205.2,-43.7);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_15.setTransform(-205.2,-43.7);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_16.setTransform(-205.2,-43.7);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_17.setTransform(-205.2,-43.7);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_18.setTransform(-205.2,-43.7);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#C41719").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");
		this.shape_19.setTransform(-205.2,-43.7);
	
		this.instance_6 = new lib.text38("synched",0);
		this.instance_6.parent = this;
		this.instance_6.setTransform(-366.3,184.7);
		this.instance_6.alpha = 0;
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},89).to({state:[{t:this.shape_12},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_10}]},1).to({state:[{t:this.shape_14},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_10}]},1).to({state:[{t:this.shape_17},{t:this.shape_10}]},1).to({state:[{t:this.shape_18},{t:this.shape_10}]},1).to({state:[{t:this.shape_19},{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},31).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},6).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({x:-369.4,alpha:0.309},2).to({x:-371.7,alpha:0.539},2).to({x:-373.3,alpha:0.699},2).to({x:-374.8,alpha:0.852},3).to({x:-376.3,alpha:1},6).wait(1));
	
		// Layer 14
		this.instance_7 = new lib.shape26("synched",0);
		this.instance_7.parent = this;
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).wait(102));
	
		// Mask Layer 11 (mask)
		var mask_4 = new cjs.Shape();
		mask_4._off = true;
		var mask_4_graphics_66 = new cjs.Graphics().p("AtvGBIAAi+IbfAAIAAC+g");
	
		this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_4_graphics_66,x:3,y:38.5}).wait(79));
	
		// Masked Layer 12 - 11
		this.instance_8 = new lib.shape28("synched",0);
		this.instance_8.parent = this;
		this.instance_8.setTransform(35.3,112,0.57,1);
		this.instance_8._off = true;
	
		var maskedShapeInstanceList = [this.instance_8];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(66).to({_off:false},0).wait(79));
	
		// Mask Layer 10 (mask)
		var mask_5 = new cjs.Shape();
		mask_5._off = true;
		var mask_5_graphics_44 = new cjs.Graphics().p("AgdBfIAAi9IA7AAIAAC9g");
		var mask_5_graphics_45 = new cjs.Graphics().p("AhGBfIAAi9ICNAAIAAC9g");
		var mask_5_graphics_46 = new cjs.Graphics().p("AhuBfIAAi9IDdAAIAAC9g");
		var mask_5_graphics_47 = new cjs.Graphics().p("AiXBfIAAi9IEvAAIAAC9g");
		var mask_5_graphics_48 = new cjs.Graphics().p("Ai/BfIAAi9IF/AAIAAC9g");
		var mask_5_graphics_49 = new cjs.Graphics().p("AjoBfIAAi9IHRAAIAAC9g");
		var mask_5_graphics_50 = new cjs.Graphics().p("AkQBfIAAi9IIhAAIAAC9g");
		var mask_5_graphics_51 = new cjs.Graphics().p("Ak4BfIAAi9IJxAAIAAC9g");
		var mask_5_graphics_52 = new cjs.Graphics().p("AlhBfIAAi9ILDAAIAAC9g");
		var mask_5_graphics_53 = new cjs.Graphics().p("AmJBfIAAi9IMTAAIAAC9g");
		var mask_5_graphics_54 = new cjs.Graphics().p("AmyBfIAAi9INlAAIAAC9g");
		var mask_5_graphics_55 = new cjs.Graphics().p("AnaBfIAAi9IO1AAIAAC9g");
		var mask_5_graphics_56 = new cjs.Graphics().p("AoDBfIAAi9IQHAAIAAC9g");
		var mask_5_graphics_57 = new cjs.Graphics().p("AorBfIAAi9IRXAAIAAC9g");
		var mask_5_graphics_58 = new cjs.Graphics().p("ApUBfIAAi9ISpAAIAAC9g");
		var mask_5_graphics_59 = new cjs.Graphics().p("Ap8BfIAAi9IT5AAIAAC9g");
		var mask_5_graphics_60 = new cjs.Graphics().p("AqlBfIAAi9IVLAAIAAC9g");
		var mask_5_graphics_61 = new cjs.Graphics().p("ArNBfIAAi9IWbAAIAAC9g");
		var mask_5_graphics_62 = new cjs.Graphics().p("Ar2BfIAAi9IXtAAIAAC9g");
		var mask_5_graphics_63 = new cjs.Graphics().p("AseBfIAAi9IY9AAIAAC9g");
		var mask_5_graphics_64 = new cjs.Graphics().p("AtHBfIAAi9IaPAAIAAC9g");
		var mask_5_graphics_65 = new cjs.Graphics().p("AtvBfIAAi9IbfAAIAAC9g");
	
		this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_5_graphics_44,x:-82,y:67.5}).wait(1).to({graphics:mask_5_graphics_45,x:-78,y:67.5}).wait(1).to({graphics:mask_5_graphics_46,x:-73.9,y:67.5}).wait(1).to({graphics:mask_5_graphics_47,x:-69.9,y:67.5}).wait(1).to({graphics:mask_5_graphics_48,x:-65.8,y:67.5}).wait(1).to({graphics:mask_5_graphics_49,x:-61.8,y:67.5}).wait(1).to({graphics:mask_5_graphics_50,x:-57.8,y:67.5}).wait(1).to({graphics:mask_5_graphics_51,x:-53.7,y:67.5}).wait(1).to({graphics:mask_5_graphics_52,x:-49.7,y:67.5}).wait(1).to({graphics:mask_5_graphics_53,x:-45.6,y:67.5}).wait(1).to({graphics:mask_5_graphics_54,x:-41.6,y:67.5}).wait(1).to({graphics:mask_5_graphics_55,x:-37.5,y:67.5}).wait(1).to({graphics:mask_5_graphics_56,x:-33.5,y:67.5}).wait(1).to({graphics:mask_5_graphics_57,x:-29.4,y:67.5}).wait(1).to({graphics:mask_5_graphics_58,x:-25.4,y:67.5}).wait(1).to({graphics:mask_5_graphics_59,x:-21.3,y:67.5}).wait(1).to({graphics:mask_5_graphics_60,x:-17.3,y:67.5}).wait(1).to({graphics:mask_5_graphics_61,x:-13.2,y:67.5}).wait(1).to({graphics:mask_5_graphics_62,x:-9.2,y:67.5}).wait(1).to({graphics:mask_5_graphics_63,x:-5.1,y:67.5}).wait(1).to({graphics:mask_5_graphics_64,x:-1.1,y:67.5}).wait(1).to({graphics:mask_5_graphics_65,x:3,y:67.5}).wait(80));
	
		// Masked Layer 11 - 10
		this.instance_9 = new lib.shape28("synched",0);
		this.instance_9.parent = this;
		this.instance_9.setTransform(35.3,112,0.57,1);
		this.instance_9._off = true;
	
		var maskedShapeInstanceList = [this.instance_9];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({_off:true},22).wait(79));
	
		// Layer 10
		this.instance_10 = new lib.text32("synched",0);
		this.instance_10.parent = this;
		this.instance_10.setTransform(-54.2,49.9);
		this.instance_10.alpha = 0;
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({_off:false},0).to({x:-51,y:49.7,alpha:0.301},2).to({x:-48.6,y:49.6,alpha:0.52},2).to({x:-47,y:49.5,alpha:0.672},2).to({x:-45.5,y:49.4,alpha:0.809},3).to({x:-44.9,alpha:0.859},2).to({x:-44.7,alpha:0.891},1).to({x:-44.5,alpha:0.91},1).wait(1).to({x:-44.2,alpha:0.93},0).wait(62));
	
		// Layer 9
		this.instance_11 = new lib.shape26("synched",0);
		this.instance_11.parent = this;
		this.instance_11.setTransform(-51,-69);
		this.instance_11._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(43).to({_off:false},0).wait(102));
	
		// Mask Layer 6 (mask)
		var mask_6 = new cjs.Shape();
		mask_6._off = true;
		var mask_6_graphics_66 = new cjs.Graphics().p("AyCBzIAAjlMAkFAAAIAADlg");
	
		this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_6_graphics_66,x:-23.6,y:-3.5}).wait(79));
	
		// Masked Layer 7 - 6
		this.instance_12 = new lib.shape28("synched",0);
		this.instance_12.parent = this;
		this.instance_12.setTransform(20.6,43,0.745,1);
		this.instance_12._off = true;
	
		var maskedShapeInstanceList = [this.instance_12];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(66).to({_off:false},0).wait(79));
	
		// Layer 6
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAvAvQgTAUgcAAQgaAAgUgUQgTgTAAgcQAAgbATgTQAUgTAaAAQAcAAATATQAUATAAAbQAAAcgUATg");
		this.shape_20.setTransform(-81.3,68.3);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_21.setTransform(-81.3,68.3);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhBAAQAAgbATgTQAUgTAaAAQAcAAATATQAUATAAAbQAAAcgUATQgTAUgcAAQgaAAgUgUQgTgTAAgcg");
		this.shape_22.setTransform(-81.3,68.3);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_23.setTransform(-81.3,68.3);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_24.setTransform(-81.3,68.3);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_25.setTransform(-81.3,68.3);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_26.setTransform(-81.3,68.3);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_27.setTransform(-81.3,68.3);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_28.setTransform(-81.3,68.3);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_29.setTransform(-81.3,68.3);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#C41719").s().p("AguAvQgTgTAAgcQAAgbATgTQAUgUAaAAQAbAAAUAUQATATABAbQgBAcgTATQgUAUgbAAQgaAAgUgUg");
		this.shape_30.setTransform(-81.3,68.3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},34).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_24},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_22}]},1).to({state:[{t:this.shape_26},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_22}]},1).to({state:[{t:this.shape_28},{t:this.shape_22}]},1).to({state:[{t:this.shape_29},{t:this.shape_22}]},1).to({state:[{t:this.shape_30},{t:this.shape_20}]},1).to({state:[]},1).wait(102));
	
		// Mask Layer 5 (mask)
		var mask_7 = new cjs.Shape();
		mask_7._off = true;
		var mask_7_graphics_44 = new cjs.Graphics().p("AgnBzIAAjlIBPAAIAADlg");
		var mask_7_graphics_45 = new cjs.Graphics().p("AhcBzIAAjlIC5AAIAADlg");
		var mask_7_graphics_46 = new cjs.Graphics().p("AiRBzIAAjlIEjAAIAADlg");
		var mask_7_graphics_47 = new cjs.Graphics().p("AjGBzIAAjlIGNAAIAADlg");
		var mask_7_graphics_48 = new cjs.Graphics().p("Aj8BzIAAjlIH4AAIAADlg");
		var mask_7_graphics_49 = new cjs.Graphics().p("AkxBzIAAjlIJjAAIAADlg");
		var mask_7_graphics_50 = new cjs.Graphics().p("AlmBzIAAjlILNAAIAADlg");
		var mask_7_graphics_51 = new cjs.Graphics().p("AmbBzIAAjlIM3AAIAADlg");
		var mask_7_graphics_52 = new cjs.Graphics().p("AnQBzIAAjlIOhAAIAADlg");
		var mask_7_graphics_53 = new cjs.Graphics().p("AoFBzIAAjlIQLAAIAADlg");
		var mask_7_graphics_54 = new cjs.Graphics().p("Ao6BzIAAjlIR1AAIAADlg");
		var mask_7_graphics_55 = new cjs.Graphics().p("ApvBzIAAjlITfAAIAADlg");
		var mask_7_graphics_56 = new cjs.Graphics().p("AqkBzIAAjlIVJAAIAADlg");
		var mask_7_graphics_57 = new cjs.Graphics().p("ArZBzIAAjlIWzAAIAADlg");
		var mask_7_graphics_58 = new cjs.Graphics().p("AsOBzIAAjlIYdAAIAADlg");
		var mask_7_graphics_59 = new cjs.Graphics().p("AtEBzIAAjlIaJAAIAADlg");
		var mask_7_graphics_60 = new cjs.Graphics().p("At5BzIAAjlIbzAAIAADlg");
		var mask_7_graphics_61 = new cjs.Graphics().p("AuuBzIAAjlIdcAAIAADlg");
		var mask_7_graphics_62 = new cjs.Graphics().p("AvjBzIAAjlIfHAAIAADlg");
		var mask_7_graphics_63 = new cjs.Graphics().p("AwYBzIAAjlMAgxAAAIAADlg");
		var mask_7_graphics_64 = new cjs.Graphics().p("AxNBzIAAjlMAibAAAIAADlg");
		var mask_7_graphics_65 = new cjs.Graphics().p("AyCBzIAAjlMAkFAAAIAADlg");
	
		this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_7_graphics_44,x:-135,y:-3.5}).wait(1).to({graphics:mask_7_graphics_45,x:-129.7,y:-3.5}).wait(1).to({graphics:mask_7_graphics_46,x:-124.4,y:-3.5}).wait(1).to({graphics:mask_7_graphics_47,x:-119.1,y:-3.5}).wait(1).to({graphics:mask_7_graphics_48,x:-113.8,y:-3.5}).wait(1).to({graphics:mask_7_graphics_49,x:-108.5,y:-3.5}).wait(1).to({graphics:mask_7_graphics_50,x:-103.2,y:-3.5}).wait(1).to({graphics:mask_7_graphics_51,x:-97.9,y:-3.5}).wait(1).to({graphics:mask_7_graphics_52,x:-92.6,y:-3.5}).wait(1).to({graphics:mask_7_graphics_53,x:-87.3,y:-3.5}).wait(1).to({graphics:mask_7_graphics_54,x:-81.9,y:-3.5}).wait(1).to({graphics:mask_7_graphics_55,x:-76.6,y:-3.5}).wait(1).to({graphics:mask_7_graphics_56,x:-71.3,y:-3.5}).wait(1).to({graphics:mask_7_graphics_57,x:-66,y:-3.5}).wait(1).to({graphics:mask_7_graphics_58,x:-60.7,y:-3.5}).wait(1).to({graphics:mask_7_graphics_59,x:-55.4,y:-3.5}).wait(1).to({graphics:mask_7_graphics_60,x:-50.1,y:-3.5}).wait(1).to({graphics:mask_7_graphics_61,x:-44.8,y:-3.5}).wait(1).to({graphics:mask_7_graphics_62,x:-39.5,y:-3.5}).wait(1).to({graphics:mask_7_graphics_63,x:-34.2,y:-3.5}).wait(1).to({graphics:mask_7_graphics_64,x:-28.8,y:-3.5}).wait(1).to({graphics:mask_7_graphics_65,x:-23.5,y:-3.5}).wait(80));
	
		// Masked Layer 6 - 5
		this.instance_13 = new lib.shape28("synched",0);
		this.instance_13.parent = this;
		this.instance_13.setTransform(20.6,43,0.745,1);
		this.instance_13._off = true;
	
		var maskedShapeInstanceList = [this.instance_13];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(44).to({_off:false},0).to({_off:true},22).wait(79));
	
		// Layer 5
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAAQAAAbgUAUQgTAUgcAAQgbAAgTgUQgTgUAAgbQAAgbATgTQATgUAbAAQAcAAATAUQAUATAAAbg");
		this.shape_31.setTransform(-132.3,-0.7);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("rgba(196,23,25,0)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_32.setTransform(-132.3,-0.7);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhBAAQAAgbATgTQATgUAbAAQAcAAATAUQAUATAAAbQAAAbgUAUQgTAUgcAAQgbAAgTgUQgTgUAAgbg");
		this.shape_33.setTransform(-132.3,-0.7);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("rgba(196,23,25,0.125)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_34.setTransform(-132.3,-0.7);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("rgba(196,23,25,0.251)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_35.setTransform(-132.3,-0.7);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("rgba(196,23,25,0.376)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_36.setTransform(-132.3,-0.7);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("rgba(196,23,25,0.502)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_37.setTransform(-132.3,-0.7);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("rgba(196,23,25,0.624)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_38.setTransform(-132.3,-0.7);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("rgba(196,23,25,0.749)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_39.setTransform(-132.3,-0.7);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("rgba(196,23,25,0.875)").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_40.setTransform(-132.3,-0.7);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#C41719").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgTAbgBQAcABATATQAUATAAAbQAAAbgUAUQgTAUgcgBQgbABgTgUg");
		this.shape_41.setTransform(-132.3,-0.7);
	
		this.instance_14 = new lib.text31("synched",0);
		this.instance_14.parent = this;
		this.instance_14.setTransform(-26.2,-19.6);
		this.instance_14.alpha = 0;
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},34).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_35},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_33}]},1).to({state:[{t:this.shape_37},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_33}]},1).to({state:[{t:this.shape_39},{t:this.shape_33}]},1).to({state:[{t:this.shape_40},{t:this.shape_33}]},1).to({state:[{t:this.shape_41},{t:this.shape_31}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},26).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_14}]},1).wait(62));
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(69).to({_off:false},0).to({x:-23,alpha:0.301},2).to({x:-20.6,alpha:0.52},2).to({x:-19,alpha:0.672},2).to({x:-17.5,alpha:0.809},3).to({x:-16.5,alpha:0.91},4).wait(1).to({x:-16.2,alpha:0.93},0).wait(62));
	
		// Layer 4
		this.instance_15 = new lib.shape23("synched",0);
		this.instance_15.parent = this;
		this.instance_15.setTransform(-587,-284);
		this.instance_15.alpha = 0.02;
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({alpha:0.961},58).wait(68));
	
		// Layer 1
		this.instance_16 = new lib.sprite21();
		this.instance_16.parent = this;
		this.instance_16.setTransform(-380,-110);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:0.949},18).wait(127));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-447,-110,540,401);
	
	
	// stage content:
	(lib._004 = function(mode,startPosition,loop) {
	if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	
		// 圖層 2
		this.instance = new lib.sprite39("synched",0,false);
		this.instance.parent = this;
		this.instance.setTransform(588.5,281.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(541.5,555.5,540,401);
	// library properties:
	lib.properties = {
		id: '29AA190B3A5A56428ADF0DB0F81BC2F1',
		width: 800,
		height: 768,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"/static/images/004_atlas_.png?1532929276584", id:"004_atlas_"}
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
	an.compositions['29AA190B3A5A56428ADF0DB0F81BC2F1'] = {
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
	
	
	
})(createjs = createjs||{}, AdobeAn = AdobeAn||{}, thisPage = '1-2');
var createjs, AdobeAn, thisPage;