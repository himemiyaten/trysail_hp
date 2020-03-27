<template>
  <div class="home">
    <div class="topicWithLine">
         <p>What's News </p>
    </div>
      <paginate name="paginate-log" :list="arrays" :per="10">
        <p class="title" v-for="array in paginated('paginate-log')" :key="array.id">
          {{ array.title }}
        </p>
      </paginate>
    <paginate-links for="paginate-log" class="pagination" :show-step-links="true" :limit="10"></paginate-links>
  </div>
</template>

<script>
import _ from 'lodash'

  export default {
    name: 'Home',
    data: () => ({
      arrays: [{
        id: 1,
        artist: "Shiina",
        type: "Noice",
        title: "「私の頭の中の消しゴム」12th Letterへの夏川椎菜の出演が決定",
        content: ""
      }, 
      {
        id: 2,
        artist: "Momo",
        type: "Ticket",
        title: "LAWSON presents 麻倉もも Live Tour 2020 'Agapanthus　一般発売のお知らせ '",
        content: ""
      }, 
      {
        id: 3,
        artist: "",
        type: "",
        title: "LAWSON presents 令和2年度 417の日 ローソンチケット　プレリクエスト先行のお知らせ",
        content: ""
      }, 
      {
        id: 4,
        artist: "",
        type: "",
        title: "TrySail「ごまかし／うつろい」発売記念アニメイト＆ゲーマーズ店頭キャンペーン実施！",
        content: ""
      }, 
      {
        id: 5,
        artist: "",
        type: "",
        title: "TrySail 3/11リリース「ごまかし／うつろい」CD購入者キャンペーン",
        content: ""
      }, 
      {
        id: 6,
        artist: "",
        type: "",
        title: "TrySail「ごまかし／うつろい」3/27(金)～29(日)リリースイベント・3/30(月)「TrySailと契約式」延期のお知らせ",
        content: ""
      }, 
      {
        id: 7,
        artist: "",
        type: "",
        title: "『TrySailニューシングル「ごまかし／うつろい」発売記念 TRYangle harmony出張版！』配信決定！ ",
        content: ""
      }, 
      {
        id: 8,
        artist: "",
        type: "",
        title: "麻倉もも 4/8発売「Agapanthus」CD購入者キャンペーン内容決定！",
        content: ""
      }, 
      {
        id: 9,
        artist: "",
        type: "",
        title: "夏川椎菜 4/15発売 ライブBDジャケット写真公開＆購入者キャンペーン情報",
        content: ""
      }, 
      {
        id: 10,
        artist: "",
        type: "",
        title: "TrySail、雨宮天 アニサマ出演決定！",
        content: ""
      },     
     ],
      paginate: ['paginate-log']

    }),
    mounted(){
    this.arrays = _.orderBy(this.arrays,'id','desc');
    }
  }
</script>

<style>
ul {
  padding: 0;
}
.title {
  border-top-style: dotted;
  border-width: thin; 
  text-align: left;
  font-size: 15px;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  font-size: 22px;
}

.pagination .active a{
  background-color: #b3ecff;
  color: white;
  border: 1px solid #b3ecff;
}
</style>