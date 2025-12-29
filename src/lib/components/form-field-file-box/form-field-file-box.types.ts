export interface FormFieldFileBoxProps {
  dropImageUrl?: string;
  fileName?: string;
  onChangeFile: (file: File) => void;
  onDropFile: (file: File) => void;
  onError: (message: string) => void;
}
