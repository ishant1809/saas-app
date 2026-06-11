import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getSubjectColor = (subject: string): string => {
  const normalized = subject.toLowerCase() as keyof typeof subjectsColors;
  return subjectsColors[normalized] || "#E5D0FF";
}