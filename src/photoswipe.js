// Include Lightbox 
import '../node_modules/photoswipe/src/photoswipe.css'

import PhotoSwipeLightbox from '/Users/andrijcikulaj/pro-decor/node_modules/photoswipe/dist/photoswipe-lightbox.esm';

const lightbox = new PhotoSwipeLightbox({
  // may select multiple "galleries"
  gallery: '#gallery--getting-started',

  // Elements within gallery (slides)
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('/Users/andrijcikulaj/pro-decor/node_modules/photoswipe/dist/photoswipe.esm')
});
lightbox.init();