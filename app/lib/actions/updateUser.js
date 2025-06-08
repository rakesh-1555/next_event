import { dbConnect } from "@/app/lib/dbConnect";
import User from "@/app/lib/models/user.model";

import { revalidatePath } from "next/cache";

// ...

export async function updateUser(userId, user) {
  await dbConnect();

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { ...user },
    { new: true }
  );

  if (!updatedUser) throw new Error("User Update Failed");

  revalidatePath("/profile");
  return JSON.parse(JSON.stringify(updatedUser));
}
