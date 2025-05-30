var posts=["2025/05/26/lspci命令使用和解析/","2025/05/30/服务器CPU知识手册/","2025/05/30/服务器GPU知识手册/","2025/05/30/服务器内存知识手册/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };