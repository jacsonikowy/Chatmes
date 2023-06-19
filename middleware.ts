import withAuth from "next-auth/middleware";

export default withAuth(async () => {});

export const config = {
  matcher: ["/dashboard"],
};
