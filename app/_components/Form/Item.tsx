import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  labelText: string;
  inputType: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export function FormItem({
  labelText = 'label',
  inputType = 'text',
  placeholder = 'placeholder',
  onChange
}: Props) {
  return (
    <div>
      <label htmlFor={inputType} className='text-sm font-medium block mb-2 text-gray-300'>
        {labelText}
      </label>
      <input type={inputType} name={inputType} id={inputType} className='
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-bloue-500 block w-full p-2.5
      bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>

  )
}