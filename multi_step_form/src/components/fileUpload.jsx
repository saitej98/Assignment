// import React from "react";

// function fileUpload() {
//   window.onload = function () {
//     //Check File API support
//     if (window.File && window.FileList && window.FileReader) {
//       var filesInput = document.getElementById("files");

//       filesInput.addEventListener("change", function (event) {
//         var files = event.target.files; //FileList object
//         var output = document.getElementById("imgThumbnailPreview");

//         for (var i = 0; i < files.length; i++) {
//           var file = files[i];

//           //Only pics
//           if (!file.type.match("image")) continue;

//           var picReader = new FileReader();

//           picReader.addEventListener("load", function (event) {
//             var picSrc = event.target.result;

//             var imgThumbnailElem =
//               "<div class='imgThumbContainer'><div class='IMGthumbnail' ><img  src='" +
//               picSrc +
//               "'" +
//               "title='" +
//               file.name +
//               "'/><div><span>as</span></div>";

//             output.innerHTML = output.innerHTML + imgThumbnailElem;
//           });

//           //Read the image
//           picReader.readAsDataURL(file);
//         }
//       });
//     } else {
//       alert("Your browser does not support File API");
//     }
//   };
//   return (
//     <div>
//       <div class="header">File API - File Reader</div>
//       <div style="padding:14px">
//         <label for="files">Select multiple files: </label>
//         <input id="files" type="file" multiple />
//       </div>
//       <div style="padding:14px; margin:auto">
//         <div id="imgThumbnailPreview"></div>
//       </div>
//     </div>
//   );
// }

// export default fileUpload;
