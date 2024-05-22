import FileSaver from "file-saver";

function readFile(file: Blob) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const contents = event.target?.result;
    console.log(contents); // 在控制台输出文件内容
  };
  reader.readAsText(file);
}

export function writeToLocalFile(
  content: any,
  { fileName, type = "text/plain" }: { fileName: string; type?: string }
) {
  const blob = new Blob([content], { type });

  FileSaver.saveAs(blob, fileName);
}
