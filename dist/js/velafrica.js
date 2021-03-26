jQuery(document).ready(function ($) {

  function afterText() {
    var svgimg = '<svg fill="transparent" stroke="rgba(234,87,27,0.8)" stroke-width="2" xmlns="http://www.w3.org/2000/svg" width="19.531" height="19.003" viewBox="0 0 19.531 19.003"><path d="M15.827,3.41a4.36,4.36,0,0,0-6.388.516l-.674.77-.674-.77A4.36,4.36,0,0,0,1.7,3.41,5.861,5.861,0,0,0,1.362,11.3l6.625,7.582a1,1,0,0,0,1.551,0L16.162,11.3a5.858,5.858,0,0,0-.336-7.889Z" transform="translate(1.002 -1.245)" /></svg>';
    $("li#menu-item-71 a").append(svgimg);
    $("li#menu-item-7327 a").append(svgimg);
    $("li#menu-item-7326 a").append(svgimg);
  }
  afterText();

  })

  window.onload = function () {
  var angle = 0;
  var p = document.querySelector('.home .frontpage-button h2');
  var text = p.textContent.split('');
  var len = text.length;
  var phaseJump = 360 / len;
  var spans;
  var animationOn = false;

  p.innerHTML = text.map(function (char) {
    return '<span>' + char + '</span>';
  }).join('');

  spans = p.children;

  function wheee () {
      if (animationOn) {
        for (var i = 0; i < len; i++) {
          spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 90%, 65%)';
        }
        angle++;
        requestAnimationFrame(wheee);
      }
    }

  p.onmouseover =  function () {

      console.log("mouseouver")
      animationOn = true;
      requestAnimationFrame(wheee);
    }

    p.onmouseout = function () {

          console.log("mouseout")
        animationOn = false;
        for (var i = 0; i < len; i++) {
          spans[i].style.color = '#0093d6';
        }
    }

};
