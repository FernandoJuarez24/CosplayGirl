const $porta = document.querySelector(".galeria");
const $modalImgPorta = document.querySelector(".modalGeneral");

$porta.addEventListener('click', (e) => {
	if(e.target.classList.contains('imgModal')){
		let urlImg = e.target.attributes[0].nodeValue

		$modalImgPorta.src = urlImg;
	}
});