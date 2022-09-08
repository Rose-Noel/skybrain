<template >
    <v-app id="sky">
     <v-navigation-drawer v-model="drawer" app dark color="#1c252c">
      <!-- <router-link to="/">liveview</router-link> |
      <router-link to="/about">Analytics</router-link> -->
      <v-sheet color="#1c252c" class="pa-10">
        <v-avatar class="mb-4 ml-7" color="#E99A27" size="200">
          <v-icon x-large> mdi-home-roof </v-icon>
        </v-avatar>

        <div class="display-1 px-0.9 mr-16">SKYBRAIN</div>
      </v-sheet>

      <v-divider></v-divider>
      <v-list v-for="[icon, text, path ] in links">
        <v-list-item color="#CEF6FF"  class="py-2"  :to="{path}" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title router to="liveview"  class="title" >{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <v-app-bar app color="#CEF6FF">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <expandingSearch />

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-bell-alert</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account-settings</v-icon>
        </v-btn>
      </v-app-bar>
    </v-container>

    <v-main>
      <router-view />
      <v-container class="" fluid>
        <v-row class="">
          <v-col md="6" cols="12">
            <v-container class="px-10" fluid>
              <v-row>
                <v-col  cols="6">
                  
                  <v-card height="200" > <Dashanalytics/></v-card>
                 
                </v-col>
                <v-col  cols="6">
                  
                  <v-card height="200"><DashDoughnut/></v-card>
                </v-col>
                <v-col  cols="6">
                  
                  <v-card height="200"></v-card>
                </v-col>
                <v-col cols="6">
                  
                  <v-card height="200"></v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card color="#FFE9C9">
              <v-subheader>{{ card }}</v-subheader>
              <Dashtable />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import expandingSearch from "./expandingSearch.vue";
import Dashtable from "./Dashtable.vue";
import Dashanalytics from "./Dashanalytics.vue";
export default {
  data: () => ({
    cards: ["This Week"],
    drawer: null,
    links: [
      ["mdi-view-dashboard-edit", "Overview", "/"],
      ["mdi-record-rec", "Live View", "liveview"],
      ["mdi-poll", "Analytics","analytics"],
      ["mdi-archive", "Archive","archive"],
      ["mdi-history", "History","history"],
      ["mdi-cog", "Settings", "settings"],
    ],
  }),

  components: {
    expandingSearch,
    Dashtable,
    Dashanalytics
},
};
</script>
