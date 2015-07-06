/*
 + jquery.js
 + velocity.js
 + velocity.ui.js
 */

/* -----------------------------------------------------

 VELOCITY.JS SEQUENCE

 Animation with sequence.

 For basic usage of using Velocity sequence go to:
 http://julian.com/research/velocity/#uiPack

 v1.4
 - Added performance test. Transit.js + Velocity.js

 v1.3
 - Added button pressed animation
 - Added Reload pen button

 v1.2
 - Added demo loop sequence in order to easier measure performance, paints etc.
 - Added demo loop trigger (button)

 v1.1
 - Added Re-run button
 - Changed animation duration: 650ms > 550ms

 ----------------------------------------------------- */




// Define base div
var
  boxes = $('#boxes'),
  box = boxes.find('.box');



/* -----------------------------------------------------
 SET SOME ANIMATION DEFAULTS
 ----------------------------------------------------- */

var
  aniDuration = 550,
  aniEase = [0.075, 0.82, 0.165, 1];
//aniEase = 'easeOutCirc',
aniEaseOut = [0.6, 0.04, 0.98, 0.335];
//aniEaseOut = 'easeInCirc';



/* -----------------------------------------------------
 REGISTER CUSTOM TRANSITIONS
 ----------------------------------------------------- */

// short helper str.endsWith()
if(typeof String.prototype.endsWith != 'function') { String.prototype.endsWith = function (str) { return this.slice(-str.length) == str; }; }

// personal velocity.js small helper
function newTrans(name,fx){
  var ease, dur;
  if(name.endsWith('In')) {
    ease = aniEase;
    dur = aniDuration;
    fx.opacity = [1,0]; // forcefeed opacity
  }
  else {
    dur = aniDuration/1.66;
    ease = aniEaseOut; // aniEase/Out set elsewhere
    fx.opacity = 0;
  }

  // fx.translateZ = 0; // add to object

  $.Velocity.RegisterUI(name, {
    defaultDuration: dur,
    calls: [[ fx, aniDuration/1000, { easing: ease } ]]
  });

} //end newTrans()

newTrans('custom.slideUpIn', { translateY: [0,100] });
newTrans('custom.slideDownIn', { translateY: [0,-100] });
newTrans('custom.slideUpOut', { translateY: -100 });
newTrans('custom.slideDownOut', { translateY: 100 });
newTrans('custom.scaleIn', { scale: [1, 0.3] });
//newTrans('custom.scaleOut', { scale: 0.3 });
//newTrans('custom.slideRightIn', { translateX: [0,330] });


function seq(el,el2){
  var vSequence = [
    { elements: el, properties: 'custom.slideUpIn' },
    { elements: el2, properties: 'custom.slideDownIn', options: { stagger: 120 } }
  ];
  $.Velocity.RunSequence(vSequence);
}


/* -----------------------------------------------------
 INITIAL TRANSITION
 ----------------------------------------------------- */

//box.velocity('custom.slideUpIn', { display: false, delay:500, stagger: 120 }); // set display: false to not trigger layout
var buddy = box.find('.buddy');


// SEQUENCES
var seqInit = [
  { elements: box, properties: 'custom.slideUpIn', options: { display: false, delay: 300, stagger: 120 } },
  { elements: buddy, properties: 'custom.slideUpIn', options: { display: false, delay: 60, stagger: 120, sequenceQueue: false } }
];

var seqClick = [
  { elements: box, properties: 'custom.slideDownOut', options: { display: false, stagger: 120, backwards: true } },
  { elements: buddy, properties: 'fadeOut', options: { display: false, duration: 0 } }, // ugly
  { elements: box, properties: 'custom.slideUpIn', options: { display: false, delay: 300, stagger: 120 } },
  { elements: buddy, properties: 'custom.slideUpIn', options: { display: false, delay: 60, stagger: 120, sequenceQueue: false }
  }
];

var pop = $('.pop');
var open = $('.openPop');
var close = $('.close');

var demoLoop = [
  { elements: box, properties: 'custom.slideDownOut', options: { display: false, stagger: 120, backwards: true } },
  { elements: buddy, properties: 'fadeOut', options: { display: false, duration: 0 } }, // ugly
  { elements: box, properties: 'custom.slideUpIn', options: { display: false, delay: 300, stagger: 120 } },
  { elements: buddy, properties: 'custom.slideUpIn', options: { display: false, delay: 60, stagger: 120, sequenceQueue: false } },

  { elements: open[0], properties: { scale: 0.9 }, options: { duration: 60 } },
  { elements: open[0], properties: { scale: 1 }, options: { duration: 60 } },
  { elements: open[0], properties: 'custom.slideDownOut', options: { display:false } },
  { elements: pop[0], properties: 'custom.slideUpIn' },
  { elements: pop.first().find('img'), properties: 'custom.scaleIn', options: { stagger: 30 } },

  { elements: open[1], properties: { scale: 0.9 }, options: { duration: 60 } },
  { elements: open[1], properties: { scale: 1 }, options: { duration: 60 } },
  { elements: open[1], properties: 'custom.slideDownOut', options: { display:false, sequenceQueue: false } },
  { elements: pop[1], properties: 'custom.slideUpIn' },
  { elements: pop.last().find('img'), properties: 'custom.scaleIn', options: { stagger: 30 } },

  { elements: pop, properties: 'custom.slideDownOut', options: { delay:500, stagger:120 } },
  { elements: open, properties: 'custom.slideUpIn', options: { stagger:120 } },
  { elements: pop.find('img'), properties: 'fadeOut', options: { duration: 0, delay: 1000, display: false, complete: function(){ demo(); } } }
];

function init(rerun){
  if(!rerun){
    $.Velocity.RunSequence(seqInit);
  }
  else {
    $.Velocity.RunSequence(seqClick);
  }
}

init(); // run initial sequence


/* -----------------------------------------------------
 REGISTER CLICK EVENTS FOR BUTTONS
 ----------------------------------------------------- */

boxes.on('click', '.close', function(){
  var pop = $(this).parent(),
    img = pop.find('img'),
    openPop = pop.parent().find('.openPop');


  //pop.velocity('custom.slideDownOut', function(){ img.css('opacity', 0); });
  var seq = [
    { elements: pop, properties: 'custom.slideDownOut' },
    { elements: openPop, properties: 'custom.slideUpIn' },
    { elements: img, properties: 'fadeOut', options: { duration: 0, display: false } }
  ];
  $.Velocity.RunSequence(seq);

})

boxes.on('click', '.openPop', function(){
  var pop = $(this).parents('.box').find('.pop');
  var img = pop.find('img');
  var t = $(this);
  var seq = [
    { elements: t, properties: { scale: 0.9 }, options: { duration: 60 } },
    { elements: t, properties: { scale: 1 }, options: { duration: 60 } },
    { elements: t, properties: 'custom.slideDownOut', options: { display:false } },
    { elements: pop, properties: 'custom.slideUpIn' },
    //{ elements: img, properties: 'custom.slideDownIn', options: { stagger: 60 } }
    { elements: img, properties: 'custom.scaleIn', options: { stagger: 30, display: false } }
  ];
  $.Velocity.RunSequence(seq);
})


function demo(){
  $.Velocity($('*'), "stop");
  $.Velocity.RunSequence(demoLoop);
}




// Perf testing
function transit(){
  box.each(function(i){
    var t = $(this);
    t
    .transition({ y: -150, opacity: 0, duration: 500, delay: 120*i, easing: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)' })
    .transition({ y: 0, opacity: 1, duration: 500, delay: 0, easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)' });
  })
}

function vTest(){
  box.each(function(i){
    var t = $(this);
    t
    .velocity({ translateY: -150, opacity: 0 }, { duration: 500, delay: 120*i, easing: [0.6, 0.04, 0.98, 0.335] })
    .velocity({ translateY: 0, opacity: 1 }, { duration: 500, delay: 0, easing: [0.075, 0.82, 0.165, 1] })
  })
};

var loopy;
var loopi = $('#loop').find('i');

function execTransit(e){
  loopi.addClass('off').removeClass('on');
  e.removeClass('off').addClass('on');
  clearInterval(loopy);
  loopy = setInterval(function(){
    transit();
  }, 1500)
}

function execVelocity(e){
  loopi.addClass('off').removeClass('on');
  e.removeClass('off').addClass('on');
  clearInterval(loopy);
  loopy = setInterval(function(){
    vTest();
  }, 1500)
}
