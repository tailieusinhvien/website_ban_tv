     (function ($) {
  $("#signup-form").validate({
    rules: {
      name: {
        required: true,
      },
      
      phone_number: {
        required: true,
      },
      birth_date: {
          required: true,
      },
      password: {
        required: true,
      },
      re_password: {
        required: true,
        equalTo: "#password",
      },
    },
    onfocusout: function (element) {
      $(element).valid();
    },
  });

  jQuery.extend(jQuery.validator.messages, {
    required: "Thông tin bắt buộc nhập",
    equalTo: "Mật khẩu không trùng khớp",
  });
  ////////////////////////////////////////////

  
})(jQuery);

