function showWriteReviewFooter(el){
	var footer = parents(el,'write-review').querySelectorAll('.footer')[0];
	changeWriteReviewDisplayMode(footer, 'block');
}

function showMailInput(el){
	var footer = parents(el,'footer').querySelectorAll('.use-email')[0];
	changeReviewInputVisibility(footer);
}

function changeReviewInputVisibility(el){
	if(el.style.visibility != 'visible'){
		el.style.visibility= 'visible';
	}
}

function showSortCategories(el) {

	var dropdown = parents(el,'nav-dropdown').querySelectorAll('.dropdown')[0];
	changeDisplayMode(dropdown, 'inline-block');
}

function showMobileDropDown(el){
	var dropdown = el.querySelectorAll('.list-categories-moblie')[0];
	changeDisplayMode(dropdown, 'inline');
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

	var sortLabel = parents(el,'nav-dropdown').getElementsByClassName('selected')[0];
	sortLabel.innerHTML = text;

	var dropdown = parents(el,'nav-dropdown').getElementsByClassName('dropdown')[0];
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