angular.module("mss_app").controller("controller",["$scope",function(t){null===localStorage.getItem("datejson")&&(localStorage.clear(),t.data={},localStorage.setItem("datejson",JSON.stringify(t.data)),localStorage.setItem("presenterjson",JSON.stringify(t.data)))}]);