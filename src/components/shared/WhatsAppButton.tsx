import { MessageCircle } from "lucide-react";
import { getBookingUrl, getQuoteUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  service?: string;
  variant?: "book" | "quote";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  service = "Mauritius travel",
  variant = "book",
  size = "md",
  className,
  label,
}: WhatsAppButtonProps) {
  const href = variant === "book" ? getBookingUrl(service) : getQuoteUrl(service);
  const defaultLabel = variant === "book" ? "Book via WhatsApp" : "Request a Quote";

  const sizeClasses = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center font-semibold rounded-full bg-[#25D366] hover:bg-[#20c45e] text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className={cn(size === "sm" ? "w-4 h-4" : "w-5 h-5")} />
      {label ?? defaultLabel}
    </a>
  );
}
