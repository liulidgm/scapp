<template>
 <div id="risk">
  <test-item v-for="item in testItems" v-bind:question = "item" v-on:changeQuestionState="changeQuestionState(item.id)"></test-item>
  <ul id="number">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <div style="clear:both;"></div>
   <mt-range id="rangeArea" v-model="rangeValue" :min="1" :max="20" :bar-height='3'>
     
   </mt-range>
   <button @click="controlRange()">提交</button>
 </div>
</template>
<script type="text/ecmascript-6">
  import testItem from './testItem'
  import { Range } from 'mint-ui';

  export default {
    name: 'risk',
    data:function(){
      return {
        rangeValue:1,
        checkFlg:true,
        testItems:[
          {id:1,
            title:'1、您家庭的就业状况是：',
            answer:[{text:'A.您与配偶均有稳定收入的工作',isSeletced:false,id:"1"},{text:'B.您与配偶其中一人有稳定收入的工作',isSeletced:false,id:"2"},{text:'C.您与配偶均没有稳定收入的工作或者已退休定收入的工作或者已退休',isSeletced:false,id:"3"},{text:'D.未婚，但有稳定收入的工作',isSeletced:false,id:"4"},{text:'E.未婚，目前暂无稳定收入的工作',isSeletced:false,id:"5"}
            ]
          },
          {id:2,
            title:'2、2222您家庭的就业状况是：',
            answer:[{text:'A.您与配偶均有稳定收入的工作',isSeletced:false,id:"1"},{text:'B.您与配偶其中一人有稳定收入的工作',isSeletced:false,id:"2"},{text:'C.您与配偶均没有稳定收入的工作或者已退休定收入的工作或者已退休',isSeletced:false,id:"3"},{text:'D.未婚，但有稳定收入的工作',isSeletced:false,id:"4"},{text:'E.未婚，目前暂无稳定收入的工作',isSeletced:false,id:"5"}
            ]
          }
          
        ]
        }
    },
    components:{
      Range,testItem
    },
    methods:{
      controlRange:function(){
        console.log(this.testItems);
      },
      changeNumber:function(){

      },
      changeQuestionState: function(id) {
        console.log('子组件访问了父组件的方法');
        //this.testItems
        for(var i=0;i<this.testItems.length;i++){
          if(this.testItems[i].id==id){

          for(var j=0;j<this.testItems[i].answer.length;j++){
            this.testItems[i].answer[j].isSeletced=false;
          }
          }
        }
      }
    }
  };

</script>
<style lang="scss">
#number{
  margin:0.75rem;
  height: 1rem;
  line-height: 1rem;
  li{float:left;font-size:0.6rem;width:1rem;text-align:center;}
}
#rangeArea{
  margin:0.75rem;
  .mt-range-thumb {
    background-color: #ff8f1f!important;
  }
  .mt-range-runway {
      border-top-color: #ffd3a8!important;
  }
  .mt-range-progress {
      background-color: #ffd3a8!important;
  }
}


  
</style>
