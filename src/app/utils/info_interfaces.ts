export interface coordinate {
  x: number;
  y: number;
}

export interface possible_moves {
  up: coordinate;
  down: coordinate;
  left: coordinate;
  right: coordinate;
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
