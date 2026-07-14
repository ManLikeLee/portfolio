import {
  ArrowUpRight,
  Code2,
  Download,
  Lightbulb,
  Menu,
  PencilRuler,
  Rocket,
  X,
  type LucideIcon,
} from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";

export type IconKey =
  | "mail"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "lightbulb"
  | "pencil-ruler"
  | "code"
  | "rocket"
  | "external-link"
  | "download"
  | "menu"
  | "close";

type IconComponent = LucideIcon | IconType;

export const icons: Record<IconKey, IconComponent> = {
  mail: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  lightbulb: Lightbulb,
  "pencil-ruler": PencilRuler,
  code: Code2,
  rocket: Rocket,
  "external-link": ArrowUpRight,
  download: Download,
  menu: Menu,
  close: X,
};
