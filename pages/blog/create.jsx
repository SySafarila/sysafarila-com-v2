import Script from "next/script";
import { useState } from "react";

const BlogCreate = () => {
  const [ckeditorData, setCkeditorData] = useState("Insert your content here...");
  return (
    <div>
      <div id="editor">{ckeditorData}</div>
      <Script
        src="/ckeditor-5/build/ckeditor.js"
        onLoad={() => {
          ClassicEditor.create(document.querySelector("#editor"))
            .then((editor) => {
              // console.log(editor);
              editor.model.document.on("change:data", () => {
                // console.log(editor.getData());
                setCkeditorData(editor.getData());
              });
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      />
    </div>
  );
};

export default BlogCreate;
