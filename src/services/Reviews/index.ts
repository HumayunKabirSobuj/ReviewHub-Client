import { cookies } from "next/headers";

export const getAllReviews = async (searchQuery?: string) => {
  console.log({ searchQuery });
  try {
    const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_BASE_API}/review?searchTerm=${searchQuery}&page=3&limit=1`,
      `${process.env.NEXT_PUBLIC_BASE_API}/review?searchTerm=${searchQuery}`
      //   `${process.env.NEXT_PUBLIC_BASE_API}/review`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
    );

    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const pendingReviews = async () => {
//   console.log({ searchQuery });
  try {
    const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_BASE_API}/review?searchTerm=${searchQuery}&page=3&limit=1`,
      `${process.env.NEXT_PUBLIC_BASE_API}/review/pending-reviews`,
      {
        method: "GET",
        headers: {
          Authorization: ` ${(await cookies()).get("accessToken")!.value}`,
        },
      }
    );

    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
