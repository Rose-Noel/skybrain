<template>
  <div id="app">
  <!-- <v-app id="inspire"> -->
    <v-container class="mt-4" fluid>
      <v-row>
        
       
        <v-col cols="12">
          <v-combobox
            v-model="select"
            :items="items"
            label="Search"
            multiple
            chips
            clearable
            solo
            background-color="transparent"
            class="pt-3"
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <v-avatar
                  class="accent white--text"
                  left
                  v-text="data.item.slice(0, 1).toUpperCase()"
                ></v-avatar>
                {{ data.item }}
              </v-chip>
            </template>
            </v-combobox>
        </v-col>
         
      </v-row>
    </v-container>
  <!-- </v-app> -->
</div>
</template>

<script>

export default ({
  data () {
    return {
      select: [],
      items: [
        'Time',
        'Feature',
        'Location',
      
      ],
    }
  },
})
</script>
