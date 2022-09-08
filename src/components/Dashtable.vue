<template>
  <div>
    <v-data-table
  
      :headers="headers"
      :items="desserts"
      
      :items-per-page="itemsPerPage"
      hide-default-footer
     
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="text-center pt-2">
 </div>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: 'Event',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Location',
            align: 'start',
            sortable: false,
            value: 'name1',
          },
          
          { text: 'Date', value: 'calories' },
          { text: 'Time', value: 'fat' },
          { text: 'Identity', value: 'carbs' },
        ,
        
        ],
        desserts: [
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
            
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Intrusion',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
            
          },
          {
            name: 'Intrusion',
            calories:'7/9/2022' ,
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
          {
            name: 'Tripwire',
            calories:'7/9/2022',
            fat: "18:24hrs",
            carbs:'Human' ,
            name1: 'Entrance',
          
          },
        ],
      }
    },
  }
</script>