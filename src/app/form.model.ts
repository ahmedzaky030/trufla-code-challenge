export interface DynamicForm {
    controls: Control[];
}

export interface Option{
    id: number; 
    text:string; 
    isSelected: boolean;
}

export interface Control{
    type: string;
    placeholder?: string;
    name: string;
    options?: Option[];
    initialValue?: any;
    isDisabled?: boolean;
    isReadonly?: boolean;
    label: string;
    isRequired: boolean;
    callbackFn?: Function;
}