import { ButtonProps } from '@src/Types/index.t';

export default function Button({ children, onClick, loading }: ButtonProps) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-slate-400 transition-all'
    >
      {children}
    </button>
  );
}
