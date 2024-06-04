import { getLocalStorage, setLocalStorage } from "@utils";
import { AuthType, FileStat, createClient } from "webdav";

export const webDavClient = () => {
  return createClient("http://127.0.0.1:8080/dav/blog/", {
    authType: AuthType.Auto,
    username: "2816400563@qq.com",
    password: "apd8bcutg3a2jhfb",
  });
};

export async function uploadFileToWebDAV(file: string) {
  let fileName = "无名文件";
  const reg = /^\s?#+\s?[^\s]+/;
  if (!!file) {
    const regRes = reg.exec(file);
    if (regRes?.[0]) {
      // 取文件的标题作为文件名称
      fileName = regRes[0].replace(/^\s?#+\s?/, "");
    }
  }
  return webDavClient().putFileContents(`${fileName}.md`, file);
}

export interface FileListToWebDAVResInfo extends Omit<FileStat, "etag"> {
  etag: string;
}

export async function getFileListToWebDAV(): Promise<
  FileListToWebDAVResInfo[]
> {
  const blogList = getLocalStorage("blog-list");
  if (!!blogList) {
    return blogList;
  }

  const res = await webDavClient().getDirectoryContents("/");
  setLocalStorage("blog-list", res);
  return res as FileListToWebDAVResInfo[];
}

export function getFileInfoToWebDAV(fileName: string): Promise<string> {
  return webDavClient().getFileContents(fileName, {
    format: "text",
  }) as Promise<string>;
}
