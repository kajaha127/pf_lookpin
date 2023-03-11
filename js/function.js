$(function () {
	const $container = $('.slides > .slides-container')

	const $btnPrev = $('.slides > .slides-navigation > .navigation-prev')
	const $btnNext = $('.slides > .slides-navigation > .navigation-next')

	let nowIdx = 0

	// 다음버튼
	$btnNext.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx < 2) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$container.stop().animate({ left: -680 * nowIdx })
	})

	// 이전버튼
	$btnPrev.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 2
		}
		$container.stop().animate({ left: -680 * nowIdx })
	})

	// 자동재생
	setInterval(function () {
		if (nowIdx < 2) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$container.stop().animate({ left: -680 * nowIdx })
	}, 2000)
})
