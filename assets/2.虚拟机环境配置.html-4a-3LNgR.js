import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as a,b as i}from"./app-C3te44Lk.js";const s="/docs/assets/1.%E6%96%B0%E5%BB%BA%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%96%87%E4%BB%B6%E5%A4%B9-CdUurSKs.png",n="/docs/assets/2.%E6%96%B0%E5%BB%BA%E8%99%9A%E6%8B%9F%E6%9C%BA-CQtMjWqc.png",l="/docs/assets/3.%E9%80%89%E6%8B%A9%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%95%9C%E5%83%8F-DuN0XxHU.png",o="/docs/assets/4.Ubuntu%E8%B4%A6%E5%8F%B7--IS_pVPN.png",r="/docs/assets/5.%E6%9B%B4%E6%94%B9%E8%99%9A%E6%8B%9F%E6%9C%BA%E8%B7%AF%E5%BE%84-C5Orzo9q.png",p="/docs/assets/6.%E7%A3%81%E7%9B%98%E9%85%8D%E7%BD%AE-NGfALpMZ.png",c="/docs/assets/7.%E8%87%AA%E5%AE%9A%E4%B9%89%E7%A1%AC%E4%BB%B6-BYSrULCp.png",g="/docs/assets/8.%E8%B5%84%E6%BA%90%E9%85%8D%E7%BD%AE-yBKL2LfO.png",d="/docs/assets/9.%E4%B8%AD%E6%96%87%E4%B8%8B%E8%BD%BD-DryxpWJB.png",u="/docs/assets/10.%E5%AE%89%E8%A3%85%E4%B8%AD%E6%96%87-Boe18W5P.png",m="/docs/assets/11.%E5%8A%A0%E8%BD%BD%E4%B8%AD%E6%96%87-CjJNzDIQ.png",h="/docs/assets/12.%E8%BD%AF%E4%BB%B6%E5%92%8C%E6%9B%B4%E6%96%B0-D_G3GjB5.png",E="/docs/assets/13.%E9%80%89%E6%8B%A9%E4%B8%8B%E8%BD%BD%E5%99%A8-qq7JEhxJ.png",f="/docs/assets/14.%E6%81%AF%E5%B1%8F%E6%97%B6%E9%97%B4-CkypMfoG.png",B={},b=i('<h2 id="电脑配置" tabindex="-1"><a class="header-anchor" href="#电脑配置"><span>电脑配置</span></a></h2><p>在配置环境前，需要确定电脑配置要满足开发需求。由于在编译时，需要大量内存以及CPU资源，首次编译SDK大约3小时左右（可能更长）。</p><p>建议内存32或更大，16G内存最低。硬盘容量建议400G-500G，200G起。</p><h2 id="虚拟机下载与配置" tabindex="-1"><a class="header-anchor" href="#虚拟机下载与配置"><span>虚拟机下载与配置</span></a></h2><h3 id="vmware虚拟机下载" tabindex="-1"><a class="header-anchor" href="#vmware虚拟机下载"><span>Vmware虚拟机下载</span></a></h3><p>以前，Vmware虚拟机可以在官网进行免费下载，但目前从官网下载较为困难。在此，推荐此破解版。<a href="https://mp.weixin.qq.com/s/XGz2cuJHKVcHDc88s--y2A" target="_blank" rel="noopener noreferrer">Vmware17破解版下载</a> 根据链接进行破解安装。</p><h3 id="ubuntu下载" tabindex="-1"><a class="header-anchor" href="#ubuntu下载"><span>Ubuntu下载</span></a></h3><p>嵌入式Linux开发一般都基于Windows+Linux进行二次开发，Linux通常是运行在虚拟机中的Ubuntu系统。</p><p>RK3588使用Ubuntu20.04版本。官方推荐使用Ubuntu22版本，由于正点原子和北京讯为的教程皆采用20.04版本，目前采用Ubuntu20.04进行学习。日后，有一定开发能力后尝试使用Ubuntu22版本。</p><p>Ubuntu老版本下载链接，<a href="https://old-releases.ubuntu.com/releases/" target="_blank" rel="noopener noreferrer">Ubuntu下载链接</a>。</p><h2 id="ubuntu虚拟机配置" tabindex="-1"><a class="header-anchor" href="#ubuntu虚拟机配置"><span>Ubuntu虚拟机配置</span></a></h2><p>在虚拟机中安装Ubuntu前，需要保证电脑的配置满足开发条件。建议配置32G内存、200G磁盘空间、较好的CPU。</p><ol><li>新建文件夹，用于存放系统镜像以及虚拟机文件。</li></ol><figure><img src="'+s+'" alt="新建虚拟机文件夹" tabindex="0" loading="lazy"><figcaption>新建虚拟机文件夹</figcaption></figure><ol start="2"><li>打开Vmware，新建虚拟机</li></ol><figure><img src="'+n+'" alt="新建虚拟机" tabindex="0" loading="lazy"><figcaption>新建虚拟机</figcaption></figure><ol start="3"><li>选择Ubuntu镜像</li></ol><figure><img src="'+l+'" alt="选择虚拟机镜像" tabindex="0" loading="lazy"><figcaption>选择虚拟机镜像</figcaption></figure><ol start="4"><li>填写Ubuntu账号信息</li></ol><figure><img src="'+o+'" alt="填写Ubuntu账号信息" tabindex="0" loading="lazy"><figcaption>填写Ubuntu账号信息</figcaption></figure><ol start="5"><li>更改虚拟机路径位置</li></ol><figure><img src="'+r+'" alt="更改虚拟机存放路径" tabindex="0" loading="lazy"><figcaption>更改虚拟机存放路径</figcaption></figure><ol start="6"><li>配置虚拟机磁盘 我的电脑为虚拟机单独预留了400G的空间，为此虚拟机最大可分配400G的空间，暂时分配300G，若后期空间不足可以修改虚拟机配置进行修改。本人虚拟机创建后不准备进行移动，所以选择存储为单个文件。</li></ol><figure><img src="'+p+'" alt="配置虚拟机磁盘" tabindex="0" loading="lazy"><figcaption>配置虚拟机磁盘</figcaption></figure><ol start="7"><li>自定义硬件设备</li></ol><figure><img src="'+c+'" alt="修改资源配置" tabindex="0" loading="lazy"><figcaption>修改资源配置</figcaption></figure><figure><img src="'+g+`" alt="资源配置" tabindex="0" loading="lazy"><figcaption>资源配置</figcaption></figure><p>主要配置内存、处理器、网络模式、USB控制器。</p><ul><li>我的电脑的物理内存是32G，为虚拟机分配了27.8G。</li><li>我的CPU逻辑处理器共有28个，为虚拟机分配16个。</li><li>分配的内核总数只能是8的倍数。USB控制器兼容性选择3.1。</li><li>网络适配器选择桥接模式，涉及到同一网段配置时，会进行详细说明。</li></ul><ol start="8"><li><p>等待Ubuntu安装完成，使用刚刚创建的账号进入Ubuntu。</p></li><li><p>正常情况下，虚拟机会自动安装VMware tools，若没有成功安装，请使用命令行进行安装。依次执行下面的命令。</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install open-vm-tools</span></span>
<span class="line"><span>sudo apt-get install open-vm-tools-desktop</span></span>
<span class="line"><span>reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中文设置" tabindex="-1"><a class="header-anchor" href="#中文设置"><span>中文设置</span></a></h2><ol><li>下载中文</li></ol><figure><img src="`+d+'" alt="下载中文" tabindex="0" loading="lazy"><figcaption>下载中文</figcaption></figure><ol start="2"><li>安装中文</li></ol><figure><img src="'+u+'" alt="安装中文" tabindex="0" loading="lazy"><figcaption>安装中文</figcaption></figure><ol start="3"><li>进入设置，在语言管理中添加中文</li></ol><figure><img src="'+m+'" alt="添加中文" tabindex="0" loading="lazy"><figcaption>添加中文</figcaption></figure><ol start="4"><li>重启</li></ol><h2 id="更换软件下载源" tabindex="-1"><a class="header-anchor" href="#更换软件下载源"><span>更换软件下载源</span></a></h2><p>由于网络的原因，需要将软件下载源更换到国内，否则可能导致下载依赖软件软件包时出现错误。</p><ol><li>进入软件中心，点击软件和更新</li></ol><figure><img src="'+h+'" alt="进入软件和更新" tabindex="0" loading="lazy"><figcaption>进入软件和更新</figcaption></figure><ol start="2"><li>选择下载器，选择阿里云服务器</li></ol><figure><img src="'+E+'" alt="选择阿里云" tabindex="0" loading="lazy"><figcaption>选择阿里云</figcaption></figure><ol start="3"><li>点击关闭，选择重新载入，更新缓存，需要一段时间</li></ol><h2 id="息屏时间" tabindex="-1"><a class="header-anchor" href="#息屏时间"><span>息屏时间</span></a></h2><p>为了避免一定时间不使用Ubuntu，Ubuntu自动休眠。将Ubuntu长时间运行在后台。</p><p>进入设置，选择电源，在节点中选择从不。</p><figure><img src="'+f+'" alt="息屏时间" tabindex="0" loading="lazy"><figcaption>息屏时间</figcaption></figure><h2 id="下载依赖软件包" tabindex="-1"><a class="header-anchor" href="#下载依赖软件包"><span>下载依赖软件包</span></a></h2><p>依赖软件包是用于编译SDK。</p><p>使用终端安装依赖，依次执行下面命令。</p>',53),_=[b];function A(y,v){return a(),e("div",null,_)}const D=t(B,[["render",A],["__file","2.虚拟机环境配置.html.vue"]]),k=JSON.parse('{"path":"/RK3588/1.%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html","title":"虚拟机环境配置","lang":"zh-CN","frontmatter":{"title":"虚拟机环境配置","cover":"/assets/images/cover1.jpg","icon":"file","order":2,"author":"张凯博","category":["STM32"],"tag":["开发环境","介绍"],"sticky":false,"star":false,"footer":"STM32开发环境搭建","copyright":"无版权","description":"电脑配置 在配置环境前，需要确定电脑配置要满足开发需求。由于在编译时，需要大量内存以及CPU资源，首次编译SDK大约3小时左右（可能更长）。 建议内存32或更大，16G内存最低。硬盘容量建议400G-500G，200G起。 虚拟机下载与配置 Vmware虚拟机下载 以前，Vmware虚拟机可以在官网进行免费下载，但目前从官网下载较为困难。在此，推荐此破...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/RK3588/1.%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2.%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"文档管理"}],["meta",{"property":"og:title","content":"虚拟机环境配置"}],["meta",{"property":"og:description","content":"电脑配置 在配置环境前，需要确定电脑配置要满足开发需求。由于在编译时，需要大量内存以及CPU资源，首次编译SDK大约3小时左右（可能更长）。 建议内存32或更大，16G内存最低。硬盘容量建议400G-500G，200G起。 虚拟机下载与配置 Vmware虚拟机下载 以前，Vmware虚拟机可以在官网进行免费下载，但目前从官网下载较为困难。在此，推荐此破..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-26T07:28:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"虚拟机环境配置"}],["meta",{"property":"article:author","content":"张凯博"}],["meta",{"property":"article:tag","content":"开发环境"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:modified_time","content":"2024-06-26T07:28:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟机环境配置\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg\\"],\\"dateModified\\":\\"2024-06-26T07:28:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张凯博\\"}]}"]]},"headers":[{"level":2,"title":"电脑配置","slug":"电脑配置","link":"#电脑配置","children":[]},{"level":2,"title":"虚拟机下载与配置","slug":"虚拟机下载与配置","link":"#虚拟机下载与配置","children":[{"level":3,"title":"Vmware虚拟机下载","slug":"vmware虚拟机下载","link":"#vmware虚拟机下载","children":[]},{"level":3,"title":"Ubuntu下载","slug":"ubuntu下载","link":"#ubuntu下载","children":[]}]},{"level":2,"title":"Ubuntu虚拟机配置","slug":"ubuntu虚拟机配置","link":"#ubuntu虚拟机配置","children":[]},{"level":2,"title":"中文设置","slug":"中文设置","link":"#中文设置","children":[]},{"level":2,"title":"更换软件下载源","slug":"更换软件下载源","link":"#更换软件下载源","children":[]},{"level":2,"title":"息屏时间","slug":"息屏时间","link":"#息屏时间","children":[]},{"level":2,"title":"下载依赖软件包","slug":"下载依赖软件包","link":"#下载依赖软件包","children":[]}],"git":{"createdTime":1719386901000,"updatedTime":1719386901000,"contributors":[{"name":"KB-talk","email":"zkb13258847839@163.com","commits":1}]},"readingTime":{"minutes":4.26,"words":1279},"filePathRelative":"RK3588/1.开发环境搭建/2.虚拟机环境配置.md","localizedDate":"2024年6月26日","autoDesc":true}');export{D as comp,k as data};
