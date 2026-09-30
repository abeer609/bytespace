import { cn } from "../lib/utils";
import AvatarStack from "./AvatarStack";

const avatars = [1, 2, 3, 4, 5, 6].map((n) => `/images/avatars/${n}.png`);

export default function StudentsCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-white p-4 shadow-lg", className)}>
      <p className="font-medium text-slate-800">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-600">
        4.5 <span className="text-slate-400">(240)</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="#d9f94a"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </p>
      <div className="mt-2">
        <AvatarStack avatars={avatars} extra={2} />
      </div>
    </div>
  );
}
