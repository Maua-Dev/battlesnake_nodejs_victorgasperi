export interface coordinate {
  x: number;
  y: number;
}

export interface possible_moves {
  up: {
    x: number;
    y: number;
  };
  down: {
    x: number;
    y: number;
  };
  left: {
    x: number;
    y: number;
  };
  right: {
    x: number;
    y: number;
  };
}

export interface snake {
  id: string;
  name: string;
  health: number;
  body: coordinate[];
  latency: string;
  head: coordinate;
  length: number;
  shout: string;
  customizations: object;
}


