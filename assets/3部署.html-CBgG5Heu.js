import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as t,b as s}from"./app-DECBmSag.js";const a={},l=s('<h2 id="交叉编译" tabindex="-1"><a class="header-anchor" href="#交叉编译"><span>交叉编译</span></a></h2><p>在部署到开发板之前，需要使用交叉编译工具编译成RK3588的可执行文件。</p><ol><li>交叉编译工具</li></ol><p>交叉编译工具在SDK中提供，路径为<code>/home/zkb/RK3588/rk3588-linux/buildroot/output/rockchip_rk3588/host/bin</code>。</p><ol start="2"><li>使用交叉编译工具 在终端进入需要编译的Qt工程目录下，执行交叉编译工具。</li></ol><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">home</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">zkb</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">RK3588</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">rk3588</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">buildroot</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">output</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">rockchip_rk3588</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">host</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">bin</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">qmake</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>生成可执行文件</li></ol><p>执行后会生成Makefile文件，使用make进行编译，编译生成可执行文件。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">make</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>部署到开发板</li></ol><p>使用adb连接到开发板后，将生成的可执行文件上传到开发板。</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">adb push </span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">01_hello_world</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tmp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>在开发板中运行</li></ol><p>进入tmp目录执行01_hello_world</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">01_hello_world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="清除生成的文件" tabindex="-1"><a class="header-anchor" href="#清除生成的文件"><span>清除生成的文件</span></a></h2><p>经过测试发现，在执行qmake后，再次编译ui则不发生变化，需要清除生成的文件。</p><p>可以在window中进行设计，将设计后的Qt程序拷贝到Ubuntu中进行交叉编译，然后部署到开发板上。</p>',18),h=[l];function n(r,p){return t(),e("div",null,h)}const k=i(a,[["render",n],["__file","3部署.html.vue"]]),c=JSON.parse('{"path":"/RK3588/5.Qt/3%E9%83%A8%E7%BD%B2.html","title":"部署","lang":"zh-CN","frontmatter":{"title":"部署","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"张凯博","date":"2024-06-21T00:00:00.000Z","category":["STM32"],"tag":["开发环境","介绍"],"sticky":false,"star":false,"footer":"STM32开发环境搭建","copyright":"无版权","description":"交叉编译 在部署到开发板之前，需要使用交叉编译工具编译成RK3588的可执行文件。 交叉编译工具 交叉编译工具在SDK中提供，路径为/home/zkb/RK3588/rk3588-linux/buildroot/output/rockchip_rk3588/host/bin。 使用交叉编译工具 在终端进入需要编译的Qt工程目录下，执行交叉编译工具。 生...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/RK3588/5.Qt/3%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"文档管理"}],["meta",{"property":"og:title","content":"部署"}],["meta",{"property":"og:description","content":"交叉编译 在部署到开发板之前，需要使用交叉编译工具编译成RK3588的可执行文件。 交叉编译工具 交叉编译工具在SDK中提供，路径为/home/zkb/RK3588/rk3588-linux/buildroot/output/rockchip_rk3588/host/bin。 使用交叉编译工具 在终端进入需要编译的Qt工程目录下，执行交叉编译工具。 生..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T07:01:08.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"部署"}],["meta",{"property":"article:author","content":"张凯博"}],["meta",{"property":"article:tag","content":"开发环境"}],["meta",{"property":"article:tag","content":"介绍"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T07:01:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-30T07:01:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"张凯博\\"}]}"]]},"headers":[{"level":2,"title":"交叉编译","slug":"交叉编译","link":"#交叉编译","children":[]},{"level":2,"title":"清除生成的文件","slug":"清除生成的文件","link":"#清除生成的文件","children":[]}],"git":{"createdTime":1727679668000,"updatedTime":1727679668000,"contributors":[{"name":"KB-talk","email":"zkb13258847839@163.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"RK3588/5.Qt/3部署.md","localizedDate":"2024年6月21日","autoDesc":true}');export{k as comp,c as data};
