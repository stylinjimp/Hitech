(function () {
	try {
		if (!/fresh=\d+/.test(document.location)) {
			return;
		}
		var links	= document.links,
			iMax	= links.length;
		for (var i=0; i < iMax; i++) {
			var link		= links[i],
				href		= link.href,
				isInternal	= (href.substring(0, 32) == 'http://hitech-environmental.com/' ||  href.substring(0, 4) != 'http');
			if (isInternal) {
				link.href	+= '?fresh=' + (new Date).getTime();
			}
		}
	} catch(e) {};
})();