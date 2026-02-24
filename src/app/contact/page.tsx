import { redirect } from "next/navigation";

export default function LegacyContactRedirect() {
  redirect("/pt#contato");
}
