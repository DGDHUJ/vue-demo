<template>
  <div>
    <div>vue-quill-editor案例</div>
 <!--   <div>
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>-->

    <div id="editorElem" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>
<script>
  import E from 'wangeditor'
  export default {
    name:'vueQuillEditor',
    data(){
      return{
        content:null,
        editorOption:{},
        editorContent: ''
      }
    },
    methods:{
      onEditorBlur(){//失去焦点事件
      },
      onEditorFocus(){//获得焦点事件
      },
      onEditorChange(){//内容改变事件
      },
      getContent() {
        alert(this.editorContent)
      }
    },
    mounted(){
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
    }

  }
</script>
