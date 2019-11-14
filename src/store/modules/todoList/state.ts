export interface InputState {
  memo: string;
  status?: string;
  index?: number;
  mode?: string;
}

export interface State {
  todolist: InputState[];
  memo?: string;
  index?: number;
  mode?: string;
}
