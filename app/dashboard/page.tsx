import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function DashboardPage() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className="container max-w-[1000px] mx-auto">
            <h2 className="text-3xl font-bold">Bienvenu {user?.family_name}</h2>
        </div>
    )
}