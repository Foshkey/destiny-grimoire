export interface ImageGroup {
  image: Image;
  smallImage: Image;
}

export interface Image {
  rect: Rectangle;
  sheetPath: string;
  sheetSize: Rectangle;
}

export interface Rectangle {
  x: number;
  y: number;
  height: number;
  width: number;
}