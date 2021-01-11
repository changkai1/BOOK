// 控件区
$(function(){
    $(".btn-1615").click(function(){
        var _index = $(this).index();
        $(".options").eq(_index).show().siblings().hide();
        $(this).addClass("change").siblings().removeClass("change");
        $(".options").eq(_index).attr("status",_index).siblings().removeAttr("status");
        var status = parseInt($(".options").eq(_index).attr("status"));
        var editObj = $("#J_container_right"); // 编辑区
        if( status == 0 ){//文本描述
            editObj.find("#J_describeText_save").unbind("click");
            editObj.find("#J_describeText_save").click(function(){ //确定
                var describeTextVal = editObj.find("#J_textarea").val();
                if( describeTextVal != ""){
                    var htm = "<li><p>"+ describeTextVal +"</p><span class='delete-icon'>-</span></li>";
                    $("#J_preview-list").append(htm);
                    editObj.find("#J_textarea").val("");
                }
            });
            editObj.find("#J_describeText_cancel").unbind("click");
            editObj.find("#J_describeText_cancel").click(function(){ //取消
                $(this).parent().hide();
                $("#J_textarea").val("");
                $(".change").removeClass("change");
            });
        }else if( status == 1 ){ //单文本框
            editObj.find("#J_radio_singleText").unbind("click");
            editObj.find("#J_radio_singleText").click(function(){
                if( $("#J_radio_singleText").val() == 1){ 
                    $("#J_radio_singleText").attr("value","0");
                    $("#J_radio_singleText").removeAttr("checked");
                }else{
                    $("#J_radio_singleText").attr("value","1");
                    $("#J_radio_singleText").attr("checked","checked");
                }
            });
            editObj.find("#J_singleText_save").unbind("click");
            editObj.find("#J_singleText_save").click(function(){  //确定
                var J_title_singleText = $("#J_title_singleText"); //标题
                var J_input_singleText = $("#J_input_singleText"); //备注
                var title_singleTextVal = J_title_singleText.val();
                var input_singleTextVal = J_input_singleText.val();
                if( title_singleTextVal != "" ){ 
                    if( $("#J_radio_singleText").is(":checked") ){  //必选
                        var htm = "<li><p class='required'>"+ title_singleTextVal +"</p><span class='delete-icon'>-</span><input type='text' placeholder="+ input_singleTextVal +" /></li>";
                    }else{
                        var htm = "<li><p>"+ title_singleTextVal +"</p><span class='delete-icon'>-</span><input type='text'/></li>";
                    }
                    $("#J_preview-list").append(htm);
                    J_title_singleText.val("");
                    J_input_singleText.val("");
                    $("#J_radio_singleText").removeAttr("checked").attr("value","0");
                }
            });
            editObj.find("#J_singleText_cancel").unbind("click");
            editObj.find("#J_singleText_cancel").click(function(){ //取消
                $(this).parent().hide();
                $(this).parent().find("#J_title_singleText").val("");
                $(this).parent().find("#J_input_singleText").val("");
                $(this).parent().find("#J_radio_singleText").attr("value","0").removeAttr("checked");;
                $(".change").removeClass("change");
            });
        }else if( status == 2 ){ //多文本框
            editObj.find("#J_radio_moreText").unbind("click");
            editObj.find("#J_radio_moreText").click(function(){ //是否必填
                if( $("#J_radio_moreText").val() == 1){ 
                    $("#J_radio_moreText").attr("value","0");
                    $("#J_radio_moreText").removeAttr("checked");
                }else{
                    $("#J_radio_moreText").attr("value","1");
                    $("#J_radio_moreText").attr("checked","checked");
                }
            });
            editObj.find("#J_moreText_save").unbind("click");
            editObj.find("#J_moreText_save").click(function(){  //确定
                var J_title_moreText = $("#J_title_moreText"); //标题
                var J_textarea_moreText = $("#J_textarea_moreText"); //备注
                var title_moreTextVal = J_title_moreText.val();
                var textarea_moreTexVal = J_textarea_moreText.val();
                if( title_moreTextVal != "" ){ 
                    if( $("#J_radio_moreText").is(":checked") ){  //必选
                        var htm = "<li><p class='required'>"+ title_moreTextVal +"</p><span class='delete-icon'>-</span><textarea cols='30' rows='5' placeholder="+ textarea_moreTexVal +"></textarea></li>";
                    }else{
                        var htm = "<li><p>"+ title_moreTextVal +"</p><span class='delete-icon'>-</span><textarea cols='30' rows='5' ></textarea></li>";
                    }
                    $("#J_preview-list").append(htm);
                    J_title_moreText.val("");
                    J_textarea_moreText.val("");
                    $("#J_radio_moreText").removeAttr("checked").attr("value","0");
                }
            });
            editObj.find("#J_moreText_cancel").unbind("click");
            editObj.find("#J_moreText_cancel").click(function(){ //取消
                $(this).parent().hide();
                $(this).parent().find("#J_title_moreText").val("");
                $(this).parent().find("#J_textarea_moreText").val("");
                $(this).parent().find("#J_radio_moreText").attr("value","0").removeAttr("checked");;
                $(".change").removeClass("change");
            })
        }else if( status == 3 ){
            editObj.find("#J_radio").unbind("click");
            editObj.find("#J_radio").click(function(){ //是否必填
                if( $("#J_radio").val() == 1){ 
                    $("#J_radio").attr("value","0");
                    $("#J_radio").removeAttr("checked");
                }else{
                    $("#J_radio").attr("value","1");
                    $("#J_radio").attr("checked","checked");
                }
            });
            editObj.find("#edit_radio_iconAdd").unbind("click");
            editObj.find("#edit_radio_iconAdd").click(function(){ //添加
                var _num = parseInt($(".edit_radio_options").size());
                if( _num <= 9 ){
                    $(this).prev().find(".edit_radio_options").eq(0).clone(true).appendTo(".edit_radio_1416");
                    $(this).prev().find(".edit_radio_options:last-child").children(".edit_radio_text").val("");
                }
            });
            $(".edit_radio_iconSub").unbind("click");
            $(".edit_radio_iconSub").click(function(){ //删除
                var _num = parseInt($(".edit_radio_options").size());
                if( _num > 1 ){
                    $(this).parent().remove();
                }
            });
            $("#J_radio_select").change(function(){ //单行选项数量
                var J_radio_select = parseInt($("#J_radio_select").val());
                if( J_radio_select == 3 || J_radio_select == 4 ){
                    $("#J_radio_hint").show(300);
                }else{
                    $("#J_radio_hint").hide(300);
                }
            })
            $("#J_radio_save").unbind("click");
            $("#J_radio_save").click(function(){  //确定
                var J_radio_select = parseInt($("#J_radio_select").val());
                var radioTextVal = $("#J_title_radioText").val();  //标题内容
                var _length = $(".edit_radio_1416").children().length;
                var flagradio = false;
                for( var i = 0; i < _length; i++ ){ //判断编辑选项内容是否为空
                    if( $(".edit_radio_text").eq(i).val() != ""){
                        flagradio = true;
                    }else{
                        flagradio = false;
                    }
                }
                if( radioTextVal != "" && ( J_radio_select > 0 && J_radio_select <= _length ) && flagradio){
                    if( $("#J_radio").is(":checked") ){ //必填
                        var htm = "<li><p class='required'>"+ radioTextVal +"</p><span class='delete-icon'>-</span>";
                    }else{
                        var htm = "<li><p>"+ radioTextVal +"</p><span class='delete-icon'>-</span>";
                    }
                    if( _length > 0 ){
                        for( var i = 0; i < _length; i++ ){
                            if( J_radio_select != 0 && (i+1) % J_radio_select == 0 ){
                                htm = htm + "<span><input type='radio'/><label>"+ $(".edit_radio_text").eq(i).val() +"</label></span><br/>";
                            }else{
                                htm = htm + "<span><input type='radio'/><label>"+ $(".edit_radio_text").eq(i).val() +"</label></span>";
                            }
                        }
                        htm = htm + "</li>";
                    }
                    $("#J_preview-list").append(htm);
                    // 清空单选框内容
                    $("#J_title_radioText").val("");
                    $("#J_radio_select").val(0);
                    $("#J_radio").attr("value","0").removeAttr("checked");
                    $(".edit_radio_options").not(":first").remove();
                    $(".edit_radio_text").val("");
                }
            });
            
            $("#J_radio_cancel").unbind("click");
            $("#J_radio_cancel").click(function(){ //取消
                $(this).parent().hide();
                $("#J_title_radioText").val("");
                $("#J_radio_select").val(0);
                $("#J_radio").attr("value","0").removeAttr("checked");
                $(".edit_radio_options").not(":first").remove();
                $(".edit_radio_text").val("");
                $(".change").removeClass("change");
            })
        }else if( status == 4 ){
            editObj.find("#J_checkbox").unbind("click");
            editObj.find("#J_checkbox").click(function(){ //是否必填
                if( $("#J_checkbox").val() == 1){ 
                    $("#J_checkbox").attr("value","0");
                    $("#J_checkbox").removeAttr("checked");
                }else{
                    $("#J_checkbox").attr("value","1");
                    $("#J_checkbox").attr("checked","checked");
                }
            });
            editObj.find("#edit_checkbox_iconAdd").unbind("click");
            editObj.find("#edit_checkbox_iconAdd").click(function(){ //添加
                var _num = parseInt($(".edit_checkbox_options").size());
                if( _num <= 9 ){
                    $(this).prev().find(".edit_checkbox_options").eq(0).clone(true).appendTo(".edit_checkbox_1416");
                    $(this).prev().find(".edit_checkbox_options:last-child").children(".edit_checkbox_text").val("");                  
                }
            });
            $(".edit_checkbox_iconSub").unbind("click");
            $(".edit_checkbox_iconSub").click(function(){ //删除
                var _num = parseInt($(".edit_checkbox_options").size());
                if( _num > 1 ){
                    $(this).parent().remove();
                }
            });
            $("#J_checkbox_select").change(function(){ //单行选项数量
                var J_checkbox_select = parseInt($("#J_checkbox_select").val());
                if( J_checkbox_select == 3 || J_checkbox_select == 4 ){
                    $("#J_checkbox_hint").show(300);
                }else{
                    $("#J_checkbox_hint").hide(300);
                }
            })
            $("#J_checkbox_save").unbind("click");
            $("#J_checkbox_save").click(function(){  //确定
                var J_checkbox_select = parseInt($("#J_checkbox_select").val());
                var checkboxTextVal = $("#J_title_checkboxText").val();  //标题内容
                var _length = $(".edit_checkbox_1416").children().length;
                var flagcheckbox = false;
                for( var i = 0; i < _length; i++ ){ //判断编辑选项内容是否为空
                    if( $(".edit_checkbox_text").eq(i).val() != ""){
                        flagcheckbox = true;
                    }else{
                        flagcheckbox = false;
                    }
                }
                if( checkboxTextVal != "" && ( J_checkbox_select > 0 && J_checkbox_select <= _length ) && flagcheckbox){
                    if( $("#J_checkbox").is(":checked") ){ //必填
                        var htm = "<li><p class='required'>"+ checkboxTextVal +"</p><span class='delete-icon'>-</span>";
                    }else{
                        var htm = "<li><p>"+ checkboxTextVal +"</p><span class='delete-icon'>-</span>";
                    }
                    if( _length > 0 ){
                        for( var i = 0; i < _length; i++ ){
                            if( J_checkbox_select != 0 && (i+1) % J_checkbox_select == 0 ){
                                htm = htm + "<span><input type='checkbox'/><label>"+ $(".edit_checkbox_text").eq(i).val() +"</label></span><br/>";
                            }else{
                                htm = htm + "<span><input type='checkbox'/><label>"+ $(".edit_checkbox_text").eq(i).val() +"</label></span>";
                            }
                        }
                        htm = htm + "</li>";
                    }
                    $("#J_preview-list").append(htm);
                    // 清空单选框内容
                    $("#J_title_checkboxText").val("");
                    $("#J_checkbox_select").val(0);
                    $("#J_checkbox").attr("value","0").removeAttr("checked");
                    $(".edit_checkbox_options").not(":first").remove();
                    $(".edit_checkbox_text").val("");
                }
            });
            
            $("#J_checkbox_cancel").unbind("click");
            $("#J_checkbox_cancel").click(function(){ //取消
                $(this).parent().hide();
                $("#J_title_checkboxText").val("");
                $("#J_checkbox_select").val(0);
                $("#J_checkbox").attr("value","0").removeAttr("checked");
                $(".edit_checkbox_options").not(":first").remove();
                $(".edit_checkbox_text").val("");
                $(".change").removeClass("change");
            })
        }
    });





})