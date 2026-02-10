const baseClasses =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full border font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const sizeClasses = {
  sm: "min-h-10 px-5 text-sm",
  md: "min-h-12 px-7 text-base",
  lg: "min-h-14 px-9 text-lg"
};

const variantClasses = {
  primary:
    "border-transparent bg-[#0f2a3d] text-white shadow-[0_8px_24px_rgba(15,42,61,0.24)] hover:-translate-y-0.5 hover:bg-[#173e59] focus-visible:ring-[#173e59]",
  secondary:
    "border-[#0f2a3d] bg-transparent text-[#0f2a3d] hover:-translate-y-0.5 hover:bg-[#0f2a3d] hover:text-white focus-visible:ring-[#173e59]",
  accent:
    "border-transparent bg-[#f26f63] text-white shadow-[0_8px_24px_rgba(242,111,99,0.28)] hover:-translate-y-0.5 hover:bg-[#ff8176] focus-visible:ring-[#f26f63]",
  ghost:
    "border-transparent bg-white/12 text-white backdrop-blur hover:bg-white/20 focus-visible:ring-white"
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? sizeClasses.md} ${className}`}
      type={type}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
