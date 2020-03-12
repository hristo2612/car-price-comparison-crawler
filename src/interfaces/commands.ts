export interface ICommands {
  commands: ICommand[]
}

export interface ICommand {
  goto?: INavigation;
  mouse?: IMouse;
  keyboard?: IKeyboard;
  evaluate?: ICallback;
  wait?: IWait;
  elementExists?: ISelector;
  elementIsVisible?: ISelector;
}

/**
 * Navigate webpage
 */
interface INavigation {
  url?: string;
  back?: boolean;
  forward?: boolean;
  refresh?: boolean;
}

interface IMouse {
  click?: ISelector;
  mousedown?: ISelector;
  mouseup?: ISelector;
  mouseover?: ISelector;
  mouseout?: ISelector;
  check?: ISelector;
  uncheck?: ISelector;
  select?: ISelectSelector;
  scrollTo?: IScrollTo
}

/**
 * Selector for the target element
 */
interface ISelector {
  selector: string;
}

/**
 * Selector for the target select element & option for the option to select in the field
 */
interface ISelectSelector extends ISelector {
  option: string;
}

/**
 * Scrolls the page to desired position. top and left are always relative to the top left corner of the document.
 */
interface IScrollTo {
  top: number;
  left: number;
}

interface IKeyboard {
  typeText?: IKeyboardSelector
}

interface IKeyboardSelector extends ISelector {
  text: string;
}

/**
 * Invokes fn on the page with arg1, arg2,.... All the args are optional. On completion it returns the return value of fn. Useful for extracting information from the page.
 */
interface ICallback {
  callback: () => void;
}

interface IWait {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;
  selector?: string;
}