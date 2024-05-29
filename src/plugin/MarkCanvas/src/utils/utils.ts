// html2canvas导出图片并下载方法封装
import html2canvas from 'html2canvas'
export function html2canvasToImgDownload(el:HTMLElement, options?:Object): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    html2canvas(el, options).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      // 将canvas转换为图片
      const img = new Image();
      img.src = dataUrl;
      img.onload = function () {
        // 可以在这里将img对象保存或下载
        const link = document.createElement('a');
        link.download = 'output.png';
        link.href = img.src;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    });
  })
}

export function hexToRgba(hex:string, alpha:number) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var rgb = [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
    return "rgba(" + rgb.join(",") + "," + alpha + ")";
  }
  return null;
}