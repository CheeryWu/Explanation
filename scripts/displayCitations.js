/**
 * Created by 吴晨 on 2017/3/13.
 */

function displayCitations() {
  //兼容性检验
  if (!document.getElementsByTagName) return false;
  if (!document.createElement || !document.createTextNode) return false;
  // 取得所有引用
  var quotes = document.getElementsByTagName("blockquote");
  // 遍历引用
  for(var i=0; i<quotes.length; i++) {
    // 如果quotes没有cite属性，继续循环
    if ( !quotes[i].getAttribute("cite") ) continue;
    // 如果有，则将该属性存入url变量中去
    var url = quotes[i].getAttribute("cite");
    // 获取引用中的所有元素节点
    var quoteChildren = quotes[i].getElementsByTagName('*');
    // 如果没有元素节点，继续循环
    if (quoteChildren.length < 1) continue;
    // 取得引用中的最后一个节点，elem变量存储链接在文档中的插入位置
    var elem = quoteChildren[quoteChildren.length -1];

    // 创建一个超链接 - 元素节点
    var link = document.createElement("a");
    // 创建超链接中的文本 - 文本节点
    var link_text = document.createTextNode("source");
    // 将文本节点存入元素节点
    link.appendChild(link_text);
    // 把href属性添加给新链接
    link.setAttribute("href", url);
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
    // 把标记添加到引用中的最后一个元素节点
    elem.appendChild(superscript);
  }
}
addLoadEvent(displayCitations);