"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser } from "@/services/AuthServices";
import { SquareKanban, Vote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserDashboardSection({
  voteCount,
  commentCount,
}: {
  commentCount: number;
  voteCount: number;
}) {
  const [profileData, setProfileData] = useState<Record<string, string>>({
    name: "",
    email: "",
  });

  useEffect(() => {
    getCurrentUserData();
  }, []);
  const getCurrentUserData = async () => {
    try {
      const res = await getCurrentUser();
      if (res) {
        setProfileData(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-[15px]">
      <Card>
        <CardHeader className="space-y-2">
          <div className="w-full flex gap-16">
            <Image
              src={"/images/profile-avatar.png"}
              width={140}
              height={140}
              className="user-image"
              alt="user-image"
            />
            <div className="pt-4">
              <h1 className="text-6xl font-bold">{profileData.name}</h1>
              <h1 className="text-4xl font-semibold text-gray-400">
                {profileData.email}
              </h1>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-2xl font-medium">
                  Total Reviews
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <SquareKanban className="h-4 w-4 text-red-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{commentCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-2xl font-medium">
                  Total Votes
                </CardTitle>
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Vote className="h-4 w-4 text-red-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{voteCount}</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
