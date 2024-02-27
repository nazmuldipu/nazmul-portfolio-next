import SVGIcon from "@/components/icons/SVGIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import EmailAtIcon from "@/components/icons/EmailAtIcon";
import LocationDarkIcon from "@/components/icons/LocationDarkIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";

export const getSocialIcon = (slug: string, size?: number) => {
  let icon;
  switch (slug) {
    case "github":
      icon = GithubIcon;
      break;
    case "linkedin":
      icon = LinkedinIcon;
      break;
    case "email":
      icon = EmailAtIcon;
      break;
    case "email-dark":
      icon = EmailIcon;
      break;
    case "address":
      icon = LocationDarkIcon;
      break;
    case "phone":
      icon = PhoneIcon;
      break;
    default:
      icon = GithubIcon;
      break;
  }

  return (
    <SVGIcon
      icon={icon}
      size={size ?? 20}
      pathClassName="text-secondary-text"
    />
  );
};
