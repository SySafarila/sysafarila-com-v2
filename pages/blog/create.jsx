import Script from "next/script";

const BlogCreate = () => {
  return (
    <div>
      <div id="editor"></div>
      <Script
        src="/ckeditor-5/build/ckeditor.js"
        onLoad={() => {
          ClassicEditor.create(document.querySelector("#editor"))
            .then((editor) => {
              console.log(editor);
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
