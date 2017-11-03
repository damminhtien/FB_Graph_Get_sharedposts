var arrNguoiDang = [];
$('document').ready(() => {
    $(".ketqua").hide();
    $("#alert").hide();
    $("#btnSubmit").click(() => {
        arrNguoiDang = [];
        $("#result1").val(0);
        $("#alert").show();
        $("#alert").html("Đợi giây lát");
        var id = $("#idAnh").val();
        $("#alert").show();
        (() => {
            $.ajax({
                url: "./access",
                type: "GET",
                success: function(acc) {
                    $("#result").val(0);
                    $("#result1").val(0);
                    $("#nguoidang").val("");
                    getAjax("https://graph.facebook.com/v2.9/" + id + "/sharedposts?limit=1000?summary=true&access_token=" + acc);
                    $("#img").attr('src', "https://graph.facebook.com/v2.9/" + id + "/picture?access_token=" + acc);
                }
            });
        })();
        $(".ketqua").fadeIn(2000);
    });
})

function getAjax(url) {
    (() => {
        $.ajax({
            url: url,
            type: "GET",
            success: function(data) {
                var l = data.data.length;
                for (var i = 0; i < l; i++) {
                    idNguoiDang = data.data[i].id.substring(0, 15);
                    if (arrNguoiDang.indexOf(idNguoiDang) == -1) {
                        arrNguoiDang.push(idNguoiDang);
                        $("#nguoidang").val($("#nguoidang").val() + "Chấp nhận: " + data.data[i].story + "\n");
                    } else {
                        $("#nguoidang").val($("#nguoidang").val() + "Loại bỏ__: " + data.data[i].story + "\n");
                    }
                }
                $("#result1").val(parseInt(arrNguoiDang.length));
                if (data.paging == null) {
                    $("#alert").html("Hoàn thành!!!");
                    setTimeout(() => { $("#alert").html("Mọi thắc mắc liên hệ với mình nhé fb.com/damminhtienmain") }, 5000);
                } else if (data.paging.next == null) {
                    $("#alert").html("Hoàn thành!!!");
                    setTimeout(() => { $("#alert").html("Mọi thắc mắc liên hệ với mình nhé fb.com/damminhtienmain") }, 5000);
                } else setTimeout((n) => { getAjax(data.paging.next) }, 1000);
                $("#result").val((parseInt($("#result").val()) + data.data.length));
            }
        });
    })();
}