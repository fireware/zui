# 垂直对齐

用于控制内联或表格单元格的垂直对齐的工具类。

## 使用方法

<Example background="light-circle">
  <p class="text-xl mb-3">参照文本<span class="align-middle text-xs">中部对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-top text-xs">顶端对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-bottom text-xs">底部对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-sub text-xs">文本上标对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-super text-xs">文本下标对齐</span></p>
</Example>

```html
<p class="text-xl">参照文本<span class="align-middle text-xs">中部对齐</span></p>
<p class="text-xl">参照文本<span class="align-top text-xs">顶端对齐</span></p>
<p class="text-xl">参照文本<span class="align-bottom text-xs">底部对齐</span></p>
<p class="text-xl">参照文本<span class="align-sub text-xs">文本上标对齐</span></p>
<p class="text-xl">参照文本<span class="align-super text-xs">文本下标对齐</span></p>
```

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in verticalAlignJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const verticalAlignJson = [
    {name: 'align-middle', desc: 'vertical-align: middle;'},
    {name: 'align-top', desc: 'vertical-align: top;'},
    {name: 'align-bottom', desc: 'vertical-align: bottom;'},
    {name: 'align-sub', desc: 'vertical-align: sub;'},
    {name: 'align-super', desc: 'vertical-align: super;'},
  ]
</script>