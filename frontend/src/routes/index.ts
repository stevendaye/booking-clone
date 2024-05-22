const routes = {
  home: "/",
  signIn: "/sign-in",
  register: "/register",
  forgetPassword: "/account-recovery",
  search: "/search",

  flights: "/flights",
  carRentals: "/car-rentals",
  attractions: "/attractions",
  taxi: "/taxi",
  listProperty: "/become-host",
  privacy: "/privacy-policy",

  mobileVersion: "/mobile-version",
  account: "/your-account",
  makeChanges: "/make-changes",
  customerHelp: "/customer-help",
  affiliateProgram: "/affiliate-program",
  bookingForBusiness: "/booking-for-business",
  termsConditions: "/terms-conditions",

  api: {
    register: "/api/users/register",
    signIn: "/api/users/sign-in",
    signOut: "/api/users/sign-out",
    validateToken: "/api/auth/validate-token",
    createHotel: "/api/hotels/create",
  },
};

export default routes;
