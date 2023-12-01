export interface FormItem {
    /** generico */
    id: string;
    label: string;
    type: string;
    required: boolean;
    /** specifico per input */
    inputType?: string;
    placeholder?: string;
    defaultOption?: boolean;
    /** specifico per textarea */
    textareaRows?: number;

    /** grafica */
    dimension?: number;
}
