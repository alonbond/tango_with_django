$('#likes').click(function(){
	var catid;
	catid = $(this).attr("data-catid");
	$.get('/rango/like_category/', {category_id: catid}, function(data){
		$('#like_count').html(data);
		$('#likes').hide();
	});
});

$('#suggestion').keyup(function(){
	var query;
	query = $(this).val();
	console.log(query);
	$.get('/rango/suggest_category/', {suggestion: query}, function(data){
		$('#cats').html(data);
	})
})

$('.rango-add').click(function(){
	console.log('clicked!');
	var catid = $(this).attr("data-catid"),
		title = $(this).attr("data-title"),
		url = $(this).attr("data-url");
		console.log(catid, title, url);
		$.get('/rango/auto_add_page/', {category_id: catid, title: title, url: url}, function(data){
			console.log(data);
		});
});