$(document).ready(function (e) {
$('#btn_dangki').click(function (e) {

    var username = $("#txt_username").val();
    var email = $("#txt_email").val();
    var password = $("#txt_password").val();

    var flag = false;

    if (username == '') {
        $('#error_username').text("Bạn chưa nhập tên tài khoản.")
    }
    if (password == '') {
        $('#error_password').text("Bạn chưa nhập password.")
    }

    if (email == '') {
        $('#error_email').text("Bạn chưa nhập email.")
    }

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var passwordReg = /(?=.*\d).{6,}/;
    if (emailReg.test(email) == false) {
        $('#error_email').text("Email không hợp lệ")
    }
    if (passwordReg.test(password) == false) {
        $('#error_password').text("Password phải có chữ, số, ít nhất 6 ký tự")
    }

    if (username != '' && email != '' && password != '' && emailReg.test(email) == true && passwordReg.test(password) == true) {
        flag = true
    }

    if (!flag) {
        alert("Vui lòng kiểm tra lại")
        return false;
    } else {
        $('#error_username').text("")
        $('#error_password').text("")
        $('#error_email').text("")
        alert(
            "Thông tin đăng nhập của bạn"+
            "\nTên đăng nhập: " + username+
            "\nEmail: " + email
        )
    }

})
$('#btn_dangnhap').click(function (e) {

    var email = $("#txt_email").val();
    var password = $("#txt_password").val();

    var flag = false;


    if (password == '') {
        $('#error_password').text("Bạn chưa nhập password.")
    }

    if (email == '') {
        $('#error_email').text("Bạn chưa nhập email.")
    }

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var passwordReg = /(?=.*\d).{6,}/;

    if (emailReg.test(email) == false) {
        $('#error_email').text("Email không hợp lệ")
    }
    if (passwordReg.test(password) == false) {
        $('#error_password').text("Password phải có chữ, số, ít nhất 6 ký tự")
    }

    if (email != '' && password != '' && emailReg.test(email) == true && passwordReg.test(password) == true) {
        flag = true
    }
    if (!flag) {
        alert("Vui lòng kiểm tra lại")
        return false;
    } else {

        $('#error_password').text("")
        $('#error_email').text("")

    }

})
$('#btn_dathang').click(function (e) {

    var phone = $("#txt_phone").val();
    var address = $("#txt_address").val();

    var flag = false;


    if (phone == '') {
        $('#error_phone').text("Bạn chưa nhập số điện thoại.")
    }

    if (address == '') {
        $('#error_address').text("Bạn chưa nhập địa chỉ.")
    }

    var phoneReg = /^(05[5|8|9]|08[1|2|3|4|5|86|9]|03[2|3|4|5|6|7|8|9]|07[0|9|7|6|8]|09[0|2|1|4|3|6|7|8|9]|01[2|9])+([0-9]{7,8})$/;
    if (phoneReg.test(phone) == false) {
        $('#error_phone').text("Số điện thoại không hợp lệ")
    }
    if (addressReg.test(address) == false) {
        $('#error_address').text("Địa chỉ không hợp lệ")
    }
    if (address != '' && phone != '' && phoneReg.test(phone) == true) {
        flag = true
    }

    if (!flag) {
        $("#thongbao_loi").css('display', 'block')

        return false;
    } else {
        $('#error_phone').text("")
        $('#error_address').text("")
    }

})
})


