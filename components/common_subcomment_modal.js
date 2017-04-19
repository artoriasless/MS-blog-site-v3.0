const subcommentModal = '' +
    '<div id="subcommentModal" class="modal fade bs-example-modal-lg comment-modal" tabindex="-1" role="dialog" aria-labelledby="subcommentModalLabel">' +
        '<div class="modal-dialog modal-lg">' +
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                        '<span aria-hidden="true">×</span>' +
                    '</button>' +
                    '<h4 class="modal-title" id="subcommentModalLabel">Add Message</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<div class="form-horizontal" role="form">' +
                        '<div class="form-group">' +
                            '<label for="subcomment_userName" class="col-xs-2 control-label">Your Name</label>' +
                            '<div class="col-xs-10">' +
                                '<input type="text" class="form-control" id="subcomment_userName" placeholder="type your nickname here...">' +
                            '</div>' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<label for="subcomment_messageContent" class="col-xs-2 control-label">Your message</label>' +
                            '<div class="col-xs-10">' +
                                '<textarea class="form-control" id="subcomment_messageContent" placeholder="type your message here..." cols="5"></textarea>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row operate-container">' +
                        '<div class="col-xs-5 text-right">' +
                            '<a id="subcommentSubmitBtn" class="btn btn-default">submit</a>' +
                        '</div>' +
                        '<div class="col-xs-2 text-center submit-process invisible"><i class="fa fa-spinner fa-spin"></i></div>' +
                        '<div class="col-xs-5 text-left">' +
                            '<a class="btn btn-default" data-dismiss="modal">cancel</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

export default subcommentModal;