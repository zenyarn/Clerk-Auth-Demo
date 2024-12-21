import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* 主要内容区域 */}
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to Your Dashboard
        </h1>
        
        {/* 个人资料卡片 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Profile
          </h2>
          <p className="text-gray-300">
            Manage your account settings and view your profile.
          </p>
        </div>
      </div>
    </main>
  );
}
