# Explanation
注：此程序来自课本《JavaScript DOM编程艺术（第2版）》<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;
文件目的：使用JavaScript为文档动态创建标记，分别显示“缩略语列表”、“文献来源链接”和“快捷键清单”。<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;
其中：显示“缩略语列表”的主要函数为displayAbbreviations()，该函数可以把<abbr>标签中的title属性集中起来用定义列表的形式显示在一个页面；<br />
&nbsp;&nbsp;&nbsp;&nbsp;
显示“文献来源链接”的主要函数为displayCitations()，该函数可以将blockquote元素中的cite属性提取出来显示在页面上；<br />
&nbsp;&nbsp;&nbsp;&nbsp;
显示“快捷键清单”的主要函数为displayAccesskeys()，该函数可以将文档中能用到的所有快捷键显示在页面里。<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;
实际应用中，这些函数不一定使用多次，但是可以用于充实文档的内容，但也一定要注意避免使用DOM技术来创建页面的核心内容。
