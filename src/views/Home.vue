<template>
  <v-app id="inspire">

    <SideBar />
    <v-container>
    <v-app-bar color="rgba(0,0,0,0)" flat >
      
            <v-text-field label="Search ..." 
            class="pt-5"
            filled  prepend-inner-icon="mdi-magnify" 
            dense solo flat background-color="grey lighten-4" rounded ></v-text-field>
         <v-spacer></v-spacer>
         <v-btn icon dark class="">
                  <v-icon color="black">far fa-bell</v-icon>
                </v-btn>
                <v-select
                class="mt-7"
          :items="items"
          v-model="select"
          item-text="state"
         color="black"
         solo flat
         style="max-width:7%;"
         item-color="grey darken-2"
         
        ></v-select>
            <span text color="#878A94">AAE Ideapro</span>
              <v-avatar size="30" class="ml-2">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
        
      </v-app-bar>
    
      <v-row>
        <v-col cols="12" sm="8">
          <v-card
    class="mx-4 rounded-xl pa-4"
    
    color="grey lighten-3" flat
  >
  <v-row>
    <v-col cols="12" sm="8">
 <v-list-item three-line>
      <v-list-item-content>
        
        <v-list-item-title class="text-h4 mb-1">
          Hey AAE IdeaPro. 
        </v-list-item-title>
        <v-list-item-subtitle>Wecome back AAE IdeaPro. We are glad here.<br>
          Inspire the best work in people.enabling them to acheive 
        </v-list-item-subtitle>
        <v-list-item-subtitle> thier goals.
        </v-list-item-subtitle>
      </v-list-item-content>

     
    </v-list-item>

    <v-card-actions>
      <v-btn
      class="px-3"
        color="blak"
        dark

      >
        View Details
      </v-btn>
    </v-card-actions>
    </v-col>
    <v-col cols="12" sm="4">
      
      <v-img src="1.png" class="mt-n16"></v-img>
    
    </v-col>
  </v-row>
   
  </v-card>
  <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-n1">
    <v-toolbar-title>Trending Blogs</v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="grey--text">View All</span>
  </v-toolbar>
  <v-row class="mt-n5">
    <v-col cols="12" sm="4">
      <v-card
    class="rounded-xl ml-4"
    color="grey lighten-3"
    flat
  >
    <v-card-title>
      <span class="text-h6 font-weight-light">Prototyping</span>
    </v-card-title>

    <v-card-text class="">
      A prototype is an early <br>sample, model or realease of a productbuilt to test a..
    </v-card-text>

    <v-card-actions class="mt-n7">
      <v-list-item class="">
        <div color="grey darken-3">
           
             <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" color="black" size="30" >
              <span class="caption white--text">+1</span>
            </v-avatar>
        </div>

        

        <v-row
          align="center"
          justify="end"
        >
        
          <v-icon class="mr-1" small>
       fas fa-hands-wash
          </v-icon>
          <span class="caption">1.5 K</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    </v-col>
    <v-col cols="12" sm="4">
       <v-card
    class="rounded-xl "
    color="black"
    dark
    elevation="10"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light">Typography</span>
    </v-card-title>

    <v-card-text class="">
      In essence, typography is the artof arranging letters and text in away that.. 
    </v-card-text>

    <v-card-actions class="mt-n7">
      <v-list-item class="">
        <div color="grey darken-3">
           
             <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" color="white" size="30" >
              <span class="caption black--text">+2</span>
            </v-avatar>
        </div>

        

        <v-row
          align="center"
          justify="end"
        >
        
          <v-icon class="mr-1" small>
       fas fa-hands-wash
          </v-icon>
          <span class="caption">1.2 K</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    </v-col>
    <v-col cols="12" sm="4">
       <v-card
    class="rounded-xl mr-4"
    color="grey lighten-3"
    flat
  >
    <v-card-title>
      <span class="text-h6 font-weight-light">Color Palatte</span>
    </v-card-title>

    <v-card-text class="">
      The best way to use a scheme like this is to use one color as the primary..
    </v-card-text>

    <v-card-actions class="mt-n7  ">
      <v-list-item class="">
        <div color="grey darken-3">
           
             <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" size="30">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                alt="John"
              >
            </v-avatar>
            <v-avatar class="ml-n3" color="black" size="30" >
              <span class="caption white--text">+1</span>
            </v-avatar>
        </div>

        

        <v-row
          align="center"
          justify="end"
        >
        
          <v-icon class="mr-1" small>
       fas fa-hands-wash
          </v-icon>
          <span class="caption">1.6 K</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>
  <v-card
    class="mx-4 rounded-xl pa-6 mt-2"
    
    color="grey lighten-3" flat
  >
  <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-n5">
    <v-toolbar-title>Analitics</v-toolbar-title>
    <v-spacer></v-spacer>

       <v-btn-toggle
        v-model="text"
        small
        dense
        background-color="primary"
        dark
        
      >
        <v-btn value="weekly">
          Weekly
        </v-btn>

        <v-btn value="monthly">
          Monthly
        </v-btn>

      </v-btn-toggle>
  </v-toolbar>
  
        <v-sparkline
    :value="value"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
    color="black"
    class="mt-n8 mb-n8"
  ></v-sparkline>
  </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card
    class=" rounded-xl pa-4"
    
    color="grey lighten-3" flat
  >
  <v-app-bar  color="rgba(0,0,0,0)" tile>
              <v-btn tile fab small color="orange lighten-4" elevation="0">
                <v-icon color="black">fas fa-book</v-icon>
              </v-btn>
              <strong class="subtitle black--text ml-2">
                Articles Posted <span class="caption"><br>80</span>
              </strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" class="ml-2">fas fa-chevron-circle-right</v-icon>
            </v-app-bar>
            <v-app-bar  color="rgba(0,0,0,0)" tile class="mt-3">
              <v-btn tile fab small color="green lighten-4" elevation="0">
                <v-icon color="black">fas fa-hands-wash</v-icon>
              </v-btn>
              <strong class="subtitle black--text ml-2">
                Claps This Week <span class="caption"><br>1.5k</span>
              </strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" class="ml-2">fas fa-chevron-circle-right</v-icon>
            </v-app-bar>
            <v-app-bar  color="rgba(0,0,0,0)" tile class=mt-3>
              <v-btn tile fab small color="blue lighten-4" elevation="0">
                <v-icon color="black">fas fa-user-friends</v-icon>
              </v-btn>
              <strong class="subtitle black--text ml-2">
                New Followers This Week <span class="caption"><br>972</span>
              </strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" class="ml-2">fas fa-chevron-circle-right</v-icon>
            </v-app-bar>
            <v-toolbar flat color="rgba(0,0,0,0)" dense class="mt-1">
    <v-toolbar-title>Followers</v-toolbar-title>
    
    <v-spacer></v-spacer>
    <span class="grey--text">View All</span>
  </v-toolbar>
 <div class="px-7">
  <vueper-slides
  :infinite="false"
  
  class="no-shadow"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
  >
   <template #arrow-left>
   <v-icon class="mr-n15">fas fa-chevron-left</v-icon>
  </template>

  <template #arrow-right>
   <v-icon class="ml-n15">fas fa-chevron-right</v-icon>
  </template>
  <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.src"  />
     
</vueper-slides>
    
 </div>
 <v-card color="white" class="rounded-xl mx-4 pa-10" flat>
    <div class="text-center">
      <span>Buy <strong>Pro Account</strong> to Explore <br>Premium Features</span>
      <v-btn class="mt-5" dark color="black">Purchase Now</v-btn>
    </div>
 </v-card>
  </v-card>
        </v-col>
      </v-row>
      </v-container>
  </v-app>
</template>

<script>
  import SideBar from '../components/SideBar'
import { VueperSlides, VueperSlide } from 'vueperslides'
  export default {
    name: 'Home',
data: () => ({
  select: { state: 'EN' },
      items: ['EN', 'ES', 'DZ'],
      text: 'weekly',

       width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      fill: false,
      type: 'trend',
      autoLineWidth: false,
       slides: [
        {src: require('../../public/01.jpg')},
        {src: require('../../public/02.jpg')},
        {src: require('../../public/03.jpg')},
        {src: require('../../public/04.jpg')},
        {src: require('../../public/05.jpg')},
        {src: require('../../public/06.jpg')},
        {src: require('../../public/07.png')},
        {src: require('../../public/08.png')},
        {src: require('../../public/09.jpg')},
        {src: require('../../public/10.jpg')},
        {src: require('../../public/11.jpg')},
        {src: require('../../public/12.jpg')},
        
        
      ]
    }),
    components: {
      SideBar,
       VueperSlides,
    VueperSlide,
    
    },
  }
</script>

<style scoped>

</style>
