import MarkObject from './object'
import MarkRectObject from './rect'
import MarkPolygonObject from './polygon'
import MarkLineObject from './line'
import MarkLine_DObject from './line_d'


/** 绘制图形类型 */
enum MarkObjectType {
  /** 空 */
  NONE = '',
  /** 矩形 */
  RECT = 'rect',
  /** 多边形 */
  POLYGON = 'polygon',
  /** 圆形 */
  CIRCLE = 'circle',
  /** 椭圆 */
  ELLIPSE = 'ellipse',
  /** 线 */
  LINE = 'line',
  /** 虚线 */
  LINE_D = 'line_d',

  /** 箭头 */
  ARROW = 'arrow',
  /** 文字 */
  TEXT = 'text'
}


// 单个导出
export { MarkObjectType, MarkObject, MarkRectObject, MarkPolygonObject, MarkLineObject, MarkLine_DObject }