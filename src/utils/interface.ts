export interface ProjectObj {
  title: string;
  detail?: string;
  backgroundImagePath: string;
  path: string;
}

export interface ProjectObjs {
  [propsName: string]: ProjectObj | {};
}

export interface ProjectObjJson {
  success: boolean;
  data: {
    [propsName: string]: ProjectObj | {};
  };
}
