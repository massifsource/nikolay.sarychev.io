$ (function () {
    $('.menu-open') .click (function () {
        $ ('.menu-collapse') .toggleClass('d-none');
        $ ('.menu-collapse') .toggleClass('opened');

    })

});
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
//


$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


//ArcticModal init
$('.menu__arctic').click(function (e) {
    e.preventDefault();
    $('#exampleModal').arcticmodal();
});

// Form send
// Вызов модального окна
$('.button__form').on('click', function(e) {
    e.preventDefault();
    $('#exampleModal').arcticmodal();
});
$('[data-submit]').on('click', function(e){
    e.preventDefault();
    $(this).parent('form').submit();
})
$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please check your input."
);
function valEl(el){

    el.validate({
        rules:{
            tel:{
                required:true,
                regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name:{
                required:true
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            tel:{
                required:'Поле обязательно для заполнения',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Поле обязательно для заполнения',
            },
            email:{
                required:'Поле обязательно для заполнения',
                email:'Неверный формат E-mail'
            }
        },
        submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
            })
                .always(function (response) {
                    $('.arcticmodal-close').click();
                    setTimeout(function (){
                        $('#loader').fadeOut();
                    },800);
                    setTimeout(function (){
                        $('#overlay').fadeIn();
                        $form.trigger('reset');
                    },1100);
                    $('#overlay').on ('click', function(e) {
                        $('#overlay').fadeOut();
                    });
                });

            return false;
        }
    })
}

$('.js-form').each(function() {
    valEl($(this));
});

