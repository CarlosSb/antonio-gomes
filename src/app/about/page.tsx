import { redirect } from "next/navigation";

export default function LegacyAboutRedirect() {
  redirect("/pt#sobre");
}
