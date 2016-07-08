define({
  "name": "apidoc-example",
  "version": "0.0.1",
  "description": "apidoc example project",
  "title": "Custom apiDoc browser title",
  "url": "",
  "sampleUrl": "",
  "header": {
    "title": "My own header title",
    "content": "<h1>Example text from header.md</h1>\n<p>This text is from file &quot;header.md&quot;.</p>\n<h2>HowTo include</h2>\n<p>In your projects &quot;package.json&quot; you can set &quot;apidoc.header&quot; with a title and a filename to include this file into your documentation.</p>\n<p>This example attempts to integrate &quot;header.md&quot; and &quot;footer.md&quot;.</p>\n<pre><code>{\n  &quot;name&quot;: &quot;example&quot;,\n  &quot;version&quot;: &quot;0.3.0&quot;,\n  &quot;description&quot;: &quot;apidoc example project.&quot;,\n  &quot;apidoc&quot;: {\n    &quot;header&quot;: {\n      &quot;title&quot;: &quot;My own header title&quot;,\n      &quot;filename&quot;: &quot;header.md&quot;\n    },\n    &quot;footer&quot;: {\n      &quot;title&quot;: &quot;My own footer title&quot;,\n      &quot;filename&quot;: &quot;footer.md&quot;\n    }\n  }\n}\n</code></pre>\n"
  },
  "footer": {
    "title": "My own footer title",
    "content": "<h1>Example text from footer.md</h1>\n<p>This text is from file &quot;footer.md&quot;.</p>\n<h2>HowTo include</h2>\n<p>Watch header.md for further information.</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-07-08T01:34:29.356Z",
    "url": "http://apidocjs.com",
    "version": "0.16.1"
  }
});
