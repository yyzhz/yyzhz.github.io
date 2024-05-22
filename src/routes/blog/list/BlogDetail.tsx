import React, { useEffect, useState } from "react";
import { BlogEditor } from "../component/BlogEditor";
import { getFileInfoToWebDAV } from "@src/models";
import { Skeleton } from "antd";

export const BlogDetail = ({ selectedKey }: { selectedKey: string }) => {
  const [blogInfo, setBlogInfo] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!!selectedKey) {
      setLoading(true);
      getFileInfoToWebDAV(selectedKey)
        .then((data) => {
          setBlogInfo(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedKey]);

  return loading ? (
    <Skeleton />
  ) : (
    <BlogEditor isEdit value={blogInfo} onChange={setBlogInfo} />
  );
};
