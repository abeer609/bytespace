type Props = {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
};

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 py-3 px-6 w-full rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder:text-shuttle-gray-400 focus:border-persian-blue-800 focus:outline-none focus:ring-2 focus:ring-persian-blue-800/20"
      />
    </div>
  );
}
