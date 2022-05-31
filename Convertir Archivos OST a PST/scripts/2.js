(function() {
    'use strict';
    window.adsbygoogle = {
        loaded: true,
        push: function() {
        }
    };
    const phs = document.querySelectorAll('.adsbygoogle');
    const css = 'height:1px!important;max-height:1px!important;max-width:1px!important;width:1px!important;';
    for ( let i = 0; i < phs.length; i++ ) {
        const id = `aswift_${i}`;
        if ( document.querySelector(`iframe#${id}`) !== null ) { continue; }
        const fr = document.createElement('iframe');
        fr.id = id;
        fr.style = css;
        const cfr = document.createElement('iframe');
        cfr.id = `google_ads_frame${i}`;
        fr.appendChild(cfr);
        phs[i].appendChild(fr);
    }
})();
