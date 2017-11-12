<script type="text/javascript">
    var setMyBlog = {
        setCodeRow: function(){
            // 代码行号显示
            var pre = $("pre.sourceCode"); //选中需要更改的部分
            if(pre && pre.length){
                pre.each(function() {
                    var item = $(this);
                    var lang = item.attr("class").split(" ")[1]; //判断高亮的语言
                    item.html(item.html().replace(/<[^>]+>/g,"")); //将<pre>标签中的html标签去掉
                    item.removeClass().addClass("brush: " + lang +";"); //根据语言添加笔刷
                    SyntaxHighlighter.all();
                })
            }
        },
        setAtarget: function() {
            // 博客内的链接在新窗口打开
            $("#cnblogs_post_body a").each(function(){
                this.target = "_blank";
            })
        },
        runAll: function() {
            /* 运行所有方法
             * setAtarget() 博客园内标签新窗口打开
             * setContent() 设置目录
             * setCopyright() 设置版权信息
             * setCodeRow() 代码行号显示
             */
            this.setAtarget();
            this.setCodeRow();
        }
    }
    setMyBlog.runAll();
</script>