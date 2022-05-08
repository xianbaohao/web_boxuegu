$(function() {
    // 隐藏所有内容
    $('.content>div').hide();
    // 显示第一个主体内容
    $('.content>div')
    .eq(0)
    .show();
    // 绑定点击事件
    $('.sidebar div').on('click',function() {
        // 移除所有类
        $('.sidebar div').removeClass('active');
        // 点击谁，为谁添加这个类
        $(this).addClass('active');
        // 获取当前点击按键的下标
        var index = $(this).index();
        // 对应下标的内容显示
        $('.content>div').hide().eq(index).show()


    })

})