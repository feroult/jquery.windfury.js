(function($, doT) {

	$.doT = doT;
	
	function wfDot(ctx) {
		return function(path) {
			var text = ctx.wf.text(path);
			return $.doT.compile(text);
		}
	}

	$.windfury.spec.doT = wfDot;

})(jQuery, doT);