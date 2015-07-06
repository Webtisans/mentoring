$(function() {
	var form = $('form')[0]
	var $form = $('form')
	
	$form.find('input, textarea,select').each(function(i,e) {e.name = form.name+'['+e.name+']'} )

	$form.submit(function(e) {
		e.preventDefault()
		$.post(this.action, $(this).serialize(), function(response) {
			$('.modal').modal('show')
			form.reset()
		})
	})
})