import $ from 'jquery';

var common_showAlert = (alertInfo) => {
    var alertStr  = '<div class="alert-container">' +
						'<div class="alert alert-warning">' +
							'<a class="close" data-dismiss="alert">&times;</a>' +
							'<strong><i class="fa fa-info-circle text-danger"></i></strong>' + alertInfo +
						'</div>' +
					'</div>';
	
	$('body').append(alertStr);
	setTimeout(function(){
		$('.alert-container').fadeOut(1000);
		setTimeout(function(){
			$('.alert-container').remove();
		}, 1000);
	}, 1000);
};

export default common_showAlert;