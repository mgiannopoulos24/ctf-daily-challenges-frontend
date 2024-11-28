import { permanentRedirect } from "next/navigation";

export default async function Index() {
    permanentRedirect("/home"); // Navigate to the new user profile
}
