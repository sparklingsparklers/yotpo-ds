function showWriteReviewFooter(el){
	var footer = parents(el,'write-review').querySelectorAll('.yotpo-footer')[0];
	addClass(footer, 'yotpo-animation-fade');
	footer.style.opacity = 0;
	footer.style.display='block';
	setTimeout(function() {footer.style.opacity = 1;}, 1);
}

function showWriteReview(el){

	var reviewForm = parents(el,'yotpo-main-widget').querySelectorAll('.write-review')[0];

	reviewForm.style.position="absolute";
	reviewForm.style.right="-10000px";
	reviewForm.style.top="-10000px";
	reviewForm.style.display = "block";
	var oldH = reviewForm.scrollHeight;

	reviewForm.style.height = 0;
	addClass(reviewForm, 'yotpo-animation-slide');
	reviewForm.style.right="0";
	reviewForm.style.top="0";
	reviewForm.style.position="relative";
	
	setTimeout(function() {reviewForm.style.height = oldH;}, 10);
}

function showMailInput(el){
	var emailInput = parents(el,'yotpo-footer').querySelectorAll('.email-input')[0];
	var submitBtn = parents(el,'yotpo-footer').querySelectorAll('.submit')[0];
	// changeWriteReviewDisplayMode(emailInput, 'block');
	addClass(emailInput, 'yotpo-animation-fade');
	emailInput.style.opacity = 0;
	emailInput.style.display='block';
	setTimeout(function() {emailInput.style.opacity = 1;}, 1);

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

function showShareOptions (el){
	var options = parents(el,'footer-actions').querySelectorAll('.share-options')[0];
	changeElementOpacity(options);
	//changeDisplayMode(options, 'inline-block');
}

function changeElementOpacity(el){
	if(el.style.opacity ==0)
		el.style.opacity = 1;
	else
		el.style.opacity = 0;
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
	el.className.replace(/\className\b/,'');
}

function addClass(el, className){
	el.className += " " + className;
}