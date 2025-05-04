import { cookies } from "next/headers";

export const getAllReviews = async (queryString: string) => {
  console.log("queryString", { queryString });
  try {
    const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_BASE_API}/review?searchTerm=${searchQuery}&page=3&limit=1`,
      `${process.env.NEXT_PUBLIC_BASE_API}/review?${queryString}`
    );

    const result = await res.json();

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getOneReview = async (id: string) => {
  try {
    const res = await fetch(
      //   `${process.env.NEXT_PUBLIC_BASE_API}/review?searchTerm=${searchQuery}&page=3&limit=1`,
      `${process.env.NEXT_PUBLIC_BASE_API}/review?${id}`
    );

    const result = await res.json();

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
