angular.module("mss_app").controller("listViewController",["$scope",function(e){$(".navbar .nav li").removeClass("active"),$("#listViewTab").addClass("active"),e.type="date",e.presenterList=[],Object.keys(r).forEach(function(t){e.presenterList.push(t)}),console.log(e.presenterList),setTimeout(function(){$("#datepickersearch").datetimepicker({daysOfWeekDisabled:[0,2,3,4,5,6],format:"M/D/YYYY"}),$("input[name='date']").val(""),$("input[type='radio']").change(function(){$("input[name='search']").val(""),$("input[name='date']").val("")})},3),e.searchNoData="Search something";var t,a,o=JSON.parse(localStorage.getItem("datejson")),r=JSON.parse(localStorage.getItem("presenterjson"));e.searchData=[],e.toCheckDate,e.search=function(){if(e.searchNoData="No search result for this input",e.searchData=[],"date"==e.type)e.toCheckDate=$("input[name='date']").val(),console.log(e.toCheckDate),o.hasOwnProperty(e.toCheckDate)&&(e.searchData=o[e.toCheckDate]);else{var t=$("input[name='presenter']").val();if(t=t.toLowerCase(),console.log(t),r.hasOwnProperty(t)){var a=r[t];console.log(a),a.forEach(function(a){var r=new Date(a.date).toLocaleDateString();o[r].forEach(function(a){a.presenter.toLowerCase()==t&&e.searchData.push(a)})})}}},e.deleteVarUpdate=function(e,o){console.log(e,o),t=e.toLowerCase(),a=o,$("#newModal").modal()},e.delete=function(){console.log(t,a);var n=0;1==o[a].length?delete o[a]:o[a].forEach(function(e){e.presenter.toLowerCase()==t&&o[a].splice(n,1),n++}),n=0,1==r[t.toLowerCase()].length?delete r[t.toLowerCase()]:r[t].forEach(function(e){new Date(e.date).toLocaleDateString()==a&&r[t].splice(n,1),n++}),console.log(o),console.log(r);var s=0;e.searchData.forEach(function(t){new Date(t.date).toLocaleDateString()==a&&e.searchData.splice(s,1),s++,console.log(t.date,a)}),localStorage.setItem("datejson",JSON.stringify(o)),localStorage.setItem("presenterjson",JSON.stringify(r))},e.removeSpace=function(e){for(var t=e,a=0;a<e.length;a++)" "==e.charAt(a)&&(t=t.substring(0,a)+"+"+t.substring(a+1));return t}}]);