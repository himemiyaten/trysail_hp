<template>
<div>
    <div class="topicWithLine">
         <p> Gallery </p>
    </div>
    <div class="row" >
         <div class="col-xs-4 col-md-3 col-lg-2"  v-for="gallery in galleries" :key="gallery.img"  style="padding: 1%;">
            <img v-bind:src="gallery.img" width="100" height="100">
         </div>
    </div>
</div>
</template>
<style>

.bodyGridLayout {
  padding: 1% 2%
}
</style>

<script>
export default{
	data(){
		return {
             galleries: [
           {
                "no": "1",
                "name": "Momo",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/137035/medium_photo_77_e89fa8b7a342565b.jpg"
            
            },
            {
                "no": "2",
                "name": "Sora",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/117933/medium_photo_77_2f01afcfb7a538a2.jpg"
            },
               {
                "no": "3",
                "name": "Shiina",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/117250/medium_photo_77_5cb0d25739bfad25.jpg"
            },
            {
                "no": "4",
                "name": "Shiina",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/112175/medium_photo_77_ae1702bc15a5830f.jpg"
            },
            {
                "no": "5",
                "name": "Shiina",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/106254/medium_photo_77_bca0a2b95eadfc7a.png"
            },
            {
                "no": "6",
                "name": "Shiina",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/104776/medium_photo_77_1d0c547ad4f858f9.jpg"
            },
            {
                "no": "7",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/101656/medium_photo_77_8ff21d953dd92856.jpg"
            },
            {
                "no": "8",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/101348/medium_photo_77_e27a3ab99495a978.jpeg"
            },
            {
                "no": "9",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/101346/medium_photo_77_72de24848f4e897f.jpg"
            },
            {
                "no": "10",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/98301/medium_photo_77_d7f1306a907b06d3.jpg"
            },
            {
                "no": "11",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/94209/medium_photo_77_a7b5f44959b1948f.png"
            },
            {
                "no": "12",
                "name": "",
                "img": "https://trysail.jp/s3/skiyaki/uploads/photo/image/89917/medium_photo_77_f05568c97f7a10e6.png"
            },
          ]
		}
	}
}
</script>