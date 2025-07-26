//your JS code here. If required.
window.onload = function(){
	const select = document.getElementById("colorSelect");
	const button = document.querySelector('input[type = "button"]');

	button.onclick = function(){
		const slectedIndex = select.selectedIndex;
		if(selectedIndex !== -1){
			select.remove(selectedIndex);
		}
	};
};