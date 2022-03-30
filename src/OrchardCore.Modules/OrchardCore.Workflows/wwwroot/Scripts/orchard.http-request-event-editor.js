/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

///<reference path="../../../Assets/Lib/jquery/typings.d.ts" />
$(function () {
  var generateWorkflowUrl = function generateWorkflowUrl() {
    var workflowTypeId = $('[data-workflow-type-id]').data('workflow-type-id');
    var activityId = $('[data-activity-id]').data('activity-id');
    var tokenLifeSpan = $('#token-lifespan').val();
    var generateUrl = $('[data-generate-url]').data('generate-url') + "?workflowTypeId=".concat(workflowTypeId, "&activityId=").concat(activityId, "&tokenLifeSpan=").concat(tokenLifeSpan);
    var antiforgeryHeaderName = $('[data-antiforgery-header-name]').data('antiforgery-header-name');
    var antiforgeryToken = $('[data-antiforgery-token]').data('antiforgery-token');
    var headers = {};
    headers[antiforgeryHeaderName] = antiforgeryToken;
    $.post({
      url: generateUrl,
      headers: headers
    }).done(function (url) {
      $('#workflow-url-text').val(url);
    });
  };

  $('#generate-url-button').on('click', function (e) {
    generateWorkflowUrl();
  });

  if ($('#workflow-url-text').val() == '') {
    generateWorkflowUrl();
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LXVybC1nZW5lcmF0b3IudHMiXSwibmFtZXMiOlsiJCIsImdlbmVyYXRlV29ya2Zsb3dVcmwiLCJ3b3JrZmxvd1R5cGVJZCIsImRhdGEiLCJhY3Rpdml0eUlkIiwidG9rZW5MaWZlU3BhbiIsInZhbCIsImdlbmVyYXRlVXJsIiwiY29uY2F0IiwiYW50aWZvcmdlcnlIZWFkZXJOYW1lIiwiYW50aWZvcmdlcnlUb2tlbiIsImhlYWRlcnMiLCJwb3N0IiwidXJsIiwiZG9uZSIsIm9uIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBQSxDQUFDLENBQUMsWUFBQTtBQUNFLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBQTtBQUN4QixRQUFNQyxjQUFjLEdBQVdGLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRyxJQUE3QixDQUFrQyxrQkFBbEMsQ0FBL0I7QUFDQSxRQUFNQyxVQUFVLEdBQVdKLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCRyxJQUF4QixDQUE2QixhQUE3QixDQUEzQjtBQUNBLFFBQUlFLGFBQWEsR0FBR0wsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJNLEdBQXJCLEVBQXBCO0FBQ0EsUUFBTUMsV0FBVyxHQUFXUCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkcsSUFBekIsQ0FBOEIsY0FBOUIsSUFBZ0QsbUJBQUFLLE1BQUEsQ0FBbUJOLGNBQW5CLEVBQWlDLGNBQWpDLEVBQWlDTSxNQUFqQyxDQUFnREosVUFBaEQsRUFBMEQsaUJBQTFELEVBQTBESSxNQUExRCxDQUE0RUgsYUFBNUUsQ0FBNUU7QUFDQSxRQUFNSSxxQkFBcUIsR0FBV1QsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NHLElBQXBDLENBQXlDLHlCQUF6QyxDQUF0QztBQUNBLFFBQU1PLGdCQUFnQixHQUFXVixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkcsSUFBOUIsQ0FBbUMsbUJBQW5DLENBQWpDO0FBQ0EsUUFBTVEsT0FBTyxHQUFRLEVBQXJCO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ0YscUJBQUQsQ0FBUCxHQUFpQ0MsZ0JBQWpDO0FBRUFWLElBQUFBLENBQUMsQ0FBQ1ksSUFBRixDQUFPO0FBQ0hDLE1BQUFBLEdBQUcsRUFBRU4sV0FERjtBQUVISSxNQUFBQSxPQUFPLEVBQUVBO0FBRk4sS0FBUCxFQUdHRyxJQUhILENBR1EsVUFBQUQsR0FBQSxFQUFHO0FBQ1BiLE1BQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCTSxHQUF4QixDQUE0Qk8sR0FBNUI7QUFDSCxLQUxEO0FBTUgsR0FqQkQ7O0FBbUJBYixFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQmUsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQUMsQ0FBQSxFQUFDO0FBQ25DZixJQUFBQSxtQkFBbUI7QUFDdEIsR0FGRDs7QUFJQSxNQUFJRCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk0sR0FBeEIsTUFBaUMsRUFBckMsRUFBeUM7QUFDckNMLElBQUFBLG1CQUFtQjtBQUN0QjtBQUNKLENBM0JBLENBQUQiLCJmaWxlIjoib3JjaGFyZC5odHRwLXJlcXVlc3QtZXZlbnQtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vQXNzZXRzL0xpYi9qcXVlcnkvdHlwaW5ncy5kLnRzXCIgLz5cclxuXHJcbiQoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVXb3JrZmxvd1VybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB3b3JrZmxvd1R5cGVJZDogc3RyaW5nID0gJCgnW2RhdGEtd29ya2Zsb3ctdHlwZS1pZF0nKS5kYXRhKCd3b3JrZmxvdy10eXBlLWlkJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZpdHlJZDogc3RyaW5nID0gJCgnW2RhdGEtYWN0aXZpdHktaWRdJykuZGF0YSgnYWN0aXZpdHktaWQnKTtcclxuICAgICAgICB2YXIgdG9rZW5MaWZlU3BhbiA9ICQoJyN0b2tlbi1saWZlc3BhbicpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlVXJsOiBzdHJpbmcgPSAkKCdbZGF0YS1nZW5lcmF0ZS11cmxdJykuZGF0YSgnZ2VuZXJhdGUtdXJsJykgKyBgP3dvcmtmbG93VHlwZUlkPSR7d29ya2Zsb3dUeXBlSWR9JmFjdGl2aXR5SWQ9JHthY3Rpdml0eUlkfSZ0b2tlbkxpZmVTcGFuPSR7dG9rZW5MaWZlU3Bhbn1gO1xyXG4gICAgICAgIGNvbnN0IGFudGlmb3JnZXJ5SGVhZGVyTmFtZTogc3RyaW5nID0gJCgnW2RhdGEtYW50aWZvcmdlcnktaGVhZGVyLW5hbWVdJykuZGF0YSgnYW50aWZvcmdlcnktaGVhZGVyLW5hbWUnKTtcclxuICAgICAgICBjb25zdCBhbnRpZm9yZ2VyeVRva2VuOiBzdHJpbmcgPSAkKCdbZGF0YS1hbnRpZm9yZ2VyeS10b2tlbl0nKS5kYXRhKCdhbnRpZm9yZ2VyeS10b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBoZWFkZXJzW2FudGlmb3JnZXJ5SGVhZGVyTmFtZV0gPSBhbnRpZm9yZ2VyeVRva2VuO1xyXG5cclxuICAgICAgICAkLnBvc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGdlbmVyYXRlVXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSkuZG9uZSh1cmwgPT4ge1xyXG4gICAgICAgICAgICAkKCcjd29ya2Zsb3ctdXJsLXRleHQnKS52YWwodXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJCgnI2dlbmVyYXRlLXVybC1idXR0b24nKS5vbignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBnZW5lcmF0ZVdvcmtmbG93VXJsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJCgnI3dvcmtmbG93LXVybC10ZXh0JykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICBnZW5lcmF0ZVdvcmtmbG93VXJsKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
