interface Props {
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
  disabled: boolean;
}

export default function IconButton({
  onClick,
  children,
  isActive,
  disabled,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled
      className={`flex min-h-7 items-center justify-center rounded-md text-gray-500 hover:enabled:text-gray-700 focus:enabled:text-gray-700 active:enabled:text-gray-900 disabled:opacity-50 ${isActive ? "bg-gray-100 text-blue-400 hover:enabled:text-blue-500 focus:enabled:text-blue-500 active:enabled:text-teal-500" : "bg-transparent"}`}
    >
      {children}
    </button>
  );
}
