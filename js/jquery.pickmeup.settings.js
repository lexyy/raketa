$(function () {
	$('.single').pickmeup({
		format  : 'd.m.Y',
		flat	: true
	});
/*
	$('.multiple').pickmeup({
		flat	: true,
		mode	: 'multiple'
	});
	$('.range').pickmeup({
		flat	: true,
		mode	: 'range'
	});
	var plus_5_days	= new Date;
	plus_5_days.addDays(5);
	$('.3-calendars').pickmeup({
		flat		: true,
		date		: [
			new Date,
			plus_5_days
		],
		mode		: 'range',
		calendars	: 3
	});
*/
	$('input').pickmeup({
		format  : 'd.m.Y',
		position		: 'right',
		hide_on_select	: true
	});
});