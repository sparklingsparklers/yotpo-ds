var fadeDelay = '200';

function fadeIn(target, delay){
	$delay = delay || fadeDelay;
	addClass(target, 'yotpo-animation-fade');
	addTransitionDelay(target, $delay);
	target.style.opacity = 0;
	target.style.display = 'inline-block';
	target.style.display='inherit';
	setTimeout(function() {target.style.opacity = 1;}, 1);
}

function fadeOut(target, delay){
	$delay = delay || fadeDelay;
	addClass(target, 'yotpo-animation-fade');
	addTransitionDelay(target, $delay);
	setTimeout(function() {target.style.opacity = 0;}, 1);
	setTimeout(function() {target.style.display = 'none';}, $delay);	
}

function slideDown(target){

	target.style.position="absolute";
	target.style.right="-10000px";
	target.style.top="-10000px";
	target.style.display = "block";
	var oldH = target.offsetHeight;

	target.style.height = 0;
	addClass(target, 'yotpo-animation-slide');
	target.style.right="0";
	target.style.top="0";
	target.style.position="relative";
	
	setTimeout(function() {target.style.height = oldH;}, 10);
	setTimeout(function() {target.style.height = 'auto';}, 1000);
}

function showWriteReview(el, parentClass, targetClass){
	var target = parents(el,parentClass).querySelectorAll(targetClass)[0];
	slideDown(target);
}

function slideUp(target){

	var oldH = target.offsetHeight;
	addClass(target, 'yotpo-animation-slide');
	target.style.height = oldH;
	setTimeout(function() {target.style.height = 0;}, 10);

	setTimeout(function() {target.style.display = "none";}, 1000);
	setTimeout(function() {target.style.height = oldH;}, 1000);	
}

function showToolTip(el, parentClass, targetClass) {
	var target = parents(el, parentClass).querySelectorAll(targetClass)[0];
	fadeIn(target);
}

function hideToolTip(el, parentClass, targetClass) {
	var target = parents(el, parentClass).querySelectorAll(targetClass)[0];
	fadeOut(target);
}

function showWriteReviewFooter(el, parentClass, targetClass){
	var target = parents(el, parentClass).querySelectorAll(targetClass)[0];
	fadeIn(target);
}

function showMailInput(el, parentClass, targetClass){

	var target = parents(el, parentClass).querySelectorAll(targetClass)[0];
	fadeIn(target);

	var submitBtn = parents(el,'yotpo-footer').querySelectorAll('.submit')[0];
	submitBtn.style.marginTop = '15px';
	submitBtn.classList.remove('disabled');
}

function changeReviewInputVisibility(el){
	if(el.style.visibility != 'visible'){
		el.style.visibility= 'visible';
	}
}

function showSortCategories(el) {

	var dropdown = parents(el,'yotpo-nav-dropdown').querySelectorAll('.yotpo-dropdown')[0];
	changeDisplayMode(dropdown, 'inline-block');
}

function showMobileMenu(el) {
	var menu = parents(el, 'yotpo-dropdown-wrapper') ? parents(el, 'yotpo-dropdown-wrapper').querySelectorAll('.yotpo-menu-mobile-collapse')[0] : parents(el, 'yotpo-nav').querySelectorAll('.yotpo-menu-mobile-collapse')[0];
	changeDisplayMode(menu,'inline-block');
}

function showMobileDropDown(el){
	var dropdown = el.querySelectorAll('.list-categories-moblie')[0];
	changeDisplayMode(dropdown, 'inline');
}

function showShareOptions (el, parentClass, targetClass){
	var target = parents(el,parentClass).querySelectorAll(targetClass)[0];
	if(target.style.opacity ==0)
		fadeIn(target);
	else
		fadeOut(target);
}

function changeWriteReviewDisplayMode(el, displayMode){

	if(getStyle(el) == 'none'){
		el.style.display = displayMode;
	}
}

function changeDisplayMode(el, displayMode){

	if(getStyle(el) == 'none'){
		el.style.display = displayMode;
	}
	else {
		el.style.display = 'none';
	}
}

function getStyle(element){

    return element.currentStyle ?
    	element.currentStyle['display'] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue('display') : null;
}

function changeSortCategory(el){
	var selected = el.children;
	if(selected.length>0){
		var text = selected[0].text;
	}
	else {
		return;
	}

	var sortLabel = parents(el,'yotpo-nav-dropdown').getElementsByClassName('selected')[0];
	sortLabel.innerHTML = text;

	var dropdown = parents(el,'yotpo-nav-dropdown').getElementsByClassName('yotpo-dropdown')[0];
	changeDisplayMode(dropdown, 'inline-block');
}

function parents(elem, selector){
	var parent = elem.parentNode;
	 while (parent!=document.body) {
                if (parent.classList.contains(selector))
                        return parent;
                else
                        parent = parent.parentNode;
        }
        return null;
}

// ********* ANIMATIONS ********* //

function slideElement(el){

	var writeReview = parents(el,'yotpo-main-widget').querySelectorAll('.write-review')[0];

	if(!writeReview.classList.contains('yotpo-slide-up') && !writeReview.classList.contains('yotpo-slide-down')){
		addClass(writeReview, 'yotpo-slide-down');
	}
	else {

		if (writeReview.classList.contains('yotpo-slide-up')){
			var className = writeReview.className.replace('up','down');
			writeReview.className = className;
		}
	   	else {
		   	var className = writeReview.className.replace('down','up');
			writeReview.className = className;
	   }
	}
}

function fadeElement(el){

	var footer = parents(el,'write-review').querySelectorAll('.footer')[0];

	if(!footer.classList.contains('yotpo-opacity-up') && !footer.classList.contains('yotpo-opacity-down')){
		addClass(footer, 'yotpo-opacity-up');
	}
	else {

		if (footer.classList.contains('yotpo-opacity-up')){
			var className = footer.className.replace('up','down');
			footer.className = className;
		}
	   else
	   {
		   	var className = footer.className.replace('down','up');
			footer.className = className;
	   }
	}
}

function removeClass(el, className){
	// el.className.replace(/\className\b/,'');
	el.className = el.className.replace(new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)", "g"), "");
}

function addClass(el, className){
	if(!el.classList.contains(className))
		el.className += " " + className;
}

function addTransitionDelay(elm, time) {
	$time = (time/1000) + 's'
	elm.style['-webkit-transition-duration'] = time;
    elm.style['-webkit-transition-duration'] = time;
   	elm.style['-moz-transition-duration'] = time;
    elm.style['-o-transition-duration'] = time;
    elm.style['-ms-transition-duration'] = time;
    elm.style['transition-duration'] = time;
}

function showTestimonials() {
	var modal = document.querySelectorAll('.yotpo-modal')[0];
	modal.style.display = 'block';
	setTimeout(function(){ addClass(modal, 'yotpo-modal-active');},10);
}
function hideTestimonials(delay){
	$delay = delay || fadeDelay;
	var modal = document.querySelectorAll('.yotpo-modal')[0];
	removeClass(modal, 'yotpo-modal-active');
	setTimeout(function() {modal.style.display="none";}, $delay);
}