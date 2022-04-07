(function ($) {
    "use strict";
    $(document).ready(function () {
        // Nav Toggle
        function navToggle() {
            $('#open-nav-btn').click(function () {
                $('.main-nav-container').css({
                    'width': '100%',
                    'left': '0',
                });
            });
            $('#close-nav-btn').click(function () {
                $('.main-nav-container').css({
                    'width': '0%',
                    'left': '-75px',
                });
            });
        }
        navToggle();

        // Subscription Form
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        function subscriptionForm() {
            $('.subs-btn').click(function (e) {
                e.preventDefault();
                var emailField = $('.subscribe-form input[type="email"]');
                var email = emailField.val();
                if (email != '') {
                    if (!isEmail(email)) {
                        emailField.after("<span class='error-msg'>Whoops, make sure it's an email</span>");
                        emailField.addClass('error');
                        $('.subscribe-form .form-group').addClass('show-icon');
                        setTimeout(function () {
                            $('.error-msg').remove();
                            $('.subscribe-form .form-group').removeClass('show-icon');
                        }, 2000);
                    } else {
                        emailField.after("<span class='success-msg'>Thanks for submitting..</span>");
                        emailField.addClass('success');
                        emailField.val('');
                        setTimeout(function () {
                            $('.success-msg').remove();
                        }, 2000);

                    }
                }
            }
            );
        }
        subscriptionForm();

    });
})(jQuery);