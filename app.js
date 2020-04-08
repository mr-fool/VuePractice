Vue.component("grocery-itme", {
    template: `<li>{{title}}<li>`
});
new Vue({
    el: "#app",
    data: {
       groceries: ["Bread", "Milk"]
    }
});
