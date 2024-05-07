function popup(options) {
    $('body').css('overflow', 'hidden').prepend('<div id="overlay"><div id="popup"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + (typeof options !== 'undefined' && typeof options.body !== 'undefined' ? options.body : '') + '</div></div>');
    $('#popup .close').click(function () {
        if (typeof options !== 'undefined' && typeof options.onClose !== 'undefined' && typeof options.onClose === 'function') {
            options.onClose();
        }
        $('#popup').fadeOut(function () {
            $(this).parent().remove();
            $('body').css('overflow', 'auto');
        });
    });
}
function notify(options) {
    var c = (typeof options !== 'undefined' && typeof options.type !== 'undefined' && options.type ? options.type : 'danger');
    if (c === 'error')
        c = 'danger';
    if (!$('#notification').length) {
        $('body').prepend('<div id="notification"></div>');
    }
    var id = Math.floor(Math.random() * 9999 + 1);
    $('#notification').append('<div class="alert alert-' + c + ' center-block" id="notification' + id + '"><button type="button" class="close" data-dismiss="alert"><span class="glyphicon glyphicon-remove"></span></button>' + (typeof options !== 'undefined' && typeof options.message !== 'undefined' && options.message ? options.message : 'There were errors') + '</div>');
    $('#notification' + id + ' .close').click(function () {
        $(this).parents('.row').remove();
        if ($('#notification').children().length === 0) {
            $('#notification').remove();
        }
    });
    setTimeout(function () {
        $('#notification' + id).fadeOut(function () {
            $(this).remove();
            if ($('#notification').children().length == 0)
                $('#notification').remove();
        });
    }, (c === 'danger' ? 5000 : 3500));
}

function getPage(options) {
    if (typeof options !== 'undefined' && ((typeof options.loading !== 'undefined' && options.loading) || typeof options.loading === 'undefined')) {
        NProgress.start();
    }
    $.get(options.url, typeof options.data !== 'undefined' && options.data ? options.data : null, function (data) {
        if (typeof options !== 'undefined' && ((typeof options.loading !== 'undefined' && options.loading) || typeof options.loading === 'undefined')) {
            NProgress.done();
        }
        if (options.id) {
            $(options.id).html(data);
        }
        if (typeof options !== 'undefined' && typeof options.callback !== 'undefined' && typeof options.callback === 'function') {
            options.callback(data);
        }
        var history = true;
        if (typeof options.history !== 'undefined' && !options.history) {
            history = false;
        }
        if (history) {
            if (typeof options.data !== 'undefined' && options.data) {
                options.url += '?' + options.data;
            }
            addHistory(options);
        }
    });
}

function postData(options) {
    if (typeof options !== 'undefined' && ((typeof options.loading !== 'undefined' && options.loading) || typeof options.loading === 'undefined')) {
        NProgress.start();
    }
    $('#error-message').remove();
    $.post(options.url, typeof options.data !== 'undefined' && options.data ? options.data : null, function (data) {
        if (typeof options !== 'undefined' && ((typeof options.loading !== 'undefined' && options.loading) || typeof options.loading === 'undefined')) {
            NProgress.done();
        }
        if (data.error) {
            if (typeof options !== 'undefined' && ((typeof options.notify !== 'undefined' && options.notify) || typeof options.notify === 'undefined')) {
                notify({message: typeof data.message !== 'undefined' && data.message ? data.message : null});
            }
        } else {
            if (typeof options !== 'undefined' && ((typeof options.notify !== 'undefined' && options.notify) || typeof options.notify === 'undefined')) {
                notify({
                    type: 'success',
                    message: typeof data.message !== 'undefined' && data.message ? data.message : 'No message set'
                });
            }
        }
        if (data.messages && typeof options.id !== 'undefined' && options.id) {
            var errorMsg = '<ul id="error-message" class="text-' + (data.error ? 'danger' : 'success') + '">';
            for (i in data.messages) {
                errorMsg += '<li>' + data.messages[i] + '</li>';
            }
            errorMsg += '</ul>';
            $(options.id).prepend(errorMsg);
        }
        if (typeof options !== 'undefined' && typeof options.callback !== 'undefined' && typeof options.callback === 'function') {
            options.callback(data);
        }
    }, 'json');
}

function sure(options) {
    if (!$('#sure').length)
        $('body').prepend('<div id="sure"><p><small>' + (typeof options !== 'undefined' && typeof options.message !== 'undefined' && options.message ? options.message : 'Are you sure?') + '</small></p><div class="btn-group btn-group-xs" role="group" aria-label="..."><button type="button" class="btn btn-danger">Yes </button><button type="button" class="btn btn-default" style="margin-left:5px;"> No</button></div></div>');
    else
        $('#sure').show();
    var pos = options.elem.offset();
    $('#sure').css('left', pos.left - Math.floor(($('#sure').outerWidth() - options.elem.outerWidth()) / 2)).css('top', pos.top - $('#sure').outerHeight() - 10);
    $('#sure').find('button:first-child').focus();
    $('#sure button').blur(function () {
        $('#sure').hide();
    });
    $('#sure').off('click', '.btn-danger');
    $('#sure').on('click', '.btn-danger', function () {
        $('#sure').hide();
        if (typeof options !== 'undefined' && typeof options.callback !== 'undefined' && typeof options.callback === 'function') {
            options.callback();
        }
    });
}

function addHistory(options) {
    if (window.history.pushState) {
        window.history.pushState({id: options.id, url: options.url}, "", options.url);
    }
}
window.onpopstate = function (e) {
    if (e.state) {
        getPage({
            url: e.state.url,
            id: e.state.id,
            history: false
        });
    }
};

$(document).ajaxError(function () {
    NProgress.done();
});