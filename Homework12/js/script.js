$(document).ready(function() {
    $('.col-sm-3:eq(1), .col-sm-3:eq(2), .main_nav a:eq(1),.close,.back').on('click', function(event) {
        event.preventDefault();
        $('.overlay').animate({
            opacity: 'toggle',
        }, 2000);
        $('.modal').slideToggle();

    });
    $('.form button').on('click', function($) {

        $(function() {

            $('.modal').each(function() {
                // Объявляем переменные (форма и кнопка отправки)
                var form = $(this),
                    btn = form.find('.form button');

                // Добавляем каждому проверяемому полю, указание что поле пустое
                btn = form.find('.form button');
                form.find('.form-control').addClass('empty_field');

                // Функция проверки полей формы
                function checkInput() {
                    form.find('.form-control').each(function() {
                        if ($(this).val() != '') {
                            // Если поле не пустое удаляем класс-указание
                            $(this).removeClass('empty_field');
                        } else {
                            // Если поле пустое добавляем класс-указание
                            $(this).addClass('empty_field');
                        }
                    });
                }

                // Функция подсветки незаполненных полей
                function lightEmpty() {
                    form.find('.empty_field').css({ 'border-color': '#d8512d' });
                    // Через полсекунды удаляем подсветку
                    setTimeout(function() {
                        form.find('.empty_field').removeAttr('style');
                    }, 500);
                }

                // Проверка в режиме реального времени
                setInterval(function() {
                    // Запускаем функцию проверки полей на заполненность
                    checkInput();
                    // Считаем к-во незаполненных полей
                    var sizeEmpty = form.find('.empty_field').size();
                    // Вешаем условие-тригер на кнопку отправки формы
                    if (sizeEmpty > 0) {
                        if (btn.hasClass('disabled')) {
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }
                }, 500);

                // Событие клика по кнопке отправить
                btn.click(function() {
                    if ($(this).hasClass('disabled')) {
                        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                        lightEmpty();
                        return false
                    } else {
                        // Все хорошо, все заполнено, отправляем форму
                        form.submit();
                    }
                });
            });
        });

    });


    $('.form button').on('click', function(event) {
        event.preventDefault();

        $(".thanks:eq(0)").show();
        $(".modal").hide();
    });

    $('.back').on('click', function() {
        $(".thanks:eq(0)").hide();
        $(".modal").hide();
        $('form').trigger('reset');
    });






});