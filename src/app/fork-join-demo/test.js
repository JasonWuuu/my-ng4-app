// function getRunbookStatus(item) {
//   Runbook[0].isFinished = false;
//   dataservice.getRunbookStatus().then(
//       function (data) {
//           Runbook[0].report_status = data.report_status;
//           Runbook[0].XMLContent = data.XMLContent;
//           Runbook[0].isFinished = true;
//           //angular.forEach(vm.Runbook, function (item) {
//           //    if(item.report_type == "XML Site Status")
//           //    {
//           //        item.report_status = data.report_status;
//           //    }
//           //})
//       });
//   Runbook[1].isFinished = false;
//   dataservice.getRunbookSOAPRequest().then(
//       function (data) {
//           Runbook[1].report_status = data.report_status;
//           Runbook[1].isFinished = true;
//           //angular.forEach(vm.Runbook, function (item) {
//           //    if (item.report_type == "SOAP Authentication") {
//           //        item.report_status = data.report_status;
//           //    }
//           //})
//       });
//   item.SAPRunbook = Runbook;
//   //angular.forEach(item, function())
// }


// var Runbook = [
//   {
//       "report_type": "XML Site Status",
//       "report_status": "",
//       "isFinished": true,
//       "XMLContent": "",
//   },
//   {
//       "report_type": "SOAP Authentication",
//       "report_status": "",
//       "isFinished": true,
//   }
// ];

// function async getRunbookStatus() {
//   return await Promise.all([dataservice.getRunbookStatus(),dataservice.getRunbookSOAPRequest()]);
// }


// function showDetail(item) {
//   item.SAPRunbook[1].isFinished = false;
//   // getRunbookStatus().then(results=>{
//   //   item.SAPRunbook[0].report_status = results[0].report_status;
//   //   item.SAPRunbook[0].XMLContent = results[0].XMLContent;
//   //   item.SAPRunbook[0].isFinished = true;
//   //   item.SAPRunbook[1].report_status = results[1].report_status;
//   //   item.SAPRunbook[1].isFinished = true;
//   //   vm.SAPServerItem = {};
//   //   vm.SAPServerItem = item;
//   //   $('#zoomInSAPModal').modal('show');
//   // });

//   var result=await getRunbookStatus();
//   item.SAPRunbook[0].report_status = results[0].report_status;



// }
