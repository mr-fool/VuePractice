Vue.component("grocery-item", {
    template: `<li>{{title}}<li>`,
    props: ["title"]
});
new Vue({
    el: "#app",
    data: {
       groceries: ["Bread", "Milk"]
    }
});
