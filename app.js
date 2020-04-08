Vue.component("grocery-item", {
    template: `<li v-on:click="bought =!bought" v-bind:class="{bought: bought}">{{title}}</li>`,
    props: ["title"],
    data: function() {
        return { 
            bought: false
        }
    }
});
new Vue({
    el: "#app",
    data: {
       groceries: ["Bread", "Milk"]
    }
});
