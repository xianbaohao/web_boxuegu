$(function() {
    // 获取全部课程的函数
    function getAllCourse(){
        $.get('http://127.0.0.1:3001/getAllCourse',
        function(res) {
            console.log(res.result);
            var htmlStr = template('course',res)
            $('#AllCourse').html(htmlStr)
        }
        )

    }
    getAllCourse()
})
