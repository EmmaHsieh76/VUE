<template lang="pug">
//-網頁內的跳轉用 RouterLink =>不會換頁，用to 去指定要到的內容路徑 
//- RouterLink(:to="{name:'home'}") 也可以放路徑名稱
//- 在vite的環境下，@代表src的資料夾
#top  
  RouterLink(to="/")
    img(src="@/assets/park0307.gif")

</template>