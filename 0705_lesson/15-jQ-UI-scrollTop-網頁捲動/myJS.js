$(function () {
    // 當點擊 #gotop 按鈕時
    $('#gotop').click(function (e) {
        e.preventDefault(); // 阻止預設的連結跳轉行為

        // 使用 animate 方法在 800 毫秒內平滑滾動到頁面頂部
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
