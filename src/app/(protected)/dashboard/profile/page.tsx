import ProfileCard from "@/components/dashboard/profile/ProfileCard";

export default function ProfilePage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-zinc-500">
          Manage your account information.
        </p>
      </div>

      <ProfileCard />
    </section>
)}