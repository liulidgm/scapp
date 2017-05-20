<template>
 <div id="test">
    <div class="title">{{question.title}}</div>
    <ol id="testItems">
      <li v-for="(item,index) in question.answer" v-on:click = "selectedAnswer(index)" v-bind:class="{'selectedActive':item.isSeletced}">{{item.text}}</li>
    </ol>
 </div>
</template>
<script type="text/ecmascript-6">
import $ from 'jquery'
  export default {
    name:'test',
    data:function(){
      return {
        isActive:false
          // title:'测评第一题',
          // answer:[{text:'第一个选项'},{text:'第二个选项'},{text:'第三个选项'},{text:'第四个选项'}]
      }
    },
    props:{question:{}},
    methods:{
      selectedAnswer:function(index){
        console.log('click');
        this.$emit('changeQuestionState',);
        this.question.answer[index].isSeletced=true;
        

      }
    }
    
  };
</script>
<style lang="scss">
  @import 'src/style/mixin';
  $psize:0.75rem;

  #test{
    min-height: 2.5rem;
    border:0.05rem solid #ccc;
    border-radius:0.25rem;
    margin:1rem;
    .title{
      background: #60ebae;
      border-radius:0.25rem 0.25rem 0 0;
      height: 2.25rem;
      line-height: 2.25rem;
      color:$fc;
      font-size:0.6rem ;
      padding-left:$psize;
    }
    li{
      min-height: 2rem;
      line-height: 1rem;
      padding:$psize;
      background:#f4f3f1;
      margin:0.75rem;
      font-size:0.6rem ;
    }
    .selectedActive{
      background:red;
    }
  }

</style>
