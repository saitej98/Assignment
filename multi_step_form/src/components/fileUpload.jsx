import React from "react";

function fileUpload() {
  function previewBeforeUpload(id) {
    document.querySelector("#" + id).addEventListener("change", function (e) {
      if (e.target.files.length == 0) {
        return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      document.querySelector("#" + id + "-preview div").innerText = file.name;
      document.querySelector("#" + id + "-preview img").src = url;
    });
  }

  previewBeforeUpload("file-1");
  previewBeforeUpload("file-2");
  previewBeforeUpload("file-3");
  return (
    <div>
      <div class="form">
        <h2>Preview Image Before Upload</h2>
        <div class="grid">
          <div class="form-element">
            <input type="file" id="file-1" accept="image/*" />
            <label for="file-1" id="file-1-preview">
              <img src="https://bit.ly/3ubuq5o" alt="" />
              <div>
                <span>+</span>
              </div>
            </label>
          </div>
          <div class="form-element">
            <input type="file" id="file-2" accept="image/*" />
            <label for="file-2" id="file-2-preview">
              <img src="https://bit.ly/3ubuq5o" alt="" />
              <div>
                <span>+</span>
              </div>
            </label>
          </div>
          <div class="form-element">
            <input type="file" id="file-3" accept="image/*" />
            <label for="file-3" id="file-3-preview">
              <img src="https://bit.ly/3ubuq5o" alt="" />
              <div>
                <span>+</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fileUpload;
