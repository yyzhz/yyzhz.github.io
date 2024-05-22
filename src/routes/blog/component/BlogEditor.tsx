import React, { useEffect, useRef, useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Editor from "react-markdown-editor-lite";

import { noop } from "antd/es/_util/warning";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

export const BlogEditor = ({
  isEdit,
  value = "",
  onChange = noop,
}: {
  isEdit?: boolean;
  value?: string;
  onChange?: (mdStr: string) => void;
}) => {
  const editorRef = useRef(null);

  function handleEditorChange({ html, text }: { html: any; text: any }) {
    onChange(text);
  }

  useEffect(() => {
    if (editorRef.current && isEdit) {
      (editorRef.current as Editor).setView({
        md: false,
        menu: false,
      });
    }
  }, [isEdit]);

  return (
    <>
      <MdEditor
        ref={editorRef}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        value={value}
        onChange={handleEditorChange}
      />
    </>
  );
};
