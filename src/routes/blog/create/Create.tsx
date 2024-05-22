import React, { useState } from "react";
import { BlogEditor } from "../component/BlogEditor";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { uploadFileToWebDAV } from "@src/models";
import { removeLocalStorageItem } from "@utils";

export const Create = () => {
  const navigate = useNavigate();
  const [blogInfo, setBlogInfo] = useState("");

  return (
    <>
      <BlogEditor value={blogInfo} onChange={setBlogInfo} />
      <div>
        <Button
          style={{ marginTop: 10 }}
          type="primary"
          onClick={async () => {
            try {
              await uploadFileToWebDAV(blogInfo);
              removeLocalStorageItem("blog-list");
              navigate("/blog");
              console.log("文件上传成功！");
            } catch (err) {
              console.error("文件上传失败：", err);
            }
          }}
        >
          保存
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={() => navigate("/blog")}>
          取消
        </Button>
      </div>
    </>
  );
};
